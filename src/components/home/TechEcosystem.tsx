"use client";

import React, { useState } from "react";
import { ecosystemLayers } from "@/data/ecosystem";
import { Layers, ArrowDown, CheckCircle, Sparkles } from "lucide-react";

export function TechEcosystem() {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);

  return (
    <section className="relative py-24 sm:py-32 bg-[#06080d] border-t border-slate-900 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#e61f23]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e61f23]/10 border border-[#e61f23]/30 text-xs font-semibold text-[#e61f23] uppercase tracking-wider mb-4">
            Architectural Blueprint
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            THE TECHNOLOGY <span className="text-gradient-red">ECOSYSTEM</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3">
            An end-to-end operational architecture bridging physical telecommunication infrastructure with high-level enterprise business intelligence.
          </p>
        </div>

        {/* Stacked Interactive Hierarchy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Layer Stack */}
          <div className="lg:col-span-6 space-y-3">
            {ecosystemLayers.map((layer, idx) => {
              const isActive = idx === activeLayerIndex;
              return (
                <div key={layer.level} className="relative">
                  <button
                    type="button"
                    onClick={() => setActiveLayerIndex(idx)}
                    className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 flex items-center justify-between group ${
                      isActive
                        ? "bg-[#121827] border-[#e61f23]/60 shadow-xl"
                        : "bg-[#090d15] border-slate-800/80 hover:bg-[#0e1320] hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center gap-3.5">
                      <div
                        className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-mono font-bold transition-colors ${
                          isActive
                            ? "bg-[#e61f23] text-white"
                            : "bg-slate-800 text-slate-400 group-hover:text-slate-200"
                        }`}
                      >
                        0{idx + 1}
                      </div>
                      <div>
                        <div
                          className={`text-sm sm:text-base font-bold transition-colors ${
                            isActive ? "text-white" : "text-slate-300 group-hover:text-white"
                          }`}
                        >
                          {layer.title}
                        </div>
                        <div className="text-xs text-slate-400 line-clamp-1">
                          {layer.subtitle}
                        </div>
                      </div>
                    </div>

                    <span
                      className={`text-xs font-mono transition-colors ${
                        isActive ? "text-[#e61f23] font-semibold" : "text-slate-500"
                      }`}
                    >
                      {layer.level}
                    </span>
                  </button>

                  {idx < ecosystemLayers.length - 1 && (
                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="w-3.5 h-3.5 text-slate-600" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Layer Detail Card */}
          <div className="lg:col-span-6 bg-[#0a0e18] border border-slate-800 rounded-2xl p-8 sm:p-10 shadow-2xl relative overflow-hidden">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-[#e61f23]/15 border border-[#e61f23]/30 text-[#e61f23]">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#e61f23]">
                  {ecosystemLayers[activeLayerIndex].level}
                </span>
                <h3 className="text-2xl font-black text-white">
                  {ecosystemLayers[activeLayerIndex].title}
                </h3>
              </div>
            </div>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
              {ecosystemLayers[activeLayerIndex].description}
            </p>

            <div className="space-y-4 pt-4 border-t border-slate-800">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Core Architectural Components
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ecosystemLayers[activeLayerIndex].components.map((comp, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-2.5 text-xs text-slate-200"
                  >
                    <CheckCircle className="w-4 h-4 text-[#e61f23] shrink-0" />
                    <span className="font-medium">{comp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-[#e61f23]/10 border border-[#e61f23]/20 flex items-center gap-3">
              <Sparkles className="w-4 h-4 text-[#e61f23] shrink-0" />
              <p className="text-xs text-slate-300">
                Designed to operate in synergy with regional power grids, local banking networks, and domestic regulatory frameworks.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
