"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ecosystemLayers } from "@/data/ecosystem";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Layers, ArrowDown, CheckCircle, Sparkles } from "lucide-react";

export function TechEcosystem() {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  // Auto-switch layer every 5 seconds, paused when hovering
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveLayerIndex((current) => (current + 1) % ecosystemLayers.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, activeLayerIndex]);

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

        {/* Stacked Interactive Hierarchy with auto-switch pause on hover */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Left Layer Stack */}
          <div className="lg:col-span-6 space-y-2.5 sm:space-y-3">
            {ecosystemLayers.map((layer, idx) => {
              const isActive = idx === activeLayerIndex;
              return (
                <div key={layer.level} className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveLayerIndex(idx)}
                    className={`w-full text-left p-3.5 sm:p-5 rounded-xl sm:rounded-2xl border transition-all duration-200 flex items-center justify-between group cursor-pointer relative overflow-hidden ${isActive
                        ? "bg-white border-[#e61f23] shadow-lg shadow-red-500/10 ring-1 ring-[#e61f23]"
                        : "bg-gray-50 border-gray-200 hover:bg-white hover:border-gray-300 hover:-translate-y-0.5"
                      }`}
                  >
                    <div className="flex items-center gap-3 sm:gap-3.5">
                      <div
                        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl flex items-center justify-center text-xs font-mono font-bold transition-colors shrink-0 ${isActive
                            ? "bg-[#e61f23] text-white shadow-md shadow-red-500/30"
                            : "bg-white border border-gray-200 text-gray-600 group-hover:text-gray-900"
                          }`}
                      >
                        0{idx + 1}
                      </div>
                      <div>
                        <div
                          className={`text-xs sm:text-base font-bold transition-colors ${isActive ? "text-gray-950" : "text-gray-800 group-hover:text-gray-950"
                            }`}
                        >
                          {layer.title}
                        </div>
                        <div className="text-[11px] sm:text-xs text-gray-500 line-clamp-1">
                          {layer.subtitle}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`text-[11px] sm:text-xs font-mono transition-colors font-bold shrink-0 ml-2 ${isActive ? "text-[#e61f23]" : "text-gray-400"
                        }`}
                    >
                      {layer.level}
                    </span>

                    {/* Auto-switch countdown progress bar */}
                    {isActive && (
                      <motion.div
                        key={activeLayerIndex}
                        initial={{ width: "0%" }}
                        animate={{ width: isPaused ? "100%" : "100%" }}
                        transition={{ duration: isPaused ? 0 : 5, ease: "linear" }}
                        className="absolute bottom-0 left-0 h-1 bg-[#e61f23]"
                      />
                    )}
                  </button>

                  {idx < ecosystemLayers.length - 1 && (
                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="w-3.5 h-3.5 text-gray-300" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Layer Detail Card */}
          <div className="lg:col-span-6 bg-gray-50/90 border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xl shadow-gray-200/50 relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLayerIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between gap-3 mb-5 sm:mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-red-100 text-[#e61f23] border border-red-200 shrink-0">
                      <Layers className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-[#e61f23]">
                        {ecosystemLayers[activeLayerIndex].level}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-gray-950">
                        {ecosystemLayers[activeLayerIndex].title}
                      </h3>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 text-xs sm:text-sm lg:text-base leading-relaxed mb-5 sm:mb-6">
                  {ecosystemLayers[activeLayerIndex].description}
                </p>

                <div className="space-y-3 sm:space-y-4 pt-4 border-t border-gray-200">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-800">
                    Core Architectural Components
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {ecosystemLayers[activeLayerIndex].components.map((comp, cIdx) => (
                      <div
                        key={cIdx}
                        className="p-3 sm:p-3.5 rounded-xl bg-white border border-gray-200 hover:border-[#e61f23] hover:shadow-xs transition-all flex items-center gap-2.5 text-xs text-gray-800"
                      >
                        <CheckCircle className="w-4 h-4 text-[#e61f23] shrink-0" />
                        <span className="font-medium">{comp}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white border border-gray-200 flex items-center gap-3 shadow-xs">
                  <Sparkles className="w-4 h-4 text-[#e61f23] shrink-0" />
                  <p className="text-xs text-gray-600">
                    Designed to operate in synergy with regional power grids, local banking networks, and domestic regulatory frameworks.
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
