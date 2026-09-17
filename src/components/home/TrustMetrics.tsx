import React from "react";
import { companyData } from "@/data/company";

export function TrustMetrics() {
  return (
    <section className="relative py-12 border-y border-slate-900 bg-[#06080d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {companyData.metrics.map((metric, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-[#E50914]/30 transition-all group"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                {metric.label}
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#E50914] transition-colors mb-2">
                {metric.value}
              </div>
              <p className="text-xs text-slate-400 leading-normal">
                {metric.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
