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
    <section id="hero" className="scroll-mt-20 relative min-h-0 sm:min-h-[90vh] flex items-center justify-center pt-20 sm:pt-32 lg:pt-36 pb-8 sm:pb-20 lg:pb-24 overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[480px] bg-radial-gradient pointer-events-none" />

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none z-0 overflow-hidden">
        <div className="relative w-[340px] sm:w-[580px] md:w-[720px] lg:w-[920px] h-[220px] sm:h-[360px] md:h-[450px] lg:h-[560px] opacity-[0.09] sm:opacity-[0.08] filter blur-[3px] sm:blur-[4px] scale-100 sm:scale-105">
          <Image
            src="/assets/logo-clean.png"
            alt=""
            fill
            sizes="(max-width: 640px) 340px, (max-width: 1024px) 720px, 920px"
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 text-left space-y-5 sm:space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-red-50/80 border border-red-200/80 shadow-xs backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#e61f23] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#e61f23]" />
              </span>
              <span className="text-[11px] sm:text-xs font-bold tracking-wider uppercase text-[#e61f23]">
                {companyData.name}
              </span>
              <span className="text-red-300 font-light">|</span>
              <span className="text-[11px] sm:text-xs text-gray-600 font-medium">Est. {companyData.established}</span>
            </div>

            <TypewriterTitle prefix="Take Your Business " highlight="Online" />

            <p className="text-sm sm:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed font-normal">
              {companyData.heroSubtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 max-w-md">
              <Link
                href="/#about"
                className="btn-primary inline-flex items-center justify-center gap-2.5 px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-bold tracking-wide shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group text-center"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/#contact"
                className="btn-secondary inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-sm sm:text-base font-semibold shadow-xs hover:border-[#e61f23] hover:text-[#e61f23] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-center"
              >
                <span>Contact Us</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-x-5 gap-y-2.5 sm:gap-8 text-xs text-gray-600">
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

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex lg:col-span-5 relative items-center justify-center"
          >
            <div className="absolute w-72 sm:w-80 h-72 sm:h-80 bg-[#e61f23]/12 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />

            <div className="relative z-10 w-full max-w-sm sm:max-w-md lg:max-w-none animate-hero-float">
              <div className="relative border-none outline-none shadow-none">
                <Image
                  src="/assets/hero-illustration.png"
                  alt="Red Cloud Digital Infrastructure & Team Collaboration"
                  width={680}
                  height={680}
                  className="w-full h-auto object-contain border-none outline-none shadow-none mix-blend-multiply select-none"
                  priority
                />

                <div className="absolute -top-2 right-1 sm:-top-3 sm:-right-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-white/95 border border-gray-200 shadow-md flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-gray-800 hover:border-[#e61f23] transition-colors whitespace-nowrap backdrop-blur-xs">
                  <Sparkles className="w-3.5 h-3.5 text-[#e61f23]" />
                  <span>Digital Transformation</span>
                </div>

                <div className="absolute -bottom-2 left-1 sm:-bottom-3 sm:-left-2 px-3 sm:px-3.5 py-1.5 rounded-xl bg-white/95 border border-gray-200 shadow-md flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-gray-800 hover:border-[#e61f23] transition-colors whitespace-nowrap backdrop-blur-xs">
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
