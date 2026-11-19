"use client";

import * as React from "react";
import { CheckCircle2, Send, Loader2, AlertCircle, MessageCircle } from "lucide-react";
import { SUPPORT_CATEGORIES } from "@/lib/support";

const inputCls =
  "w-full rounded-xl border border-slate-200 bg-white px-3.5 py-2.5 text-base sm:text-sm text-slate-900 placeholder-slate-400 focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 dark:border-white/10 dark:bg-slate-950 dark:text-white dark:placeholder-slate-600";
const labelCls =
  "mb-1 block text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400";

export function SupportForm() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    phone: "",
    category: SUPPORT_CATEGORIES[0] as string,
    orderRef: "",
    subject: "",
    message: "",
    website: "",
  });
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [ticketId, setTicketId] = React.useState<string | null>(null);

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      setTicketId(json.ticketId);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  if (ticketId) {
    const waText = encodeURIComponent(
      `Hello CrazyTech Support,\n\nI submitted a support ticket on crazytechent.com/support:\n• Ticket ID: ${ticketId}\n• Issue Type: ${form.category}${form.orderRef ? `\n• Order/Ref: ${form.orderRef}` : ""}\n• Subject: ${form.subject}\n• Name: ${form.name} (${form.email}${form.phone ? `, ${form.phone}` : ""})\n\nDetails:\n${form.message}`
    );

    return (
      <div className="space-y-4 py-8 text-center">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-500">
          <CheckCircle2 className="h-7 w-7" />
        </div>
        <h2 className="text-xl font-black text-slate-900 dark:text-white">Support Ticket Logged</h2>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Your reference is{" "}
          <span className="font-mono font-bold text-slate-900 dark:text-white">{ticketId}</span>.
          Our team has received your inquiry and will reply within 24 hours.
        </p>
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href={`https://wa.me/233507904981?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-emerald-500 transition-colors"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Open Ticket on WhatsApp Instantly</span>
          </a>
          <button
            type="button"
            onClick={() => {
              setTicketId(null);
              setForm((f) => ({ ...f, subject: "", message: "", orderRef: "" }));
            }}
            className="text-xs font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
          >
            Submit another request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls}>Your name *</label>
          <input required className={inputCls} value={form.name} onChange={set("name")} placeholder="e.g. Kofi Mensah" />
        </div>
        <div>
          <label className={labelCls}>Email *</label>
          <input required type="email" className={inputCls} value={form.email} onChange={set("email")} placeholder="you@example.com" />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className={labelCls}>Phone / WhatsApp</label>
          <input type="tel" className={inputCls} value={form.phone} onChange={set("phone")} placeholder="050 790 4981" />
        </div>
        <div>
          <label className={labelCls}>Issue type *</label>
          <select className={inputCls} value={form.category} onChange={set("category")}>
            {SUPPORT_CATEGORIES.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelCls}>Order ID / payment reference (if any)</label>
        <input className={inputCls} value={form.orderRef} onChange={set("orderRef")} placeholder="e.g. order number or Paystack reference" />
      </div>

      <div>
        <label className={labelCls}>Subject *</label>
        <input required className={inputCls} value={form.subject} onChange={set("subject")} placeholder="Short summary of the issue" />
      </div>

      <div>
        <label className={labelCls}>Describe the issue *</label>
        <textarea
          required
          rows={5}
          className={inputCls}
          value={form.message}
          onChange={set("message")}
          placeholder="Include recipient number, network, amount and time if it's about an order."
        />
      </div>

      {/* Honeypot — hidden from real users */}
      <input
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        name="website"
        value={form.website}
        onChange={set("website")}
      />

      {error && (
        <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-600 dark:text-red-400">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 py-3 text-sm font-bold text-white shadow-md transition hover:bg-emerald-500 disabled:opacity-60"
      >
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
        {loading ? "Sending…" : "Send to support"}
      </button>
    </form>
  );
}
