"use client";

import React, { useState } from "react";
import { insightsData } from "@/data/insights";
import { Calendar, Clock, User } from "lucide-react";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "Technology", "Industry Analysis", "Company News"];

  const filteredArticles = selectedCategory === "All"
    ? insightsData
    : insightsData.filter((item) => item.category === selectedCategory);

  return (
    <main className="flex-1 pt-24 pb-20 bg-white">
      <section className="py-12 sm:py-16 bg-gray-50 border-b border-gray-200 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-4">
            Analysis & Updates
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight mb-3">
            Insights & <span className="text-[#e61f23]">Perspectives</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
            Deep-dives on sovereign digital infrastructure, African financial technologies, and enterprise automation trends.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10 sm:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#e61f23] text-white shadow-sm"
                    : "bg-gray-100 text-gray-700 hover:text-gray-900 border border-gray-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                id={article.slug}
                className="p-5 sm:p-7 lg:p-8 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#e61f23] flex flex-col justify-between transition-all shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono font-bold uppercase text-[#e61f23] px-2.5 py-0.5 rounded bg-red-50">
                      {article.category}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-gray-950 mb-3 leading-snug">
                    {article.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-6">
                    {article.summary}
                  </p>

                  <div className="p-4 rounded-xl bg-white border border-gray-200 text-xs text-gray-700 leading-relaxed mb-6">
                    {article.content}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200 flex flex-wrap items-center justify-between gap-2 text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    <User className="w-3.5 h-3.5 text-gray-400" />
                    <span>{article.author}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-gray-400" />
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
