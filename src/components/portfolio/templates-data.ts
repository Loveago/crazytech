import React from "react";
import {
  Zap,
  Shield,
  Cpu,
  Layers,
  Smartphone,
  Server,
  Activity,
  ShoppingBag,
  HeartPulse,
  Database,
  BarChart3,
  CreditCard,
  Lock,
  Workflow,
  Sparkles,
  CheckCircle2,
  Globe2,
  UtensilsCrossed,
  Wallet,
} from "lucide-react";

export interface TemplateData {
  id: string;
  number: string;
  title: string;
  badge: string;
  category:
    | "FinTech & Telecom"
    | "Enterprise SaaS"
    | "E-Commerce"
    | "Mobile Apps"
    | "Restaurants & Food"
    | "Mobile Wallets";
  tagline: string;
  description: string;
  longDescription: string;
  accentColor: string;
  glowColor: string;
  badgeBg: string;
  badgeBorder: string;
  gradientBg: string;
  stats: { label: string; value: string; hint?: string }[];
  techStack: string[];
  keyFeatures: string[];
  architecturePoints: { title: string; desc: string }[];
  lighthouseScores: { performance: number; accessibility: number; bestPractices: number; seo: number };
  previewType: "fintech" | "erp" | "ecommerce" | "health" | "restaurant" | "wallet";
}

