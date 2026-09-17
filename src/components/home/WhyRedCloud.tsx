import React from "react";
import Link from "next/link";
import { whyRedCloudData } from "@/data/whyUs";
import { companyData } from "@/data/company";
import { ArrowRight, Shield, Award, CheckCircle } from "lucide-react";

export function WhyRedCloud() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#05070a] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bold Enterprise Statement */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-xs font-semibold text-[#E50914] uppercase tracking-wider">
              The Enterprise Standard
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              WHY ENTERPRISES CHOOSE{" "}
              <span className="text-gradient-red">RED CLOUD</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              We bridge sovereign infrastructure reliability with rapid digital application delivery. Headquartered at the Ethiopian IT Park, we provide domestic institutions with dependable technology grounded in reality.
            </p>

            <div className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#E50914]" />
                <span className="text-sm font-bold text-white">Direct Enterprise Support</span>
              </div>
              <p className="text-xs text-slate-400">
                Direct communication through hotline <strong className="text-white font-semibold">{companyData.contact.shortCode}</strong> and specialized technical account managers.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold tracking-wide"
              >
                <span>Initiate Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: 5 Value Pillars Vertical List */}
          <div className="lg:col-span-7 space-y-6">
            {whyRedCloudData.map((pillar) => (
              <div
                key={pillar.number}
                className="p-6 sm:p-8 rounded-2xl bg-[#090d15] border border-slate-800/90 hover:border-slate-700 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl font-black font-mono text-[#E50914] group-hover:scale-110 transition-transform">
                    {pillar.number}
                  </span>

                  <div className="space-y-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {pillar.title}
                    </h3>
                    <div className="text-xs font-semibold text-[#E50914]">
                      {pillar.subtitle}
                    </div>
                    <p className="text-sm text-slate-300 leading-relaxed pt-1">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
