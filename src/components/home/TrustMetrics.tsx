"use client";

import React from "react";
import { companyData } from "@/data/company";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TrustMetrics() {
  return (
    <section className="relative py-14 border-y border-gray-200 bg-gray-50/80 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {companyData.metrics.map((metric, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
              <div className="relative p-6 rounded-2xl bg-white border border-gray-200/90 hover:border-[#e61f23] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-500/8 group overflow-hidden">
                {/* Top red accent bar that reveals on hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#e61f23] to-[#ff474b] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Animated Incremental Number */}
                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#e61f23] mb-1.5 tracking-tight">
                  <AnimatedCounter value={metric.value} duration={1.8} />
                </div>

                <div className="text-sm font-bold text-gray-950 mb-1 tracking-wide">
                  {metric.label}
                </div>

                <p className="text-xs text-gray-500 leading-normal">
                  {metric.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
