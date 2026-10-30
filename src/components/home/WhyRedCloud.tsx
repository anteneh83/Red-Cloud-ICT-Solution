"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { whyRedCloudData } from "@/data/whyUs";
import { companyData } from "@/data/company";
import { ArrowRight, Shield, ChevronLeft, ChevronRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function WhyRedCloud() {
  const [activePillarIndex, setActivePillarIndex] = useState(0);
  return (
    <section className="relative py-20 sm:py-28 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <ScrollReveal direction="left" duration={0.7} className="lg:col-span-5 lg:sticky lg:top-28 space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider">
              The Enterprise Standard
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight">
              Why Enterprises Choose{" "}
              <span className="text-[#e61f23]">Red Cloud</span>
            </h2>

            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              We bridge sovereign infrastructure reliability with rapid digital application delivery. Headquartered at the Ethiopian IT Park, we provide domestic institutions with dependable technology grounded in reality.
            </p>

            <div className="p-5 rounded-xl bg-white border border-gray-200 space-y-2 shadow-xs hover:border-[#e61f23] hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 hidden sm:block">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#e61f23]" />
                <span className="text-sm font-bold text-gray-900">Direct Enterprise Support</span>
              </div>
              <p className="text-xs text-gray-600">
                Direct communication through hotline <strong className="text-gray-900 font-bold">{companyData.contact.shortCode}</strong> and specialized technical account managers.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
              >
                <span>Initiate Consultation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Mobile View: Compact Tabbed Pillar Card to free up vertical space */}
          <div className="block lg:hidden w-full space-y-4">
            {/* Numbered Selector Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar">
              {whyRedCloudData.map((pillar, idx) => {
                const isActive = idx === activePillarIndex;
                return (
                  <button
                    key={pillar.number}
                    type="button"
                    onClick={() => setActivePillarIndex(idx)}
                    className={`shrink-0 px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[#e61f23] text-white shadow-md shadow-red-500/20"
                        : "bg-white border border-gray-200 text-gray-700"
                    }`}
                  >
                    <span className="font-mono">{pillar.number}</span>
                    <span className="truncate max-w-[110px]">{pillar.title.split(" ")[0]}</span>
                  </button>
                );
              })}
            </div>

            {/* Single Active Pillar Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={whyRedCloudData[activePillarIndex].number}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-5 rounded-2xl bg-white border border-gray-200 shadow-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-3">
                    <span className="text-2xl font-black font-mono text-[#e61f23]">
                      {whyRedCloudData[activePillarIndex].number}
                    </span>
                    <div className="flex items-center gap-1.5">
                      <button
                        type="button"
                        onClick={() =>
                          setActivePillarIndex(
                            (prev) => (prev - 1 + whyRedCloudData.length) % whyRedCloudData.length
                          )
                        }
                        className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 active:bg-gray-200"
                        aria-label="Previous pillar"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <span className="text-xs font-mono font-bold text-gray-400 px-1">
                        {whyRedCloudData[activePillarIndex].number} / 0{whyRedCloudData.length}
                      </span>
                      <button
                        type="button"
                        onClick={() =>
                          setActivePillarIndex((prev) => (prev + 1) % whyRedCloudData.length)
                        }
                        className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-700 active:bg-gray-200"
                        aria-label="Next pillar"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-gray-950 mb-1">
                    {whyRedCloudData[activePillarIndex].title}
                  </h3>
                  <div className="text-xs font-semibold text-[#e61f23] mb-2.5">
                    {whyRedCloudData[activePillarIndex].subtitle}
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {whyRedCloudData[activePillarIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Desktop View: Preserved Vertical List of All 5 Pillars */}
          <div className="hidden lg:block lg:col-span-7 space-y-3 sm:space-y-4">
            {whyRedCloudData.map((pillar, idx) => (
              <ScrollReveal key={pillar.number} direction="right" delay={idx * 0.1} duration={0.6}>
                <div className="p-5 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-white border border-gray-200 hover:border-[#e61f23] hover:-translate-y-1 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 shadow-xs group">
                  <div className="flex items-start gap-3.5 sm:gap-4">
                    <span className="text-xl sm:text-2xl font-black font-mono text-[#e61f23] group-hover:scale-110 transition-transform duration-300 shrink-0">
                      {pillar.number}
                    </span>

                    <div className="space-y-1">
                      <h3 className="text-base sm:text-xl font-bold text-gray-950 group-hover:text-[#e61f23] transition-colors duration-300">
                        {pillar.title}
                      </h3>
                      <div className="text-xs font-semibold text-[#e61f23] hidden sm:block">
                        {pillar.subtitle}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
