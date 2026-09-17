import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { solutionsData } from "@/data/solutions";
import { 
  Server, 
  ShoppingBag, 
  CreditCard, 
  Radio, 
  Workflow, 
  ArrowRight, 
  CheckCircle2, 
  ArrowUpRight 
} from "lucide-react";

export const metadata: Metadata = {
  title: "Core Enterprise Solutions | Red Cloud ICT Solutions PLC",
  description:
    "Explore our 5 foundational technology pillars: Data Center & Hosting, E-Commerce, Financial Technology, VISP Telecommunications, and Sales Automation.",
};

export default function SolutionsOverviewPage() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Server":
        return <Server className="w-6 h-6 text-[#e61f23]" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-[#e61f23]" />;
      case "CreditCard":
        return <CreditCard className="w-6 h-6 text-[#e61f23]" />;
      case "Radio":
        return <Radio className="w-6 h-6 text-[#e61f23]" />;
      case "Workflow":
        return <Workflow className="w-6 h-6 text-[#e61f23]" />;
      default:
        return <Server className="w-6 h-6 text-[#e61f23]" />;
    }
  };

  return (
    <main className="flex-1 pt-28 pb-20">
      {/* Header */}
      <section className="py-16 bg-radial-gradient border-b border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e61f23]/10 border border-[#e61f23]/30 text-xs font-semibold text-[#e61f23] uppercase tracking-wider mb-4">
            Five Foundational Pillars
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            ENTERPRISE <span className="text-gradient-red">SOLUTIONS</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Comprehensive technology services engineered to eliminate operational bottlenecks, ensure compliance, and scale business operations.
          </p>
        </div>
      </section>

      {/* Solutions Cards List */}
      <section className="py-20 bg-[#07090e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {solutionsData.map((sol) => (
            <div
              key={sol.id}
              className="p-8 sm:p-12 rounded-3xl bg-[#090d15] border border-slate-800 hover:border-slate-700 transition-all shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-3xl font-mono font-black text-[#e61f23]">
                    {sol.index}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-slate-300">
                    {sol.category}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#e61f23]/10 border border-[#e61f23]/20">
                    {getIcon(sol.iconName)}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {sol.title}
                  </h2>
                </div>

                <p className="text-slate-300 text-base leading-relaxed">
                  {sol.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {sol.features.slice(0, 4).map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-[#e61f23] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0e1320] border border-slate-800/80 rounded-2xl p-6 space-y-5">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Target Use Cases
                </div>
                <div className="space-y-2">
                  {sol.useCases.slice(0, 3).map((uc, uIdx) => (
                    <div key={uIdx} className="text-xs text-slate-300 p-2.5 rounded bg-slate-900/90 border border-slate-800">
                      • {uc}
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="btn-primary w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold tracking-wide"
                  >
                    <span>View Dedicated Architecture</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
