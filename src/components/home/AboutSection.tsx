"use client";

import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { AboutVideoPlayer } from "@/components/media/AboutVideoPlayer";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ShieldCheck, Target, ArrowRight } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-16 sm:scroll-mt-20 relative py-16 sm:py-24 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-stretch">
          {/* Left Column: Video Controls Full Left Part (Autoplay, Loop, No Overlay) */}
          <ScrollReveal direction="left" duration={0.8} className="flex">
            <AboutVideoPlayer className="w-full h-full min-h-[260px] sm:min-h-[380px] lg:min-h-[520px] aspect-video lg:aspect-auto" />
          </ScrollReveal>

          {/* Right Column: Company Story, Mission & Commitment with Scroll Animation */}
          <ScrollReveal direction="right" duration={0.8} className="flex flex-col justify-center space-y-5 sm:space-y-6">
            <div className="space-y-2.5 sm:space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider">
                About Us
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
                Welcome to <span className="text-[#e61f23]">{companyData.name}</span>, your trusted partner in digital transformation.
              </h2>
              <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed pt-1">
                {companyData.about}
              </p>
            </div>

            {/* Structured Mission & Commitment Cards with Hover Elevation */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 pt-1 sm:pt-2">
              {/* Mission Card */}
              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#e61f23] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 space-y-2.5 sm:space-y-3 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-100 group-hover:bg-[#e61f23] transition-colors flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#e61f23] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 uppercase tracking-wide">
                  Our Mission
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {companyData.mission}
                </p>
              </div>

              {/* Commitment Card */}
              <div className="p-5 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 hover:border-[#e61f23] hover:-translate-y-1 hover:shadow-lg hover:shadow-red-500/10 transition-all duration-300 space-y-2.5 sm:space-y-3 group">
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-100 group-hover:bg-[#e61f23] transition-colors flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-[#e61f23] group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-gray-900 uppercase tracking-wide">
                  Our Commitment
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {companyData.commitment}
                </p>
              </div>
            </div>

            {/* Learn More Link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-[#e61f23] transition-colors group"
              >
                <span>Read More About Our Ethiopian IT Park Operations</span>
                <ArrowRight className="w-4 h-4 text-[#e61f23] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
