"use client";

import React from "react";
import {
  Laptop,
  Smartphone,
  Globe2,
  Zap,
  Server,
  Palette,
  ArrowRight,
  CheckCircle2,
  Cpu,
  Layers,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
  badgeClass: string;
  description: string;
  deliverables: string[];
  techTags: string[];
}

const SERVICES: ServiceCard[] = [
  {
    id: "software",
    title: "Enterprise Software & ERP Systems",
    subtitle: "Custom Business Management & Automation Suites",
    badge: "Core Engineering",
    icon: Laptop,
    accentColor: "bg-white/[0.05] text-white border-white/10",
    badgeClass: "bg-white/[0.04] text-zinc-300 border-white/10",
    description:
      "Bespoke software systems engineered to replace clunky legacy workflows. We build integrated ERPs, school/hospital suites, POS retail networks, and multi-branch distributed inventory databases.",
    deliverables: [
      "Enterprise Resource Planning (ERP) & CRM",
      "Multi-Branch Inventory & Real-Time Stock Sync",
      "Point-of-Sale (POS) & Barcode Scanner Integration",
      "Automated Invoicing, PDF Generation & Financial Reports",
      "Cross-Platform Desktop Apps (Electron / Native)",
      "Strict Role-Based Access Control (RBAC) Governance",
    ],
    techTags: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Electron", "Redis"],
  },
  {
    id: "mobile",
    title: "Mobile App Development (iOS & Android)",
    subtitle: "Fluid, Native & Cross-Platform Experiences",
    badge: "High Demand",
    icon: Smartphone,
    accentColor: "bg-white/[0.05] text-white border-white/10",
    badgeClass: "bg-white/[0.04] text-zinc-300 border-white/10",
    description:
      "Stunning mobile apps published directly to the Apple App Store and Google Play Store. Built for smooth 60fps animations, offline-first reliability, biometric security, and push notifications.",
    deliverables: [
      "iOS (Swift / React Native) & Android (Kotlin / Flutter)",
      "Biometric Authentication (Face ID & Fingerprint)",
      "Instant Mobile Money (MoMo) & In-App Purchases",
      "Offline SQLite / WatermelonDB Cache Synchronization",
      "Interactive Push Notifications (FCM / APNs)",
      "Full Store Publishing & Continuous Maintenance",
    ],
    techTags: ["Flutter", "React Native", "Swift", "Kotlin", "WebSockets", "Firebase"],
  },
  {
    id: "web",
    title: "Next-Gen Web Platforms & SaaS",
    subtitle: "Blazing-Fast Web Applications & Cloud Portals",
    badge: "Ultra-Fast",
    icon: Globe2,
    accentColor: "bg-white/[0.05] text-white border-white/10",
    badgeClass: "bg-white/[0.04] text-zinc-300 border-white/10",
    description:
      "High-converting cloud applications and digital storefronts engineered on Next.js 16 and React 19. Designed for sub-second page loads, SEO domination, and frictionless buyer conversion.",
    deliverables: [
      "Modern SaaS Architectures & Customer Portals",
      "Multi-Tenant Storefront Reseller Networks",
      "Headless E-Commerce with 0.4s LCP Web Vitals",
      "Real-Time Collaborative Dashboards",
      "Search Engine Optimization (SEO) & Social OpenGraph",
      "Accessible, Dark/Light Mode Responsive Interfaces",
    ],
    techTags: ["Next.js 16", "React 19", "Tailwind CSS v4", "Prisma", "Zustand"],
  },
  {
    id: "fintech",
    title: "FinTech & Telecom Gateway Aggregation",
    subtitle: "Automated Carrier Dispatch & Wallet Systems",
    badge: "Flagship Capability",
    icon: Zap,
    accentColor: "bg-white/[0.05] text-white border-white/10",
    badgeClass: "bg-white/[0.04] text-zinc-300 border-white/10",
    description:
      "Industrial-grade telecommunication and financial aggregation systems. We integrate direct MTN, Telecel, and AT carrier APIs with Paystack, Hubtel, and Mobile Money webhooks.",
    deliverables: [
      "Automated Bulk Data & Airtime Dispatch Engines",
      "Closed-Loop MSISDN Phone Number Verification",
      "Atomic Wallet Top-Ups & Reversal Safeguards",
      "Cryptographic Webhook Dispatch with Signature Verifications",
      "Paystack, Stripe, and MoMo Gateway Implementations",
      "Zero Double-Spend Idempotent Queue Mechanisms",
    ],
    techTags: ["Telecom APIs", "Paystack", "MTN MoMo", "HMAC SHA256", "BullMQ"],
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure, VPS & DevOps",
    subtitle: "Hardened Ubuntu Servers, Nginx & 24/7 PM2",
    badge: "Infrastructure",
    icon: Server,
    accentColor: "bg-white/[0.05] text-white border-white/10",
    badgeClass: "bg-white/[0.04] text-zinc-300 border-white/10",
    description:
      "Rock-solid deployment architecture built for zero-downtime scalability. From single multi-tenant VPS deployments to Kubernetes microservices, automated backups, and SSL certbots.",
    deliverables: [
      "Ubuntu 22.04 / Debian VPS Hardening & Firewalls (UFW)",
      "Nginx Multi-Domain Reverse Proxies with Host Header Rewriting",
      "PM2 Cluster Mode with Auto-Restart & Systemd Integration",
      "Let's Encrypt Certbot SSL Auto-Renewals",
      "PostgreSQL Connection Pooling, Tuning & Encrypted Dumps",
      "Dockerized Microservices & CI/CD GitHub Actions",
    ],
    techTags: ["Ubuntu VPS", "Nginx", "PM2", "PostgreSQL", "Docker", "Certbot"],
  },
  {
    id: "uiux",
    title: "High-Fidelity UI/UX & Brand Design",
    subtitle: "Conversion-Focused Interfaces & Micro-Interactions",
    badge: "Creative Power",
    icon: Palette,
    accentColor: "bg-white/[0.05] text-white border-white/10",
    badgeClass: "bg-white/[0.04] text-zinc-300 border-white/10",
    description:
      "Award-winning aesthetic polish that converts casual visitors into loyal high-ticket clients. Fluid 60fps micro-animations, glassmorphism, responsive tactile physics, and cohesive design systems.",
    deliverables: [
      "End-to-End Figma Design Systems & Component Tokens",
      "Interactive High-Fidelity Prototypes & Usability Testing",
      "High-Converting Landing Pages & Lead Funnels",
      "Custom Vector Illustrations, Icons & Brand Monograms",
      "Fluid CSS & Canvas Micro-Interactions",
      "Full Design-to-Code Implementation Guarantees",
    ],
    techTags: ["Figma", "Design Tokens", "Micro-Interactions", "Tailwind", "SVG"],
  },
];

