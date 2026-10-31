"use client";

import React, { useState } from "react";
import {
  Send,
  MessageCircle,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
} from "lucide-react";

export function ContactRfpSection({ prefillService }: { prefillService?: string | null }) {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [projectType, setProjectType] = useState<string>(
    prefillService || "Software Development"
  );
  const [budget, setBudget] = useState<string>("GHS 15,000 - GHS 35,000 ($1,200 - $2,800)");
  const [description, setDescription] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappInquiryUrl = `https://wa.me/233507904981?text=${encodeURIComponent(
    `Hello CrazyTech, I am reaching out from your portfolio website.\n\n` +
      `• Name: ${name || "Prospective Client"}\n` +
      `• Project Type: ${projectType}\n` +
      `• Target Budget: ${budget}\n` +
      `• Details: ${description || "I would like to discuss building a project with your team."}\n\n` +
      `Looking forward to hearing from you!`
  )}`;

  return (
    <section id="contact" className="relative scroll-mt-24 py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 p-6 sm:p-10 lg:p-14 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left Column: Direct Info & Trust */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-300 mb-3">
                  <Sparkles className="h-3.5 w-3.5" /> Direct Consultation
                </span>
                <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                  Let&apos;s Build Your Next High-Impact System
                </h3>
                <p className="text-sm sm:text-base text-slate-400 mt-3 leading-relaxed">
                  Whether you need a custom enterprise platform, a consumer mobile application, or a high-throughput telecom gateway, our senior engineers are ready.
                </p>
              </div>

              {/* Direct Quick Badges */}
              <div className="space-y-3 pt-2">
                <a
                  href="https://wa.me/233507904981"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-emerald-500/30 bg-emerald-950/20 p-3.5 hover:border-emerald-500/50 transition-all group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block">
                      Direct WhatsApp Line (24/7 Fast Response)
                    </span>
                    <span className="text-sm font-bold text-white font-mono">+233 50 790 4981</span>
                  </div>
                </a>

                <a
                  href="tel:+233507904981"
                  className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-3.5 hover:border-slate-700 transition-all group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Direct Phone
                    </span>
                    <span className="text-sm font-bold text-white font-mono">050 790 4981 / +233 50 790 4981</span>
                  </div>
                </a>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Engineering Inquiries
                    </span>
                    <span className="text-sm font-bold text-white">support@crazytechent.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-3.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                      Headquarters
                    </span>
                    <span className="text-sm font-bold text-white">Accra, Ghana • Worldwide Remote Delivery</span>
                  </div>
                </div>
              </div>

              {/* Response Time Guarantee */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 flex items-center gap-3 text-xs text-slate-300">
                <Clock className="h-5 w-5 text-cyan-400 shrink-0" />
                <span>
                  <strong>Guaranteed SLA:</strong> We respond to all formal project proposals and WhatsApp inquiries within 2 hours during active business cycles.
                </span>
              </div>
            </div>

            {/* Right Column: Interactive Proposal Form */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-2xl font-black text-white">Proposal Request Received!</h4>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{name || "Partner"}</strong>. Our lead solutions architect is reviewing your specifications and will respond shortly.
                  </p>
                  <div className="pt-4">
                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-3 text-xs font-bold text-slate-950 shadow-lg shadow-emerald-500/25"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>Continue Conversation on WhatsApp Instantly</span>
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-slate-800 pb-3 mb-2">
                    <h4 className="text-base font-extrabold text-white">
                      Request a Detailed Technical Proposal
                    </h4>
                    <p className="text-xs text-slate-400">
                      Fill out your requirements below or send directly via WhatsApp.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. John Mensah"
                        className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="050 790 4981"
                        className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                        Project Category
                      </label>
                      <select
                        value={projectType}
                        onChange={(e) => setProjectType(e.target.value)}
                        className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="Enterprise Software & ERP">Enterprise Software & ERP</option>
                        <option value="Mobile App Development">Mobile App (iOS / Android)</option>
                        <option value="High-Performance Web Platform">Web Platform & SaaS</option>
                        <option value="FinTech & Telecom Gateway">FinTech & Telecom Gateway</option>
                        <option value="Cloud VPS & DevOps">Cloud VPS & DevOps</option>
                        <option value="UI/UX & Branding">UI/UX & Branding</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                      Expected Budget Range
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="GHS 10,000 - GHS 25,000 ($800 - $2,000)">
                        GHS 10,000 - GHS 25,000 ($800 - $2,000)
                      </option>
                      <option value="GHS 25,000 - GHS 60,000 ($2,000 - $5,000)">
                        GHS 25,000 - GHS 60,000 ($2,000 - $5,000)
                      </option>
                      <option value="GHS 60,000 - GHS 150,000+ ($5,000 - $12,000+)">
                        GHS 60,000 - GHS 150,000+ ($5,000 - $12,000+)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-bold uppercase tracking-wider text-slate-300 block mb-1">
                      Project Goals & Brief Overview
                    </label>
                    <textarea
                      rows={3}
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Tell us what you'd like to achieve, target launch date, and any special integrations..."
                      className="w-full rounded-xl border border-slate-800 bg-slate-900 px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:border-cyan-400 focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <button
                      type="submit"
                      className="w-full sm:flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-3 px-4 font-bold text-xs text-slate-950 shadow-lg shadow-cyan-500/25 transition-all"
                    >
                      <Send className="h-4 w-4" />
                      <span>Submit RFP to Engineering Team</span>
                    </button>

                    <a
                      href={whatsappInquiryUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/40 py-3 px-4 font-bold text-xs text-emerald-300 transition-colors"
                    >
                      <MessageCircle className="h-4 w-4" />
                      <span>WhatsApp Directly</span>
                    </a>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
