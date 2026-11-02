"use client";

import React, { useEffect, useRef } from "react";

export function InteractiveCanvasBg() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      containerRef.current.style.setProperty("--mouse-x", `${x}px`);
      containerRef.current.style.setProperty("--mouse-y", `${y}px`);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      style={
        {
          "--mouse-x": "50vw",
          "--mouse-y": "30vh",
        } as React.CSSProperties
      }
      aria-hidden="true"
    >
      {/* Subtle Architectural Dot Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.14] dark:opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.45) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 80%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 30%, black 20%, transparent 80%)",
        }}
      />

      {/* Primary Top Architectural Light Wash (Single cohesive deep slate-blue glow) */}
      <div
        className="absolute -top-[25%] left-1/2 -translate-x-1/2 h-[680px] w-[1100px] rounded-full opacity-60"
        style={{
          background: "radial-gradient(ellipse 60% 45% at 50% 40%, rgba(59, 130, 246, 0.12), rgba(15, 23, 42, 0))",
          filter: "blur(70px)",
        }}
      />

      {/* Interactive Cursor Ambient Glow (Smoothly follows cursor with subtle restraint) */}
      <div
        className="absolute h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 transition-transform duration-300 ease-out"
        style={{
          left: "var(--mouse-x)",
          top: "var(--mouse-y)",
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.10) 0%, transparent 65%)",
          filter: "blur(50px)",
        }}
      />
    </div>
  );
}
