import React from "react";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import { 
  Landmark, 
  Store, 
  Network, 
  Building2, 
  Briefcase, 
  Zap, 
  ArrowRight,
  ArrowUpRight
} from "lucide-react";

export function IndustriesSection() {
  const getIndustryIcon = (name: string) => {
    switch (name) {
      case "Landmark":
        return <Landmark className="w-6 h-6 text-[#E50914]" />;
      case "Store":
        return <Store className="w-6 h-6 text-[#E50914]" />;
      case "Network":
        return <Network className="w-6 h-6 text-[#E50914]" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-[#E50914]" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-[#E50914]" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-[#E50914]" />;
      default:
        return <Building2 className="w-6 h-6 text-[#E50914]" />;
    }
  };

  return (
    <section id="industries" className="relative py-24 sm:py-32 bg-[#06080d] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-xs font-semibold text-[#E50914] uppercase tracking-wider mb-4">
              Sector Specialization
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              INDUSTRIES WE <span className="text-gradient-red">TRANSFORM</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-base sm:text-lg mt-3">
              Purpose-engineered technology and connectivity frameworks tailored to the operational demands of African economic sectors.
            </p>
          </div>

          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors group"
          >
            <span>View All Industry Solutions</span>
            <ArrowRight className="w-4 h-4 text-[#E50914] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 6 Industry Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((item) => (
            <div
              key={item.id}
              className="bg-[#090d15] border border-slate-800/90 hover:border-[#E50914]/40 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#E50914]/10 border border-[#E50914]/25 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getIndustryIcon(item.iconName)}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-slate-100">
                  {item.name}
                </h3>
                <p className="text-xs text-slate-400 font-medium mb-4">
                  {item.tagline}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Featured Capabilities
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.keySolutions.map((sol, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-800/80 text-slate-300"
                    >
                      {sol}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
