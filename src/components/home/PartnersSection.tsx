import React from "react";
import Link from "next/link";
import { partnersData } from "@/data/partners";
import { Handshake, ArrowRight, Shield } from "lucide-react";

export function PartnersSection() {
  return (
    <section id="partners" className="relative py-24 sm:py-32 bg-[#05070a] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-xs font-semibold text-[#E50914] uppercase tracking-wider mb-4">
            Ecosystem & Alliances
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            PARTNERS & <span className="text-gradient-red">COLLABORATION</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            Building Africa&apos;s digital infrastructure requires active alignment across carriers, financial switches, hardware vendors, and enterprise integrators.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {partnersData.map((category, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#080c14] border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-base font-bold text-white mb-2">
                  {category.category}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-6">
                  {category.description}
                </p>

                {/* Partner placeholding badges */}
                <div className="space-y-2.5">
                  {category.partners.map((partner, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3 rounded-lg bg-slate-900/90 border border-slate-800/80 flex items-center justify-between"
                    >
                      <span className="text-xs font-medium text-slate-300">
                        {partner.name}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 uppercase">
                        {partner.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 text-center">
                <span className="text-[11px] text-slate-400 font-medium">
                  [Official partner logos will be published upon verified release]
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Partner CTA */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900/80 via-[#101625] to-slate-900/80 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="text-base font-bold text-white">
              Interested in Becoming an Infrastructure or Platform Partner?
            </div>
            <p className="text-xs text-slate-400">
              We collaborate with telecom operators, payment processors, and system integrators across East Africa.
            </p>
          </div>

          <Link
            href="/contact"
            className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide shrink-0"
          >
            <span>Partner Inquiry</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
