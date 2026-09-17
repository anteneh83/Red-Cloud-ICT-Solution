"use client";

import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { HeroSceneLazy } from "@/components/3d/HeroSceneLazy";
import { ArrowRight, ShieldCheck, Cpu, ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden bg-radial-gradient">
      {/* 3D Network/Cloud Interactive Canvas */}
      <HeroSceneLazy />

      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />

      {/* Gradient vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/40 via-transparent to-[#07090e] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-lg mb-8 hover:border-[#E50914]/50 transition-colors">
          <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse" />
          <span className="text-xs font-semibold tracking-wider uppercase text-slate-300">
            {companyData.name}
          </span>
          <span className="text-slate-600 font-light">|</span>
          <span className="text-xs text-slate-400 font-medium">Est. {companyData.established}</span>
        </div>

        {/* Main Enterprise Heading */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-white max-w-5xl mx-auto leading-[1.08] mb-6">
          BUILDING THE DIGITAL <br className="hidden sm:inline" />
          <span className="text-gradient-red">INFRASTRUCTURE</span> <br className="hidden sm:inline" />
          FOR TOMORROW
        </h1>

        {/* Preserved Tagline & Supporting Narrative */}
        <div className="mb-4">
          <span className="inline-block text-sm sm:text-base font-semibold text-slate-200 tracking-wide uppercase px-3 py-1 rounded bg-[#E50914]/15 border border-[#E50914]/30">
            &ldquo;{companyData.tagline}&rdquo;
          </span>
        </div>

        <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-10 font-normal">
          {companyData.heroSubtitle}
        </p>

        {/* Dual Primary / Secondary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
          <Link
            href="/solutions"
            className="btn-primary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold tracking-wide"
          >
            <span>Explore Our Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/contact"
            className="btn-secondary w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold"
          >
            <span>Talk to Red Cloud</span>
            <ArrowUpRight className="w-4 h-4 text-slate-400" />
          </Link>
        </div>

        {/* Fast Credibility Badges */}
        <div className="pt-14 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#E50914]" />
            <span>National Digital Strategy Aligned</span>
          </div>
          <div className="flex items-center gap-2">
            <Cpu className="w-4 h-4 text-[#E50914]" />
            <span>Ethiopian IT Park Sovereign Hub</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-white">Hotline {companyData.contact.shortCode}</span>
            <span>Enterprise Direct Line</span>
          </div>
        </div>
      </div>
    </section>
  );
}
