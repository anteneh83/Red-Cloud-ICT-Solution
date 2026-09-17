import React from "react";
import Link from "next/link";
import { companyData } from "@/data/company";
import { AboutVideoPlayer } from "@/components/media/AboutVideoPlayer";
import { ShieldCheck, Target, ArrowRight, Sparkles } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 sm:py-32 bg-[#07090e] overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#e61f23]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Corporate Video & Visual */}
          <div className="lg:col-span-5 space-y-5">
            {/* Video Player */}
            <AboutVideoPlayer />

            {/* Floating Badge */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
              <Sparkles className="w-4 h-4 text-[#e61f23]" />
              <span className="text-xs text-slate-300">
                Committed to quality, enterprise innovation & client trust since {companyData.established}.
              </span>
            </div>
          </div>

          {/* Right Column: Company Story, Mission & Commitment */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e61f23]/10 border border-[#e61f23]/30 text-xs font-semibold text-[#e61f23] uppercase tracking-wider">
                Who We Are
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Architecting Africa&apos;s Next Era of{" "}
                <span className="text-gradient-red">Enterprise Technology</span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed pt-2">
                {companyData.about}
              </p>
            </div>

            {/* Structured Mission & Commitment Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              {/* Mission Card */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-[#e61f23]/30 transition-colors space-y-3">
                <div className="w-10 h-10 rounded-xl bg-[#e61f23]/10 border border-[#e61f23]/20 flex items-center justify-center">
                  <Target className="w-5 h-5 text-[#e61f23]" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide">
                  Our Mission
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {companyData.mission}
                </p>
              </div>

              {/* Commitment Card */}
              <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-white/20 transition-colors space-y-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/15 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-base font-bold text-white uppercase tracking-wide">
                  Our Commitment
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {companyData.commitment}
                </p>
              </div>
            </div>

            {/* Read More Link */}
            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#e61f23] transition-colors group"
              >
                <span>Discover More About Red Cloud History & Leadership</span>
                <ArrowRight className="w-4 h-4 text-[#e61f23] group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
