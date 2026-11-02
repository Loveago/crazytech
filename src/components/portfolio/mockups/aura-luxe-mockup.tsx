"use client";

import React, { useState } from "react";
import {
  ShoppingBag,
  Sparkles,
  Star,
  Check,
  Plus,
  Minus,
  Trash2,
  ArrowRight,
  ShieldCheck,
  CreditCard,
  Zap,
} from "lucide-react";

interface Variant {
  name: string;
  colorHex: string;
  priceUSD: number;
  priceGHS: number;
  stock: number;
  sku: string;
}

export function AuraLuxeMockup({
  device = "desktop",
  isCompact = false,
}: {
  device?: "desktop" | "tablet" | "mobile";
  isCompact?: boolean;
}) {
  const variants: Variant[] = [
    {
      name: "Void Obsidian",
      colorHex: "#18181b",
      priceUSD: 490,
      priceGHS: 6370,
      stock: 4,
      sku: "AURA-OB-01",
    },
    {
      name: "Cyber Cyan",
      colorHex: "#06b6d4",
      priceUSD: 520,
      priceGHS: 6760,
      stock: 7,
      sku: "AURA-CC-02",
    },
    {
      name: "Imperial Rose",
      colorHex: "#ec4899",
      priceUSD: 540,
      priceGHS: 7020,
      stock: 2,
      sku: "AURA-IR-03",
    },
    {
      name: "Emerald Aurum",
      colorHex: "#10b981",
      priceUSD: 530,
      priceGHS: 6890,
      stock: 9,
      sku: "AURA-EA-04",
    },
  ];

  const [activeVariant, setActiveVariant] = useState<Variant>(variants[0]);
  const [cartOpen, setCartOpen] = useState<boolean>(false);
  const [cartCount, setCartCount] = useState<number>(1);
  const [discountApplied, setDiscountApplied] = useState<boolean>(false);
  const [couponInput, setCouponInput] = useState<string>("CRAZYVIP");
  const [isCheckingOut, setIsCheckingOut] = useState<boolean>(false);
  const [checkoutDone, setCheckoutDone] = useState<boolean>(false);

  const subtotal = activeVariant.priceGHS * cartCount;
  const discount = discountApplied ? subtotal * 0.15 : 0;
  const grandTotal = subtotal - discount;

  const handleAddToCart = () => {
    setCartOpen(true);
    setCheckoutDone(false);
  };

  const handleSimulateCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setCheckoutDone(true);
      setTimeout(() => {
        setCheckoutDone(false);
        setCartOpen(false);
      }, 2500);
    }, 1500);
  };

  return (
    <div className="relative w-full rounded-2xl border border-pink-500/30 bg-slate-950/90 p-4 sm:p-6 text-slate-100 shadow-2xl backdrop-blur-xl transition-all overflow-hidden">
      {/* Top Header */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-pink-500/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/20 border border-pink-500/40 text-pink-400">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-wide text-white">Aura Luxe Headless Experience</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-pink-500/20 px-2 py-0.5 text-[10px] font-semibold text-pink-300 border border-pink-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-pink-400 animate-pulse" /> 60 FPS Fluid
              </span>
            </div>
            <p className="text-xs text-slate-400">0.4s Largest Contentful Paint with sub-second checkout</p>
          </div>
        </div>

        {/* View Cart Button */}
        <button
          onClick={() => setCartOpen((prev) => !prev)}
          className="relative flex items-center gap-2 rounded-xl border border-pink-500/30 bg-slate-900/90 hover:bg-slate-800 px-3.5 py-2 text-xs font-bold text-pink-300 transition-all shadow-md"
        >
          <ShoppingBag className="h-4 w-4" />
          <span>Shopping Bag</span>
          {cartCount > 0 && (
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-pink-500 text-[10px] font-extrabold text-slate-950">
              {cartCount}
            </span>
          )}
        </button>
      </div>

      <div className={`grid grid-cols-1 ${device === "mobile" ? "" : "lg:grid-cols-12"} gap-6 items-center`}>
        {/* Product Visual Showcase with Ambient Lighting */}
        <div className={`${device === "mobile" ? "w-full" : "lg:col-span-6"} relative flex items-center justify-center`}>
          <div
            className="absolute inset-0 rounded-3xl blur-3xl opacity-30 transition-all duration-700 pointer-events-none"
            style={{ backgroundColor: activeVariant.colorHex }}
          />

          <div className="relative w-full max-w-sm rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950 p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                <Star className="h-3 w-3 fill-amber-400" /> 4.98 (248 reviews)
              </span>
              <span className="text-[10px] font-mono text-slate-400">{activeVariant.sku}</span>
            </div>

            {/* Simulated 3D Headset / Luxury Device */}
            <div className="relative h-44 w-full flex items-center justify-center overflow-hidden rounded-xl bg-slate-950/70 border border-slate-800/80 group">
              <div
                className="h-28 w-28 rounded-full border-4 transition-all duration-500 shadow-2xl flex items-center justify-center"
                style={{
                  borderColor: activeVariant.colorHex,
                  boxShadow: `0 0 35px ${activeVariant.colorHex}66`,
                }}
              >
                <div
                  className="h-20 w-20 rounded-full transition-all duration-500 flex items-center justify-center text-xs font-mono font-bold text-white shadow-inner"
                  style={{ backgroundColor: activeVariant.colorHex }}
                >
                  60 FPS
                </div>
              </div>
            </div>

            {/* Color Swatches */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <span className="block text-[11px] text-slate-400">Selected Finish</span>
                <span className="text-xs font-bold text-white">{activeVariant.name}</span>
              </div>
              <div className="flex items-center gap-2">
                {variants.map((v) => (
                  <button
                    key={v.name}
                    type="button"
                    onClick={() => setActiveVariant(v)}
                    title={v.name}
                    className={`h-6 w-6 rounded-full border-2 transition-transform hover:scale-110 ${
                      activeVariant.name === v.name ? "ring-2 ring-pink-400 scale-110" : "border-slate-700"
                    }`}
                    style={{ backgroundColor: v.colorHex }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Details & Fast Cart Trigger */}
        <div className={`${device === "mobile" ? "w-full" : "lg:col-span-6"} space-y-4`}>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-2 py-0.5 rounded border border-pink-500/20">
                Autumn Edition
              </span>
              <span className="text-xs text-emerald-400 font-medium">In Stock: {activeVariant.stock} units</span>
            </div>
            <h4 className="text-xl sm:text-2xl font-extrabold text-white">Aura Kinetic Acoustic Pro</h4>
            <p className="text-xs text-slate-400 mt-1">
              Engineered with custom beryllium acoustic drivers, active spatial damping, and instant MoMo checkout.
            </p>
          </div>

          <div className="flex items-baseline gap-3">
            <span className="text-2xl sm:text-3xl font-black font-mono text-pink-300">
              GHS {activeVariant.priceGHS.toLocaleString()}
            </span>
            <span className="text-sm font-mono text-slate-500 line-through">
              GHS {(activeVariant.priceGHS * 1.25).toFixed(0)}
            </span>
            <span className="text-xs font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Save 20%
            </span>
          </div>

          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5">
              <span className="block text-[10px] text-slate-400 uppercase font-bold">Delivery Speed</span>
              <span className="font-semibold text-slate-200">Express Same-Day</span>
            </div>
            <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5">
              <span className="block text-[10px] text-slate-400 uppercase font-bold">Warranty</span>
              <span className="font-semibold text-slate-200">2-Year Replacement</span>
            </div>
          </div>

          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center rounded-xl border border-slate-800 bg-slate-900 px-2 py-1">
              <button
                type="button"
                onClick={() => setCartCount((c) => Math.max(1, c - 1))}
                className="p-1 text-slate-400 hover:text-white"
              >
                <Minus className="h-3.5 w-3.5" />
              </button>
              <span className="w-8 text-center font-mono font-bold text-sm">{cartCount}</span>
              <button
                type="button"
                onClick={() => setCartCount((c) => Math.min(activeVariant.stock, c + 1))}
                className="p-1 text-slate-400 hover:text-white"
              >
                <Plus className="h-3.5 w-3.5" />
              </button>
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 py-3 px-4 font-bold text-sm text-slate-950 shadow-lg shadow-pink-500/25 transition-all active:scale-[0.99]"
            >
              <ShoppingBag className="h-4 w-4" />
              <span>Add to Bag — GHS {subtotal.toLocaleString()}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Slide-Out Bag Modal / Drawer Simulation */}
      {cartOpen && (
        <div className="absolute inset-0 z-30 flex justify-end bg-slate-950/80 backdrop-blur-md transition-all">
          <div className="w-full max-w-md h-full bg-slate-900 border-l border-pink-500/30 p-5 flex flex-col justify-between shadow-2xl">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="font-bold text-sm text-white flex items-center gap-2">
                  <ShoppingBag className="h-4 w-4 text-pink-400" /> Your Shopping Bag ({cartCount})
                </span>
                <button
                  type="button"
                  onClick={() => setCartOpen(false)}
                  className="text-xs text-slate-400 hover:text-white p-1"
                >
                  ✕ Close
                </button>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950 p-3">
                <div
                  className="h-12 w-12 rounded-lg flex items-center justify-center font-bold text-xs"
                  style={{ backgroundColor: activeVariant.colorHex }}
                >
                  PRO
                </div>
                <div className="flex-1">
                  <span className="block text-xs font-bold text-white">Aura Kinetic Acoustic Pro</span>
                  <span className="block text-[11px] text-slate-400">{activeVariant.name} • Qty: {cartCount}</span>
                </div>
                <span className="font-mono text-xs font-bold text-pink-300">
                  GHS {subtotal.toLocaleString()}
                </span>
              </div>

              {/* Coupon Bar */}
              <div className="mt-4 rounded-xl border border-slate-800 bg-slate-950 p-3">
                <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                  Promo / Reseller Code
                </label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponInput}
                    onChange={(e) => setCouponInput(e.target.value)}
                    className="flex-1 rounded-lg border border-slate-800 bg-slate-900 px-2.5 py-1.5 text-xs font-mono uppercase text-pink-300 focus:outline-none focus:border-pink-500"
                  />
                  <button
                    type="button"
                    onClick={() => setDiscountApplied(true)}
                    className="rounded-lg bg-pink-500/20 text-pink-300 hover:bg-pink-500/30 px-3 py-1 text-xs font-bold border border-pink-500/40"
                  >
                    {discountApplied ? "Applied ✓" : "Apply"}
                  </button>
                </div>
                {discountApplied && (
                  <p className="text-[10px] text-emerald-400 mt-1 font-semibold">
                    15% VIP discount applied: -GHS {discount.toFixed(2)}
                  </p>
                )}
              </div>
            </div>

            {/* Checkout Actions */}
            <div className="border-t border-slate-800 pt-4 space-y-3">
              <div className="space-y-1 text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Subtotal</span>
                  <span className="font-mono">GHS {subtotal.toLocaleString()}</span>
                </div>
                {discountApplied && (
                  <div className="flex justify-between text-emerald-400 font-semibold">
                    <span>Discount</span>
                    <span className="font-mono">-GHS {discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-extrabold text-white pt-1 border-t border-slate-800">
                  <span>Estimated Total</span>
                  <span className="font-mono text-pink-300">GHS {grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleSimulateCheckout}
                disabled={isCheckingOut || checkoutDone}
                className={`w-full flex items-center justify-center gap-2 rounded-xl py-3 font-bold text-xs transition-all ${
                  checkoutDone
                    ? "bg-emerald-500 text-slate-950"
                    : "bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-slate-950 shadow-lg shadow-pink-500/30"
                }`}
              >
                {isCheckingOut ? (
                  <span>Processing Paystack MoMo Gateway...</span>
                ) : checkoutDone ? (
                  <span>Payment Verified! Receipt Dispatched ✓</span>
                ) : (
                  <>
                    <CreditCard className="h-4 w-4" />
                    <span>Instant Paystack & MoMo Checkout</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
