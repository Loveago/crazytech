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
 * CrazyTech High-Energy Monogram Mark
 * Electric multi-hue "C" energy arc and precision chrome "T" element with a luminous cyan spark node.
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
      aria-label="CrazyTech"
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
          <linearGradient id="ctBrandRim" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06b6d4" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="ctBrandArc" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="35%" stopColor="#6366f1" />
            <stop offset="70%" stopColor="#8b5cf6" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
          <linearGradient id="ctBrandT" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#cbd5e1" />
          </linearGradient>
          <radialGradient id="ctBrandGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#6366f1" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Squircle Badge Container */}
        <rect width="100" height="100" rx="24" className="fill-[#070b14]" />
        <rect x="1" y="1" width="98" height="98" rx="23" stroke="url(#ctBrandRim)" strokeWidth="1.5" />
        <circle cx="50" cy="50" r="38" fill="url(#ctBrandGlow)" />

        {/* "C" Arc: Electric Multi-Hue Energy Curve */}
        <path
          d="M 75 25 A 34 34 0 1 0 75 75"
          fill="none"
          stroke="url(#ctBrandArc)"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* "T" Element: Refined Chrome/Silver with Precision Geometry */}
        <path
          d="M 42 38 L 84 38"
          fill="none"
          stroke="url(#ctBrandT)"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <path
          d="M 63 38 L 63 68"
          fill="none"
          stroke="url(#ctBrandT)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Electric Cyan Pulse Node */}
        <circle cx="63" cy="38" r="6" fill="#06b6d4" fillOpacity="0.4" />
        <circle cx="63" cy="38" r="4.2" fill="#22d3ee" />
        <circle cx="63" cy="38" r="1.8" fill="#ffffff" />
      </svg>
    </div>
  );
}

/**
 * Full Horizontal Brand Logo (Freestanding Mark + "CrazyTech" + "HIGH-SPEED TELECOM & AUTOMATION")
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
              "ml-0.5 font-black tracking-[-0.035em] bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent",
              textSize
            )}
          >
            Tech
          </span>
        </div>
        {showTagline && (
          <span
            className={cn(
              "mt-0.5 font-bold uppercase tracking-[0.05em] sm:tracking-[0.14em] text-indigo-600 dark:text-indigo-400 block truncate max-w-[140px] xs:max-w-[170px] sm:max-w-none leading-none",
              taglineSize,
              taglineClassName
            )}
          >
            Telecom &amp; Automation
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
