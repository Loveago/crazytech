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
    "omni-core": "desktop",
    "aura-luxe": "desktop",
    "pulse-health": "mobile",
  });

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
    <div className="relative min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 overflow-x-hidden font-sans">
      {/* 60fps Interactive Particle Background */}
      <InteractiveCanvasBg />

      {/* Ambient Radial Gradient Overlays */}
      <div className="pointer-events-none fixed -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full bg-gradient-to-b from-indigo-600/20 via-cyan-500/10 to-transparent blur-3xl opacity-70" />
      <div className="pointer-events-none fixed top-1/3 -right-60 h-[500px] w-[600px] rounded-full bg-gradient-to-l from-violet-600/15 to-transparent blur-3xl opacity-50" />
      <div className="pointer-events-none fixed bottom-1/4 -left-60 h-[500px] w-[600px] rounded-full bg-gradient-to-r from-emerald-600/15 to-transparent blur-3xl opacity-50" />

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 py-3.5">
          <Link href="/portfolio" className="flex items-center gap-3 shrink-0 mr-4 sm:mr-8 group">
            <BrandMark size="sm" className="group-hover:scale-105 transition-transform" />
            <div className="flex flex-col">
              <span className="text-base sm:text-lg font-black tracking-tight text-white flex items-center gap-1.5">
                CrazyTech <span className="text-cyan-400 font-mono text-xs font-bold">ENTERPRISES</span>
              </span>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase">
                Software & App Engineering
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-4 xl:gap-6 text-xs font-bold text-slate-300">
            <a href="#showcase" className="hover:text-cyan-400 transition-colors">
              Templates & Case Studies
            </a>
            <a href="#services" className="hover:text-cyan-400 transition-colors">
              Engineering Services
            </a>
            <a href="#process" className="hover:text-cyan-400 transition-colors">
              Architecture & Process
            </a>
            <a href="#estimator" className="hover:text-cyan-400 transition-colors">
              Scope Estimator
            </a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">
              Contact & RFP
            </a>
          </nav>

          <div className="flex items-center gap-2.5 sm:gap-3">
            <a
              href="https://wa.me/233507904981"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-950/30 hover:bg-emerald-900/40 px-3 py-2 text-xs font-bold text-emerald-400 transition-colors"
            >
              <MessageCircle className="h-3.5 w-3.5" />
              <span>+233 50 790 4981</span>
            </a>

            <a
              href="#estimator"
              className="flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-4 py-2 text-xs font-black text-slate-950 shadow-md shadow-cyan-500/20 transition-all active:scale-95"
            >
              <Sparkles className="h-3.5 w-3.5" />
              <span>Start Project</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-300 mb-6 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>High-Impact Engineering & Custom Software Solutions</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08]">
            We Engineer High-Impact{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-500 bg-clip-text text-transparent">
              Software, Mobile Apps & Platforms
            </span>{" "}
            That Scale.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-base sm:text-xl text-slate-300 leading-relaxed font-normal">
            From high-throughput telecommunication gateways and enterprise ERP suites to consumer mobile apps and 60fps headless commerce — CrazyTech delivers mission-critical software built for speed, security, and conversion.
          </p>

          {/* Action CTAs */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <a
              href="#showcase"
              className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-7 py-4 font-black text-sm text-slate-950 shadow-xl shadow-cyan-500/20 transition-all hover:-translate-y-0.5 active:scale-95"
            >
              <span>Explore 4 Showcase Templates</span>
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#estimator"
              className="flex items-center gap-2 rounded-2xl border border-slate-700 bg-slate-900/80 hover:bg-slate-800 hover:border-slate-600 px-6 py-4 font-bold text-sm text-slate-200 transition-all hover:-translate-y-0.5"
            >
              <Sliders className="h-4 w-4 text-cyan-400" />
              <span>Calculate Project Scope</span>
            </a>

            <a
              href="https://wa.me/233507904981"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-2xl border border-emerald-500/40 bg-emerald-950/30 hover:bg-emerald-900/40 px-6 py-4 font-bold text-sm text-emerald-400 transition-all hover:-translate-y-0.5"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Consultation</span>
            </a>
          </div>

          {/* Key Metrics Ticker */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 rounded-3xl border border-slate-800 bg-slate-900/50 p-5 sm:p-6 backdrop-blur-xl">
            <div className="text-center p-2">
              <span className="block text-2xl sm:text-3xl font-black font-mono text-cyan-400">
                99.99%
              </span>
              <span className="text-xs text-slate-400 font-medium">System Uptime SLA</span>
            </div>

            <div className="text-center p-2">
              <span className="block text-2xl sm:text-3xl font-black font-mono text-indigo-400">
                GHS 4.2M+
              </span>
              <span className="text-xs text-slate-400 font-medium">Automated FinTech Volume</span>
            </div>

            <div className="text-center p-2">
              <span className="block text-2xl sm:text-3xl font-black font-mono text-pink-400">
                &lt;120ms
              </span>
              <span className="text-xs text-slate-400 font-medium">API Microservice Latency</span>
            </div>

            <div className="text-center p-2">
              <span className="block text-2xl sm:text-3xl font-black font-mono text-emerald-400">
                50+ Systems
              </span>
              <span className="text-xs text-slate-400 font-medium">Enterprise Deployments</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Marquee / Floating Badges */}
      <section className="relative py-8 border-y border-slate-800/80 bg-slate-950/60 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 text-center mb-4">
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
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
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-mono font-bold text-slate-300 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
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
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/70 px-4 py-2 text-xs font-mono font-bold text-slate-300 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 4 High-Quality Showcase Templates Section */}
      <section id="showcase" className="relative scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold text-cyan-300 mb-3">
              <Layers className="h-4 w-4" />
              <span>Interactive Production-Grade Showcases</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Four High-Caliber Architecture Templates
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
              Test-drive actual interactive components engineered by CrazyTech. Switch device framing, trigger simulated API dispatches, inspect metrics, and clone any template for your venture.
            </p>

            {/* Category Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
              {(["All", "FinTech & Telecom", "Enterprise SaaS", "E-Commerce", "Mobile Apps"] as const).map(
                (cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`rounded-xl px-4 py-2 text-xs font-bold transition-all ${
                      selectedCategory === cat
                        ? "bg-cyan-500 text-slate-950 font-black shadow-lg shadow-cyan-500/20"
                        : "border border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white hover:border-slate-700"
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Template Cards Feed */}
          <div className="space-y-16">
            {filteredTemplates.map((template) => {
              const currentDevice = deviceViews[template.id] || "desktop";

              return (
                <div
                  key={template.id}
                  className="rounded-3xl border border-slate-800/90 bg-gradient-to-b from-slate-900/70 to-slate-950 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl relative overflow-hidden group"
                >
                  {/* Subtle Background Glow */}
                  <div
                    className="absolute -top-32 -right-32 h-80 w-80 rounded-full blur-3xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-35"
                    style={{ backgroundColor: template.accentColor }}
                  />

                  {/* Top Bar: Template Number, Title & Device Switcher */}
                  <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-800/80 mb-6">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm font-black text-cyan-400">
                          TEMPLATE {template.number}
                        </span>
                        <span
                          className={`rounded-full px-3 py-0.5 text-xs font-bold border ${template.badgeBg}`}
                        >
                          {template.badge}
                        </span>
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white">{template.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-400 font-medium">
                        {template.tagline}
                      </p>
                    </div>

                    {/* View Switcher: Desktop vs Tablet vs Mobile */}
                    <div className="flex items-center gap-1.5 rounded-2xl border border-slate-800 bg-slate-950/80 p-1.5 self-start lg:self-auto">
                      <button
                        type="button"
                        onClick={() => setTemplateDevice(template.id, "desktop")}
                        className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                          currentDevice === "desktop"
                            ? "bg-cyan-500 text-slate-950"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <Monitor className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Desktop</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setTemplateDevice(template.id, "tablet")}
                        className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                          currentDevice === "tablet"
                            ? "bg-cyan-500 text-slate-950"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <Tablet className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Tablet</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setTemplateDevice(template.id, "mobile")}
                        className={`flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                          currentDevice === "mobile"
                            ? "bg-cyan-500 text-slate-950"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <Smartphone className="h-3.5 w-3.5" />
                        <span className="hidden sm:inline">Mobile</span>
                      </button>
                    </div>
                  </div>

                  {/* Device Framing Outer Wrap */}
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
                      <div className="rounded-t-2xl border-t border-x border-slate-800 bg-slate-900/90 px-4 py-2.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-rose-500/80 inline-block" />
                          <span className="h-3 w-3 rounded-full bg-amber-500/80 inline-block" />
                          <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block" />
                        </div>
                        <div className="rounded-lg bg-slate-950 px-3 py-1 text-[11px] font-mono text-slate-400 border border-slate-800/80 max-w-[280px] truncate">
                          https://demo.crazytechent.com/{template.id}
                        </div>
                        <div className="text-[10px] text-emerald-400 font-mono flex items-center gap-1">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                          <span>Interactive</span>
                        </div>
                      </div>

                      {/* Live Embedded Prototype Component */}
                      <div className="rounded-b-2xl border-b border-x border-slate-800 bg-slate-950/60 p-2 sm:p-4">
                        {template.previewType === "fintech" && <NexusPayMockup />}
                        {template.previewType === "erp" && <OmniCoreMockup />}
                        {template.previewType === "ecommerce" && <AuraLuxeMockup />}
                        {template.previewType === "health" && <PulseHealthMockup />}
                      </div>
                    </div>
                  </div>

                  {/* Template Meta, Stats & Action Row */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center border-t border-slate-800/80 pt-6">
                    {/* Performance Stats Pills */}
                    <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {template.stats.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-xl border border-slate-800 bg-slate-950/70 p-3"
                        >
                          <span className="block text-lg font-black font-mono text-cyan-300">
                            {s.value}
                          </span>
                          <span className="block text-[11px] font-semibold text-slate-300">
                            {s.label}
                          </span>
                          {s.hint && (
                            <span className="block text-[9px] text-slate-500 truncate mt-0.5">
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
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-cyan-500/40 bg-cyan-950/30 hover:bg-cyan-900/40 py-2.5 px-4 text-xs font-bold text-cyan-300 transition-colors"
                      >
                        <Layers className="h-4 w-4" />
                        <span>Inspect Full Case Study & Tech Specs</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => handleRequestQuote(template.title)}
                        className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 py-2.5 px-4 text-xs font-bold text-slate-950 shadow-md shadow-cyan-500/20 transition-all"
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
      <section id="process" className="relative scroll-mt-24 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-slate-950/70">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-bold text-violet-300 mb-3">
              <Cpu className="h-4 w-4" />
              <span>The CrazyTech Standard</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Our 4-Stage Rapid Delivery Blueprint
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-slate-400">
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
                className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black text-cyan-400">{p.step}</span>
                    <span className="rounded-full bg-slate-800 px-2.5 py-1 text-[10px] font-bold text-slate-300">
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{p.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center gap-1.5 text-xs text-emerald-400 font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  <span>Guaranteed Deliverable</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verified Client Testimonials */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold block mb-2">
              Verified Client Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white">
              Trusted by FinTech Founders & Business Leaders
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
              },
              {
                quote:
                  "Their multi-domain VPS architecture allowed us to launch individual custom storefronts for over 40 resellers on a single Ubuntu server without paying massive monthly SaaS hosting costs.",
                author: "Sarah Addo",
                role: "Founder, DataConnect Ghana",
                metric: "Saved $8,400/yr in Server Costs",
              },
              {
                quote:
                  "The speed and polish of the UI is unmatched. Our mobile app conversion doubled immediately after launching the redesigned Paystack and MoMo checkout flow built by CrazyTech.",
                author: "Michael Ansah",
                role: "Product Lead, Retail FinTech App",
                metric: "4.9★ App Store Rating",
              },
            ].map((t) => (
              <div
                key={t.author}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="border-t border-slate-800 pt-4">
                  <span className="block text-xs font-bold text-white">{t.author}</span>
                  <span className="block text-[11px] text-slate-400">{t.role}</span>
                  <span className="inline-block mt-2 rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-400 border border-emerald-500/20">
                    {t.metric}
                  </span>
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
      <footer className="border-t border-slate-800/80 bg-slate-950 py-12 px-4 sm:px-6 lg:px-8 text-xs text-slate-400">
        <div className="mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <BrandMark size="sm" />
            <div>
              <span className="font-bold text-white">CrazyTech Enterprises</span>
              <p className="text-[11px] text-slate-500">
                High-Impact Software Engineering & Next-Gen Digital Systems
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 font-semibold">
            <a href="#showcase" className="hover:text-cyan-400">
              Templates
            </a>
            <a href="#services" className="hover:text-cyan-400">
              Services
            </a>
            <a href="#estimator" className="hover:text-cyan-400">
              Estimator
            </a>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
            <a
              href="https://wa.me/233507904981"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400"
            >
              WhatsApp (+233 50 790 4981)
            </a>
          </div>

          <div className="text-[11px] text-slate-500">
            © {new Date().getFullYear()} CrazyTech Enterprises. All rights reserved.
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
