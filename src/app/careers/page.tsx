import React from "react";
import { Metadata } from "next";
import { careerDepartments, openVacanciesNotice } from "@/data/careers";
import { companyData } from "@/data/company";
import { Briefcase, Mail, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: `Careers | ${companyData.name}`,
  description:
    "Explore career and engineering opportunities at Red Cloud ICT Solutions PLC, Ethiopian IT Park hub.",
};

export default function CareersPage() {
  return (
    <main className="flex-1 pt-24 pb-20 bg-white">
      <section className="py-12 sm:py-16 bg-gray-50 border-b border-gray-200 text-center">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-4">
            Talent & Culture
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-gray-950 tracking-tight mb-3">
            Build With <span className="text-[#e61f23]">Red Cloud</span>
          </h1>
          <p className="text-gray-600 text-sm sm:text-lg max-w-2xl mx-auto">
            {openVacanciesNotice.description}
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gray-50 border border-gray-200 text-center space-y-4 max-w-3xl mx-auto mb-12 sm:mb-16 shadow-xs">
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-200 flex items-center justify-center mx-auto">
              <Briefcase className="w-6 h-6 text-[#e61f23]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-950">
              {openVacanciesNotice.headline}
            </h2>
            <p className="text-gray-600 text-xs sm:text-sm max-w-xl mx-auto">
              {openVacanciesNotice.statusMessage}
            </p>
            <div className="pt-2">
              <a
                href={`mailto:${openVacanciesNotice.inquiryEmail}?subject=Talent Inquiry - Red Cloud ICT Solutions`}
                className="btn-secondary inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3 rounded-xl text-xs font-semibold uppercase tracking-wider w-full sm:w-auto text-center"
              >
                <Mail className="w-4 h-4 text-[#e61f23] shrink-0" />
                <span className="truncate">Submit Resume ({openVacanciesNotice.inquiryEmail})</span>
              </a>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-950">
              Our Core Engineering Disciplines
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm mt-1">
              Teams operating across our Ethiopian IT Park facility and remote collaborative units.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
            {careerDepartments.map((dept, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-7 rounded-xl sm:rounded-2xl bg-gray-50 border border-gray-200 space-y-2 shadow-xs"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#e61f23] shrink-0" />
                  <h4 className="text-sm sm:text-base font-bold text-gray-950">{dept.name}</h4>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed pl-8">
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
