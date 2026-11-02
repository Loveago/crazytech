"use client";

import React, { useState } from "react";
import {
  UtensilsCrossed,
  ShoppingBag,
  Flame,
  Clock,
  Bike,
  QrCode,
  Plus,
  Minus,
  CheckCircle2,
  ChefHat,
  Sparkles,
  Star,
  MapPin,
  ChevronRight,
  Sliders,
  DollarSign,
  X,
  CreditCard,
  Check,
} from "lucide-react";

interface MenuItem {
  id: string;
  name: string;
  category: "Signatures" | "Grills" | "Bowls" | "Drinks";
  priceGHS: number;
  description: string;
  calories: string;
  tag: string;
  spicy: boolean;
  imageAccent: string;
}

const MENU: MenuItem[] = [
  {
    id: "dish-1",
    name: "Truffle Glaze Wagyu Burger",
    category: "Signatures",
    priceGHS: 145,
    description: "200g prime Wagyu patty, black truffle emulsion, smoked gouda, brioche bun.",
    calories: "680 kcal",
    tag: "Chef's Signature",
    spicy: false,
    imageAccent: "from-amber-500 to-orange-600",
  },
  {
    id: "dish-2",
    name: "Smoked Jollof & Charred Tiger Prawns",
    category: "Signatures",
    priceGHS: 160,
    description: "Firewood-infused Ghanaian jollof, jumbo garlic herb prawns, caramelized plantain.",
    calories: "620 kcal",
    tag: "Top Seller 🔥",
    spicy: true,
    imageAccent: "from-orange-500 to-red-600",
  },
  {
    id: "dish-3",
    name: "Peri-Peri Flame Grilled Half Chicken",
    category: "Grills",
    priceGHS: 120,
    description: "24-hr citrus & peri-peri marinade, slow-roasted over coals, tangy herb dip.",
    calories: "540 kcal",
    tag: "Wood Fired",
    spicy: true,
    imageAccent: "from-red-500 to-rose-600",
  },
  {
    id: "dish-4",
    name: "Avocado & Hibiscus Quinoa Bowl",
    category: "Bowls",
    priceGHS: 95,
    description: "Organic rainbow quinoa, hass avocado roses, pickled beets, wild sesame glaze.",
    calories: "410 kcal",
    tag: "Superfood",
    spicy: false,
    imageAccent: "from-emerald-500 to-teal-600",
  },
];

