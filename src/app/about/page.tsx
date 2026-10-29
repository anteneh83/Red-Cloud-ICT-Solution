import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { companyData } from "@/data/company";
import { whyRedCloudData } from "@/data/whyUs";
import { ShieldCheck, Target, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: `About Us | ${companyData.name}`,
  description:
    "Learn about Red Cloud ICT Solutions PLC, established in 2022 at Ethiopian IT Park. Trusted partner in enterprise digital transformation and national digital strategy.",
};

export default function AboutPage() {
  return (
    <main className="flex-1 pt-24 pb-20 bg-white">
      {/* Page Header */}
      <section className="relative py-12 sm:py-16 bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-4">
            Established in {companyData.established}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight mb-3">
            About <span className="text-[#e61f23]">Red Cloud ICT Solutions</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            {companyData.about}
          </p>
        </div>
      </section>

      {/* Narrative & History Section */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-950">
                Our Origins & Headquarters
              </h2>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                Founded in 2022 and operating directly from the Ethiopian IT Park (Goro Road to Tulu Dimtu), Red Cloud was created to resolve the foundational infrastructure hurdles that African enterprises encounter when modernizing their operations.
              </p>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                By investing in high-availability hosting racks, optical interconnectivity, sovereign localized cloud stacks, and secure financial transaction processing platforms, we provide domestic institutions with a dependable partner that understands local operating realities.
              </p>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1.5">
                <div className="text-xs font-bold uppercase tracking-wider text-gray-500">Headquarters Hub</div>
                <div className="text-sm font-semibold text-gray-900">{companyData.address.full}</div>
                <div className="text-xs text-[#e61f23] font-semibold">Direct Enterprise Support Shortcode: {companyData.contact.shortCode}</div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              {/* Mission */}
              <div id="mission" className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center">
                  <Target className="w-6 h-6 text-[#e61f23]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-950 uppercase tracking-wider">
                  Our Mission
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  &ldquo;{companyData.mission}&rdquo;
                </p>
              </div>

              {/* Commitment */}
              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="w-11 h-11 rounded-xl bg-red-100 flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#e61f23]" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-gray-950 uppercase tracking-wider">
                  Our Commitment
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  &ldquo;{companyData.commitment}&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-14 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-950">
              Enterprise Operating Principles
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base">
              How we execute technical commitments for our commercial and public sector partners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {whyRedCloudData.slice(0, 3).map((item) => (
              <div key={item.number} className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white border border-gray-200 shadow-xs flex flex-col justify-between">
                <div>
                  <span className="text-xl font-mono font-black text-[#e61f23] mb-2 block">
                    {item.number}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-gray-950 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#e61f23] mb-3 font-semibold">
                    {item.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 sm:mt-14 text-center">
            <Link
              href="/contact"
              className="btn-primary inline-flex items-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl text-sm sm:text-base font-semibold"
            >
              <span>Connect With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
