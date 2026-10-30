import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import { companyData } from "@/data/company";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
    <main className="flex-1 pt-24 pb-20 bg-white">
      <section className="py-12 sm:py-16 bg-gray-50 border-b border-gray-200 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-4">
              Sector Ecosystems
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight mb-3">
              Industries We <span className="text-[#e61f23]">Serve</span>
            </h1>
            <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
              Deep domain technology solutions bridging local regulatory compliance with resilient digital infrastructure.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {industriesData.map((ind, iIdx) => (
              <ScrollReveal key={ind.id} direction="up" delay={iIdx * 0.08}>
                <div
                  className="p-5 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#e61f23] flex flex-col justify-between transition-all shadow-xs h-full"
                >
                  <div>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center mb-5 sm:mb-6 shrink-0">
                      {getIcon(ind.iconName)}
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold text-gray-950 mb-1">
                      {ind.name}
                    </h2>
                    <p className="text-xs text-[#e61f23] font-semibold mb-3">
                      {ind.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                      {ind.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-200">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
                      Recommended Solutions
                    </div>
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {ind.keySolutions.map((sol, idx) => (
                        <span
                          key={idx}
                          className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-gray-700"
                        >
                          {sol}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-[#e61f23] transition-colors"
                    >
                      <span>Sector Consultation</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#e61f23]" />
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
