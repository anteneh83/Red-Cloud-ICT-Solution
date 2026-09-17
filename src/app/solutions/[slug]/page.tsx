import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { solutionsData } from "@/data/solutions";
import { 
  Server, 
  ShoppingBag, 
  CreditCard, 
  Radio, 
  Workflow, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Zap, 
  ArrowLeft 
} from "lucide-react";

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return solutionsData.map((sol) => ({
    slug: sol.slug,
  }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);

  if (!solution) {
    return {
      title: "Solution Not Found | Red Cloud ICT Solutions PLC",
    };
  }

  return {
    title: `${solution.title} | Red Cloud ICT Solutions PLC`,
    description: solution.summary,
  };
}

export default async function SolutionDetailPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = solutionsData.find((s) => s.slug === slug);

  if (!solution) {
    notFound();
  }

  const getIcon = (name: string) => {
    switch (name) {
      case "Server":
        return <Server className="w-8 h-8 text-[#E50914]" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-8 h-8 text-[#E50914]" />;
      case "CreditCard":
        return <CreditCard className="w-8 h-8 text-[#E50914]" />;
      case "Radio":
        return <Radio className="w-8 h-8 text-[#E50914]" />;
      case "Workflow":
        return <Workflow className="w-8 h-8 text-[#E50914]" />;
      default:
        return <Server className="w-8 h-8 text-[#E50914]" />;
    }
  };

  return (
    <main className="flex-1 pt-28 pb-20">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 pb-2">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Solutions</span>
        </Link>
      </div>

      {/* Hero Section */}
      <section className="py-16 bg-radial-gradient border-b border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-3xl font-mono font-black text-[#E50914]">
              {solution.index}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-800 text-slate-300">
              {solution.category}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-[#E50914]/15 border border-[#E50914]/30">
                  {getIcon(solution.iconName)}
                </div>
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
                  {solution.title}
                </h1>
              </div>

              <p className="text-slate-300 text-lg sm:text-xl leading-relaxed">
                {solution.summary}
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-semibold"
              >
                <span>Request Solution Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Overview & Architecture Section */}
      <section className="py-20 bg-[#07090e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Detailed Overview & Capabilities */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Operational Overview
                </h2>
                <p className="text-slate-300 leading-relaxed text-base">
                  {solution.description}
                </p>
              </div>

              {/* Capabilities */}
              <div className="space-y-4 pt-4">
                <h3 className="text-xl font-bold text-white">
                  Technical Capabilities
                </h3>
                <div className="space-y-4">
                  {solution.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-6 rounded-2xl bg-[#0b0f19] border border-slate-800 space-y-2"
                    >
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#E50914]" />
                        <span>{cap.title}</span>
                      </h4>
                      <p className="text-sm text-slate-300 leading-relaxed pl-6">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Architecture & Use Cases Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              {/* Architecture Points */}
              <div className="p-7 rounded-2xl bg-[#0a0e18] border border-slate-800 space-y-4">
                <div className="flex items-center gap-2.5 text-white font-bold text-base">
                  <Cpu className="w-5 h-5 text-[#E50914]" />
                  <span>Architectural Highlights</span>
                </div>
                <div className="space-y-2.5">
                  {solution.architecturePoints.map((pt, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-slate-300 p-3 rounded-lg bg-slate-900/80 border border-slate-800 flex items-start gap-2.5"
                    >
                      <span className="text-[#E50914] font-mono">0{idx + 1}.</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Target Use Cases */}
              <div className="p-7 rounded-2xl bg-[#0a0e18] border border-slate-800 space-y-4">
                <div className="flex items-center gap-2.5 text-white font-bold text-base">
                  <Zap className="w-5 h-5 text-[#E50914]" />
                  <span>Target Industry Use Cases</span>
                </div>
                <div className="space-y-2">
                  {solution.useCases.map((uc, idx) => (
                    <div
                      key={idx}
                      className="text-xs font-medium text-slate-200 p-2.5 rounded bg-slate-900/90 border border-slate-800/80"
                    >
                      • {uc}
                    </div>
                  ))}
                </div>
              </div>

              {/* Status Note Placeholder */}
              <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60 text-center">
                <p className="text-xs text-slate-400 italic">
                  {solution.specsStatusText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="py-20 bg-[#05070a] border-t border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-white">
              Enterprise Benefits
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              Strategic advantages realized through Red Cloud architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solution.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#080c14] border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#E50914]/10 border border-[#E50914]/20 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5 text-[#E50914]" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Solution Bottom CTA */}
          <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-[#101625] to-slate-900 border border-slate-800 text-center space-y-4">
            <h3 className="text-2xl font-bold text-white">
              Ready to Deploy {solution.title}?
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              Our engineering team is stationed at the Ethiopian IT Park to assist with technical scoping, migration planning, and infrastructure provisioning.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold"
              >
                <span>Talk to a Solution Architect</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
