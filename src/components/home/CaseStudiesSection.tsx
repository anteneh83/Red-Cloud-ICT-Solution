import React from "react";
import Link from "next/link";
import { caseStudiesData } from "@/data/caseStudies";
import { FileText, Clock, ArrowRight } from "lucide-react";

export function CaseStudiesSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#06080d] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e61f23]/10 border border-[#e61f23]/30 text-xs font-semibold text-[#e61f23] uppercase tracking-wider mb-4">
              Real-World Deployments
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              CASE <span className="text-gradient-red">STUDIES</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-base sm:text-lg mt-3">
              How Red Cloud infrastructure and digital solutions solve real business bottlenecks across sectors.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
            <Clock className="w-3.5 h-3.5 text-[#e61f23]" />
            <span>Formal Client Reviews In Progress</span>
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {caseStudiesData.map((cs) => (
            <div
              key={cs.id}
              className="p-8 rounded-2xl bg-[#090d15] border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-[#e61f23]">
                    {cs.industry}
                  </span>
                  <span className="text-[11px] font-semibold text-slate-400 px-2.5 py-0.5 rounded bg-slate-800/80">
                    Coming Soon
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {cs.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {cs.summary}
                </p>

                <div className="space-y-4 pt-4 border-t border-slate-800/80">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      The Operational Challenge
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cs.problem}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Red Cloud Architecture
                    </span>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {cs.solution}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5">
                  {cs.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <span className="text-xs font-semibold text-slate-500 italic">
                  Full study coming soon
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
