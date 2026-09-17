"use client";

import React, { useState } from "react";
import { insightsData, InsightItem } from "@/data/insights";
import { companyData } from "@/data/company";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Technology", "Industry Analysis", "Company News"];

  const filteredArticles = selectedCategory === "All"
    ? insightsData
    : insightsData.filter((item) => item.category === selectedCategory);

  return (
    <main className="flex-1 pt-28 pb-20">
      <section className="py-16 bg-radial-gradient border-b border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-xs font-semibold text-[#E50914] uppercase tracking-wider mb-4">
            Analysis & Updates
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            INSIGHTS & <span className="text-gradient-red">PERSPECTIVES</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Deep-dives on sovereign digital infrastructure, African financial technologies, and enterprise automation trends.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#07090e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all ${
                  selectedCategory === cat
                    ? "bg-[#E50914] text-white shadow-lg shadow-[#E50914]/30"
                    : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                id={article.slug}
                className="p-8 rounded-2xl bg-[#090d15] border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-mono font-bold uppercase text-[#E50914] px-2.5 py-0.5 rounded bg-[#E50914]/10">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-slate-400">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {article.summary}
                  </p>

                  <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-300 leading-relaxed mb-6">
                    {article.content}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.author}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
