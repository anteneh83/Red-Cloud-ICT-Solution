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
        return <Server className="w-8 h-8 text-[#e61f23]" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-8 h-8 text-[#e61f23]" />;
      case "CreditCard":
        return <CreditCard className="w-8 h-8 text-[#e61f23]" />;
      case "Radio":
        return <Radio className="w-8 h-8 text-[#e61f23]" />;
      case "Workflow":
        return <Workflow className="w-8 h-8 text-[#e61f23]" />;
      default:
        return <Server className="w-8 h-8 text-[#e61f23]" />;
    }
  };

  return (
    <main className="flex-1 pt-24 pb-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 pt-4 sm:pt-6 pb-2">
        <Link
          href="/solutions"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-[#e61f23] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to All Solutions</span>
        </Link>
      </div>

      <section className="py-10 sm:py-14 bg-gray-50 border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl sm:text-3xl font-mono font-black text-[#e61f23]">
              {solution.index}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white border border-gray-200 text-gray-700">
              {solution.category}
            </span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div className="max-w-3xl space-y-3 sm:space-y-4">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3.5 rounded-xl sm:rounded-2xl bg-red-50 border border-red-200 shrink-0">
                  {getIcon(solution.iconName)}
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight">
                  {solution.title}
                </h1>
              </div>

              <p className="text-gray-600 text-base sm:text-lg lg:text-xl leading-relaxed">
                {solution.summary}
              </p>
            </div>

            <div className="shrink-0 pt-2 lg:pt-0">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl text-sm sm:text-base font-semibold w-full sm:w-auto"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-2.5 sm:space-y-3">
                <h2 className="text-xl sm:text-3xl font-bold text-gray-950">
                  Operational Overview
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                  {solution.description}
                </p>
              </div>

              <div className="space-y-3 sm:space-y-4 pt-2">
                <h3 className="text-lg sm:text-xl font-bold text-gray-950">
                  Technical Capabilities
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {solution.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 space-y-1.5 sm:space-y-2"
                    >
                      <h4 className="text-sm sm:text-base font-bold text-gray-950 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#e61f23] shrink-0" />
                        <span>{cap.title}</span>
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pl-6">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2.5 text-gray-950 font-bold text-sm sm:text-base">
                  <Cpu className="w-5 h-5 text-[#e61f23]" />
                  <span>Architectural Highlights</span>
                </div>
                <div className="space-y-2.5">
                  {solution.architecturePoints.map((pt, idx) => (
                    <div
                      key={idx}
                      className="text-xs text-gray-700 p-3 rounded-lg bg-white border border-gray-200 flex items-start gap-2.5"
                    >
                      <span className="text-[#e61f23] font-mono font-bold">0{idx + 1}.</span>
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2.5 text-gray-950 font-bold text-sm sm:text-base">
                  <Zap className="w-5 h-5 text-[#e61f23]" />
                  <span>Target Industry Use Cases</span>
                </div>
                <div className="space-y-2">
                  {solution.useCases.map((uc, idx) => (
                    <div
                      key={idx}
                      className="text-xs font-medium text-gray-700 p-2.5 rounded-lg bg-white border border-gray-200"
                    >
                      • {uc}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
                <p className="text-xs text-gray-500 italic">
                  {solution.specsStatusText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-950">
              Enterprise Benefits
            </h2>
            <p className="text-gray-600 mt-2 text-xs sm:text-sm">
              Strategic advantages realized through Red Cloud architecture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {solution.benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-white border border-gray-200 flex flex-col justify-between shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-red-50 border border-red-200 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5 text-[#e61f23]" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-950 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 p-6 sm:p-10 rounded-2xl sm:rounded-3xl bg-white border border-gray-200 text-center space-y-3 sm:space-y-4 shadow-sm">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-950">
              Ready to Deploy {solution.title}?
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
              Our engineering team is stationed at the Ethiopian IT Park to assist with technical scoping, migration planning, and infrastructure provisioning.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 rounded-xl text-sm font-semibold w-full sm:w-auto"
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
