import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { ShieldCheck, Target, ArrowRight, Building, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#07090e] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#E50914]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Architectural Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-gradient-to-br from-slate-900/90 to-[#0b0e17] p-8 shadow-2xl">
              {/* Circuit lines visual accent */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-radial-gradient opacity-60 pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#E50914]/15 border border-[#E50914]/30 flex items-center justify-center">
                  <Building className="w-5 h-5 text-[#E50914]" />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Headquarters</div>
                  <div className="text-sm font-semibold text-white">Ethiopian IT Park Hub</div>
                </div>
              </div>

              {/* Data Center / Network Server Abstract Graphic */}
              <div className="relative h-64 rounded-xl bg-[#090c13] border border-slate-800/90 p-5 flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3">
                  <span className="font-mono">STATUS: OPERATIONAL</span>
                  <span className="flex items-center gap-1.5 text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    LIVE TELEMETRY
                  </span>
                </div>

                {/* Architecture Node Visual */}
                <div className="space-y-2 py-4">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-300">
                    <span>HOSTING & CLUSTER</span>
                    <span className="text-[#E50914]">TIER CLOUD</span>
                  </div>
                  <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#E50914] h-full w-4/5 rounded-full" />
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-2">
                    <span>VISP TRANSIT PEERING</span>
                    <span className="text-slate-400">CARRIER NEUTRAL</span>
                  </div>
                  <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-slate-300 h-full w-full rounded-full" />
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-slate-300 pt-2">
                    <span>FINTECH TRANSACTION CORE</span>
                    <span className="text-[#E50914]">ACID LEDGER</span>
                  </div>
                  <div className="w-full bg-slate-800/80 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#E50914] h-full w-3/4 rounded-full" />
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 font-mono flex items-center justify-between pt-2 border-t border-slate-800/80">
                  <span>EST. {companyData.established}</span>
                  <span>ADDIS ABABA, ETHIOPIA</span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="mt-6 flex items-center gap-3 p-3 rounded-xl bg-slate-800/50 border border-slate-700/60">
                <Sparkles className="w-4 h-4 text-[#E50914]" />
                <span className="text-xs text-slate-300">
                  Committed to quality, enterprise innovation & client trust.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story, Mission & Commitment */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-xs font-semibold text-[#E50914] uppercase tracking-wider">
                Who We Are
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Architecting Africa&apos;s Next Era of{" "}
                <span className="text-gradient-red">Enterprise Technology</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
                {companyData.about}
              </p>
            </div>

            {/* Structured Mission & Commitment Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Mission Card */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#E50914]" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {companyData.mission}
                </p>
              </div>

              {/* Commitment Card */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors space-y-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide">
                  Our Commitment
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {companyData.commitment}
                </p>
              </div>
            </div>

            {/* Read More Link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-200 hover:text-[#E50914] transition-colors group"
              >
                <span>Discover More About Red Cloud History & Leadership</span>
                <ArrowRight className="w-4 h-4 text-[#E50914] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
