"use client";

import React from "react";
import Link from "next/link";
import { productsData } from "@/data/products";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Check, ArrowUpRight, ArrowRight, Package } from "lucide-react";

export function ProductsSection() {
  return (
    <section id="products" className="relative py-24 sm:py-32 bg-gray-50/70 border-t border-gray-200">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-3">
                Software & Platforms
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
                Enterprise <span className="text-[#e61f23]">Products</span>
              </h2>
              <p className="text-gray-600 max-w-xl text-base sm:text-lg mt-2">
                Scalable proprietary software engines and operational platforms built for high-throughput enterprise execution.
              </p>
            </div>

            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#e61f23] transition-colors group"
            >
              <span>Explore All Product Frameworks</span>
              <ArrowRight className="w-4 h-4 text-[#e61f23] group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Product Cards Grid with Staggered Scroll Animation and Dynamic Hover */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {productsData.map((product, idx) => (
            <ScrollReveal key={product.id} delay={idx * 0.15} direction="up">
              <div className="relative bg-white border border-gray-200 hover:border-[#e61f23] rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10 flex flex-col justify-between h-full group overflow-hidden">
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4 sm:mb-5">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#e61f23] px-3 py-1 rounded-full bg-red-50 border border-red-200">
                      {product.badge}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {product.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 sm:gap-3.5 mb-3 sm:mb-4">
                    <div className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-red-50 text-[#e61f23] border border-red-200 group-hover:bg-[#e61f23] group-hover:text-white transition-colors duration-300 shadow-xs shrink-0">
                      <Package className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-lg sm:text-2xl font-bold text-gray-950 group-hover:text-[#e61f23] transition-colors leading-snug">
                      {product.name}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5 sm:mb-6">
                    {product.description}
                  </p>

                  {/* Capabilities */}
                  <div className="space-y-2 sm:space-y-2.5 mb-5 sm:mb-6 pt-4 border-t border-gray-100">
                    {product.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2.5 text-xs text-gray-700">
                        <Check className="w-4 h-4 text-[#e61f23] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Status Note & Link */}
                <div className="pt-4 sm:pt-5 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                  <span className="text-xs text-gray-500 italic">
                    {product.statusText}
                  </span>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-800 hover:text-[#e61f23] group-hover:translate-x-0.5 transition-all self-end sm:self-auto"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-4 h-4 text-[#e61f23]" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
