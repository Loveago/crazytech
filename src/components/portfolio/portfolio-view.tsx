"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Shield,
  Zap,
  Cpu,
  Layers,
  Laptop,
  Smartphone,
  Globe2,
  CheckCircle2,
  MessageCircle,
  PhoneCall,
  Calendar,
  ExternalLink,
  Sliders,
  Monitor,
  Tablet,
  Check,
  ChevronDown,
  Star,
  Quote,
} from "lucide-react";
import { BrandMark, BrandLogo } from "@/components/brand-logo";
import { InteractiveCanvasBg } from "./interactive-canvas-bg";
import { SHOWCASE_TEMPLATES, TemplateData } from "./templates-data";
import { NexusPayMockup } from "./mockups/nexus-pay-mockup";
import { RestaurantMockup } from "./mockups/restaurant-mockup";
import { WalletMobileMockup } from "./mockups/wallet-mobile-mockup";
import { OmniCoreMockup } from "./mockups/omni-core-mockup";
import { AuraLuxeMockup } from "./mockups/aura-luxe-mockup";
import { PulseHealthMockup } from "./mockups/pulse-health-mockup";
import { TemplateModal } from "./template-modal";
import { ProjectEstimator } from "./project-estimator";
import { ServicesSection } from "./services-section";
import { ContactRfpSection } from "./contact-rfp-section";
import { FloatingQuickDock } from "./floating-quick-dock";

