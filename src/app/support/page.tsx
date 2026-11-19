import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { SupportForm } from "@/components/support/support-form";
import { Mail, Phone, Clock, MessageCircle, ArrowLeft, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Support — CrazyTech",
  description:
    "Contact CrazyTech support about undelivered data, payments, refunds, account access, storefronts and API integrations.",
};

const FAQ = [
  {
    q: "My data hasn't arrived. What should I do?",
    a: "Allow up to 30 minutes during network congestion. If it still hasn't arrived, submit the form with the recipient number and order reference. Report within 24 hours.",
  },
  {
    q: "I paid but my wallet wasn't credited.",
    a: "Send us your Paystack reference (or MoMo transaction ID) and the amount. We reconcile and credit confirmed payments.",
  },
  {
    q: "How do refunds work?",
    a: "Failed orders are reversed to your wallet. See our Refund Policy for the full conditions.",
  },
];

export default function SupportPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-[#060b13] dark:text-slate-200">
      <header className="border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-white/[0.06] dark:bg-slate-950/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <BrandLogo size="sm" href="/login" />
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to platform
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="max-w-2xl">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
            How can we help?
          </h1>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-400 sm:text-base">
            Tell us what&apos;s wrong and we&apos;ll get back to you within 24 hours — usually much
            sooner. For urgent order issues, WhatsApp is fastest.
          </p>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200/80 bg-white p-5 shadow-xl shadow-slate-900/5 dark:border-white/10 dark:bg-slate-900/70 sm:p-8">
              <SupportForm />
            </div>
          </div>

          <aside className="space-y-4 lg:col-span-5">
            <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/5 p-5 dark:bg-emerald-950/15 sm:p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Reach us directly
              </h2>
              <div className="mt-4 space-y-2.5">
                <a
                  href="https://wa.me/233507904981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-bold text-white hover:bg-emerald-500"
                >
                  <MessageCircle className="h-4 w-4" /> WhatsApp 0507904981
                </a>
                <a
                  href="tel:+233507904981"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
                >
                  <Phone className="h-4 w-4 text-emerald-500" /> Call 0507904981
                </a>
                <a
                  href="mailto:agoemmanuel9@gmail.com"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-slate-50 dark:border-white/10 dark:bg-slate-900 dark:text-slate-200"
                >
                  <Mail className="h-4 w-4 text-emerald-500" /> agoemmanuel9@gmail.com
                </a>
              </div>
              <p className="mt-4 flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                <Clock className="h-3.5 w-3.5 shrink-0" /> Open daily, 5:00 AM – 11:59 PM GMT
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white p-5 dark:border-white/10 dark:bg-slate-900/70 sm:p-6">
              <h2 className="text-sm font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
                Quick answers
              </h2>
              <div className="mt-4 space-y-4">
                {FAQ.map((f) => (
                  <div key={f.q}>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{f.q}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 dark:text-slate-400">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
              <Link
                href="/refund-policy"
                className="mt-4 inline-block text-xs font-semibold text-emerald-600 hover:underline dark:text-emerald-400"
              >
                Read the Refund Policy →
              </Link>
            </div>
          </aside>
        </div>
      </main>

      <footer className="border-t border-slate-200/80 px-4 py-6 text-xs text-slate-500 dark:border-white/[0.06] dark:text-slate-400">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-3">
          <span>crazytechent.com © 2026</span>
          <span>·</span>
          <Link href="/terms" className="hover:text-emerald-600">Terms</Link>
          <Link href="/refund-policy" className="hover:text-emerald-600">Refunds</Link>
          <Link href="/privacy" className="hover:text-emerald-600">Privacy</Link>
          <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck className="h-3.5 w-3.5" /> Paystack PCI-DSS Secured
          </span>
        </div>
      </footer>
    </div>
  );
}
