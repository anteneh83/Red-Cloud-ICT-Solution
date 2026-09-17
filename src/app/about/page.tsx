import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { companyData } from "@/data/company";
import { whyRedCloudData } from "@/data/whyUs";
import { ShieldCheck, Target, Building, ArrowRight, CheckCircle2, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: `About Us | ${companyData.name}`,
  description:
    "Learn about Red Cloud ICT Solutions PLC, established in 2022 at Ethiopian IT Park. Trusted partner in enterprise digital transformation and national digital strategy.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 pt-28 pb-20">
      {/* Page Header */}
      <section className="relative py-16 bg-radial-gradient border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-xs font-semibold text-[#E50914] uppercase tracking-wider mb-4">
            Established in {companyData.established}
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            Pioneering Sovereign <br />
            <span className="text-gradient-red">Digital Infrastructure</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
            {companyData.about}
          </p>
        </div>
      </section>

      {/* Narrative & History Section */}
      <section className="py-20 bg-[#07090e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl font-extrabold text-white">
                Our Origins & Headquarters
              </h2>
              <p className="text-slate-300 leading-relaxed">
                Founded in 2022 and operating directly from the Ethiopian IT Park (Goro Road to Tulu Dimtu), Red Cloud was created to resolve the foundational infrastructure hurdles that African enterprises encounter when modernizing their operations.
              </p>
              <p className="text-slate-300 leading-relaxed">
                By investing in high-availability hosting racks, optical interconnectivity, sovereign localized cloud stacks, and secure financial transaction processing platforms, we provide domestic institutions with a dependable partner that understands local operating realities.
              </p>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-400">Headquarters Hub</div>
                <div className="text-sm font-semibold text-white">{companyData.address.full}</div>
                <div className="text-xs text-[#E50914]">Direct Enterprise Support Shortcode: {companyData.contact.shortCode}</div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              {/* Mission */}
              <div id="mission" className="p-8 rounded-2xl bg-[#0a0e18] border border-slate-800 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#E50914]/15 border border-[#E50914]/30 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#E50914]" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  Our Mission
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  &ldquo;{companyData.mission}&rdquo;
                </p>
              </div>

              {/* Commitment */}
              <div className="p-8 rounded-2xl bg-[#0a0e18] border border-slate-800 space-y-4">
                <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white uppercase tracking-wider">
                  Our Commitment
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  &ldquo;{companyData.commitment}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-20 bg-[#05070a] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Enterprise Operating Principles
            </h2>
            <p className="text-slate-400 mt-2">
              How we execute technical commitments for our commercial and public sector partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyRedCloudData.slice(0, 3).map((item) => (
              <div key={item.number} className="p-7 rounded-2xl bg-[#080c14] border border-slate-800">
                <span className="text-xl font-mono font-black text-[#E50914] mb-3 block">
                  {item.number}
                </span>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#E50914] mb-3 font-medium">
                  {item.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
            >
              <span>Connect With Our Leadership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
