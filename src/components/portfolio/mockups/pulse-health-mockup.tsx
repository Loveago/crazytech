"use client";

import React, { useState } from "react";
import {
  HeartPulse,
  Calendar,
  UserCheck,
  QrCode,
  Video,
  Clock,
  Star,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Activity,
  Wifi,
  Battery,
} from "lucide-react";

export function PulseHealthMockup({ isCompact = false }: { isCompact?: boolean }) {
  const [activeTab, setActiveTab] = useState<"consult" | "schedule" | "vitals" | "rx">("consult");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("Cardiology");
  const [selectedDate, setSelectedDate] = useState<string>("Today, 3:30 PM");
  const [booked, setBooked] = useState<boolean>(false);

  const doctors = [
    {
      name: "Dr. Kwesi Mensah",
      specialty: "Cardiology",
      hospital: "Korle Bu Teaching Hospital",
      rating: "4.98",
      fee: "GHS 180",
      nextSlot: "Today, 3:30 PM",
      avatarBg: "bg-emerald-600",
      avatarInitials: "KM",
    },
    {
      name: "Dr. Ama Owusu",
      specialty: "Dermatology",
      hospital: "Ridge Hospital, Accra",
      rating: "4.95",
      fee: "GHS 150",
      nextSlot: "Tomorrow, 10:00 AM",
      avatarBg: "bg-teal-600",
      avatarInitials: "AO",
    },
    {
      name: "Dr. Samuel Coffie",
      specialty: "Pediatrics",
      hospital: "Komfo Anokye Teaching Hospital",
      rating: "4.99",
      fee: "GHS 200",
      nextSlot: "Today, 5:00 PM",
      avatarBg: "bg-cyan-600",
      avatarInitials: "SC",
    },
  ];

  const handleBook = () => {
    setBooked(true);
    setTimeout(() => setBooked(false), 3000);
  };

  return (
    <div className="relative w-full rounded-2xl border border-emerald-500/30 bg-slate-950/90 p-4 sm:p-6 text-slate-100 shadow-2xl backdrop-blur-xl transition-all">
      {/* Header */}
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-b border-emerald-500/20 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400">
            <HeartPulse className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm tracking-wide text-white">PulseHealth Mobile Suite</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 border border-emerald-500/30">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> iOS & Android
              </span>
            </div>
            <p className="text-xs text-slate-400">Cross-platform clinical telemedicine & biometric sync</p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 rounded-xl border border-slate-800 bg-slate-900/90 p-1">
          {[
            { id: "consult", label: "Consult", icon: UserCheck },
            { id: "schedule", label: "Booking", icon: Calendar },
            { id: "vitals", label: "Live Vitals", icon: Activity },
            { id: "rx", label: "Digital Rx", icon: QrCode },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold transition-all ${
                  activeTab === tab.id
                    ? "bg-emerald-600 text-slate-950 font-bold shadow-sm shadow-emerald-500/20"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                <Icon className="h-3 w-3" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Mobile Device Frame */}
      <div className="mx-auto max-w-sm rounded-[36px] border-4 border-slate-800 bg-slate-950 p-3 shadow-2xl shadow-emerald-500/10">
        {/* Dynamic Island / Bezel Top */}
        <div className="mb-3 flex items-center justify-between px-3 text-[10px] font-mono text-slate-400">
          <span>09:41</span>
          <div className="h-4 w-20 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>
          <div className="flex items-center gap-1.5">
            <Wifi className="h-3 w-3" />
            <Battery className="h-3 w-3" />
          </div>
        </div>

        {/* Dynamic Mobile View Body */}
        <div className="min-h-[340px] rounded-[24px] bg-slate-900/90 border border-slate-800/80 p-3.5 space-y-3">
          {activeTab === "consult" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Find Specialists</span>
                <span className="text-[10px] font-mono text-emerald-400">Ghana Medical Dental Board</span>
              </div>

              {/* Specialty pills */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                {["Cardiology", "Dermatology", "Pediatrics", "General Care"].map((spec) => (
                  <button
                    key={spec}
                    type="button"
                    onClick={() => setSelectedSpecialty(spec)}
                    className={`whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] font-bold border transition-all ${
                      selectedSpecialty === spec
                        ? "border-emerald-400 bg-emerald-500/20 text-emerald-300"
                        : "border-slate-800 bg-slate-950 text-slate-400"
                    }`}
                  >
                    {spec}
                  </button>
                ))}
              </div>

              {/* Doctor List */}
              <div className="space-y-2">
                {doctors.map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center justify-between rounded-xl border border-slate-800/80 bg-slate-950/70 p-2.5 hover:border-emerald-500/30 transition-all"
                  >
                    <div className="flex items-center gap-2.5">
                      <div
                        className={`h-9 w-9 rounded-xl flex items-center justify-center font-bold text-xs text-white ${doc.avatarBg}`}
                      >
                        {doc.avatarInitials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <span className="text-xs font-bold text-white">{doc.name}</span>
                          <span className="flex items-center text-[10px] text-amber-400 font-bold">
                            <Star className="h-2.5 w-2.5 fill-amber-400 mr-0.5" />
                            {doc.rating}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 block">{doc.hospital}</span>
                        <span className="text-[10px] font-mono text-emerald-400 font-semibold">{doc.nextSlot}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setSelectedDate(doc.nextSlot);
                        setActiveTab("schedule");
                      }}
                      className="rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 px-2.5 py-1.5 text-[10px] font-bold border border-emerald-500/30 transition-colors"
                    >
                      Book
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "schedule" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Book Video Consultation</span>
                <span className="text-[10px] text-emerald-400 font-mono">WebRTC HD</span>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-8 w-8 rounded-lg bg-emerald-600 flex items-center justify-center text-xs font-bold text-white">
                    KM
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">Dr. Kwesi Mensah</span>
                    <span className="text-[10px] text-slate-400">Korle Bu Senior Consultant</span>
                  </div>
                </div>

                <div className="space-y-1.5 text-[11px] pt-2 border-t border-slate-800/80">
                  <div className="flex justify-between text-slate-400">
                    <span>Consultation Slot</span>
                    <span className="font-mono text-white">{selectedDate}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Session Fee</span>
                    <span className="font-mono text-emerald-400 font-bold">GHS 180.00</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={handleBook}
                disabled={booked}
                className={`w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-bold transition-all ${
                  booked
                    ? "bg-emerald-500 text-slate-950 shadow-lg shadow-emerald-500/30"
                    : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-md shadow-emerald-500/20"
                }`}
              >
                {booked ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Confirmed! SMS Invite Sent</span>
                  </>
                ) : (
                  <>
                    <Video className="h-4 w-4" />
                    <span>Confirm Consultation</span>
                  </>
                )}
              </button>
            </div>
          )}

          {activeTab === "vitals" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Live Biometric Monitor</span>
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Animated ECG wave */}
              <div className="rounded-xl border border-emerald-500/30 bg-slate-950 p-3">
                <div className="flex justify-between text-[10px] text-slate-400 mb-1">
                  <span>CARDIAC RHYTHM (LEAD II)</span>
                  <span className="font-mono text-emerald-400 font-bold">72 BPM</span>
                </div>

                <div className="h-16 w-full flex items-center justify-center overflow-hidden">
                  <svg className="h-12 w-full" viewBox="0 0 300 60" fill="none">
                    <path
                      d="M 0 30 L 40 30 L 50 30 L 55 10 L 60 50 L 65 20 L 70 30 L 110 30 L 120 30 L 125 10 L 130 50 L 135 20 L 140 30 L 180 30 L 190 30 L 195 10 L 200 50 L 205 20 L 210 30 L 250 30 L 260 30 L 265 10 L 270 50 L 275 20 L 280 30 L 300 30"
                      stroke="#10b981"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="animate-pulse"
                    />
                  </svg>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-2.5">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Oxygen Sat</span>
                  <span className="text-base font-extrabold font-mono text-white">99% SpO2</span>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-950 p-2.5">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">Blood Pressure</span>
                  <span className="text-base font-extrabold font-mono text-white">118 / 76</span>
                </div>
              </div>
            </div>
          )}

          {activeTab === "rx" && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-white">Digital Prescription (Rx)</span>
                <span className="text-[10px] text-emerald-400 font-mono">Encrypted QR</span>
              </div>

              <div className="rounded-xl border border-slate-800 bg-slate-950 p-3 text-center space-y-2">
                <div className="mx-auto h-24 w-24 rounded-lg bg-white p-2 flex items-center justify-center">
                  <QrCode className="h-full w-full text-slate-950" />
                </div>
                <div>
                  <span className="text-xs font-bold text-white block">Amoxicillin 500mg • TDS</span>
                  <span className="text-[10px] text-slate-400">Prescribed by Dr. Kwesi Mensah</span>
                </div>
                <span className="inline-block text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  Pharmacy Verification Hash Valid
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
