import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { partnersData } from "@/data/partners";
import { companyData } from "@/data/company";
import { Handshake, ArrowRight, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: `Partners & Alliances | ${companyData.name}`,
  description:
    "Explore Red Cloud ecosystem partnerships across telecommunications carriers, payment switches, and enterprise system integrators.",
};

export default function PartnersPage() {
  return (
    <main className="flex-1 pt-28 pb-20">
      <section className="py-16 bg-radial-gradient border-b border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e61f23]/10 border border-[#e61f23]/30 text-xs font-semibold text-[#e61f23] uppercase tracking-wider mb-4">
            Ecosystem Network
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            PARTNERS & <span className="text-gradient-red">ALLIANCES</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Strategic collaborations powering Africa&apos;s digital infrastructure across telecommunications, banking switches, and enterprise platforms.
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#07090e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {partnersData.map((cat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl bg-[#090d15] border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#e61f23]/10 border border-[#e61f23]/20 flex items-center justify-center mb-5">
                    <Handshake className="w-6 h-6 text-[#e61f23]" />
                  </div>
                  <h2 className="text-xl font-bold text-white mb-2">
                    {cat.category}
                  </h2>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="space-y-3">
                    {cat.partners.map((p, pIdx) => (
                      <div
                        key={pIdx}
                        className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center justify-between"
                      >
                        <span className="text-xs font-medium text-slate-200">{p.name}</span>
                        <span className="text-[10px] font-mono text-slate-400">{p.type}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80 text-center">
                  <span className="text-xs text-slate-500 italic">
                    [Partner logos will be added upon verified authorization]
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-[#0a0e18] border border-slate-800 text-center space-y-4 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white">
              Join Our Partner Ecosystem
            </h3>
            <p className="text-sm text-slate-300">
              Are you a telecom operator, software vendor, or enterprise integrator looking to expand your regional infrastructure footprint? Connect with our partnership team.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold"
              >
                <span>Initiate Partnership Discussion</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
