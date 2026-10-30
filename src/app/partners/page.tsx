import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { partnersData } from "@/data/partners";
import { companyData } from "@/data/company";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Handshake, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Partners & Alliances | ${companyData.name}`,
  description:
    "Explore Red Cloud ecosystem partnerships across telecommunications carriers, payment switches, and enterprise system integrators.",
};

export default function PartnersPage() {
  return (
    <main className="flex-1 pt-24 pb-20 bg-white">
      <section className="py-12 sm:py-16 bg-gray-50 border-b border-gray-200 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-4">
              Ecosystem Network
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight mb-3">
              Partners & <span className="text-[#e61f23]">Alliances</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
              Strategic collaborations powering Africa&apos;s digital infrastructure across telecommunications, banking switches, and enterprise platforms.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 sm:mb-16">
            {partnersData.map((cat, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 0.1}>
                <div
                  className="p-5 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 flex flex-col justify-between shadow-xs h-full"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center mb-5 shrink-0">
                      <Handshake className="w-6 h-6 text-[#e61f23]" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-gray-950 mb-2">
                      {cat.category}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {cat.description}
                    </p>

                    <div className="space-y-2.5">
                      {cat.partners.map((p, pIdx) => (
                        <div
                          key={pIdx}
                          className="p-3 sm:p-3.5 rounded-xl bg-white border border-gray-200 flex items-center justify-between"
                        >
                          <span className="text-xs font-medium text-gray-800">{p.name}</span>
                          <span className="text-[10px] font-mono text-gray-500">{p.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-200 text-center">
                    <span className="text-xs text-gray-400 italic">
                      Partner logos will be added upon verified authorization
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="p-6 sm:p-10 lg:p-12 rounded-2xl sm:rounded-3xl bg-gray-50 border border-gray-200 text-center space-y-4 max-w-3xl mx-auto shadow-xs">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-950">
                Join Our Partner Ecosystem
              </h3>
              <p className="text-xs sm:text-sm text-gray-600">
                Are you a telecom operator, software vendor, or enterprise integrator looking to expand your regional infrastructure footprint? Connect with our partnership team.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl text-sm font-semibold w-full sm:w-auto"
                >
                  <span>Initiate Partnership Discussion</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
