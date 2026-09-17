"use client";

import React, { useState } from "react";
import Link from "next/link";
import { solutionsData, Solution } from "@/data/solutions";
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

export function SolutionsShowcase() {
  const [activeSolutionId, setActiveSolutionId] = useState<string>(solutionsData[0].id);

  const activeSolution = solutionsData.find((s) => s.id === activeSolutionId) || solutionsData[0];

  const getSolutionIcon = (name: string, className = "w-6 h-6") => {
    switch (name) {
      case "Server":
        return <Server className={className} />;
      case "ShoppingBag":
        return <ShoppingBag className={className} />;
      case "CreditCard":
        return <CreditCard className={className} />;
      case "Radio":
        return <Radio className={className} />;
      case "Workflow":
        return <Workflow className={className} />;
      default:
        return <Server className={className} />;
    }
  };

  return (
    <section id="solutions" className="relative py-24 sm:py-32 bg-[#05070a] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e61f23]/10 border border-[#e61f23]/30 text-xs font-semibold text-[#e61f23] uppercase tracking-wider mb-4">
              Core Capabilities
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              OUR <span className="text-gradient-red">SOLUTIONS</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-base sm:text-lg mt-3">
              Five foundational pillars engineered to support enterprise reliability, localized compliance, and digital growth across Africa.
            </p>
          </div>

          <Link
            href="/solutions"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors group"
          >
            <span>View Detailed Architecture</span>
            <ArrowRight className="w-4 h-4 text-[#e61f23] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Interactive Showcase Grid: Left Active Details, Right Solution Selectors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Active Solution Highlight Card */}
          <div className="lg:col-span-7 bg-[#0b0f19] border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden transition-all duration-300">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e61f23]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between gap-4 mb-6">
              <span className="text-4xl font-black text-[#e61f23]/40 font-mono">
                {activeSolution.index}
              </span>
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 border border-slate-700/60">
                {activeSolution.category}
              </span>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <div className="p-3.5 rounded-xl bg-[#e61f23]/15 border border-[#e61f23]/30 text-[#e61f23]">
                {getSolutionIcon(activeSolution.iconName, "w-8 h-8")}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {activeSolution.title}
                </h3>
                <p className="text-sm text-slate-400 mt-0.5">
                  {activeSolution.summary}
                </p>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              {activeSolution.description}
            </p>

            {/* Key Features List */}
            <div className="space-y-3 mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Technical Capabilities
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeSolution.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-[#e61f23] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <span className="text-xs text-slate-400 italic">
                {activeSolution.specsStatusText}
              </span>

              <Link
                href={`/solutions/${activeSolution.slug}`}
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-sm font-semibold tracking-wide"
              >
                <span>Full Specification</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right Column: Solution Selection Cards (01 to 05) */}
          <div className="lg:col-span-5 space-y-3">
            {solutionsData.map((sol) => {
              const isSelected = sol.id === activeSolutionId;
              return (
                <button
                  key={sol.id}
                  type="button"
                  onClick={() => setActiveSolutionId(sol.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                    isSelected
                      ? "bg-[#111726] border-[#e61f23]/60 shadow-lg"
                      : "bg-[#080b12] border-slate-800/80 hover:bg-[#0d121e] hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`text-sm font-mono font-bold ${
                        isSelected ? "text-[#e61f23]" : "text-slate-500 group-hover:text-slate-300"
                      }`}
                    >
                      {sol.index}
                    </span>

                    <div
                      className={`p-2 rounded-lg transition-colors ${
                        isSelected
                          ? "bg-[#e61f23]/20 text-[#e61f23]"
                          : "bg-slate-800 text-slate-400 group-hover:text-slate-200"
                      }`}
                    >
                      {getSolutionIcon(sol.iconName, "w-5 h-5")}
                    </div>

                    <div>
                      <div
                        className={`text-sm font-bold transition-colors ${
                          isSelected ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}
                      >
                        {sol.title}
                      </div>
                      <div className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                        {sol.category}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected
                        ? "text-[#e61f23] translate-x-1"
                        : "text-slate-600 group-hover:text-slate-400 group-hover:translate-x-0.5"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