export function PortfolioView() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalTemplate, setActiveModalTemplate] = useState<TemplateData | null>(null);
  const [estimatorPrefill, setEstimatorPrefill] = useState<string | null>(null);

  // Device view switcher state per template
  const [deviceViews, setDeviceViews] = useState<Record<string, "desktop" | "tablet" | "mobile">>({
    "nexus-pay": "desktop",
    "savoria-restaurant": "desktop",
    "apex-wallet": "mobile",
    "omni-core": "desktop",
    "aura-luxe": "desktop",
    "pulse-health": "mobile",
  });

  // Showcase display mode (Interactive sandbox vs Production visual architecture)
  const [viewModes, setViewModes] = useState<Record<string, "interactive" | "visual">>({
    "nexus-pay": "interactive",
    "savoria-restaurant": "interactive",
    "apex-wallet": "interactive",
    "omni-core": "interactive",
    "aura-luxe": "interactive",
    "pulse-health": "interactive",
  });

  const toggleViewMode = (templateId: string, mode: "interactive" | "visual") => {
    setViewModes((prev) => ({ ...prev, [templateId]: mode }));
  };

  const setTemplateDevice = (templateId: string, device: "desktop" | "tablet" | "mobile") => {
    setDeviceViews((prev) => ({ ...prev, [templateId]: device }));
  };

  const filteredTemplates =
    selectedCategory === "All"
      ? SHOWCASE_TEMPLATES
      : SHOWCASE_TEMPLATES.filter((t) => t.category === selectedCategory);

  const handleRequestQuote = (templateTitle: string) => {
    setEstimatorPrefill(templateTitle);
    const estimatorEl = document.getElementById("estimator");
    if (estimatorEl) {
      estimatorEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setEstimatorPrefill(serviceTitle);
    const estimatorEl = document.getElementById("estimator");
    if (estimatorEl) {
      estimatorEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#08090d] text-zinc-100 selection:bg-white/20 selection:text-white overflow-x-hidden font-sans">
      {/* Architectural Dot Grid & Ambient Light Background */}
      <InteractiveCanvasBg />

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-white/[0.07] bg-[#08090d]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
          <Link href="/portfolio" className="flex items-center gap-3 shrink-0 mr-4 sm:mr-8 group">
            <BrandMark size="sm" className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-extrabold tracking-tight text-white flex items-center gap-1.5">
                CrazyTech <span className="text-zinc-400 font-mono text-xs font-semibold">STUDIO</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-zinc-400 uppercase">
                Software &amp; App Engineering
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-xs font-medium text-zinc-400">
            <a href="#showcase" className="hover:text-white transition-colors">
              Showcase Templates
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Capabilities
            </a>
            <a href="#process" className="hover:text-white transition-colors">
              Engineering Process
            </a>
            <a href="#estimator" className="hover:text-white transition-colors">
              Scope Estimator
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact &amp; RFP
            </a>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="https://wa.me/233507904981"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 px-3 py-2 text-xs font-medium text-zinc-300 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5 text-emerald-400" />
              <span>+233 50 790 4981</span>
            </a>

            <a
              href="#estimator"
              className="flex items-center gap-1.5 rounded-xl bg-white hover:bg-zinc-200 px-4 py-2 text-xs font-bold text-zinc-950 shadow-sm transition-all active:scale-95"
            >
              <Sparkles className="h-3.5 w-3.5 text-zinc-950" />
              <span>Start Project</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 sm:pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-zinc-300 mb-6 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>High-Impact Engineering &amp; Custom Software Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08]">
            We Engineer High-Impact{" "}
            <span className="bg-gradient-to-b from-white via-zinc-100 to-zinc-400 bg-clip-text text-transparent">
              Software, Mobile Apps &amp; Platforms
            </span>{" "}
            That Scale.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            From high-throughput telecommunication gateways and enterprise ERP suites to consumer mobile apps and 60fps headless commerce — CrazyTech delivers mission-critical software built for speed, security, and conversion.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#showcase"
              className="flex items-center gap-2 rounded-xl bg-white hover:bg-zinc-200 px-7 py-3.5 font-bold text-sm text-zinc-950 shadow-[0_0_24px_rgba(255,255,255,0.14)] transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore 6 Showcase Templates</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#estimator"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 px-6 py-3.5 font-medium text-sm text-zinc-200 transition-all hover:-translate-y-0.5"
            >
              <Sliders className="h-4 w-4 text-zinc-400" />
              <span>Calculate Project Scope</span>
            </a>

            <a
              href="https://wa.me/233507904981"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-emerald-500/25 bg-emerald-500/[0.08] hover:bg-emerald-500/15 px-6 py-3.5 font-medium text-sm text-emerald-300 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>

          {/* Key Metrics Ticker */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 rounded-2xl border border-white/[0.07] bg-white/[0.02] p-4 sm:p-5 backdrop-blur-xl">
            <div className="text-center p-3 rounded-xl border border-white/[0.04] bg-white/[0.01]">
              <span className="block text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
                99.99%
              </span>
              <span className="text-xs text-zinc-400 font-medium mt-1 block">System Uptime SLA</span>
            </div>

            <div className="text-center p-3 rounded-xl border border-white/[0.04] bg-white/[0.01]">
              <span className="block text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
                GHS 4.2M+
              </span>
              <span className="text-xs text-zinc-400 font-medium mt-1 block">Automated FinTech Volume</span>
            </div>

            <div className="text-center p-3 rounded-xl border border-white/[0.04] bg-white/[0.01]">
              <span className="block text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
                &lt;120ms
              </span>
              <span className="text-xs text-zinc-400 font-medium mt-1 block">API Microservice Latency</span>
            </div>

            <div className="text-center p-3 rounded-xl border border-white/[0.04] bg-white/[0.01]">
              <span className="block text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
                50+ Systems
              </span>
              <span className="text-xs text-zinc-400 font-medium mt-1 block">Enterprise Deployments</span>
            </div>
          </div>

          {/* Hero Visual Studio Showcase with Live Telemetry Overlays */}
          <div className="relative mt-12 overflow-hidden rounded-3xl border border-white/[0.12] bg-[#0c0e16] shadow-2xl group">
            <div className="relative h-[300px] sm:h-[420px] lg:h-[500px] w-full overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80"
                alt="CrazyTech High-Concurrency Platform Engine"
                className="h-full w-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-1000 opacity-90"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#08090d] via-[#08090d]/35 to-transparent" />

              {/* Floating Live Telemetry Cards */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 rounded-2xl border border-white/15 bg-slate-950/80 p-3 sm:p-4 backdrop-blur-xl shadow-xl flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  <Zap className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-white">Sub-Second Dispatch</span>
                  </div>
                  <span className="text-[11px] font-mono text-zinc-400">Carrier Queue: 1.4s</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 rounded-2xl border border-white/15 bg-slate-950/80 p-3 sm:p-4 backdrop-blur-xl shadow-xl flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Shield className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-white">Atomic Double-Entry Ledger</span>
                  <span className="text-[11px] font-mono text-zinc-400">Zero Transaction Discrepancy</span>
                </div>
              </div>

              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 hidden sm:flex rounded-2xl border border-white/15 bg-slate-950/80 p-3 sm:p-4 backdrop-blur-xl shadow-xl items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Cpu className="h-5 w-5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-white">VPS &amp; Nginx Hardened</span>
                  <span className="text-[11px] font-mono text-zinc-400">Ubuntu 22.04 LTS • PM2 Cluster</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee / Floating Badges */}
      <section className="relative py-8 border-y border-white/[0.06] bg-[#090a0f] overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 text-center mb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-500">
            Engineered with Modern Industry-Standard Technologies
          </span>
        </div>

        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]">
          <div className="flex min-w-full shrink-0 items-center justify-around gap-6 py-2 animate-marquee">
            {[
              "Next.js 16 (App Router)",
              "React 19 & Server Actions",
              "TypeScript Enterprise",
              "Flutter iOS & Android",
              "React Native Native Bridge",
              "Node.js Microservices",
              "PostgreSQL & Prisma",
              "Redis Caching & Queue",
              "Docker Containers",
              "Ubuntu VPS & Nginx",
              "Paystack Gateway",
              "MTN MoMo API",
              "Telecel Cash",
              "Tailwind CSS v4",
            ].map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-mono font-medium text-zinc-300 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                {tech}
              </span>
            ))}
          </div>

          <div
            aria-hidden="true"
            className="flex min-w-full shrink-0 items-center justify-around gap-6 py-2 animate-marquee"
          >
            {[
              "Next.js 16 (App Router)",
              "React 19 & Server Actions",
              "TypeScript Enterprise",
              "Flutter iOS & Android",
              "React Native Native Bridge",
              "Node.js Microservices",
              "PostgreSQL & Prisma",
              "Redis Caching & Queue",
              "Docker Containers",
              "Ubuntu VPS & Nginx",
              "Paystack Gateway",
              "MTN MoMo API",
              "Telecel Cash",
              "Tailwind CSS v4",
            ].map((tech) => (
              <span
                key={`dup-${tech}`}
                className="inline-flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-mono font-medium text-zinc-300 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-500" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 6 High-Quality Showcase Templates Section */}
      <section id="showcase" className="relative scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-zinc-300 mb-3 backdrop-blur-md">
              <Layers className="h-4 w-4 text-zinc-400" />
              <span>Interactive Production-Grade Showcases</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Six High-Caliber Architecture Templates
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-zinc-400">
              Test-drive actual interactive components engineered by CrazyTech. Switch device framing, trigger simulated API dispatches, inspect metrics, and clone any template for your venture.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {(
                [
                  "All",
                  "FinTech & Telecom",
                  "Restaurants & Food",
                  "Mobile Wallets",
                  "Enterprise SaaS",
                  "E-Commerce",
                  "Mobile Apps",
                ] as const
              ).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-xl px-4 py-2 text-xs font-medium transition-all ${
                    selectedCategory === cat
                      ? "bg-white text-zinc-950 font-bold shadow-md"
                      : "border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:text-white hover:border-white/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Template Cards Feed */}
          <div className="space-y-16">
            {filteredTemplates.map((template) => {
              const currentDevice = deviceViews[template.id] || "desktop";

              return (
                <div
                  key={template.id}
                  className="rounded-3xl border border-white/[0.08] bg-[#0c0e14]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden group"
                >
                  {/* Subtle Background Glow */}
                  <div
                    className="absolute -top-32 -right-32 h-80 w-80 rounded-full blur-3xl opacity-10 pointer-events-none transition-opacity group-hover:opacity-20"
                    style={{ backgroundColor: template.accentColor }}
                  />

                  {/* Top Bar: Template Number, Title & Device Switcher */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/[0.08] mb-6">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-zinc-400 tracking-wider">
                          TEMPLATE {template.number}
                        </span>
                        <span
                          className={`rounded-full px-3 py-0.5 text-xs font-medium border ${template.badgeBg}`}
                        >
                          {template.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">{template.title}</h3>
                      <p className="text-xs sm:text-sm text-zinc-400 font-normal">
                        {template.tagline}
                      </p>
                    </div>

                    {/* View Switcher: Interactive vs Visual, and Device Framing */}
                    <div className="flex flex-wrap items-center gap-2 self-start lg:self-auto">
                      <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#08090d] p-1">
                        <button
                          type="button"
                          onClick={() => toggleViewMode(template.id, "interactive")}
                          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                            (viewModes[template.id] || "interactive") === "interactive"
                              ? "bg-white text-zinc-950 shadow-sm"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          <Sliders className="h-3.5 w-3.5" />
                          <span>Interactive Demo</span>
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleViewMode(template.id, "visual")}
                          className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                            viewModes[template.id] === "visual"
                              ? "bg-white text-zinc-950 shadow-sm"
                              : "text-zinc-400 hover:text-white"
                          }`}
                        >
                          <Layers className="h-3.5 w-3.5" />
                          <span>Architecture Visual</span>
                        </button>
                      </div>

                      {(viewModes[template.id] || "interactive") === "interactive" && (
                        <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#08090d] p-1">
                          <button
                            type="button"
                            onClick={() => setTemplateDevice(template.id, "desktop")}
                            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                              currentDevice === "desktop"
                                ? "bg-white text-zinc-950 shadow-sm"
                                : "text-zinc-400 hover:text-white"
                            }`}
                          >
                            <Monitor className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Desktop</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setTemplateDevice(template.id, "tablet")}
                            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                              currentDevice === "tablet"
                                ? "bg-white text-zinc-950 shadow-sm"
                                : "text-zinc-400 hover:text-white"
                            }`}
                          >
                            <Tablet className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Tablet</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => setTemplateDevice(template.id, "mobile")}
                            className={`flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-semibold transition-all ${
                              currentDevice === "mobile"
                                ? "bg-white text-zinc-950 shadow-sm"
                                : "text-zinc-400 hover:text-white"
                            }`}
                          >
                            <Smartphone className="h-3.5 w-3.5" />
                            <span className="hidden sm:inline">Mobile</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Template Presentation: Interactive Sandbox vs Production Visual */}
                  {viewModes[template.id] === "visual" ? (
                    <div className="mb-8 space-y-4">
                      <div className="relative h-[320px] sm:h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-[#08090d] group/visual">
                        <img
                          src={template.image}
                          alt={template.title}
                          className="h-full w-full object-cover object-center group-hover/visual:scale-105 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
                          <div className="space-y-1">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                              Production Environment
                            </span>
                            <h4 className="text-xl sm:text-2xl font-bold text-white">{template.title}</h4>
                            <p className="text-xs text-zinc-300 max-w-xl">{template.tagline}</p>
                          </div>
                          <button
                            type="button"
                            onClick={() => setActiveModalTemplate(template)}
                            className="rounded-xl bg-white text-zinc-950 font-bold text-xs px-4 py-2 hover:bg-zinc-200 transition shadow-lg shrink-0 cursor-pointer"
                          >
                            View Architecture Specs
                          </button>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        {template.gallery?.map((img, i) => (
                          <div key={i} className="relative h-24 rounded-xl overflow-hidden border border-white/10 bg-[#08090d]">
                            <img src={img} alt={`${template.title} view ${i + 1}`} className="h-full w-full object-cover" loading="lazy" />
                          </div>
                        ))}
                        {template.architecturePoints.slice(0, 2).map((pt) => (
                          <div key={pt.title} className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5 flex flex-col justify-center">
                            <span className="text-xs font-bold text-white truncate">{pt.title}</span>
                            <span className="text-[10px] text-zinc-400 line-clamp-2 mt-0.5">{pt.desc}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    /* Device Framing Outer Wrap */
                    <div className="flex justify-center mb-8">
                      <div
                        className={`w-full transition-all duration-300 ${
                          currentDevice === "desktop"
                            ? "max-w-full"
                            : currentDevice === "tablet"
                            ? "max-w-2xl"
                            : "max-w-sm"
                        }`}
                      >
                        {/* Browser / Frame Chrome */}
                        <div className="rounded-t-2xl border-t border-x border-white/10 bg-[#12141c] px-4 py-2.5 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600/70 inline-block" />
                            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600/70 inline-block" />
                            <span className="h-2.5 w-2.5 rounded-full bg-zinc-600/70 inline-block" />
                          </div>
                          <div className="rounded-lg bg-[#08090d] px-3 py-1 text-[11px] font-mono text-zinc-400 border border-white/[0.06] max-w-[280px] truncate">
                            https://demo.crazytechent.com/{template.id}
                          </div>
                          <div className="text-[10px] text-zinc-400 font-mono flex items-center gap-1.5">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            <span>Interactive Sandbox</span>
                          </div>
                        </div>

                        {/* Live Embedded Prototype Component */}
                        <div className="rounded-b-2xl border-b border-x border-white/10 bg-[#08090d]/80 p-2 sm:p-4">
                          {template.previewType === "fintech" && <NexusPayMockup device={currentDevice} />}
                          {template.previewType === "restaurant" && <RestaurantMockup device={currentDevice} />}
                          {template.previewType === "wallet" && <WalletMobileMockup device={currentDevice} />}
                          {template.previewType === "erp" && <OmniCoreMockup device={currentDevice} />}
                          {template.previewType === "ecommerce" && <AuraLuxeMockup device={currentDevice} />}
                          {template.previewType === "health" && <PulseHealthMockup device={currentDevice} />}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Template Meta, Stats & Action Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border-t border-white/[0.08] pt-6">
                    {/* Performance Stats Pills */}
                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {template.stats.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3"
                        >
                          <span className="block text-lg font-black font-mono text-white">
                            {s.value}
                          </span>
                          <span className="block text-[11px] font-medium text-zinc-300">
                            {s.label}
                          </span>
                          {s.hint && (
                            <span className="block text-[9px] text-zinc-500 truncate mt-0.5 font-mono">
                              {s.hint}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-2.5">
                      <button
                        type="button"
                        onClick={() => setActiveModalTemplate(template)}
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 py-2.5 px-4 text-xs font-semibold text-zinc-200 transition-colors"
                      >
                        <Layers className="h-4 w-4 text-zinc-400" />
                        <span>Inspect Full Specs</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleRequestQuote(template.title)}
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-zinc-200 py-2.5 px-4 text-xs font-bold text-zinc-950 shadow-sm transition-all"
                      >
                        <span>Build Similar Platform</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <ServicesSection onSelectService={handleSelectService} />

      {/* Engineering Process & Architecture Section */}
      <section id="process" className="relative scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#090a0f]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-zinc-300 mb-3 backdrop-blur-md">
              <Cpu className="h-4 w-4 text-zinc-400" />
              <span>The CrazyTech Standard</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our 4-Stage Rapid Delivery Blueprint
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-zinc-400">
              How we turn complex enterprise requirements into production-ready software in 2 to 4 weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Architectural Blueprint",
                desc: "We analyze your database schemas, telecom gateway APIs, security boundaries, and high-concurrency bottlenecks before touching code.",
                badge: "Discovery & Specs",
              },
              {
                step: "02",
                title: "High-Fidelity Prototyping",
                desc: "We design clickable 60fps responsive prototypes in Figma and React, validating user journeys and mobile tactile responsiveness.",
                badge: "Design & UX",
              },
              {
                step: "03",
                title: "High-Velocity Code Sprints",
                desc: "Full-stack engineering using Next.js 16, TypeScript, PostgreSQL, and Redis with atomic transactional safety and zero double-spends.",
                badge: "Production Build",
              },
              {
                step: "04",
                title: "Hardened VPS Launch",
                desc: "Deployment on Ubuntu VPS with Nginx reverse proxy, Certbot SSL, PM2 cluster, automated backups, and 24/7 uptime monitoring.",
                badge: "Launch & Support",
              },
            ].map((p) => (
              <div
                key={p.step}
                className="rounded-2xl border border-white/[0.07] bg-[#0c0e14] p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-white">{p.step}</span>
                    <span className="rounded-full bg-white/[0.05] border border-white/[0.08] px-2.5 py-1 text-[10px] font-mono text-zinc-300">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">{p.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-1.5 text-xs text-emerald-400 font-medium">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Guaranteed Deliverable</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Craftsmanship & Engineering Lab Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06] bg-[#08090d]">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-zinc-300 mb-3 backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-zinc-400" />
              <span>Studio Craftsmanship &amp; Engineering Culture</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Behind the Code: Our Engineering Principles
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-zinc-400">
              We operate as a boutique software engineering studio combining silicon-valley architecture rigor with local telecom and payment execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Architectural Blueprinting First",
                subtitle: "Schema Normalization & Concurrency Safety",
                desc: "Before writing application code, we map database transactions, carrier routing fallback matrices, and data protection boundaries.",
                image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
                tag: "System Design",
              },
              {
                title: "Tactile, High-Fidelity UI",
                subtitle: "Tailwind CSS v4 & 60fps Micro-Interactions",
                desc: "We engineer interfaces that feel physical and immediate, with sub-second optimistic updates, zero layout shifts, and dark mode elegance.",
                image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=800&q=80",
                tag: "Design System",
              },
              {
                title: "Hardened VPS & Telemetry",
                subtitle: "Automated Deployments & 99.99% SLA",
                desc: "We configure Ubuntu VPS nodes with PM2 clustering, Nginx reverse-proxies, Certbot auto-SSL, and proactive uptime monitors.",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
                tag: "Cloud DevOps",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="group relative rounded-2xl border border-white/[0.08] bg-[#0c0e14] overflow-hidden shadow-xl hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e14] via-[#0c0e14]/40 to-transparent" />
                  <span className="absolute top-3 left-3 rounded-full bg-slate-950/80 backdrop-blur-md px-2.5 py-1 text-[10px] font-mono text-zinc-300 border border-white/10">
                    {card.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-white mb-1">{card.title}</h3>
                  <span className="text-xs font-mono text-zinc-400 block mb-3">{card.subtitle}</span>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">{card.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Client Testimonials */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-zinc-400 font-bold block mb-2">
              Verified Client Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Trusted by FinTech Founders &amp; Business Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "CrazyTech engineered our telecom automated data distribution engine. We went from processing 200 orders manually per day to handling over 15,000 automated transactions with zero carrier downtime.",
                author: "Emmanuel Boakye",
                role: "Operations Director, Telecom Aggregator Hub",
                metric: "+340% Revenue Velocity",
                avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
              },
              {
                quote:
                  "Their multi-domain VPS architecture allowed us to launch individual custom storefronts for over 40 resellers on a single Ubuntu server without paying massive monthly SaaS hosting costs.",
                author: "Sarah Addo",
                role: "Founder, DataConnect Ghana",
                metric: "Saved $8,400/yr in Server Costs",
                avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
              },
              {
                quote:
                  "The speed and polish of the UI is unmatched. Our mobile app conversion doubled immediately after launching the redesigned Paystack and MoMo checkout flow built by CrazyTech.",
                author: "Michael Ansah",
                role: "Product Lead, Retail FinTech App",
                metric: "4.9★ App Store Rating",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
              },
            ].map((t) => (
              <div
                key={t.author}
                className="rounded-2xl border border-white/[0.07] bg-[#0c0e14] p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="border-t border-white/[0.06] pt-4 flex items-center gap-3">
                  <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full border border-white/15 bg-zinc-800">
                    <img
                      src={t.avatar}
                      alt={t.author}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block text-xs font-bold text-white truncate">{t.author}</span>
                    <span className="block text-[11px] text-zinc-400 truncate">{t.role}</span>
                    <span className="inline-block mt-1 rounded bg-emerald-500/10 px-2 py-0.5 text-[9px] font-mono font-medium text-emerald-400 border border-emerald-500/20">
                      {t.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Project Cost & Scope Estimator */}
      <ProjectEstimator prefillTitle={estimatorPrefill} />

      {/* Direct RFP & Contact Section */}
      <ContactRfpSection prefillService={estimatorPrefill} />

      {/* Footer */}
      <footer className="border-t border-white/[0.06] bg-[#06070a] py-12 px-4 sm:px-6 lg:px-8 text-xs text-zinc-400">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <BrandMark size="sm" />
            <div>
              <span className="font-bold text-white">CrazyTech Enterprises</span>
              <p className="text-[11px] text-zinc-500">
                High-Impact Software Engineering &amp; Next-Gen Digital Systems
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 font-medium">
            <a href="#showcase" className="hover:text-white transition-colors">
              Templates
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Capabilities
            </a>
            <a href="#estimator" className="hover:text-white transition-colors">
              Estimator
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
            <a
              href="https://wa.me/233507904981"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-400 hover:text-emerald-300 transition-colors"
            >
              WhatsApp (+233 50 790 4981)
            </a>
          </div>

          <div className="text-[11px] text-zinc-500">
            &copy; {new Date().getFullYear()} CrazyTech Enterprises. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Floating Quick Navigation Dock */}
      <FloatingQuickDock />

      {/* Deep-Dive Case Study Modal */}
      <TemplateModal
        template={activeModalTemplate}
        onClose={() => setActiveModalTemplate(null)}
        onRequestQuote={handleRequestQuote}
      />
    </div>
  );
}
