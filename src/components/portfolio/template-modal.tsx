"use client";

import React, { useEffect } from "react";
import {
  X,
  CheckCircle2,
  Cpu,
  Layers,
  Shield,
  Gauge,
  Sparkles,
  ArrowRight,
  Send,
  Code2,
  ExternalLink,
  Zap,
} from "lucide-react";
import { TemplateData } from "./templates-data";

interface TemplateModalProps {
  template: TemplateData | null;
  onClose: () => void;
  onRequestQuote: (templateTitle: string) => void;
}

export function TemplateModal({ template, onClose, onRequestQuote }: TemplateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (template) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [template, onClose]);

  if (!template) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border border-white/10 bg-[#0c0e14] text-zinc-100 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/[0.08] p-5 sm:p-6 bg-[#08090d]">
          <div className="flex items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium border ${template.badgeBg}`}
            >
              {template.badge}
            </span>
            <span className="text-xs font-mono text-zinc-400">Template {template.number}</span>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-white/10 bg-white/[0.04] p-2 text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 scrollbar-thin">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">{template.title}</h3>
            <p className="text-sm sm:text-base text-zinc-300 mt-2 font-medium">
              {template.tagline}
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 mt-3 leading-relaxed font-normal">
              {template.longDescription}
            </p>
          </div>

          {/* Lighthouse Scorecard */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#08090d] p-4 sm:p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <Gauge className="h-4 w-4 text-emerald-400" /> Google Lighthouse Audit Scores
              </span>
              <span className="text-[11px] font-mono text-emerald-400">100% Core Web Vitals Pass</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              {[
                { label: "Performance", score: template.lighthouseScores.performance },
                { label: "Accessibility", score: template.lighthouseScores.accessibility },
                { label: "Best Practices", score: template.lighthouseScores.bestPractices },
                { label: "SEO Rating", score: template.lighthouseScores.seo },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-white/[0.06] bg-[#0c0e14] p-3">
                  <div className="text-2xl font-black font-mono text-white mb-1">
                    {item.score}
                  </div>
                  <span className="text-[11px] font-medium text-zinc-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
              <Layers className="h-4 w-4 text-zinc-400" /> Enterprise Architecture &amp; Engineering
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {template.architecturePoints.map((arch) => (
                <div
                  key={arch.title}
                  className="rounded-xl border border-white/[0.08] bg-[#08090d] p-4 space-y-1.5"
                >
                  <span className="text-xs font-bold text-white block">{arch.title}</span>
                  <p className="text-xs text-zinc-400 leading-relaxed font-normal">{arch.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables Included */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#08090d] p-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
              <Shield className="h-4 w-4 text-zinc-400" /> Full Deliverables Included
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {template.keyFeatures.map((feat) => (
                <div key={feat} className="flex items-start gap-2 text-zinc-300">
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-zinc-400 block">
              Core Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {template.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-white/[0.08] bg-[#08090d] px-2.5 py-1 text-xs font-mono font-medium text-zinc-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/[0.08] bg-[#08090d] p-5">
          <div className="text-xs text-zinc-400 text-center sm:text-left">
            <span>Ready to launch a system like this for your business?</span>
            <span className="block font-medium text-zinc-200">
              Estimated Delivery: 2 to 4 weeks with full source code ownership.
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none rounded-xl border border-white/10 hover:bg-white/[0.06] px-4 py-2.5 text-xs font-semibold text-zinc-300 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onRequestQuote(template.title);
                onClose();
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-white hover:bg-zinc-200 px-5 py-2.5 text-xs font-bold text-zinc-950 shadow-md transition-all active:scale-95"
            >
              <Send className="h-4 w-4" />
              <span>Request Similar Project</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
