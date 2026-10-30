"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { solutionsData } from "@/data/solutions";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
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
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSolutionId((currentId) => {
        const currentIndex = solutionsData.findIndex((s) => s.id === currentId);
        const nextIndex = (currentIndex + 1) % solutionsData.length;
        return solutionsData[nextIndex].id;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, activeSolutionId]);

  useEffect(() => {
    const container = tabsContainerRef.current;
    if (!container) return;
    const tabEl = document.getElementById(`sol-tab-${activeSolutionId}`);
    if (tabEl) {
      const targetScroll = tabEl.offsetLeft - (container.clientWidth / 2) + (tabEl.clientWidth / 2);
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  }, [activeSolutionId]);

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
    <section id="services" className="scroll-mt-16 sm:scroll-mt-20 relative py-24 sm:py-32 bg-gray-50/70 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-3">
                Services & Capabilities
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
                Enterprise <span className="text-[#e61f23]">Services & Solutions</span>
              </h2>
              <p className="text-gray-600 max-w-xl text-base sm:text-lg mt-2">
                Five core service pillars engineered to support enterprise reliability, digital transformation, and national digital strategy.
              </p>
            </div>

            <Link
              href="/solutions"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#e61f23] transition-colors group"
            >
              <span>View All Detailed Architecture</span>
              <ArrowRight className="w-4 h-4 text-[#e61f23] group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xl shadow-gray-200/60 relative overflow-hidden transition-all duration-300">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSolution.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between gap-4 mb-5 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-black text-[#e61f23] font-mono">
                    {activeSolution.index}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-50 text-[#e61f23] border border-red-200">
                      {activeSolution.category}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 sm:gap-4 mb-4 sm:mb-5">
                  <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-red-50 border border-red-200 text-[#e61f23] shrink-0">
                    {getSolutionIcon(activeSolution.iconName, "w-6 h-6 sm:w-8 sm:h-8")}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-950">
                      {activeSolution.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5 hidden sm:block">
                      {activeSolution.summary}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-6 sm:mb-8">
                  {activeSolution.description}
                </p>

                <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Key Technical Capabilities
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {activeSolution.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2.5 text-xs text-gray-700 p-2.5 rounded-xl bg-gray-50 border border-gray-150 hover:bg-red-50/50 hover:border-red-200 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#e61f23] shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 sm:pt-6 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-gray-500 italic hidden sm:inline">
                    {activeSolution.specsStatusText}
                  </span>

                  <Link
                    href={`/solutions/${activeSolution.slug}`}
                    className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs sm:text-sm font-bold tracking-wide shadow-md shadow-red-500/20 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5 transition-all w-full sm:w-auto"
                  >
                    <span>Full Specification</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div
            ref={tabsContainerRef}
            className="lg:col-span-5 flex lg:flex-col gap-2.5 overflow-x-auto pb-3 lg:pb-0 scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {solutionsData.map((sol) => {
              const isSelected = sol.id === activeSolutionId;
              return (
                <button
                  key={sol.id}
                  id={`sol-tab-${sol.id}`}
                  type="button"
                  onClick={() => {
                    setActiveSolutionId(sol.id);
                  }}
                  className={`shrink-0 snap-center min-w-[200px] sm:min-w-[230px] lg:min-w-0 lg:w-full text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl border transition-all duration-300 flex items-center justify-between group cursor-pointer relative overflow-hidden ${isSelected
                      ? "bg-white border-[#e61f23] shadow-lg shadow-red-500/10 ring-1 ring-[#e61f23]"
                      : "bg-white/80 border-gray-200 hover:bg-white hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-sm"
                    }`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-4">
                    <span
                      className={`text-xs sm:text-sm font-mono font-bold ${isSelected ? "text-[#e61f23]" : "text-gray-400 group-hover:text-gray-600"
                        }`}
                    >
                      {sol.index}
                    </span>

                    <div
                      className={`p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl transition-colors ${isSelected
                          ? "bg-[#e61f23] text-white shadow-md shadow-red-500/30"
                          : "bg-gray-100 text-gray-600 group-hover:bg-red-50 group-hover:text-[#e61f23]"
                        }`}
                    >
                      {getSolutionIcon(sol.iconName, "w-4 h-4 sm:w-5 sm:h-5")}
                    </div>

                    <div>
                      <div
                        className={`text-xs sm:text-sm font-bold transition-colors whitespace-nowrap sm:whitespace-normal ${isSelected ? "text-gray-950" : "text-gray-800 group-hover:text-gray-950"
                          }`}
                      >
                        {sol.title}
                      </div>
                      <div className="text-[11px] sm:text-xs text-gray-500 line-clamp-1 mt-0.5 hidden sm:block">
                        {sol.category}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 transition-transform hidden lg:block ${isSelected
                        ? "text-[#e61f23] translate-x-1"
                        : "text-gray-400 group-hover:text-gray-600 group-hover:translate-x-0.5"
                      }`}
                  />

                  {isSelected && (
                    <motion.div
                      key={activeSolutionId}
                      initial={{ width: "0%" }}
                      animate={{ width: isPaused ? "100%" : "100%" }}
                      transition={{ duration: isPaused ? 0 : 5, ease: "linear" }}
                      className="absolute bottom-0 left-0 h-1 bg-[#e61f23]"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
