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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col rounded-3xl border border-slate-700/80 bg-slate-900/95 text-slate-100 shadow-2xl shadow-cyan-500/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 p-5 sm:p-6 bg-slate-950/70">
          <div className="flex items-center gap-3">
            <span
              className={`rounded-full px-3 py-1 text-xs font-bold border ${template.badgeBg}`}
            >
              {template.badge}
            </span>
            <span className="text-xs font-mono text-slate-400">Template {template.number}</span>
          </div>

          <button
            onClick={onClose}
            className="rounded-xl border border-slate-700 bg-slate-800/80 p-2 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 scrollbar-thin">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">{template.title}</h3>
            <p className="text-sm sm:text-base text-slate-300 mt-2 font-medium">
              {template.tagline}
            </p>
            <p className="text-xs sm:text-sm text-slate-400 mt-3 leading-relaxed">
              {template.longDescription}
            </p>
          </div>

          {/* Lighthouse Scorecard */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
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
                <div key={item.label} className="rounded-xl border border-slate-800/90 bg-slate-900/60 p-3">
                  <div className="text-2xl font-black font-mono text-emerald-400 mb-1">
                    {item.score}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-300">{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Layers className="h-4 w-4 text-cyan-400" /> Enterprise Architecture & Engineering
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {template.architecturePoints.map((arch) => (
                <div
                  key={arch.title}
                  className="rounded-xl border border-slate-800 bg-slate-950/60 p-4 space-y-1.5"
                >
                  <span className="text-xs font-bold text-white block">{arch.title}</span>
                  <p className="text-xs text-slate-400 leading-relaxed">{arch.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Deliverables Included */}
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-2">
              <Shield className="h-4 w-4 text-indigo-400" /> Full Deliverables Included
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              {template.keyFeatures.map((feat) => (
                <div key={feat} className="flex items-start gap-2 text-slate-300">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack Badges */}
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block">
              Core Technologies Used
            </span>
            <div className="flex flex-wrap gap-2">
              {template.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1 text-xs font-mono font-medium text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-slate-800 bg-slate-950/80 p-5">
          <div className="text-xs text-slate-400 text-center sm:text-left">
            <span>Ready to launch a system like this for your business?</span>
            <span className="block font-semibold text-slate-200">
              Estimated Delivery: 2 to 4 weeks with full source code ownership.
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none rounded-xl border border-slate-700 hover:bg-slate-800 px-4 py-2.5 text-xs font-bold text-slate-300 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onRequestQuote(template.title);
                onClose();
              }}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 px-5 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all"
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
