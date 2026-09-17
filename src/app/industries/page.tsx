import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import { companyData } from "@/data/company";
import { Landmark, Store, Network, Building2, Briefcase, Zap, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Industries Served | ${companyData.name}`,
  description:
    "Tailored technology, data center, and financial platforms engineered for financial services, retail, telecom, public sector, and SMEs across Africa.",
};

export default function IndustriesPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Landmark":
        return <Landmark className="w-7 h-7 text-[#e61f23]" />;
      case "Store":
        return <Store className="w-7 h-7 text-[#e61f23]" />;
      case "Network":
        return <Network className="w-7 h-7 text-[#e61f23]" />;
      case "Building2":
        return <Building2 className="w-7 h-7 text-[#e61f23]" />;
      case "Briefcase":
        return <Briefcase className="w-7 h-7 text-[#e61f23]" />;
      case "Zap":
        return <Zap className="w-7 h-7 text-[#e61f23]" />;
      default:
        return <Building2 className="w-7 h-7 text-[#e61f23]" />;
    }
  };

  return (
    <main className="flex-1 pt-28 pb-20">
      <section className="py-16 bg-radial-gradient border-b border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e61f23]/10 border border-[#e61f23]/30 text-xs font-semibold text-[#e61f23] uppercase tracking-wider mb-4">
            Sector Ecosystems
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            INDUSTRIES WE <span className="text-gradient-red">SERVE</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Deep domain technology solutions bridging local regulatory compliance with resilient digital infrastructure.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#07090e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                className="p-8 rounded-2xl bg-[#090d15] border border-slate-800 hover:border-slate-700 flex flex-col justify-between transition-all"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#e61f23]/10 border border-[#e61f23]/25 flex items-center justify-center mb-6">
                    {getIcon(ind.iconName)}
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2">
                    {ind.name}
                  </h2>
                  <p className="text-xs text-[#e61f23] font-medium mb-4">
                    {ind.tagline}
                  </p>
                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {ind.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Recommended Solutions
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {ind.keySolutions.map((sol, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2.5 py-1 rounded bg-slate-800 text-slate-200"
                      >
                        {sol}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-[#e61f23] transition-colors"
                  >
                    <span>Sector Consultation</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#e61f23]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
