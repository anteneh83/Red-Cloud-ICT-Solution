"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { companyData } from "@/data/company";
import { ArrowRight, ShieldCheck, Cpu, PhoneCall, Sparkles, CheckCircle2, ChevronRight } from "lucide-react";
import { TypewriterTitle } from "@/components/ui/TypewriterTitle";

export function Hero() {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-white">
      {/* Background Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-60" />

      {/* Subtle Radial red mesh glow at top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[480px] bg-radial-gradient pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Typography, Animated Headlines & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-left space-y-6"
          >
            {/* Eyebrow badge with glowing indicator */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-red-50/80 border border-red-200/80 shadow-xs backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e61f23] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e61f23]" />
              </span>
              <span className="text-xs font-bold tracking-wider uppercase text-[#e61f23]">
                {companyData.name}
              </span>
              <span className="text-red-300 font-light">|</span>
              <span className="text-xs text-gray-600 font-medium">Est. {companyData.established}</span>
            </div>

            {/* Main Heading with dynamic typing on reload */}
            <TypewriterTitle prefix="Take Your Business " highlight="Online" />

            {/* Subtitle */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed font-normal">
              {companyData.heroSubtitle}
            </p>

            {/* Dual Primary / Secondary CTAs with rich hover */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 max-w-md">
              <Link
                href="/#about"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-bold tracking-wide shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/#contact"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold shadow-xs hover:border-[#e61f23] hover:text-[#e61f23] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Credibility Badges with subtle hover highlights */}
            <div className="pt-4 flex flex-wrap items-center gap-6 sm:gap-8 text-xs text-gray-600">
              <div className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                <ShieldCheck className="w-4 h-4 text-[#e61f23]" />
                <span className="font-medium">National Digital Policy Aligned</span>
              </div>
              <div className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                <Cpu className="w-4 h-4 text-[#e61f23]" />
                <span className="font-medium">Ethiopian IT Park Hub</span>
              </div>
              <div className="flex items-center gap-2 hover:text-gray-900 transition-colors">
                <PhoneCall className="w-4 h-4 text-[#e61f23]" />
                <span className="font-bold text-gray-900">Hotline: {companyData.contact.shortCode}</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Hero Illustration with interactive depth */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Ambient Red Glow Backdrop */}
            <div className="absolute w-80 h-80 bg-[#e61f23]/12 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

            {/* Floating Container */}
            <div className="relative z-10 w-full max-w-md lg:max-w-none animate-hero-float">
              {/* Illustration Image — borderless */}
              <div className="relative">
                <Image
                  src="/assets/hero-illustration.png"
                  alt="Red Cloud Digital Infrastructure & Team Collaboration"
                  width={680}
                  height={680}
                  className="w-full h-auto object-contain"
                  priority
                />

                {/* Floating Micro-Badge Top Right */}
                <div className="absolute -top-3 -right-2 px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 shadow-lg flex items-center gap-2 text-xs font-bold text-gray-800 hover:border-[#e61f23] transition-colors">
                  <Sparkles className="w-3.5 h-3.5 text-[#e61f23]" />
                  <span>Digital Transformation</span>
                </div>

                {/* Floating Micro-Badge Bottom Left */}
                <div className="absolute -bottom-3 -left-2 px-3.5 py-1.5 rounded-xl bg-white border border-gray-200 shadow-lg flex items-center gap-2 text-xs font-bold text-gray-800 hover:border-[#e61f23] transition-colors">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#e61f23]" />
                  <span>Enterprise Cloud & Hosting</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
