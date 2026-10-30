"use client";

import React from "react";
import Link from "next/link";
import { partnersData } from "@/data/partners";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PartnersSection() {
  return (
    <section id="partners" className="scroll-mt-16 sm:scroll-mt-20 relative py-20 sm:py-28 bg-gray-50 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" duration={0.6}>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-3">
              Ecosystem &amp; Alliances
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
              Partners &amp; <span className="text-[#e61f23]">Collaboration</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-2">
              Building Africa&apos;s digital infrastructure requires active alignment across carriers, financial switches, hardware vendors, and enterprise integrators.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {partnersData.map((category, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 0.12} duration={0.6}>
              <div className="h-full p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white border border-gray-200 hover:border-[#e61f23] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 flex flex-col justify-between shadow-xs group">
                <div>
                  <h3 className="text-base font-bold text-gray-950 mb-1 group-hover:text-[#e61f23] transition-colors duration-300">
                    {category.category}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-6 line-clamp-2 sm:line-clamp-none">
                    {category.description}
                  </p>

                  <div className="space-y-2.5">
                    {category.partners.map((partner, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-3 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-between hover:bg-red-50/50 hover:border-red-200 transition-all duration-200"
                      >
                        <span className="text-xs font-medium text-gray-800">
                          {partner.name}
                        </span>
                        <span className="text-[10px] font-mono text-gray-500 uppercase">
                          {partner.type}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 text-center hidden sm:block">
                  <span className="text-[11px] text-gray-400 font-medium">
                    [Official partner logos will be published upon verified release]
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal direction="up" delay={0.3} duration={0.6}>
          <div className="p-5 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-[#e61f23] hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-base font-bold text-gray-950">
                Interested in Becoming an Infrastructure or Platform Partner?
              </div>
              <p className="text-xs text-gray-600">
                We collaborate with telecom operators, payment processors, and system integrators across East Africa.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide shrink-0 shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-red-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
            >
              <span>Partner Inquiry</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
