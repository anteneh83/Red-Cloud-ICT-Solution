"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { industriesData } from "@/data/industries";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import {
  Landmark,
  Store,
  Network,
  Building2,
  Briefcase,
  Zap,
  ArrowRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

export function IndustriesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [userInteracting, setUserInteracting] = useState(false);

  const carouselItems = [...industriesData, ...industriesData];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationFrameId: number;
    const speed = 0.7;

    const step = () => {
      if (!userInteracting && el) {
        el.scrollLeft += speed;
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [userInteracting]);

  const handleScroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;

    setUserInteracting(true);
    const scrollAmount = 390;

    if (direction === "left" && el.scrollLeft <= 10) {
      el.scrollLeft = el.scrollWidth / 2;
    }

    el.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });

    setTimeout(() => {
      setUserInteracting(false);
    }, 2500);
  };

  const getIndustryIcon = (name: string) => {
    switch (name) {
      case "Landmark":
        return <Landmark className="w-6 h-6 text-[#e61f23] group-hover:text-white transition-colors" />;
      case "Store":
        return <Store className="w-6 h-6 text-[#e61f23] group-hover:text-white transition-colors" />;
      case "Network":
        return <Network className="w-6 h-6 text-[#e61f23] group-hover:text-white transition-colors" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-[#e61f23] group-hover:text-white transition-colors" />;
      case "Briefcase":
        return <Briefcase className="w-6 h-6 text-[#e61f23] group-hover:text-white transition-colors" />;
      case "Zap":
        return <Zap className="w-6 h-6 text-[#e61f23] group-hover:text-white transition-colors" />;
      default:
        return <Building2 className="w-6 h-6 text-[#e61f23] group-hover:text-white transition-colors" />;
    }
  };

  return (
    <section id="industries" className="scroll-mt-16 sm:scroll-mt-20 relative py-24 sm:py-32 bg-white border-t border-gray-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-3">
                Sector Specialization
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-950 tracking-tight">
                Industries We <span className="text-[#e61f23]">Transform</span>
              </h2>
              <p className="text-gray-600 max-w-xl text-base sm:text-lg mt-2">
                Purpose-engineered technology and connectivity frameworks tailored to the operational demands of African economic sectors.
              </p>
            </div>

            <div className="flex items-center gap-3 self-start md:self-end">

              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() => handleScroll("left")}
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:border-[#e61f23] text-gray-700 hover:text-[#e61f23] shadow-xs hover:shadow-md hover:shadow-red-500/10 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                  aria-label="Slide left"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => handleScroll("right")}
                  className="w-10 h-10 rounded-xl bg-white border border-gray-200 hover:border-[#e61f23] text-gray-700 hover:text-[#e61f23] shadow-xs hover:shadow-md hover:shadow-red-500/10 flex items-center justify-center transition-all cursor-pointer active:scale-95"
                  aria-label="Slide right"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              <Link
                href="/industries"
                className="hidden sm:inline-flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-[#e61f23] transition-colors group ml-2"
              >
                <span>View All</span>
                <ArrowRight className="w-4 h-4 text-[#e61f23] group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>

      <div className="relative w-full py-4 group/carousel">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-white via-white/85 to-transparent z-20 flex items-center pl-3 sm:pl-6">
          <div className="w-1 h-28 rounded-full bg-gradient-to-b from-transparent via-[#e61f23]/40 to-transparent shadow-sm" />
        </div>

        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-white via-white/85 to-transparent z-20 flex items-center justify-end pr-3 sm:pr-6">
          <div className="w-1 h-28 rounded-full bg-gradient-to-b from-transparent via-[#e61f23]/40 to-transparent shadow-sm" />
        </div>

        <button
          type="button"
          onClick={() => handleScroll("left")}
          className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 border border-gray-200 hover:border-[#e61f23] text-gray-700 hover:text-[#e61f23] shadow-lg shadow-gray-200/80 hover:shadow-red-500/20 items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm opacity-80 group-hover/carousel:opacity-100"
          aria-label="Slide previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          type="button"
          onClick={() => handleScroll("right")}
          className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white/95 border border-gray-200 hover:border-[#e61f23] text-gray-700 hover:text-[#e61f23] shadow-lg shadow-gray-200/80 hover:shadow-red-500/20 items-center justify-center transition-all hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-sm opacity-80 group-hover/carousel:opacity-100"
          aria-label="Slide next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto py-4 px-4 sm:px-12 scroll-smooth select-none cursor-grab active:cursor-grabbing no-scrollbar"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {carouselItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[280px] sm:w-[360px] md:w-[380px] shrink-0 relative bg-gray-50/70 border border-gray-200 hover:border-[#e61f23] rounded-2xl sm:rounded-3xl p-5 sm:p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-red-500/10 flex flex-col justify-between group overflow-hidden"
            >
              <div>
                <div className="w-13 h-13 rounded-2xl bg-red-100/70 border border-red-200 group-hover:bg-[#e61f23] flex items-center justify-center mb-5 transition-colors duration-300 shadow-xs">
                  {getIndustryIcon(item.iconName)}
                </div>

                <h3 className="text-xl font-bold text-gray-950 mb-1 group-hover:text-[#e61f23] transition-colors">
                  {item.name}
                </h3>
                <p className="text-xs text-[#e61f23] font-semibold mb-3">
                  {item.tagline}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-200/80">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-500 mb-2.5">
                  Featured Capabilities
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {item.keySolutions.map((sol, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-lg bg-white border border-gray-200 text-gray-700 group-hover:border-red-200 transition-colors"
                    >
                      {sol}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
