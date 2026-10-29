"use client";

import React from "react";
import Link from "next/link";
import { insightsData } from "@/data/insights";
import { Calendar, Clock, ArrowRight, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function InsightsSection() {
  return (
    <section id="insights" className="scroll-mt-16 sm:scroll-mt-20 relative py-20 sm:py-28 bg-white border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up" duration={0.6}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-3">
                Knowledge &amp; News
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
                Insights &amp; <span className="text-[#e61f23]">Analysis</span>
              </h2>
              <p className="text-gray-600 max-w-xl text-base sm:text-lg mt-2">
                Perspectives on cloud sovereignty, financial technology evolution, and enterprise digital strategy.
              </p>
            </div>

            <Link
              href="/insights"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#e61f23] transition-colors group"
            >
              <span>Read All Articles &amp; Press</span>
              <ArrowRight className="w-4 h-4 text-[#e61f23] group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {insightsData.slice(0, 3).map((article, idx) => (
            <ScrollReveal key={article.id} direction="up" delay={idx * 0.12} duration={0.6}>
              <article className="h-full bg-gray-50 border border-gray-200 hover:border-[#e61f23] rounded-xl sm:rounded-2xl p-5 sm:p-7 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 flex flex-col justify-between shadow-xs group">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-mono font-bold uppercase text-[#e61f23] px-2.5 py-0.5 rounded bg-red-50">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-2 text-[11px] text-gray-500">
                      <Clock className="w-3 h-3 text-gray-400" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-950 mb-3 leading-snug group-hover:text-[#e61f23] transition-colors duration-300">
                    <Link href={`/insights#${article.slug}`} className="hover:text-[#e61f23] transition-colors">
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6 line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
                    <span>{article.date}</span>
                  </div>

                  <Link
                    href="/insights"
                    className="font-semibold text-gray-700 hover:text-[#e61f23] transition-colors flex items-center gap-1"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#e61f23] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
