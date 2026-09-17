import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { careerDepartments, openVacanciesNotice } from "@/data/careers";
import { companyData } from "@/data/company";
import { Briefcase, ArrowRight, Mail, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `Careers | ${companyData.name}`,
  description:
    "Explore career and engineering opportunities at Red Cloud ICT Solutions PLC, Ethiopian IT Park hub.",
};

export default function CareersPage() {
  return (
    <main className="flex-1 pt-28 pb-20">
      <section className="py-16 bg-radial-gradient border-b border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-xs font-semibold text-[#E50914] uppercase tracking-wider mb-4">
            Talent & Culture
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-4">
            BUILD WITH <span className="text-gradient-red">RED CLOUD</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            {openVacanciesNotice.description}
          </p>
        </div>
      </section>

      <section className="py-20 bg-[#07090e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Vacancies Notice Banner (Strict Rule Adherence) */}
          <div className="p-8 rounded-3xl bg-[#090d15] border border-slate-800 text-center space-y-4 max-w-3xl mx-auto mb-16 shadow-2xl">
            <div className="w-12 h-12 rounded-2xl bg-[#E50914]/10 border border-[#E50914]/30 flex items-center justify-center mx-auto">
              <Briefcase className="w-6 h-6 text-[#E50914]" />
            </div>
            <h2 className="text-2xl font-bold text-white">
              {openVacanciesNotice.headline}
            </h2>
            <p className="text-slate-300 text-sm max-w-xl mx-auto">
              {openVacanciesNotice.statusMessage}
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${openVacanciesNotice.inquiryEmail}?subject=Talent Inquiry - Red Cloud ICT Solutions`}
                className="btn-secondary inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider"
              >
                <Mail className="w-4 h-4 text-[#E50914]" />
                <span>Submit General Talent Resume ({openVacanciesNotice.inquiryEmail})</span>
              </a>
            </div>
          </div>

          {/* Department Areas */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-bold text-white">
              Our Core Engineering Disciplines
            </h3>
            <p className="text-slate-400 text-sm mt-1">
              Teams operating across our Ethiopian IT Park facility and remote collaborative units.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {careerDepartments.map((dept, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#0a0e18] border border-slate-800 space-y-2"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E50914] shrink-0" />
                  <h4 className="text-base font-bold text-white">{dept.name}</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-8">
                  {dept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
