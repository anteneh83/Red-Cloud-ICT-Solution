"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { companyData } from "@/data/company";
import { HeroSceneLazy } from "@/components/3d/HeroSceneLazy";
import { ArrowRight, ShieldCheck, Cpu, ArrowUpRight, Sparkles, CheckCircle2 } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-radial-gradient">
      {/* 3D Network/Cloud Interactive Canvas in background */}
      <HeroSceneLazy />

      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-40" />

      {/* Gradient vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#07090e]/40 via-transparent to-[#07090e] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography, Taglines & CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/80 shadow-lg hover:border-[#e61f23]/60 transition-colors">
              <span className="w-2 h-2 rounded-full bg-[#e61f23] animate-pulse" />
              <span className="text-xs font-semibold tracking-wider uppercase text-white">
                {companyData.name}
              </span>
              <span className="text-slate-600 font-light">|</span>
              <span className="text-xs text-slate-300 font-medium">Est. {companyData.established}</span>
            </div>

            {/* Main Enterprise Heading */}
            <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-white leading-[1.08]">
              BUILDING THE DIGITAL <br />
              <span className="text-gradient-red">INFRASTRUCTURE</span> <br />
              FOR TOMORROW
            </h1>

            {/* Preserved Tagline & Supporting Narrative */}
            <div className="pt-1">
              <span className="inline-block text-sm sm:text-base font-bold text-white tracking-wide uppercase px-3.5 py-1.5 rounded-lg bg-[#e61f23]/20 border border-[#e61f23]/50 shadow-sm">
                &ldquo;{companyData.tagline}&rdquo;
              </span>
            </div>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {companyData.heroSubtitle}
            </p>

            {/* Dual Primary / Secondary CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 max-w-md">
              <Link
                href="/solutions"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold tracking-wide"
              >
                <span>Explore Our Solutions</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/contact"
                className="btn-secondary inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold"
              >
                <span>Talk to Red Cloud</span>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </Link>
            </div>

            {/* Credibility Badges */}
            <div className="pt-6 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#e61f23]" />
                <span>National Strategy Aligned</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-[#e61f23]" />
                <span>Ethiopian IT Park Hub</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-white px-2 py-0.5 rounded bg-[#e61f23]">Hotline {companyData.contact.shortCode}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Animated Hero Collaboration Illustration */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Ambient Red & White Glow Backdrops */}
            <div className="absolute w-80 h-80 bg-[#e61f23]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
            <div className="absolute w-60 h-60 bg-white/10 rounded-full blur-2xl pointer-events-none" />

            {/* Floating Container */}
            <div className="relative z-10 w-full max-w-md lg:max-w-none animate-hero-float">
              {/* Illustration Image with glass frame */}
              <div className="relative rounded-3xl p-4 bg-gradient-to-b from-white/10 via-slate-900/60 to-[#0b0e17]/80 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/80">
                <Image
                  src="/assets/hero-illustration.png"
                  alt="Red Cloud Digital Infrastructure & Team Collaboration"
                  width={680}
                  height={680}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />

                {/* Floating Micro-Badges */}
                <div className="absolute -top-3 -right-2 px-3.5 py-1.5 rounded-xl bg-[#0a0e18]/90 border border-[#e61f23]/50 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-white">
                  <Sparkles className="w-3.5 h-3.5 text-[#e61f23]" />
                  <span>Integrated Cloud Solutions</span>
                </div>

                <div className="absolute -bottom-3 -left-2 px-3.5 py-1.5 rounded-xl bg-[#0a0e18]/90 border border-white/25 shadow-xl backdrop-blur-md flex items-center gap-2 text-xs font-semibold text-white">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Enterprise Collaboration</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
