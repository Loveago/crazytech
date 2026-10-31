"use client";

import React, { useState, useEffect } from "react";
import {
  MessageCircle,
  Calculator,
  Layers,
  ArrowUp,
  Sparkles,
  PhoneCall,
} from "lucide-react";

export function FloatingQuickDock() {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-1.5 sm:gap-2 rounded-2xl border border-slate-700/80 bg-slate-950/90 p-1.5 sm:p-2 shadow-2xl backdrop-blur-xl">
        {/* Availability Badge */}
        <div className="hidden md:flex items-center gap-2 rounded-xl bg-slate-900/80 px-3 py-1.5 text-[11px] font-semibold text-slate-300 border border-slate-800">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Available for New Projects</span>
        </div>

        {/* Templates Jump */}
        <button
          type="button"
          onClick={() => scrollToSection("showcase")}
          className="flex items-center gap-1.5 rounded-xl px-2.5 sm:px-3 py-1.5 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
        >
          <Layers className="h-3.5 w-3.5 text-cyan-400" />
          <span className="hidden sm:inline">Templates</span>
        </button>

        {/* Estimator Jump */}
        <button
          type="button"
          onClick={() => scrollToSection("estimator")}
          className="flex items-center gap-1.5 rounded-xl px-2.5 sm:px-3 py-1.5 text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors"
        >
          <Calculator className="h-3.5 w-3.5 text-indigo-400" />
          <span className="hidden sm:inline">Estimator</span>
        </button>

        {/* WhatsApp Direct */}
        <a
          href="https://wa.me/233507904981"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 px-3 py-1.5 text-xs font-extrabold text-slate-950 shadow-md shadow-emerald-500/20 transition-all active:scale-95"
        >
          <MessageCircle className="h-3.5 w-3.5" />
          <span>Chat WhatsApp</span>
        </a>

        {/* Back to top */}
        <button
          type="button"
          onClick={scrollToTop}
          title="Back to Top"
          className="rounded-xl border border-slate-800 bg-slate-900/80 p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