export const SHOWCASE_TEMPLATES: TemplateData[] = [
  {
    id: "nexus-pay",
    number: "01",
    title: "NexusPay & Telecom FinTech Engine",
    badge: "FinTech & Telecommunications",
    category: "FinTech & Telecom",
    tagline: "Sub-Second Data Aggregation & Automated Mobile Money Settlement Platform",
    description:
      "A high-concurrency fintech distribution platform powering automated MTN, Telecel, and AT data fulfillment, instant merchant wallet reconciliations, and Paystack MoMo gateways.",
    longDescription:
      "Engineered for high resilience and zero transaction loss under peak loads. Features a closed-loop validation engine that authenticates telecommunication MSISDNs in real time, executes idempotent gateway dispatching, and streams live delivery webhooks back to reseller storefronts.",
    accentColor: "#3b82f6",
    glowColor: "rgba(59, 130, 246, 0.12)",
    badgeBg: "bg-blue-500/10 text-blue-300 border-blue-500/20",
    badgeBorder: "border-blue-500/30",
    gradientBg: "from-blue-600/10 via-slate-900 to-transparent",
    stats: [
      { label: "Dispatch Speed", value: "<1.8s", hint: "Average gateway queue-to-delivery" },
      { label: "Volume Processed", value: "GHS 4.2M+", hint: "Automated wallet volume" },
      { label: "Delivery Accuracy", value: "99.99%", hint: "Automated verification rate" },
      { label: "Completed Deliveries", value: "500K+", hint: "Total successful packages" },
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Prisma ORM",
      "Redis Queue",
      "Paystack Gateway",
      "MTN MoMo API",
      "Tailwind CSS",
    ],
    keyFeatures: [
      "Sub-second direct telecommunication gateway API dispatch for MTN, Telecel & AT",
      "Automated Mobile Money (MoMo) webhook verification with zero double-spends",
      "Multi-tier merchant wallet ledger with atomic PostgreSQL balance decrements",
      "Customer storefront builder with custom domain routing and SSL automation",
      "Automated PDF receipts, audit logging, and cryptographic webhook signatures",
    ],
    architecturePoints: [
      {
        title: "Idempotent Queue Execution",
        desc: "Guarantees zero duplicate disbursements during carrier network timeouts via unique payload hashing.",
      },
      {
        title: "Closed-Loop Telco MSISDN Verification",
        desc: "Pre-validates recipient phone numbers against carrier routing prefixes before debited wallet funds.",
      },
      {
        title: "Multi-Domain Host Headers",
        desc: "Reverse-proxies hundreds of custom reseller domains on a single VPS instance without restarting Nginx.",
      },
    ],
    lighthouseScores: {
      performance: 99,
      accessibility: 100,
      bestPractices: 100,
      seo: 98,
    },
    previewType: "fintech",
  },
  {
    id: "savoria-restaurant",
    number: "02",
    title: "Savoria Gourmet Dining & Culinary Commerce",
    badge: "Restaurant, POS & Cloud Kitchen",
    category: "Restaurants & Food",
    tagline: "Omnichannel Restaurant Shopping, Table QR Orders & Real-Time Kitchen Telemetry",
    description:
      "A culinary digital commerce platform connecting diners to instant table QR menus, real-time kitchen POS printing, delivery logistics, and MoMo/Card instant checkout.",
    longDescription:
      "Engineered for high-end restaurants, multi-location bistros, and ghost kitchens. Savoria streamlines customer ordering with interactive dish customizers (portion sizing, heat ratings, side add-ons), integrated tip distribution, and real-time live kitchen display system (KDS) progression telemetry.",
    accentColor: "#d97706",
    glowColor: "rgba(217, 119, 6, 0.12)",
    badgeBg: "bg-amber-500/10 text-amber-200 border-amber-500/20",
    badgeBorder: "border-amber-500/30",
    gradientBg: "from-amber-600/10 via-slate-900 to-transparent",
    stats: [
      { label: "Table Turnaround", value: "+38%", hint: "Faster table ordering & billing" },
      { label: "Kitchen Sync", value: "<1.2s", hint: "From click to kitchen printer ticket" },
      { label: "Average Check Size", value: "+26%", hint: "Via intelligent upsells & add-ons" },
      { label: "POS Reliability", value: "99.98%", hint: "Offline fallback resilience" },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "WebSocket KDS",
      "Paystack & MoMo",
      "PostgreSQL",
      "ESC/POS Thermal Printing",
      "Tailwind CSS v4",
    ],
    keyFeatures: [
      "Instant dual fulfillment: Delivery GPS tracking or Dine-in Table QR contactless orders",
      "Interactive dish customizer with real-time portion sizing, spice scale, and gourmet add-ons",
      "Automated Kitchen Display System (KDS) with live 4-stage cooking progression updates",
      "Integrated staff gratuity / tip calculator and split-bill payment capabilities",
      "Instant automated thermal receipt printing and digital SMS/WhatsApp order confirmations",
    ],
    architecturePoints: [
      {
        title: "Sub-Second WebSocket POS Link",
        desc: "Orders placed by guests trigger kitchen display tickets in under 500ms over encrypted WebSockets.",
      },
      {
        title: "Dynamic Table QR Context",
        desc: "QR codes encode table identifiers, allowing diners to re-order and settle bills without waiting for waitstaff.",
      },
      {
        title: "Multi-Zone Kitchen Routing",
        desc: "Automatically splits beverage items to the bar and hot dishes to the chef grill stations.",
      },
    ],
    lighthouseScores: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 99,
    },
    previewType: "restaurant",
  },
  {
    id: "apex-wallet",
    number: "03",
    title: "ApexPay Neo-Wallet & Virtual Card Suite",
    badge: "Neo-Banking & Mobile Wallets",
    category: "Mobile Wallets",
    tagline: "Cross-Platform Digital Banking, 3D Virtual Cards & Instant P2P Settlement",
    description:
      "A next-generation mobile fintech neo-wallet featuring 3D interactive virtual debit cards, biometric FaceID authorization, multi-currency wallets, and instant zero-fee P2P transfers.",
    longDescription:
      "Crafted to provide a banking experience rivaling modern global neo-banks like Revolut and Cash App. Users can spin up virtual Visa/Mastercard cards on demand, freeze cards with a tap, switch between GHS, USD, and GBP with real-time FX conversions, and execute sub-second P2P transfers to any mobile money wallet.",
    accentColor: "#6366f1",
    glowColor: "rgba(99, 102, 241, 0.12)",
    badgeBg: "bg-indigo-500/10 text-indigo-200 border-indigo-500/20",
    badgeBorder: "border-indigo-500/30",
    gradientBg: "from-indigo-600/10 via-slate-900 to-transparent",
    stats: [
      { label: "P2P Settlement", value: "<1.0s", hint: "Instant wallet-to-wallet transfer" },
      { label: "Card Generation", value: "Instant", hint: "Dynamic 3D virtual Visa card" },
      { label: "Fraud Protection", value: "Bank-Grade", hint: "Dynamic CVV & Biometric FaceID" },
      { label: "User Retention", value: "94.2%", hint: "High recurring financial activity" },
    ],
    techStack: [
      "React Native",
      "Flutter Bridge",
      "Node.js Microservices",
      "PCI-DSS Virtual Cards",
      "Biometric Touch/FaceID",
      "PostgreSQL",
      "Redis Ledger",
    ],
    keyFeatures: [
      "Interactive 3D virtual debit card with live flip to reveal CVV and 1-tap card freeze protection",
      "Multi-currency financial ledger supporting GHS, USD, and GBP with automated rate locks",
      "Instant P2P send to phone contacts with simulated biometric FaceID confirmation",
      "Seamless Mobile Money (MTN, Telecel, AT) top-ups and bank wire integrations",
      "Real-time expense categorization and visual analytics for personal spending",
    ],
    architecturePoints: [
      {
        title: "Atomic Dual-Entry Ledger",
        desc: "Financial transfers execute within double-entry PostgreSQL transactions guaranteeing zero balance discrepancy.",
      },
      {
        title: "Dynamic Tokenized CVV",
        desc: "Card security codes regenerate on a timed cryptographic rotation to prevent replay attacks.",
      },
      {
        title: "Encrypted Hardware KeyStore",
        desc: "Biometric authentication hooks into native iOS Secure Enclave and Android Hardware KeyMaster.",
      },
    ],
    lighthouseScores: {
      performance: 99,
      accessibility: 100,
      bestPractices: 100,
      seo: 98,
    },
    previewType: "wallet",
  },
  {
    id: "omni-core",
    number: "04",
    title: "OmniCore Enterprise Cloud ERP & SaaS",
    badge: "Enterprise Operations & SaaS",
    category: "Enterprise SaaS",
    tagline: "Real-Time Telemetry, RBAC Governance & Automated Workflow Architecture",
    description:
      "A mission-critical enterprise operating system unifying distributed supply chains, multi-location inventory, RBAC permission matrices, and automated financial analytics.",
    longDescription:
      "Designed for enterprises outgrowing spreadsheets and disjointed tools. OmniCore delivers microsecond-level state synchronization across branches, visual drag-and-drop order pipelines, automated PDF invoicing, and comprehensive audit trails compliant with data governance standards.",
    accentColor: "#0284c7",
    glowColor: "rgba(2, 132, 199, 0.12)",
    badgeBg: "bg-sky-500/10 text-sky-200 border-sky-500/20",
    badgeBorder: "border-sky-500/30",
    gradientBg: "from-sky-600/10 via-slate-900 to-transparent",
    stats: [
      { label: "Admin Time Saved", value: "85%", hint: "Automated manual reconciliations" },
      { label: "Query Latency", value: "<85ms", hint: "Optimized database read replicas" },
      { label: "Branch Sync", value: "50+ Sites", hint: "Zero-conflict distributed states" },
      { label: "Audit Compliance", value: "100%", hint: "Immutable cryptographic event logs" },
    ],
    techStack: [
      "React 19",
      "Next.js Server Actions",
      "PostgreSQL",
      "Docker Microservices",
      "Redis Caching",
      "Recharts",
      "Zod Validation",
      "PDF-Lib",
    ],
    keyFeatures: [
      "Dynamic Role-Based Access Control (RBAC) with granular permissions (Admin, Manager, Auditor)",
      "Real-time visual order fulfillment pipeline with interactive status milestones",
      "Executive telemetry dashboard featuring live revenue velocity and margin forecasts",
      "Automated Excel / CSV / PDF export engine for instant management reports",
      "Real-time webhook and notification hub alerting staff to stock anomalies and pending approvals",
    ],
    architecturePoints: [
      {
        title: "Atomic State Transitions",
        desc: "PostgreSQL transactions ensure multi-branch inventory counters remain strictly synchronized.",
      },
      {
        title: "Cryptographic Audit Ledger",
        desc: "Every critical balance adjustment or permission alteration is logged with IP, timestamp, and user token.",
      },
      {
        title: "Edge Cached Telemetry",
        desc: "High-volume read queries are cached at the edge to preserve sub-100ms dashboard responsiveness.",
      },
    ],
    lighthouseScores: {
      performance: 98,
      accessibility: 100,
      bestPractices: 100,
      seo: 99,
    },
    previewType: "erp",
  },
  {
    id: "aura-luxe",
    number: "05",
    title: "Aura Luxe Next-Gen Headless E-Commerce",
    badge: "Modern Web Platform & D2C",
    category: "E-Commerce",
    tagline: "Ultra-Fluid 60FPS Headless Commerce with Ambient Micro-Interactions",
    description:
      "A luxury direct-to-consumer storefront engineered for maximum conversion. Features 60fps dynamic product transitions, interactive variant swatches, and an instant checkout flyout.",
    longDescription:
      "Crafted for high-end consumer brands where aesthetic prestige meets frictionless conversion. Built on modern headless architecture with sub-400ms page transitions, dynamic 3D-tilt product cards, reactive stock indicators, and instant Mobile Money / Card checkout.",
    accentColor: "#cbd5e1",
    glowColor: "rgba(203, 213, 225, 0.10)",
    badgeBg: "bg-white/10 text-slate-200 border-white/15",
    badgeBorder: "border-white/20",
    gradientBg: "from-white/5 via-slate-900 to-transparent",
    stats: [
      { label: "Mobile Conversion", value: "+340%", hint: "Compared to standard Shopify" },
      { label: "LCP Load Time", value: "0.4s", hint: "Largest Contentful Paint speed" },
      { label: "Perceived Latency", value: "0.0s", hint: "Instant optimistic state updates" },
      { label: "Lighthouse Score", value: "100/100", hint: "Flawless Core Web Vitals" },
    ],
    techStack: [
      "Next.js 16",
      "React 19",
      "Tailwind CSS v4",
      "Headless API",
      "Web Audio Clicks",
      "Edge Image CDN",
      "Zustand State",
      "Paystack Checkout",
    ],
    keyFeatures: [
      "Ultra-fluid 60fps ambient lighting and interactive 3D-tilt product visualizer",
      "Dynamic color variant switcher with instant live stock updates and price adaptation",
      "Optimistic slide-out shopping bag with instant coupon code application and real-time total",
      "One-click Paystack & Mobile Money checkout modal eliminating cart abandonment",
      "Comprehensive Core Web Vitals optimization guaranteeing 100/100 Google speed rating",
    ],
    architecturePoints: [
      {
        title: "Zero-Layout-Shift (CLS 0.00)",
        desc: "Pre-allocated aspect ratios and responsive image sets ensure instantaneous visual stability.",
      },
      {
        title: "Optimistic Cart Synchronizer",
        desc: "Cart mutations register immediately on the client while silently validating server-side inventory.",
      },
      {
        title: "Localized Payment Gateways",
        desc: "Integrates direct Mobile Money (MTN, Telecel, AT) and international Visa/Mastercard processing.",
      },
    ],
    lighthouseScores: {
      performance: 100,
      accessibility: 100,
      bestPractices: 100,
      seo: 100,
    },
    previewType: "ecommerce",
  },
  {
    id: "pulse-health",
    number: "06",
    title: "PulseHealth AI Telemedicine & Mobile Suite",
    badge: "Cross-Platform Mobile App (iOS / Android)",
    category: "Mobile Apps",
    tagline: "Cross-Platform Clinical Telemedicine, Live Biometrics & Encrypted Digital Rx",
    description:
      "A clinical-grade cross-platform mobile suite enabling instantaneous patient-to-specialist video consultations, live cardiac rhythm monitors, and scannable QR prescriptions.",
    longDescription:
      "Engineered to transform modern healthcare delivery across mobile devices. Patients can filter verified medical specialists by specialty, schedule real-time consultation slots with immediate SMS/WhatsApp reminders, view live biometric telemetry, and present tamper-proof cryptographic QR prescriptions at local pharmacies.",
    accentColor: "#059669",
    glowColor: "rgba(5, 150, 105, 0.12)",
    badgeBg: "bg-emerald-500/10 text-emerald-200 border-emerald-500/20",
    badgeBorder: "border-emerald-500/30",
    gradientBg: "from-emerald-600/10 via-slate-900 to-transparent",
    stats: [
      { label: "App Store Rating", value: "4.9 / 5.0", hint: "Verified patient satisfaction" },
      { label: "Consultations", value: "35K+", hint: "Completed digital sessions" },
      { label: "Security & Privacy", value: "100%", hint: "Data Protection Act 2012 (Act 843)" },
      { label: "Video Latency", value: "<150ms", hint: "WebRTC peer-to-peer streaming" },
    ],
    techStack: [
      "React Native",
      "Flutter",
      "WebRTC Engine",
      "Socket.io",
      "Node.js",
      "PostgreSQL",
      "Biometric Touch/FaceID",
      "Cloud KMS Encryption",
    ],
    keyFeatures: [
      "Interactive mobile consultation booking with calendar slot picker and instant confirmation",
      "Live patient vitals monitor featuring real-time animated ECG cardiac rhythm visualization",
      "Verified physician directory with specialty filters (Cardiology, Dermatology, Pediatrics, General)",
      "Tamper-proof digital prescription generator with scannable pharmaceutical QR verification",
      "End-to-end encrypted messaging, push notifications, and biometric authentication",
    ],
    architecturePoints: [
      {
        title: "WebRTC Peer-To-Peer Mesh",
        desc: "Streams ultra-low-latency, encrypted high-definition video consultations even on 3G/4G connections.",
      },
      {
        title: "Act 843 Health Data Compliance",
        desc: "All electronic medical records (EMR) are encrypted at rest with AES-256 and rotated KMS keys.",
      },
      {
        title: "Cross-Platform Codebase Parity",
        desc: "A single unified component architecture ensures 100% feature parity across iOS and Android.",
      },
    ],
    lighthouseScores: {
      performance: 99,
      accessibility: 100,
      bestPractices: 100,
      seo: 98,
    },
    previewType: "health",
  },
];
