import React from "react";
import Link from "next/link";
import { insightsData } from "@/data/insights";
import { Calendar, Clock, ArrowRight, ArrowUpRight } from "lucide-react";

export function InsightsSection() {
  return (
    <section id="insights" className="relative py-24 sm:py-32 bg-[#06080d] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e61f23]/10 border border-[#e61f23]/30 text-xs font-semibold text-[#e61f23] uppercase tracking-wider mb-4">
              Knowledge & News
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              INSIGHTS & <span className="text-gradient-red">ANALYSIS</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-base sm:text-lg mt-3">
              Perspectives on cloud sovereignty, financial technology evolution, and enterprise digital strategy.
            </p>
          </div>

          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors group"
          >
            <span>Read All Articles & Press</span>
            <ArrowRight className="w-4 h-4 text-[#e61f23] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {insightsData.slice(0, 3).map((article) => (
            <article
              key={article.id}
              className="bg-[#090d15] border border-slate-800/90 hover:border-slate-700 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-bold uppercase text-[#e61f23] px-2.5 py-0.5 rounded bg-[#e61f23]/10">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <Clock className="w-3 h-3 text-slate-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-slate-100 transition-colors leading-snug">
                  <Link href={`/insights#${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed mb-6 line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  <span>{article.date}</span>
                </div>

                <Link
                  href="/insights"
                  className="font-semibold text-slate-200 hover:text-[#e61f23] transition-colors flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#e61f23]" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
