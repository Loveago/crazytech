"use client";

import React, { useState } from "react";
import {
  Calculator,
  Laptop,
  Smartphone,
  Server,
  Layers,
  CheckCircle2,
  Send,
  MessageCircle,
  Copy,
  Check,
  Zap,
  Sparkles,
  Clock,
  ShieldCheck,
  DollarSign,
} from "lucide-react";

interface FeatureOption {
  id: string;
  name: string;
  usd: number;
  ghs: number;
  desc: string;
}

const PLATFORMS = [
  {
    id: "web",
    name: "Web Platform & SaaS",
    baseUsd: 1200,
    baseGhs: 15600,
    icon: Laptop,
    desc: "Next.js 16, React 19, responsive desktop & mobile web app.",
  },
  {
    id: "mobile",
    name: "Mobile App (iOS & Android)",
    baseUsd: 1800,
    baseGhs: 23400,
    icon: Smartphone,
    desc: "Cross-platform native apps with push notifications and store deployment.",
  },
  {
    id: "enterprise",
    name: "Custom Software & ERP",
    baseUsd: 2200,
    baseGhs: 28600,
    icon: Server,
    desc: "Workflow automation, inventory, multi-branch operations & audit trails.",
  },
  {
    id: "suite",
    name: "Full-Stack Multi-Platform Suite",
    baseUsd: 3400,
    baseGhs: 44200,
    icon: Layers,
    desc: "Integrated Web Portal + iOS & Android Apps + Microservices backend.",
  },
];

const FEATURES: FeatureOption[] = [
  {
    id: "auth",
    name: "Multi-Tier Auth & RBAC",
    usd: 300,
    ghs: 3900,
    desc: "Secure JWT/session authentication with granular role governance.",
  },
  {
    id: "payments",
    name: "Payment Gateway & MoMo",
    usd: 450,
    ghs: 5850,
    desc: "Paystack, MTN MoMo, Telecel Cash & automated webhook reconciliations.",
  },
  {
    id: "telecom",
    name: "Telecom & Bulk Aggregator Engine",
    usd: 600,
    ghs: 7800,
    desc: "Sub-second carrier API dispatch, balance checks, and MSISDN verification.",
  },
  {
    id: "websockets",
    name: "Real-Time WebSockets & Live Feeds",
    usd: 400,
    ghs: 5200,
    desc: "Instant live notifications, chat, live telemetry, and zero-refresh updates.",
  },
  {
    id: "reporting",
    name: "PDF Invoicing & Analytics Suite",
    usd: 350,
    ghs: 4550,
    desc: "Automated branded PDF generator, Excel/CSV exports, and executive charts.",
  },
  {
    id: "devops",
    name: "VPS, Docker & Nginx Deployment",
    usd: 500,
    ghs: 6500,
    desc: "Full server hardening, PM2, Certbot SSL, Redis caching, and automated backups.",
  },
];

const TIMELINES = [
  { id: "express", label: "Express Sprint", multiplier: 1.25, time: "2 to 3 Weeks" },
  { id: "standard", label: "Standard Delivery", multiplier: 1.0, time: "4 to 6 Weeks" },
  { id: "enterprise", label: "Phased Enterprise", multiplier: 0.95, time: "8 to 12 Weeks" },
];

