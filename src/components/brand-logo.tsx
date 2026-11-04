"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface BrandProps {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  showTagline?: boolean;
  href?: string;
  variant?: "default" | "dark" | "light";
  taglineClassName?: string;
}

/**
 * Crazy Tech Enterprise Futuristic Monogram Mark
 * Precision chrome-beveled octagonal "C" with glowing electric cyan circuit traces & terminals,
 * interlocking with a central chrome "T" with conduit glow and razor dagger tip.
 */
export function BrandMark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  variant?: "default" | "dark" | "light";
}) {
  const sizeMap = {
    xs: "h-6 w-6",
    sm: "h-8 w-8 sm:h-9 sm:w-9",
    md: "h-9 w-9 sm:h-10 sm:w-10",
    lg: "h-11 w-11 sm:h-12 sm:w-12",
    xl: "h-14 w-14 sm:h-16 sm:w-16",
  };

  const sizePixels = {
    xs: 24,
    sm: 34,
    md: 38,
    lg: 46,
    xl: 60,
  };

  const px = sizePixels[size];

  return (
    <div
      className={cn(
        "relative flex shrink-0 items-center justify-center transition-transform hover:scale-105 active:scale-95",
        sizeMap[size],
        className
      )}
      style={{ width: px, height: px, maxWidth: "100%" }}
      aria-label="Crazy Tech Enterprise"
    >
      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        width={px}
        height={px}
        style={{ width: px, height: px, maxWidth: "100%" }}
      >
        <defs>
          {/* Dark Obsidian Canvas Gradient */}
          <radialGradient id="ctBrandBgGrad" cx="50%" cy="48%" r="56%">
            <stop offset="0%" stopColor="#182230" />
            <stop offset="55%" stopColor="#101622" />
            <stop offset="100%" stopColor="#080c14" />
          </radialGradient>

          {/* Chrome Metallic Highlight */}
          <linearGradient id="ctBrandChrome" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f8fafc" />
            <stop offset="25%" stopColor="#94a3b8" />
            <stop offset="50%" stopColor="#ffffff" />
            <stop offset="75%" stopColor="#64748b" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>

          {/* Bevel specular rim */}
          <linearGradient id="ctBrandBevelLight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity={0.95} />
            <stop offset="100%" stopColor="#64748b" stopOpacity={0.3} />
          </linearGradient>

          {/* Electric Cyan Circuit Glow */}
          <linearGradient id="ctBrandCyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00f2fe" />
            <stop offset="50%" stopColor="#00d2ff" />
            <stop offset="100%" stopColor="#38bdf8" />
          </linearGradient>

          {/* Ambient Core Glow */}
          <radialGradient id="ctBrandCoreGlow" cx="50%" cy="46%" r="42%">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity={0.25} />
            <stop offset="100%" stopColor="#00e5ff" stopOpacity={0} />
          </radialGradient>

          {/* Subtle Outer Rim Border */}
          <linearGradient id="ctBrandRimGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.6} />
            <stop offset="50%" stopColor="#1e293b" stopOpacity={0.4} />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity={0.5} />
          </linearGradient>

          <filter id="ctNeonGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="0.65" result="glow" />
            <feMerge>
              <feMergeNode in="glow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Squircle Canvas Badge */}
        <rect width="100" height="100" rx="22" fill="url(#ctBrandBgGrad)" />
        <rect x="1" y="1" width="98" height="98" rx="21" stroke="url(#ctBrandRimGrad)" strokeWidth="1.2" />
        <circle cx="50" cy="46" r="36" fill="url(#ctBrandCoreGlow)" />

        {/* Outer Faceted C Shape with Chrome Bevel */}
        <path
          d="M 64 19
             L 36 19
             L 19 36
             L 19 62
             L 36 79
             L 58 79
             L 73 64
             L 64 55
             L 54 65
             L 40 65
             L 32 57
             L 32 41
             L 40 33
             L 59 33
             L 64 26
             Z"
          fill="#121824"
          stroke="url(#ctBrandChrome)"
          strokeWidth="2.6"
          strokeLinejoin="round"
        />

        {/* Chrome Specular Inner Rim */}
        <path
          d="M 62 20.5 L 36.5 20.5 L 20.5 36.5 L 20.5 61.5 L 36.5 77.5 L 57.5 77.5 L 71 64"
          fill="none"
          stroke="url(#ctBrandBevelLight)"
          strokeWidth="1"
          strokeLinecap="round"
        />

        {/* Glowing Cyan Circuit Traces inside C */}
        <g filter="url(#ctNeonGlow)">
          <path
            d="M 60 26 L 39 26 L 26 39 L 26 59 L 38 71 L 53 71 L 67 60"
            fill="none"
            stroke="url(#ctBrandCyanGlow)"
            strokeWidth="1.8"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Cyan Circuit Nodes / Terminals */}
          <circle cx="60" cy="26" r="2.2" fill="#00f2fe" />
          <circle cx="60" cy="26" r="1.1" fill="#ffffff" />

          <circle cx="48" cy="26" r="1.6" fill="#00f2fe" />
          <circle cx="48" cy="26" r="0.8" fill="#ffffff" />

          <circle cx="31" cy="34" r="1.6" fill="#00f2fe" />

          <circle cx="26" cy="49" r="2" fill="#00f2fe" />
          <circle cx="26" cy="49" r="1" fill="#ffffff" />

          <circle cx="31" cy="64" r="1.6" fill="#00f2fe" />

          <circle cx="48" cy="71" r="1.6" fill="#00f2fe" />
          <circle cx="48" cy="71" r="0.8" fill="#ffffff" />

          <circle cx="67" cy="60" r="2.2" fill="#00f2fe" />
          <circle cx="67" cy="60" r="1.1" fill="#ffffff" />
        </g>

        {/* Central T Symbol (Metallic Chrome with Dagger Point) */}
        {/* Top Crossbar of T */}
        <path
          d="M 42 34
             L 75 34
             L 69 41
             L 54 41
             L 42 34 Z"
          fill="#121824"
          stroke="url(#ctBrandChrome)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Crossbar Cyan Circuit Trace */}
        <g filter="url(#ctNeonGlow)">
          <path d="M 46 37.5 L 68 37.5" fill="none" stroke="url(#ctBrandCyanGlow)" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="67" cy="37.5" r="1.6" fill="#00f2fe" />
          <circle cx="67" cy="37.5" r="0.8" fill="#ffffff" />
        </g>

        {/* Vertical Dagger Stem of T */}
        <path
          d="M 47 41
             L 53 41
             L 53 73
             L 50 85
             L 47 73
             Z"
          fill="#121824"
          stroke="url(#ctBrandChrome)"
          strokeWidth="2.2"
          strokeLinejoin="round"
        />

        {/* Glowing Cyan Conduit Beam down the center of T */}
        <g filter="url(#ctNeonGlow)">
          <line x1="50" y1="41" x2="50" y2="78" stroke="url(#ctBrandCyanGlow)" strokeWidth="2" strokeLinecap="round" />
          <line x1="50" y1="41" x2="50" y2="77" stroke="#ffffff" strokeWidth="0.8" strokeLinecap="round" />
        </g>
      </svg>
    </div>
  );
}

