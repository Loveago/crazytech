"use client";

import React, { useState } from "react";
import {
  BarChart3,
  Building2,
  CheckCircle2,
  Shield,
  Layers,
  ArrowUpRight,
  TrendingUp,
  Users,
  Clock,
  ChevronRight,
  Filter,
  FileSpreadsheet,
  Download,
  AlertCircle,
} from "lucide-react";

export function OmniCoreMockup({
  device = "desktop",
  isCompact = false,
}: {
  device?: "desktop" | "tablet" | "mobile";
  isCompact?: boolean;
}) {
  const [activeRole, setActiveRole] = useState<"Super Admin" | "Branch Lead" | "Auditor">("Super Admin");
  const [pipelineStep, setPipelineStep] = useState<number>(3);
  const [timeframe, setTimeframe] = useState<"24h" | "7d" | "30d">("7d");
  const isMobileFrame = device === "mobile";

  const steps = [
    { id: 1, name: "Intake", count: 18, status: "completed" },
    { id: 2, name: "Verification", count: 7, status: "completed" },
    { id: 3, name: "Fulfillment", count: 32, status: "current" },
    { id: 4, name: "Dispatched", count: 140, status: "upcoming" },
    { id: 5, name: "Audited", count: 894, status: "upcoming" },
  ];

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-[#0c0d12]/95 p-4 sm:p-6 text-zinc-100 shadow-2xl backdrop-blur-xl transition-all">
      {/* Top Bar with Role Switcher & System Telemetry */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 text-white">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-wide text-white">OmniCore Enterprise Suite</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-white/[0.06] px-2 py-0.5 text-[10px] font-medium text-zinc-300 border border-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Cluster Healthy
              </span>
            </div>
            <p className="text-xs text-zinc-400">Multi-tenant distributed state &amp; telemetry hub</p>
          </div>
        </div>

        {/* RBAC Role Switcher */}
        <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#08090d] p-1">
          {(["Super Admin", "Branch Lead", "Auditor"] as const).map((role) => (
            <button
              key={role}
              type="button"
              onClick={() => setActiveRole(role)}
              className={`rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
                activeRole === role
                  ? "bg-white text-zinc-950 shadow-sm"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </div>

      {/* KPI Highlight Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
        <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-3">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
            Total Revenue ({timeframe})
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-extrabold font-mono text-indigo-300">
              {timeframe === "24h" ? "GHS 38,420" : timeframe === "7d" ? "GHS 342,800" : "GHS 1,480,000"}
            </span>
            <span className="text-[11px] font-bold text-emerald-400 flex items-center">
              <TrendingUp className="h-3 w-3 mr-0.5" /> +18.4%
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-3">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
            Active Branches
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-extrabold font-mono text-white">52 Sites</span>
            <span className="text-[10px] text-slate-400">Sync: 12ms</span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-3">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
            API Throughput
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-extrabold font-mono text-cyan-300">1,840/s</span>
            <span className="text-[10px] text-emerald-400">0% error</span>
          </div>
        </div>

        <div className="rounded-xl border border-slate-800/80 bg-slate-900/50 p-3">
          <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
            Audit Integrity
          </span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg sm:text-xl font-extrabold font-mono text-emerald-400">100%</span>
            <span className="text-[10px] text-slate-400">ISO-Ready</span>
          </div>
        </div>
      </div>

      {/* Interactive Workflow Pipeline */}
      <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 mb-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5 text-indigo-400" /> Interactive Fulfillment Pipeline
          </span>
          <span className="text-[11px] text-indigo-400">Click a stage to simulate pipeline progression</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {steps.map((s) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setPipelineStep(s.id)}
              className={`flex flex-col text-left p-3 rounded-xl border transition-all ${
                pipelineStep === s.id
                  ? "border-indigo-400 bg-indigo-500/20 shadow-md shadow-indigo-500/20"
                  : pipelineStep > s.id
                  ? "border-emerald-500/40 bg-emerald-950/20 text-slate-300"
                  : "border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700"
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-[10px] font-mono text-slate-400 font-bold">0{s.id}</span>
                {pipelineStep > s.id ? (
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                ) : pipelineStep === s.id ? (
                  <span className="h-2 w-2 rounded-full bg-indigo-400 animate-ping" />
                ) : null}
              </div>
              <span className="text-xs font-bold text-white mb-0.5">{s.name}</span>
              <span className="text-[10px] font-mono text-slate-400">{s.count} items active</span>
            </button>
          ))}
        </div>
      </div>

      {/* Visual Chart Bars & Live Audit Log */}
      <div className={`grid grid-cols-1 ${isMobileFrame ? "" : "md:grid-cols-12"} gap-4`}>
        {/* Weekly Velocity bars */}
        <div className={`${isMobileFrame ? "w-full" : "md:col-span-7"} rounded-xl border border-slate-800/80 bg-slate-900/60 p-4`}>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Weekly Resource Allocation
            </span>
            <div className="flex gap-1 text-[10px]">
              {(["24h", "7d", "30d"] as const).map((tf) => (
                <button
                  key={tf}
                  onClick={() => setTimeframe(tf)}
                  className={`px-2 py-0.5 rounded ${
                    timeframe === tf ? "bg-indigo-500 text-white font-bold" : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tf}
                </button>
              ))}
            </div>
          </div>

          <div className="h-32 flex items-end gap-2 sm:gap-3 pt-4 border-b border-slate-800 pb-2">
            {[
              { day: "Mon", h: "60%", val: "42k" },
              { day: "Tue", h: "75%", val: "54k" },
              { day: "Wed", h: "90%", val: "68k" },
              { day: "Thu", h: "65%", val: "48k" },
              { day: "Fri", h: "100%", val: "82k" },
              { day: "Sat", h: "80%", val: "61k" },
              { day: "Sun", h: "50%", val: "35k" },
            ].map((bar) => (
              <div key={bar.day} className="flex-1 flex flex-col items-center gap-1.5 group">
                <span className="text-[9px] font-mono text-indigo-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  {bar.val}
                </span>
                <div className="w-full bg-slate-800 rounded-t-sm h-full flex items-end">
                  <div
                    style={{ height: bar.h }}
                    className="w-full rounded-t-sm bg-gradient-to-t from-indigo-600 to-indigo-400 group-hover:from-indigo-500 group-hover:to-cyan-400 transition-all duration-300"
                  />
                </div>
                <span className="text-[10px] text-slate-400 font-mono">{bar.day}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Live Immutable Audit Stream */}
        <div className={`${isMobileFrame ? "w-full" : "md:col-span-5"} rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 space-y-2.5`}>
          <div className="flex items-center justify-between border-b border-slate-800 pb-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
              <Shield className="h-3.5 w-3.5 text-indigo-400" /> Immutable Event Audit
            </span>
            <span className="text-[10px] text-emerald-400 font-mono">Encrypted</span>
          </div>

          <div className="space-y-2 text-[11px] font-mono">
            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800/80">
              <div className="flex items-center justify-between text-slate-400 mb-0.5">
                <span className="text-indigo-300 font-semibold">STAGE_TRANSITION</span>
                <span>Just now</span>
              </div>
              <p className="text-slate-300">Order batch #3094 promoted to Step 0{pipelineStep}</p>
            </div>

            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800/80">
              <div className="flex items-center justify-between text-slate-400 mb-0.5">
                <span className="text-emerald-400 font-semibold">INVOICE_GENERATED</span>
                <span>2m ago</span>
              </div>
              <p className="text-slate-300">PDF sealed: INV-2026-9481 (GHS 12,400)</p>
            </div>

            <div className="p-2 rounded-lg bg-slate-950 border border-slate-800/80">
              <div className="flex items-center justify-between text-slate-400 mb-0.5">
                <span className="text-cyan-400 font-semibold">BRANCH_SYNC_OK</span>
                <span>5m ago</span>
              </div>
              <p className="text-slate-300">Kumasi Central Node ack 128 items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