export function RestaurantMockup({
  device = "desktop",
  isCompact = false,
}: {
  device?: "desktop" | "tablet" | "mobile";
  isCompact?: boolean;
}) {
  const [orderType, setOrderType] = useState<"delivery" | "dinein">("delivery");
  const [activeCategory, setActiveCategory] = useState<string>("Signatures");
  const [selectedDish, setSelectedDish] = useState<MenuItem | null>(null);
  const [spiceLevel, setSpiceLevel] = useState<"Mild" | "Medium" | "Hot">("Medium");
  const [selectedAddons, setSelectedAddons] = useState<string[]>(["Truffle Mayo"]);
  const [cart, setCart] = useState<{ item: MenuItem; qty: number; spice: string }[]>([
    { item: MENU[1], qty: 1, spice: "Medium" },
  ]);
  const [tipPercent, setTipPercent] = useState<number>(10);
  const [isPlacingOrder, setIsPlacingOrder] = useState<boolean>(false);
  const [liveTrackerStage, setLiveTrackerStage] = useState<number>(0);
  const isMobileFrame = device === "mobile";

  const filteredMenu =
    activeCategory === "All" ? MENU : MENU.filter((m) => m.category === activeCategory);

  const subtotal = cart.reduce((acc, c) => acc + c.item.priceGHS * c.qty, 0);
  const deliveryFee = orderType === "delivery" ? 18 : 0;
  const tipAmount = Math.round(subtotal * (tipPercent / 100));
  const grandTotal = subtotal + deliveryFee + tipAmount;

  const handleAddToCart = (dish: MenuItem) => {
    setCart((prev) => {
      const existing = prev.find((c) => c.item.id === dish.id);
      if (existing) {
        return prev.map((c) => (c.item.id === dish.id ? { ...c, qty: c.qty + 1 } : c));
      }
      return [...prev, { item: dish, qty: 1, spice: spiceLevel }];
    });
    setSelectedDish(null);
  };

  const updateQty = (id: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((c) => {
          if (c.item.id === id) {
            const newQty = c.qty + delta;
            return newQty > 0 ? { ...c, qty: newQty } : null;
          }
          return c;
        })
        .filter(Boolean) as any
    );
  };

  const handlePlaceOrder = () => {
    if (cart.length === 0 || isPlacingOrder) return;
    setIsPlacingOrder(true);
    setLiveTrackerStage(1);

    // Simulate kitchen stages progression
    setTimeout(() => setLiveTrackerStage(2), 1400);
    setTimeout(() => setLiveTrackerStage(3), 2800);
    setTimeout(() => setLiveTrackerStage(4), 4200);
    setTimeout(() => {
      setIsPlacingOrder(false);
      setLiveTrackerStage(0);
    }, 6500);
  };

  return (
    <div className="relative w-full rounded-2xl border border-white/10 bg-[#0c0d12]/95 p-4 sm:p-6 text-zinc-100 shadow-2xl backdrop-blur-xl transition-all">
      {/* Header with Mode Switcher (Delivery vs Dine-In Table QR) */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-white/[0.08] pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 text-amber-400">
            <UtensilsCrossed className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-wide text-white">Savoria Gourmet Dining Engine</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-500/10 px-2 py-0.5 text-[10px] font-medium text-amber-300 border border-amber-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" /> POS &amp; Kitchen Live
              </span>
            </div>
            <p className="text-xs text-zinc-400">Instant digital ordering, table QR &amp; automated kitchen tickets</p>
          </div>
        </div>

        {/* Fulfillment Mode Toggle */}
        <div className="flex items-center gap-1 rounded-xl border border-white/10 bg-[#08090d] p-1">
          <button
            type="button"
            onClick={() => setOrderType("delivery")}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
              orderType === "delivery"
                ? "bg-white text-zinc-950 shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <Bike className="h-3.5 w-3.5" />
            <span>Delivery (28 min)</span>
          </button>

          <button
            type="button"
            onClick={() => setOrderType("dinein")}
            className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
              orderType === "dinein"
                ? "bg-white text-zinc-950 shadow-sm"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <QrCode className="h-3.5 w-3.5" />
            <span>Table #12 QR</span>
          </button>
        </div>
      </div>

      <div className={`grid grid-cols-1 ${isMobileFrame ? "" : "lg:grid-cols-12"} gap-5`}>
        {/* Left Column: Menu Items & Category Tabs */}
        <div className={`${isMobileFrame ? "w-full" : "lg:col-span-7"} space-y-4`}>
          {/* Category Filter Pills */}
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
            {["Signatures", "Grills", "Bowls"].map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`rounded-xl px-3 py-1.5 text-xs font-medium transition-all border ${
                  activeCategory === cat
                    ? "border-white/30 bg-white/[0.08] text-white"
                    : "border-white/[0.08] bg-[#090a0f] text-zinc-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {filteredMenu.map((dish) => (
              <div
                key={dish.id}
                className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-3.5 hover:border-amber-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">
                      {dish.tag}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400">{dish.calories}</span>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {dish.name}
                  </h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                    {dish.description}
                  </p>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="font-mono text-sm font-black text-amber-300">
                    GHS {dish.priceGHS.toFixed(2)}
                  </span>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(dish)}
                    className="flex items-center gap-1 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-2.5 py-1 text-xs transition-colors shadow-sm active:scale-95"
                  >
                    <Plus className="h-3 w-3 stroke-[3]" />
                    <span>Add</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Interactive Cart & Live Kitchen Telemetry */}
        <div className={`${isMobileFrame ? "w-full" : "lg:col-span-5"} space-y-4`}>
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <ShoppingBag className="h-3.5 w-3.5 text-amber-400" />
                <span>Active Order ({cart.reduce((a, b) => a + b.qty, 0)})</span>
              </span>
              <span className="text-[10px] font-mono text-emerald-400">
                {orderType === "delivery" ? "Delivery to East Legon" : "Dine-In • Table 12"}
              </span>
            </div>

            {/* Cart Items List */}
            <div className="mt-3 space-y-2 max-h-44 overflow-y-auto pr-1">
              {cart.length === 0 ? (
                <div className="text-center py-6 text-xs text-slate-500">
                  Your order is empty. Select a dish above.
                </div>
              ) : (
                cart.map((item) => (
                  <div
                    key={item.item.id}
                    className="flex items-center justify-between rounded-lg border border-slate-800/80 bg-slate-950/70 p-2 text-xs"
                  >
                    <div className="flex-1 pr-2">
                      <span className="font-semibold text-white block truncate">{item.item.name}</span>
                      <span className="text-[10px] text-amber-400">Spice: {item.spice}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="flex items-center rounded border border-slate-800 bg-slate-900">
                        <button
                          onClick={() => updateQty(item.item.id, -1)}
                          className="px-1.5 py-0.5 text-slate-400 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-1.5 font-mono text-xs">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.item.id, 1)}
                          className="px-1.5 py-0.5 text-slate-400 hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-mono font-bold text-amber-300 w-16 text-right">
                        GHS {(item.item.priceGHS * item.qty).toFixed(2)}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Tip Selector */}
            <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
              <span className="text-slate-400 text-[11px]">Staff Gratuity / Tip:</span>
              <div className="flex gap-1">
                {[0, 10, 15, 20].map((t) => (
                  <button
                    key={t}
                    type="button"
                    onClick={() => setTipPercent(t)}
                    className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold border transition-colors ${
                      tipPercent === t
                        ? "border-amber-400 bg-amber-500/20 text-amber-300"
                        : "border-slate-800 bg-slate-950 text-slate-400"
                    }`}
                  >
                    {t}%
                  </button>
                ))}
              </div>
            </div>

            {/* Cost Summary */}
            <div className="mt-3 pt-2 border-t border-slate-800/80 space-y-1 text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Subtotal</span>
                <span className="font-mono">GHS {subtotal.toFixed(2)}</span>
              </div>
              {orderType === "delivery" && (
                <div className="flex justify-between text-slate-400">
                  <span>Delivery Fee</span>
                  <span className="font-mono">GHS {deliveryFee.toFixed(2)}</span>
                </div>
              )}
              {tipAmount > 0 && (
                <div className="flex justify-between text-slate-400">
                  <span>Tip ({tipPercent}%)</span>
                  <span className="font-mono">GHS {tipAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between text-sm font-extrabold text-white pt-1 border-t border-slate-800">
                <span>Grand Total</span>
                <span className="font-mono text-amber-300">GHS {grandTotal.toFixed(2)}</span>
              </div>
            </div>

            {/* Place Order CTA */}
            <button
              type="button"
              onClick={handlePlaceOrder}
              disabled={isPlacingOrder || cart.length === 0}
              className={`w-full mt-4 flex items-center justify-center gap-2 rounded-xl py-2.5 font-bold text-xs transition-all ${
                isPlacingOrder
                  ? "bg-amber-400 text-zinc-950 animate-pulse"
                  : "bg-white hover:bg-zinc-200 text-zinc-950 shadow-sm active:scale-[0.99]"
              }`}
            >
              {isPlacingOrder ? (
                <>
                  <ChefHat className="h-4 w-4 animate-spin" />
                  <span>Transmitting to Kitchen POS...</span>
                </>
              ) : (
                <>
                  <CreditCard className="h-4 w-4" />
                  <span>Place Order (MoMo / Card) • GHS {grandTotal.toFixed(2)}</span>
                </>
              )}
            </button>
          </div>

          {/* Live Kitchen Order Progress Tracker */}
          {liveTrackerStage > 0 && (
            <div className="rounded-xl border border-amber-500/40 bg-amber-950/20 p-3.5 space-y-2.5 animate-in fade-in">
              <div className="flex items-center justify-between text-xs">
                <span className="font-bold text-amber-300 flex items-center gap-1.5">
                  <ChefHat className="h-3.5 w-3.5" /> Kitchen Telemetry (Order #8391)
                </span>
                <span className="font-mono text-[10px] text-emerald-400">Live Stage 0{liveTrackerStage}/04</span>
              </div>

              {/* Step indicator bar */}
              <div className="grid grid-cols-4 gap-1.5 pt-1">
                {[
                  { step: 1, label: "Ticket Printed" },
                  { step: 2, label: "Wok / Grill" },
                  { step: 3, label: "Plated & Sealed" },
                  { step: 4, label: "Rider En Route" },
                ].map((s) => (
                  <div key={s.step} className="space-y-1 text-center">
                    <div
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        liveTrackerStage >= s.step ? "bg-amber-400" : "bg-slate-800"
                      }`}
                    />
                    <span
                      className={`text-[9px] font-mono block ${
                        liveTrackerStage >= s.step ? "text-amber-200 font-bold" : "text-slate-500"
                      }`}
                    >
                      {s.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
