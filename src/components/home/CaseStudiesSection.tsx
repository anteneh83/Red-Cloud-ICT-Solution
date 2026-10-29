"use client";

import React from "react";
import { caseStudiesData } from "@/data/caseStudies";
import { Clock } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function CaseStudiesSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-white border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-3">
                Real-World Deployments
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
                Case <span className="text-[#e61f23]">Studies</span>
              </h2>
              <p className="text-gray-600 max-w-xl text-base sm:text-lg mt-2">
                How Red Cloud infrastructure and digital solutions solve real business bottlenecks across sectors.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-mono text-gray-600 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-200">
              <Clock className="w-3.5 h-3.5 text-[#e61f23]" />
              <span>Formal Client Reviews In Progress</span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {caseStudiesData.map((cs, idx) => (
            <ScrollReveal key={cs.id} direction="up" delay={idx * 0.12} duration={0.6}>
              <div className="h-full p-5 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#e61f23] hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 flex flex-col justify-between shadow-xs group">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono font-bold uppercase text-[#e61f23]">
                      {cs.industry}
                    </span>
                    <span className="text-[11px] font-semibold text-gray-600 px-2.5 py-0.5 rounded bg-white border border-gray-200 group-hover:border-[#e61f23] group-hover:text-[#e61f23] transition-all duration-300">
                      Coming Soon
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-gray-950 mb-3 group-hover:text-[#e61f23] transition-colors duration-300">
                    {cs.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5 sm:mb-6">
                    {cs.summary}
                  </p>

                  <div className="space-y-3 sm:space-y-4 pt-4 border-t border-gray-200">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-800 block mb-1">
                        The Operational Challenge
                      </span>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {cs.problem}
                      </p>
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-gray-800 block mb-1">
                        Red Cloud Architecture
                      </span>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        {cs.solution}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-5 sm:pt-6 mt-5 sm:mt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-1.5">
                    {cs.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-white border border-gray-200 text-gray-700 group-hover:border-red-200 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <span className="text-xs font-semibold text-gray-500 italic">
                    Full study coming soon
                  </span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