export function ProjectEstimator({ prefillTitle }: { prefillTitle?: string | null }) {
  const [selectedPlatform, setSelectedPlatform] = useState<string>("web");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "auth",
    "payments",
    "devops",
  ]);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("standard");
  const [currency, setCurrency] = useState<"GHS" | "USD">("GHS");
  const [copied, setCopied] = useState<boolean>(false);

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const currentPlatform = PLATFORMS.find((p) => p.id === selectedPlatform) || PLATFORMS[0];
  const currentTimeline = TIMELINES.find((t) => t.id === selectedTimeline) || TIMELINES[1];

  const featuresTotalGhs = selectedFeatures.reduce((acc, featId) => {
    const f = FEATURES.find((item) => item.id === featId);
    return acc + (f ? f.ghs : 0);
  }, 0);

  const featuresTotalUsd = selectedFeatures.reduce((acc, featId) => {
    const f = FEATURES.find((item) => item.id === featId);
    return acc + (f ? f.usd : 0);
  }, 0);

  const rawGhs = (currentPlatform.baseGhs + featuresTotalGhs) * currentTimeline.multiplier;
  const rawUsd = (currentPlatform.baseUsd + featuresTotalUsd) * currentTimeline.multiplier;

  const formattedGhs = `GHS ${Math.round(rawGhs).toLocaleString()}`;
  const formattedUsd = `$${Math.round(rawUsd).toLocaleString()}`;

  const selectedFeatureNames = selectedFeatures
    .map((id) => FEATURES.find((f) => f.id === id)?.name)
    .filter(Boolean);

  const whatsappMessage = encodeURIComponent(
    `Hello CrazyTech Team, I used your online portfolio project estimator and would like to build a solution with the following scope:\n\n` +
      `• Platform: ${currentPlatform.name}\n` +
      `• Selected Features: ${selectedFeatureNames.join(", ")}\n` +
      `• Delivery Pace: ${currentTimeline.label} (${currentTimeline.time})\n` +
      `• Estimated Investment: ${currency === "GHS" ? formattedGhs : formattedUsd}\n` +
      (prefillTitle ? `• Reference Template: ${prefillTitle}\n\n` : `\n`) +
      `Please let me know when we can review the technical specification and kick off!`
  );

  const handleCopySummary = () => {
    const summary =
      `CrazyTech Project Scope Estimate:\n` +
      `Platform: ${currentPlatform.name}\n` +
      `Features: ${selectedFeatureNames.join(", ")}\n` +
      `Timeline: ${currentTimeline.label} (${currentTimeline.time})\n` +
      `Estimated Range: ${currency === "GHS" ? formattedGhs : formattedUsd}\n` +
      `Official WhatsApp: +233 50 790 4981`;

    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="estimator" className="relative scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="mx-auto max-w-6xl">
        {/* Section Title */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-zinc-300 mb-3 backdrop-blur-md">
            <Calculator className="h-4 w-4 text-zinc-400" />
            <span>Interactive Project Scope &amp; Cost Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Calculate Your Software Investment in Real-Time
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-zinc-400">
            Tailor your architecture, select essential enterprise integrations, and export a ready-to-sign scope straight to our engineering team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Configuration Controls (Left 8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* 1. Platform Choice */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0e14] p-5 sm:p-6 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-black text-zinc-950">
                    1
                  </span>
                  Select Primary Platform Architecture
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {PLATFORMS.map((platform) => {
                  const Icon = platform.icon;
                  const isSelected = selectedPlatform === platform.id;
                  return (
                    <button
                      key={platform.id}
                      type="button"
                      onClick={() => setSelectedPlatform(platform.id)}
                      className={`flex flex-col text-left p-4 rounded-xl border transition-all ${
                        isSelected
                          ? "border-white/40 bg-white/[0.08] shadow-lg ring-1 ring-white/30"
                          : "border-white/[0.08] bg-[#08090d] text-zinc-300 hover:border-white/20 hover:bg-[#10121a]"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div
                          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                            isSelected
                              ? "bg-white text-zinc-950"
                              : "bg-white/[0.05] text-zinc-400"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        {isSelected && <CheckCircle2 className="h-5 w-5 text-white" />}
                      </div>
                      <span className="text-sm font-bold text-white mb-1">{platform.name}</span>
                      <p className="text-xs text-zinc-400 leading-relaxed font-normal">{platform.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Feature Add-ons */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0e14] p-5 sm:p-6 backdrop-blur-md">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-black text-zinc-950">
                    2
                  </span>
                  Select Core Integrations &amp; Features
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  {selectedFeatures.length} Selected
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FEATURES.map((feat) => {
                  const isChecked = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`flex items-start gap-3 p-3.5 rounded-xl border text-left transition-all ${
                        isChecked
                          ? "border-white/30 bg-white/[0.06] text-white"
                          : "border-white/[0.08] bg-[#08090d] text-zinc-400 hover:border-white/20 hover:text-zinc-200"
                      }`}
                    >
                      <div
                        className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                          isChecked
                            ? "border-white bg-white text-zinc-950"
                            : "border-zinc-700 bg-transparent"
                        }`}
                      >
                        {isChecked && <Check className="h-3 w-3 stroke-[3]" />}
                      </div>
                      <div>
                        <span className="block text-xs font-bold text-white mb-0.5">
                          {feat.name}
                        </span>
                        <p className="text-[11px] text-zinc-400 leading-snug">{feat.desc}</p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Timeline Choice */}
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0e14] p-5 sm:p-6 backdrop-blur-md">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2 mb-4">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-[10px] font-black text-zinc-950">
                  3
                </span>
                Delivery Timeline &amp; Sprint Velocity
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {TIMELINES.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setSelectedTimeline(t.id)}
                    className={`flex flex-col text-left p-3.5 rounded-xl border transition-all ${
                      selectedTimeline === t.id
                        ? "border-white/40 bg-white/[0.08] ring-1 ring-white/30"
                        : "border-white/[0.08] bg-[#08090d] text-zinc-400 hover:border-white/20"
                    }`}
                  >
                    <span className="text-xs font-bold text-white mb-1 flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-zinc-400" /> {t.label}
                    </span>
                    <span className="text-[11px] font-mono text-zinc-300">{t.time}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Live Estimate Summary Sticky Card (Right 4 cols) */}
          <div className="lg:col-span-4 sticky top-24 space-y-4">
            <div className="rounded-2xl border border-white/10 bg-[#0c0e14] p-6 shadow-2xl">
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <span className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Estimated Investment
                </span>
                <div className="flex rounded-lg border border-white/10 bg-[#08090d] p-0.5 text-[11px] font-semibold">
                  <button
                    onClick={() => setCurrency("GHS")}
                    className={`px-2.5 py-0.5 rounded ${
                      currency === "GHS"
                        ? "bg-white text-zinc-950 font-bold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    GHS
                  </button>
                  <button
                    onClick={() => setCurrency("USD")}
                    className={`px-2.5 py-0.5 rounded ${
                      currency === "USD"
                        ? "bg-white text-zinc-950 font-bold"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    USD
                  </button>
                </div>
              </div>

              {/* Huge Price Numbers */}
              <div className="py-5 text-center">
                <span className="text-xs text-zinc-400 block mb-1">Total Estimated Scope</span>
                <div className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white">
                  {currency === "GHS" ? formattedGhs : formattedUsd}
                </div>
                <span className="inline-flex items-center gap-1.5 mt-2 rounded-full bg-emerald-500/10 px-3 py-1 text-[11px] font-medium text-emerald-400 border border-emerald-500/20">
                  <Clock className="h-3.5 w-3.5" />
                  Target: {currentTimeline.time}
                </span>
              </div>

              {/* Scope Breakdown */}
              <div className="space-y-2 border-t border-white/[0.08] pt-4 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Architecture</span>
                  <span className="text-white font-semibold">{currentPlatform.name}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Features Included</span>
                  <span className="text-white font-semibold font-mono">
                    {selectedFeatures.length} Add-ons
                  </span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Code Ownership</span>
                  <span className="text-emerald-400 font-semibold">100% Full Rights</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Support Warranty</span>
                  <span className="text-zinc-200 font-semibold">90 Days Included</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-6 space-y-3">
                <a
                  href={`https://wa.me/233507904981?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-zinc-200 py-3.5 px-4 font-bold text-xs text-zinc-950 shadow-md transition-all active:scale-[0.99]"
                >
                  <MessageCircle className="h-4 w-4" />
                  <span>Send Scope to WhatsApp (+233 50 790 4981)</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] py-2.5 px-4 font-semibold text-xs text-zinc-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" />
                      <span>Copied to Clipboard!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" />
                      <span>Copy Scope Summary</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 text-[11px] text-zinc-500 justify-center">
                <ShieldCheck className="h-3.5 w-3.5 text-zinc-400" />
                <span>NDA &amp; Confidentiality guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
