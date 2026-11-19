import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getClientIp } from "@/lib/auth";
import { rateLimit } from "@/lib/rate-limit";
import { handleRouteError, apiError } from "@/lib/api-helpers";
import { getSetting } from "@/lib/orders";
import { sendEmail } from "@/lib/email";
import { recordAudit } from "@/lib/audit";
import { SUPPORT_CATEGORIES } from "@/lib/support";

const supportSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Enter a valid email address").max(120),
  phone: z.string().trim().max(20).optional().or(z.literal("")),
  category: z.enum(SUPPORT_CATEGORIES),
  orderRef: z.string().trim().max(60).optional().or(z.literal("")),
  subject: z.string().trim().min(4, "Please add a short subject").max(120),
  message: z.string().trim().min(15, "Please describe the issue in a little more detail").max(3000),
  // Honeypot: real users leave this empty
  website: z.string().max(0).optional().or(z.literal("")),
});

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(request: NextRequest) {
  try {
    const ip = await getClientIp();
    const limit = rateLimit(`support:${ip}`, 5, 60 * 60 * 1000);
    if (!limit.allowed) {
      return apiError(429, "Too many requests. Please try again later or contact us on WhatsApp.");
    }

    const body = await request.json();
    const input = supportSchema.parse(body);

    const ticketId = `SUP-${Date.now().toString(36).toUpperCase()}${Math.random()
      .toString(36)
      .slice(2, 5)
      .toUpperCase()}`;

    const supportEmail =
      (await getSetting("support_email")).trim() || "agoemmanuel9@gmail.com";

    const rows: [string, string][] = [
      ["Ticket", ticketId],
      ["Name", input.name],
      ["Email", input.email],
      ["Phone", input.phone || "—"],
      ["Category", input.category],
      ["Order / reference", input.orderRef || "—"],
      ["IP", ip],
    ];

    const text =
      rows.map(([k, v]) => `${k}: ${v}`).join("\n") +
      `\n\nSubject: ${input.subject}\n\n${input.message}`;

    const html =
      `<table cellpadding="6" style="font-family:sans-serif;font-size:14px">` +
      rows
        .map(([k, v]) => `<tr><td><b>${k}</b></td><td>${escapeHtml(v)}</td></tr>`)
        .join("") +
      `</table><h3 style="font-family:sans-serif">${escapeHtml(input.subject)}</h3>` +
      `<p style="font-family:sans-serif;white-space:pre-wrap">${escapeHtml(input.message)}</p>`;

    await recordAudit({
      actorLabel: `${input.name} <${input.email}>`,
      action: "support.ticket",
      target: ticketId,
      newValue: JSON.stringify({
        ticketId,
        name: input.name,
        email: input.email,
        phone: input.phone || null,
        category: input.category,
        orderRef: input.orderRef || null,
        subject: input.subject,
        message: input.message,
      }),
      ip,
    });

    const res = await sendEmail({
      to: supportEmail,
      subject: `[${ticketId}] ${input.category}: ${input.subject}`,
      text,
      html,
    });

    if (!res.success) {
      console.error("[support] delivery failed:", res.error);
    }

    // Best-effort confirmation to the customer (never fails the request)
    sendEmail({
      to: input.email,
      toName: input.name,
      subject: `We received your request (${ticketId})`,
      text: `Hi ${input.name},\n\nThanks for contacting CrazyTech support. Your reference is ${ticketId}.\nWe reply within 24 hours (usually much sooner). For urgent issues, WhatsApp 0507904981.\n\nYour message:\n${input.message}`,
    }).catch(() => {});

    return NextResponse.json({ ok: true, ticketId });
  } catch (err) {
    return handleRouteError(err);
  }
}