/**
 * Full Horizontal Brand Logo (Freestanding Mark + "CrazyTech Enterprise" + Tagline)
 */
export function BrandLogo({
  className,
  size = "md",
  showTagline = true,
  href,
  taglineClassName,
}: BrandProps) {
  const textSize =
    size === "xl"
      ? "text-2xl sm:text-3xl"
      : size === "lg"
      ? "text-xl sm:text-2xl"
      : size === "md"
      ? "text-lg sm:text-xl"
      : size === "xs"
      ? "text-xs sm:text-sm"
      : "text-lg sm:text-xl";

  const taglineSize =
    size === "xl"
      ? "text-[10.5px]"
      : size === "lg"
      ? "text-[9.5px]"
      : size === "md"
      ? "text-[8.5px]"
      : size === "xs"
      ? "text-[6.5px]"
      : "text-[6.5px] sm:text-[8px]";

  const content = (
    <div
      className={cn(
        "inline-flex shrink-0 items-center gap-2 sm:gap-3 select-none",
        className
      )}
    >
      <BrandMark size={size} />
      <div className="flex flex-col justify-center min-w-0">
        <div className="flex items-center leading-none">
          <span className={cn("font-black tracking-[-0.035em] text-slate-900 dark:text-white", textSize)}>
            Crazy
          </span>
          <span
            className={cn(
              "ml-0.5 font-black tracking-[-0.035em] bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent",
              textSize
            )}
          >
            Tech
          </span>
        </div>
        {showTagline && (
          <span
            className={cn(
              "mt-0.5 font-bold uppercase tracking-[0.08em] sm:tracking-[0.16em] text-cyan-600 dark:text-cyan-400 block truncate max-w-[140px] xs:max-w-[170px] sm:max-w-none leading-none",
              taglineSize,
              taglineClassName
            )}
          >
            ENTERPRISE
          </span>
        )}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="inline-flex transition-transform hover:scale-[1.02] active:scale-[0.98]">
        {content}
      </Link>
    );
  }

  return content;
}
