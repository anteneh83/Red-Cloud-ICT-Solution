import React from "react";
import Link from "next/link";
import { productsData } from "@/data/products";
import { Check, ArrowUpRight, ArrowRight, Package } from "lucide-react";

export function ProductsSection() {
  return (
    <section id="products" className="relative py-24 sm:py-32 bg-[#05070a] border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-xs font-semibold text-[#E50914] uppercase tracking-wider mb-4">
              Software & Platforms
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              ENTERPRISE <span className="text-gradient-red">PRODUCTS</span>
            </h2>
            <p className="text-slate-400 max-w-xl text-base sm:text-lg mt-3">
              Scalable proprietary software engines and operational platforms built for high-throughput enterprise execution.
            </p>
          </div>

          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors group"
          >
            <span>Explore All Product Frameworks</span>
            <ArrowRight className="w-4 h-4 text-[#E50914] group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productsData.map((product) => (
            <div
              key={product.id}
              className="bg-[#0a0e18] border border-slate-800 hover:border-slate-700 rounded-2xl p-8 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#E50914] px-2.5 py-1 rounded bg-[#E50914]/10 border border-[#E50914]/20">
                    {product.badge}
                  </span>
                  <span className="text-xs text-slate-400 font-medium">
                    {product.category}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-white group-hover:bg-[#E50914] group-hover:text-white transition-colors">
                    <Package className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold text-white group-hover:text-slate-100">
                    {product.name}
                  </h3>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  {product.description}
                </p>

                {/* Capabilities */}
                <div className="space-y-2 mb-6 pt-4 border-t border-slate-800/80">
                  {product.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-[#E50914] shrink-0" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Note & Link */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-4">
                <span className="text-[11px] text-slate-400 italic">
                  {product.statusText}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-[#E50914] transition-colors"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E50914]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
