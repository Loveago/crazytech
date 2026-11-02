"use client";

import React, { useState } from "react";
import {
  CreditCard,
  Send,
  ArrowDownLeft,
  ArrowUpRight,
  QrCode,
  ShieldCheck,
  Lock,
  Unlock,
  RefreshCw,
  Wifi,
  Battery,
  Sparkles,
  CheckCircle2,
  Eye,
  EyeOff,
  Bell,
  ArrowRight,
  Check,
} from "lucide-react";

interface Contact {
  name: string;
  phone: string;
  initials: string;
  bg: string;
}

export function WalletMobileMockup({
  device = "mobile",
}: {
  device?: "desktop" | "tablet" | "mobile";
  isCompact?: boolean;
}) {
  const [currency, setCurrency] = useState<"GHS" | "USD" | "GBP">("GHS");
  const [cardFlipped, setCardFlipped] = useState<boolean>(false);
  const [cardFrozen, setCardFrozen] = useState<boolean>(false);
  const [cardTheme, setCardTheme] = useState<"violet" | "obsidian" | "gold">("violet");
  const [showSensitive, setShowSensitive] = useState<boolean>(false);

  // Send Money state
  const [sendModalOpen, setSendModalOpen] = useState<boolean>(false);
  const [selectedContact, setSelectedContact] = useState<string>("Ama Serwaa");
  const [transferAmount, setTransferAmount] = useState<number>(150);
  const [isProcessingTransfer, setIsProcessingTransfer] = useState<boolean>(false);
  const [transferSuccess, setTransferSuccess] = useState<boolean>(false);

  const [balances, setBalances] = useState({
    GHS: 24850.5,
    USD: 1920.0,
    GBP: 1480.0,
  });

  const contacts: Contact[] = [
    { name: "Ama Serwaa", phone: "024 892 1099", initials: "AS", bg: "bg-pink-600" },
    { name: "Kofi Mensah", phone: "050 710 4421", initials: "KM", bg: "bg-cyan-600" },
    { name: "David Osei", phone: "027 334 9912", initials: "DO", bg: "bg-emerald-600" },
    { name: "Akua Darko", phone: "055 192 8472", initials: "AD", bg: "bg-amber-600" },
  ];

  const themeGradients = {
    obsidian: "from-slate-900 via-slate-800 to-black border-slate-700 shadow-slate-900/50",
    violet: "from-indigo-600 via-purple-600 to-pink-600 border-indigo-400/40 shadow-purple-500/25",
    gold: "from-amber-600 via-yellow-600 to-amber-700 border-amber-400/40 shadow-amber-500/25",
  };

  const handleExecuteTransfer = () => {
    setIsProcessingTransfer(true);
    setTimeout(() => {
      setBalances((prev) => ({
        ...prev,
        [currency]: Math.max(prev[currency] - transferAmount, 0),
      }));
      setIsProcessingTransfer(false);
      setTransferSuccess(true);
      setTimeout(() => {
        setTransferSuccess(false);
        setSendModalOpen(false);
      }, 2000);
    }, 1200);
  };

  return (
    <div className="relative w-full rounded-2xl border border-purple-500/30 bg-slate-950/90 p-3 sm:p-5 text-slate-100 shadow-2xl backdrop-blur-xl transition-all">
      {/* Top Banner */}
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2.5 border-b border-purple-500/20 pb-3">
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-500/20 border border-purple-500/40 text-purple-400">
            <CreditCard className="h-4 w-4" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-xs sm:text-sm tracking-wide text-white">ApexPay Neo-Wallet &amp; Card</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-purple-500/20 px-2 py-0.5 text-[9px] font-semibold text-purple-300 border border-purple-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-purple-400 animate-pulse" /> Virtual Visa Active
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Multi-currency financial ledger &amp; instant P2P transfers</p>
          </div>
        </div>

        {/* Currency Switcher */}
        <div className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-900/90 p-1">
          {(["GHS", "USD", "GBP"] as const).map((cur) => (
            <button
              key={cur}
              type="button"
              onClick={() => setCurrency(cur)}
              className={`rounded-lg px-2 py-0.5 text-[11px] font-bold transition-all ${
                currency === cur
                  ? "bg-purple-600 text-white shadow-sm shadow-purple-500/20"
                  : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {cur}
            </button>
          ))}
        </div>
      </div>

      {/* Center Phone Frame */}
      <div className="mx-auto w-full max-w-[360px] rounded-[40px] border-4 border-slate-800 bg-slate-950 p-3 shadow-2xl shadow-purple-500/10">
        {/* Dynamic Island / Status Bar */}
        <div className="mb-3 flex items-center justify-between px-3 text-[10px] font-mono text-slate-400">
          <span>09:41</span>
          <div className="h-3.5 w-18 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
            <span className="h-1.5 w-1.5 rounded-full bg-purple-400" />
          </div>
          <div className="flex items-center gap-1.5">
            <Wifi className="h-3 w-3" />
            <Battery className="h-3 w-3" />
          </div>
        </div>

        {/* Mobile Screen Content */}
        <div className="rounded-[28px] bg-slate-900/95 border border-slate-800/80 p-3.5 space-y-3.5 text-xs">
          {/* Top Profile Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 flex items-center justify-center font-bold text-white text-[11px] shadow">
                KM
              </div>
              <div>
                <span className="text-[10px] text-slate-400 block leading-tight">Welcome back</span>
                <span className="font-bold text-white text-xs">Kofi Mensah</span>
              </div>
            </div>

            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-bold font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                Tier 3 KYC
              </span>
            </div>
          </div>

          {/* Balance Section */}
          <div className="rounded-2xl bg-slate-950/80 border border-slate-800/80 p-3 text-center">
            <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block mb-0.5">
              Available Balance ({currency})
            </span>
            <div className="text-2xl sm:text-3xl font-black font-mono text-white tracking-tight">
              {currency === "GHS" && "GH₵ "}
              {currency === "USD" && "$ "}
              {currency === "GBP" && "£ "}
              {balances[currency].toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </div>
            <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold mt-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live FX Auto-Synced
            </span>
          </div>

          {/* 3D Virtual Card */}
          <div className="relative">
            <div className="flex items-center justify-between mb-2 px-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 flex items-center gap-1">
                <CreditCard className="h-3 w-3 text-purple-400" /> Virtual Visa Platinum
              </span>
              <div className="flex items-center gap-1">
                {(["violet", "obsidian", "gold"] as const).map((thm) => (
                  <button
                    key={thm}
                    type="button"
                    onClick={() => setCardTheme(thm)}
                    className={`h-3.5 w-3.5 rounded-full border transition-transform ${
                      cardTheme === thm ? "scale-125 ring-2 ring-purple-400" : "border-slate-700 opacity-60"
                    }`}
                    style={{
                      backgroundColor:
                        thm === "violet" ? "#a855f7" : thm === "obsidian" ? "#1e293b" : "#eab308",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Physical Card */}
            <div
              className={`relative h-40 w-full rounded-2xl border p-4 shadow-xl transition-all duration-500 overflow-hidden bg-gradient-to-br ${
                themeGradients[cardTheme]
              } ${cardFrozen ? "ring-2 ring-cyan-400 opacity-80" : ""}`}
            >
              {cardFrozen && (
                <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm z-20 flex flex-col items-center justify-center gap-1 animate-in fade-in">
                  <Lock className="h-5 w-5 text-cyan-300" />
                  <span className="text-[10px] font-bold text-cyan-300 font-mono uppercase tracking-wider">
                    Card Frozen
                  </span>
                </div>
              )}

              {!cardFlipped ? (
                /* Card Front */
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="font-extrabold tracking-widest text-[11px] uppercase text-white/90">
                      ApexPay
                    </span>
                    <Wifi className="h-3.5 w-3.5 text-white/80 rotate-90" />
                  </div>

                  <div className="my-auto">
                    <div className="h-5 w-7 rounded bg-amber-300/80 mb-1 border border-amber-200/50" />
                    <span className="font-mono text-sm tracking-widest text-white font-bold block">
                      {showSensitive ? "4820 9410 8821 4892" : "•••• •••• •••• 4892"}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono text-white/90">
                    <div>
                      <span className="text-[7px] uppercase tracking-wider block text-white/50">Holder</span>
                      <span className="font-bold">KOFI MENSAH</span>
                    </div>
                    <div>
                      <span className="text-[7px] uppercase tracking-wider block text-white/50">Exp</span>
                      <span className="font-bold">{showSensitive ? "09/29" : "••/••"}</span>
                    </div>
                    <span className="font-black text-sm italic tracking-tighter text-white">VISA</span>
                  </div>
                </div>
              ) : (
                /* Card Back */
                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="h-6 w-full bg-black/90 rounded -mx-4 px-4" />
                  <div className="flex items-center justify-between px-1">
                    <span className="text-[8px] text-white/60">Authorized Signature</span>
                    <div className="rounded bg-white/95 px-2 py-0.5 text-[10px] font-mono font-black text-slate-950">
                      CVV: {showSensitive ? "892" : "•••"}
                    </div>
                  </div>
                  <p className="text-[7.5px] text-white/60 leading-tight">
                    Issued by ApexPay FinTech. Hotline: +233 50 790 4981.
                  </p>
                </div>
              )}
            </div>

            {/* Card Buttons */}
            <div className="mt-2 flex items-center justify-between text-[10px]">
              <div className="flex gap-1.5">
                <button
                  type="button"
                  onClick={() => setCardFlipped((f) => !f)}
                  className="rounded-lg border border-slate-700 bg-slate-950 px-2 py-1 font-semibold text-slate-300 hover:text-white"
                >
                  {cardFlipped ? "Front" : "Flip"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowSensitive((s) => !s)}
                  className="rounded-lg border border-slate-700 bg-slate-950 px-2 py-1 text-slate-400 hover:text-white"
                  title="Toggle card number visibility"
                >
                  {showSensitive ? <EyeOff className="h-3 w-3" /> : <Eye className="h-3 w-3" />}
                </button>
              </div>

              <button
                type="button"
                onClick={() => setCardFrozen((fz) => !fz)}
                className={`flex items-center gap-1 rounded-lg px-2 py-1 font-bold border transition-colors ${
                  cardFrozen
                    ? "border-emerald-500/40 bg-emerald-950/40 text-emerald-300"
                    : "border-cyan-500/40 bg-cyan-950/40 text-cyan-300"
                }`}
              >
                {cardFrozen ? <Unlock className="h-3 w-3" /> : <Lock className="h-3 w-3" />}
                <span>{cardFrozen ? "Unfreeze" : "Freeze"}</span>
              </button>
            </div>
          </div>

          {/* Quick Action Grid */}
          <div className="grid grid-cols-4 gap-1.5 text-center">
            {[
              { label: "Send", icon: Send, action: () => setSendModalOpen(true) },
              { label: "Add MoMo", icon: ArrowDownLeft, action: () => setSendModalOpen(true) },
              { label: "Request", icon: ArrowUpRight, action: () => setSendModalOpen(true) },
              { label: "Scan QR", icon: QrCode, action: () => setSendModalOpen(true) },
            ].map((btn) => {
              const Icon = btn.icon;
              return (
                <button
                  key={btn.label}
                  type="button"
                  onClick={btn.action}
                  className="flex flex-col items-center gap-1 rounded-xl border border-slate-800/80 bg-slate-950/70 p-2 text-slate-300 hover:border-purple-500/40 transition-colors active:scale-95"
                >
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-500/20 text-purple-300">
                    <Icon className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-[9px] font-bold">{btn.label}</span>
                </button>
              );
            })}
          </div>

          {/* Instant P2P Contacts Strip */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                Quick P2P Transfer
              </span>
              <span className="text-[9px] font-mono text-purple-400">Zero Fee</span>
            </div>

            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
              {contacts.map((c) => (
                <button
                  key={c.name}
                  type="button"
                  onClick={() => {
                    setSelectedContact(c.name);
                    setSendModalOpen(true);
                  }}
                  className="flex flex-col items-center gap-1 shrink-0 group"
                >
                  <div
                    className={`h-9 w-9 rounded-full flex items-center justify-center text-[10px] font-black text-white shadow-md group-hover:scale-105 transition-transform ${c.bg}`}
                  >
                    {c.initials}
                  </div>
                  <span className="text-[9px] text-slate-300 max-w-[50px] truncate">
                    {c.name.split(" ")[0]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Recent Ledger */}
          <div className="space-y-1.5 pt-1 border-t border-slate-800/80">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
              Recent Ledger
            </span>

            <div className="space-y-1.5 font-mono text-[11px]">
              <div className="flex items-center justify-between rounded-lg bg-slate-950 p-2 border border-slate-800/80">
                <div>
                  <span className="text-white font-bold block text-xs">Paystack Deposit</span>
                  <span className="text-[9px] text-slate-400">Mobile Money Rail</span>
                </div>
                <span className="text-emerald-400 font-bold">+GHS 850.00</span>
              </div>

              <div className="flex items-center justify-between rounded-lg bg-slate-950 p-2 border border-slate-800/80">
                <div>
                  <span className="text-white font-bold block text-xs">Uber Ride</span>
                  <span className="text-[9px] text-slate-400">Virtual Visa • 4892</span>
                </div>
                <span className="text-slate-300 font-bold">-GHS 48.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simulated Send Money Drawer / Modal */}
      {sendModalOpen && (
        <div className="absolute inset-0 z-30 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in">
          <div className="w-full max-w-xs rounded-2xl border border-purple-500/40 bg-slate-900 p-5 space-y-3.5 shadow-2xl">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-xs font-bold text-white flex items-center gap-1.5">
                <Send className="h-3.5 w-3.5 text-purple-400" /> Send Money Instantly
              </span>
              <button
                type="button"
                onClick={() => setSendModalOpen(false)}
                className="text-xs text-slate-400 hover:text-white p-1"
              >
                ✕
              </button>
            </div>

            {transferSuccess ? (
              <div className="text-center py-4 space-y-2">
                <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto animate-bounce" />
                <span className="text-sm font-bold text-white block">GHS {transferAmount} Sent!</span>
                <p className="text-[11px] text-slate-400">
                  Transferred to {selectedContact} via instant MoMo rail.
                </p>
              </div>
            ) : (
              <>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Recipient Contact
                  </label>
                  <select
                    value={selectedContact}
                    onChange={(e) => setSelectedContact(e.target.value)}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-xs text-white"
                  >
                    {contacts.map((c) => (
                      <option key={c.name} value={c.name}>
                        {c.name} ({c.phone})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                    Amount ({currency})
                  </label>
                  <input
                    type="number"
                    value={transferAmount}
                    onChange={(e) => setTransferAmount(Number(e.target.value))}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-sm font-mono font-bold text-purple-300"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleExecuteTransfer}
                  disabled={isProcessingTransfer}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-400 hover:to-pink-500 py-2.5 font-bold text-xs text-white shadow-lg shadow-purple-500/25 active:scale-95"
                >
                  {isProcessingTransfer ? (
                    <>
                      <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                      <span>Biometric FaceID Verify...</span>
                    </>
                  ) : (
                    <>
                      <ShieldCheck className="h-3.5 w-3.5" />
                      <span>Authorize &amp; Transfer</span>
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
