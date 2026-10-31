"use client";

import React, { useState } from "react";
import {
  Zap,
  Smartphone,
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowUpRight,
  RefreshCw,
  Signal,
  CreditCard,
  Send,
  Sliders,
  DollarSign,
  Activity,
} from "lucide-react";

interface Transaction {
  id: string;
  network: "MTN" | "Telecel" | "AT";
  recipient: string;
  bundle: string;
  amount: number;
  time: string;
  status: "Delivered" | "Processing";
}

export function NexusPayMockup({ isCompact = false }: { isCompact?: boolean }) {
  const [balance, setBalance] = useState<number>(14850.0);
  const [network, setNetwork] = useState<"MTN" | "Telecel" | "AT">("MTN");
  const [selectedSize, setSelectedSize] = useState<string>("10GB");
  const [recipient, setRecipient] = useState<string>("054 892 1042");
  const [isDispatching, setIsDispatching] = useState<boolean>(false);
  const [dispatchSuccess, setDispatchSuccess] = useState<boolean>(false);

  const [transactions, setTransactions] = useState<Transaction[]>([
    {
      id: "TX-94821",
      network: "MTN",
      recipient: "024 192 8831",
      bundle: "10GB Non-Expiry",
      amount: 45.0,
      time: "Just now",
      status: "Delivered",
    },
    {
      id: "TX-94820",
      network: "Telecel",
      recipient: "050 710 4992",
      bundle: "25GB Big Time",
      amount: 110.0,
      time: "1m ago",
      status: "Delivered",
    },
    {
      id: "TX-94819",
      network: "AT",
      recipient: "027 334 1198",
      bundle: "5GB Big Time",
      amount: 25.0,
      time: "3m ago",
      status: "Delivered",
    },
  ]);

  const bundles = [
    { size: "1GB", price: 5.5 },
    { size: "2.5GB", price: 13.0 },
    { size: "5GB", price: 25.0 },
    { size: "10GB", price: 45.0 },
    { size: "50GB", price: 210.0 },
  ];

  const handleSimulateDispatch = () => {
    if (isDispatching) return;
    setIsDispatching(true);
    setDispatchSuccess(false);

    const price = bundles.find((b) => b.size === selectedSize)?.price || 45.0;

    setTimeout(() => {
      setBalance((prev) => Math.max(prev - price, 0));
      const newTx: Transaction = {
        id: `TX-${Math.floor(10000 + Math.random() * 90000)}`,
        network,
        recipient: recipient || "024 555 0199",
        bundle: `${selectedSize} Automated`,
        amount: price,
        time: "Just now",
        status: "Delivered",
      };
      setTransactions((prev) => [newTx, ...prev.slice(0, 4)]);
      setIsDispatching(false);
      setDispatchSuccess(true);

      setTimeout(() => setDispatchSuccess(false), 3000);
    }, 1200);
  };

  return (
    <div className="relative w-full rounded-2xl border border-cyan-500/30 bg-slate-950/90 p-4 sm:p-6 text-slate-100 shadow-2xl backdrop-blur-xl transition-all">
      {/* Top Header / Status bar */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-cyan-500/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400">
            <Zap className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-wide text-white">NexusPay Telecom Gateway</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-400 border border-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live v3.4
              </span>
            </div>
            <p className="text-xs text-slate-400">Sub-second direct carrier automated dispatch</p>
          </div>
        </div>

        {/* Live Balance Card */}
        <div className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2">
          <div className="text-right">
            <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400">Merchant Balance</span>
            <span className="font-mono text-base font-extrabold text-cyan-300">
              GHS {balance.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
          </div>
          <button
            onClick={() => setBalance((prev) => prev + 500)}
            title="Simulate quick wallet top-up"
            className="rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 p-1.5 transition-colors border border-cyan-500/30"
          >
            <RefreshCw className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Left Interactive Dispatch Column */}
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
            <div className="flex items-center justify-between mb-3">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Signal className="h-3.5 w-3.5 text-cyan-400" /> 1. Select Network Carrier
              </label>
              <span className="text-[11px] text-cyan-400 font-mono">Instant API Route</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {(["MTN", "Telecel", "AT"] as const).map((net) => (
                <button
                  key={net}
                  type="button"
                  onClick={() => setNetwork(net)}
                  className={`flex flex-col items-center justify-center py-2.5 px-3 rounded-lg border text-xs font-bold transition-all ${
                    network === net
                      ? net === "MTN"
                        ? "border-amber-400 bg-amber-400/15 text-amber-300 shadow-md shadow-amber-500/10"
                        : net === "Telecel"
                        ? "border-rose-500 bg-rose-500/15 text-rose-300 shadow-md shadow-rose-500/10"
                        : "border-blue-500 bg-blue-500/15 text-blue-300 shadow-md shadow-blue-500/10"
                      : "border-slate-800 bg-slate-950/60 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                  }`}
                >
                  <span className="font-extrabold">{net}</span>
                  <span className="text-[10px] font-normal opacity-75">Ghana</span>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4 space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Sliders className="h-3.5 w-3.5 text-cyan-400" /> 2. Choose Bundle Package
              </label>
              <span className="text-[11px] text-slate-400 font-mono">Non-Expiry</span>
            </div>

            <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
              {bundles.map((b) => (
                <button
                  key={b.size}
                  type="button"
                  onClick={() => setSelectedSize(b.size)}
                  className={`flex flex-col items-center py-2 px-1 rounded-lg border text-center transition-all ${
                    selectedSize === b.size
                      ? "border-cyan-400 bg-cyan-500/20 text-cyan-200 font-bold shadow-sm shadow-cyan-500/20"
                      : "border-slate-800 bg-slate-950/50 text-slate-400 hover:border-slate-700 hover:text-slate-300"
                  }`}
                >
                  <span className="text-xs font-semibold">{b.size}</span>
                  <span className="text-[10px] font-mono text-slate-400">GHS {b.price}</span>
                </button>
              ))}
            </div>

            <div className="pt-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5 block">
                3. Recipient Phone (MSISDN)
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={recipient}
                  onChange={(e) => setRecipient(e.target.value)}
                  placeholder="024 000 0000"
                  className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3.5 py-2.5 text-sm font-mono text-cyan-200 placeholder-slate-600 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400"
                />
                <span className="absolute right-3 top-2.5 text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Verified Route
                </span>
              </div>
            </div>

            {/* Submit Action */}
            <button
              type="button"
              onClick={handleSimulateDispatch}
              disabled={isDispatching}
              className={`w-full relative flex items-center justify-center gap-2 rounded-xl py-3 px-4 font-bold text-sm transition-all duration-300 ${
                dispatchSuccess
                  ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/25"
                  : "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 active:scale-[0.99]"
              }`}
            >
              {isDispatching ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin text-slate-950" />
                  <span>Executing Gateway API...</span>
                </>
              ) : dispatchSuccess ? (
                <>
                  <CheckCircle2 className="h-4 w-4 text-slate-950" />
                  <span>Dispatched in 1.14s! Received</span>
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 text-slate-950" />
                  <span>Simulate Instant Dispatch ({selectedSize})</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Live Stream / Metrics Column */}
        <div className="lg:col-span-5 space-y-4">
          <div className="rounded-xl border border-slate-800/80 bg-slate-900/60 p-4">
            <div className="flex items-center justify-between mb-3 border-b border-slate-800 pb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center gap-1.5">
                <Activity className="h-3.5 w-3.5 text-cyan-400" /> Real-Time Gateway Feed
              </span>
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              {transactions.map((tx) => (
                <div
                  key={tx.id}
                  className="flex items-center justify-between rounded-lg border border-slate-800/60 bg-slate-950/70 p-2.5 transition-all hover:border-cyan-500/30"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                          tx.network === "MTN"
                            ? "bg-amber-400/20 text-amber-300"
                            : tx.network === "Telecel"
                            ? "bg-rose-500/20 text-rose-300"
                            : "bg-blue-500/20 text-blue-300"
                        }`}
                      >
                        {tx.network}
                      </span>
                      <span className="text-slate-200 font-semibold">{tx.bundle}</span>
                    </div>
                    <div className="text-[11px] text-slate-400 flex items-center gap-2">
                      <span>{tx.recipient}</span>
                      <span>•</span>
                      <span>{tx.time}</span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="block font-bold text-cyan-300">GHS {tx.amount.toFixed(2)}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400">
                      <CheckCircle2 className="h-3 w-3" /> {tx.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-cyan-500/20 bg-cyan-950/20 p-3.5 flex items-center justify-between text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-cyan-400 shrink-0" />
              <span className="text-slate-300">Closed-Loop Carrier Reconciliation</span>
            </div>
            <span className="font-mono font-bold text-cyan-300">99.99% Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
