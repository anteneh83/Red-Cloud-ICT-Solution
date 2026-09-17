import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { productsData } from "@/data/products";
import { companyData } from "@/data/company";
import { Package, Check, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `Enterprise Software Products | ${companyData.name}`,
  description:
    "Explore proprietary software platforms and enterprise tooling engineered by Red Cloud ICT Solutions PLC.",
};

export default function ProductsPage() {
  return (
    <main className="flex-1 pt-24 pb-20 bg-white">
      <section className="py-16 bg-gray-50 border-b border-gray-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-4">
            Software & Platforms
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-950 tracking-tight mb-3">
            Enterprise <span className="text-[#e61f23]">Products</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            High-performance software platforms designed to integrate seamlessly into existing enterprise ERPs and African payment networks.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {productsData.map((prod) => (
              <div
                key={prod.id}
                className="p-8 sm:p-10 rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#e61f23] transition-all flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#e61f23] px-3 py-1 rounded bg-white border border-red-200">
                      {prod.badge}
                    </span>
                    <span className="text-xs text-gray-500 font-medium">
                      {prod.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-3 rounded-xl bg-red-50 text-[#e61f23] border border-red-200">
                      <Package className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-950">
                      {prod.name}
                    </h2>
                  </div>

                  <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {prod.description}
                  </p>

                  <div className="space-y-2 mb-8 pt-4 border-t border-gray-200">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-800 mb-2">
                      Platform Capabilities
                    </div>
                    {prod.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2.5 text-xs text-gray-700">
                        <Check className="w-4 h-4 text-[#e61f23] shrink-0" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <span className="text-xs text-gray-500 italic">
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

          <div className="mt-16 p-6 rounded-2xl bg-gray-50 border border-gray-200 text-center">
            <p className="text-xs text-gray-500 max-w-xl mx-auto">
              [Proprietary product releases and integrations will be featured as official documentation is finalized.]
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