export function ServicesSection({ onSelectService }: { onSelectService: (serviceTitle: string) => void }) {
  return (
    <section id="services" className="relative scroll-mt-24 py-24 px-4 sm:px-6 lg:px-8 border-t border-white/[0.06]">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-zinc-300 mb-3 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-zinc-400" />
            <span>Comprehensive Digital Engineering Solutions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            What We Build at CrazyTech Enterprises
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-zinc-400">
            From consumer mobile apps to high-throughput telecommunication gateways and enterprise cloud suites, we handle every layer of the engineering lifecycle.
          </p>
        </div>

        {/* 6-Card Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#0c0e14] p-6 sm:p-7 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-[#10121a] hover:shadow-2xl hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/[0.05] border border-white/10 text-white shadow-md group-hover:scale-105 group-hover:bg-white/[0.08] transition-all"
                    >
                      <Icon className="h-6 w-6 stroke-[2]" />
                    </div>
                    <span className="rounded-full px-3 py-1 text-[11px] font-mono text-zinc-300 bg-white/[0.04] border border-white/10">
                      {s.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-xs font-medium text-zinc-400 mt-1 mb-3">{s.subtitle}</p>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-5 font-normal">
                    {s.description}
                  </p>

                  {/* Deliverables List */}
                  <div className="space-y-2 border-t border-white/[0.07] pt-4 mb-5">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-zinc-400 block mb-2">
                      Key Capabilities Included:
                    </span>
                    {s.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-zinc-300">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer action and Tech tags */}
                <div className="border-t border-white/[0.07] pt-4 space-y-3">
                  <div className="flex flex-wrap gap-1.5">
                    {s.techTags.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/[0.08] bg-[#08090d] px-2 py-0.5 text-[10px] font-mono text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectService(s.title)}
                    className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white hover:text-zinc-950 hover:border-white py-2.5 px-4 text-xs font-semibold text-zinc-200 transition-all"
                  >
                    <span>Start {s.title.split(" ")[0]} Project</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
