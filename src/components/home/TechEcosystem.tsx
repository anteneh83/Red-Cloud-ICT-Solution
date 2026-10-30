"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ecosystemLayers } from "@/data/ecosystem";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Network,
  Cpu,
  CreditCard,
  Layers,
  Workflow,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function TechEcosystem() {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const tabsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveLayerIndex((current) => (current + 1) % ecosystemLayers.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, activeLayerIndex]);

  useEffect(() => {
    const container = tabsContainerRef.current;
    if (!container) return;
    const tabEl = document.getElementById(`eco-tab-${activeLayerIndex}`);
    if (tabEl) {
      const targetScroll = tabEl.offsetLeft - (container.clientWidth / 2) + (tabEl.clientWidth / 2);
      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  }, [activeLayerIndex]);

  const activeLayer = ecosystemLayers[activeLayerIndex];

  const getLayerIcon = (idx: number, className = "w-6 h-6") => {
    switch (idx) {
      case 0:
        return <Network className={className} />;
      case 1:
        return <Cpu className={className} />;
      case 2:
        return <CreditCard className={className} />;
      case 3:
        return <Layers className={className} />;
      case 4:
        return <Workflow className={className} />;
      case 5:
        return <TrendingUp className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <section className="relative py-24 sm:py-32 bg-white border-t border-gray-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-3">
              Architectural Blueprint
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
              The Technology <span className="text-[#e61f23]">Ecosystem</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-2">
              An end-to-end operational architecture bridging physical telecommunication infrastructure with high-level enterprise business intelligence.
            </p>
          </div>
        </ScrollReveal>

        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Mobile: Detail Card on top (order-1), Desktop: Right Column (order-2) */}
          <div className="order-1 lg:order-2 lg:col-span-7 bg-white border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xl shadow-gray-200/60 relative overflow-hidden transition-all duration-300">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayerIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between gap-4 mb-5 sm:mb-6">
                  <span className="text-3xl sm:text-4xl font-black text-[#e61f23] font-mono">
                    0{activeLayerIndex + 1}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-50 text-[#e61f23] border border-red-200">
                      {activeLayer.level}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3.5 sm:gap-4 mb-4 sm:mb-5">
                  <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-red-50 border border-red-200 text-[#e61f23] shrink-0">
                    {getLayerIcon(activeLayerIndex, "w-6 h-6 sm:w-8 sm:h-8")}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-950">
                      {activeLayer.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 mt-0.5 hidden sm:block">
                      {activeLayer.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-6 sm:mb-8">
                  {activeLayer.description}
                </p>

                <div className="space-y-2.5 sm:space-y-3 mb-6 sm:mb-8">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-900">
                    Core Architectural Components
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                    {activeLayer.components.map((comp, cIdx) => (
                      <div
                        key={cIdx}
                        className="flex items-center gap-2.5 text-xs text-gray-700 p-2.5 rounded-xl bg-gray-50 border border-gray-150 hover:bg-red-50/50 hover:border-red-200 transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#e61f23] shrink-0" />
                        <span className="font-medium">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 sm:pt-6 border-t border-gray-100 flex items-center gap-3">
                  <Sparkles className="w-4 h-4 text-[#e61f23] shrink-0" />
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Designed to operate in synergy with regional power grids, local banking networks, and domestic regulatory frameworks.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Mobile: Horizontal auto-sliding tabs below card (order-2), Desktop: Left Column (order-1) */}
          <div
            ref={tabsContainerRef}
            className="order-2 lg:order-1 lg:col-span-5 relative flex lg:flex-col gap-2.5 overflow-x-auto pb-3 lg:pb-0 scroll-smooth snap-x snap-mandatory no-scrollbar"
          >
            {ecosystemLayers.map((layer, idx) => {
              const isSelected = idx === activeLayerIndex;
              return (
                <button
                  key={layer.level}
                  id={`eco-tab-${idx}`}
                  type="button"
                  onClick={() => setActiveLayerIndex(idx)}
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
                      0{idx + 1}
                    </span>

                    <div
                      className={`p-1.5 sm:p-2.5 rounded-lg sm:rounded-xl transition-colors ${isSelected
                          ? "bg-[#e61f23] text-white shadow-md shadow-red-500/30"
                          : "bg-gray-100 text-gray-600 group-hover:bg-red-50 group-hover:text-[#e61f23]"
                        }`}
                    >
                      {getLayerIcon(idx, "w-4 h-4 sm:w-5 sm:h-5")}
                    </div>

                    <div>
                      <div
                        className={`text-xs sm:text-sm font-bold transition-colors whitespace-nowrap sm:whitespace-normal ${isSelected ? "text-gray-950" : "text-gray-800 group-hover:text-gray-950"
                          }`}
                      >
                        {layer.title}
                      </div>
                      <div className="text-[11px] sm:text-xs text-gray-500 line-clamp-1 mt-0.5 hidden sm:block">
                        {layer.subtitle}
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
                      key={activeLayerIndex}
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
