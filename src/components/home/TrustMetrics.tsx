"use client";

import React from "react";
import { companyData } from "@/data/company";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function TrustMetrics() {
  return (
    <section className="relative py-10 sm:py-14 border-y border-gray-200 bg-gray-50/80 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6 lg:gap-8">
          {companyData.metrics.map((metric, idx) => (
            <ScrollReveal key={idx} delay={idx * 0.1} direction="up">
              <div className="relative p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white border border-gray-200/90 hover:border-[#e61f23] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-500/8 group overflow-hidden flex flex-col justify-between h-full">
                <div className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#e61f23] mb-1 sm:mb-1.5 tracking-tight">
                  <AnimatedCounter value={metric.value} duration={1.8} />
                </div>

                <div>
                  <div className="text-xs sm:text-sm font-bold text-gray-950 mb-0.5 sm:mb-1 tracking-wide">
                    {metric.label}
                  </div>

                  <p className="text-[11px] sm:text-xs text-gray-500 leading-normal hidden sm:block">
                    {metric.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
