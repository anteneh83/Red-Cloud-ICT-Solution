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
  CheckCircle2 
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
    <main className="flex-1 pt-24 pb-20 bg-white">
      <section className="py-12 sm:py-16 bg-gray-50 border-b border-gray-200 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-4">
            Five Foundational Pillars
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight mb-3">
            Enterprise <span className="text-[#e61f23]">Solutions</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
            Comprehensive technology services engineered to eliminate operational bottlenecks, ensure compliance, and scale business operations.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-12">
          {solutionsData.map((sol) => (
            <div
              key={sol.id}
              className="p-5 sm:p-8 lg:p-12 rounded-2xl sm:rounded-3xl bg-white border border-gray-200 hover:border-[#e61f23] transition-all shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl sm:text-3xl font-mono font-black text-[#e61f23]">
                    {sol.index}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gray-100 text-gray-700">
                    {sol.category}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="p-2.5 sm:p-3 rounded-xl bg-red-50 border border-red-200 shrink-0">
                    {getIcon(sol.iconName)}
                  </div>
                  <h2 className="text-xl sm:text-3xl font-extrabold text-gray-950">
                    {sol.title}
                  </h2>
                </div>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {sol.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {sol.features.slice(0, 4).map((f, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#e61f23] shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 space-y-4 sm:space-y-5">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Target Use Cases
                </div>
                <div className="space-y-2">
                  {sol.useCases.slice(0, 3).map((uc, uIdx) => (
                    <div key={uIdx} className="text-xs text-gray-700 p-2.5 rounded-lg bg-white border border-gray-200">
                      • {uc}
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="btn-primary w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs sm:text-sm font-semibold tracking-wide"
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
