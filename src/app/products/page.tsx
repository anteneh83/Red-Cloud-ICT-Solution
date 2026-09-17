import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";
import { Package, Check, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: `Enterprise Software Products | ${companyData.name}`,
  description:
    "Explore proprietary software platforms and enterprise tooling engineered by Red Cloud ICT Solutions PLC.",
};

export default function ProductsPage() {
  return (
    <main className="flex-1 pt-28 pb-20">
      <section className="py-16 bg-radial-gradient border-b border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-xs font-semibold text-[#E50914] uppercase tracking-wider mb-4">
            Software & Platforms
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            ENTERPRISE <span className="text-gradient-red">PRODUCTS</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            High-performance software platforms designed to integrate seamlessly into existing enterprise ERPs and African payment networks.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#07090e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productsData.map((prod) => (
              <div
                key={prod.id}
                className="p-8 sm:p-10 rounded-2xl bg-[#090d15] border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#E50914] px-3 py-1 rounded bg-[#E50914]/10 border border-[#E50914]/20">
                      {prod.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {prod.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-slate-800 text-[#E50914]">
                      <Package className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-white">
                      {prod.name}
                    </h2>
                  </div>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  <div className="space-y-2 mb-8 pt-4 border-t border-slate-800/80">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Platform Capabilities
                    </div>
                    {prod.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                        <Check className="w-4 h-4 text-[#E50914] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-slate-400 italic">
                    {prod.statusText}
                  </span>
                  <Link
                    href="/contact"
                    className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider"
                  >
                    <span>Request Product Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 p-6 rounded-2xl bg-slate-900/50 border border-slate-800 text-center">
            <p className="text-xs text-slate-400 max-w-xl mx-auto">
              [Proprietary product releases and integrations such as Hulubeje will be featured as official documentation is finalized.]
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
