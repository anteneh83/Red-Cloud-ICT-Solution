import React from "react";
import { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { companyData } from "@/data/company";

export const metadata: Metadata = {
  title: `Contact Us | ${companyData.name}`,
  description:
    "Get in touch with Red Cloud ICT Solutions PLC. Hotline: 8025, Email: admin@redcloud.com.et, Address: Ethiopian IT Park, Goro Road to Tulu Dimtu.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 pt-24 pb-12 bg-white">
      {/* Top Banner */}
      <section className="py-12 bg-gray-50 border-b border-gray-200 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-200 text-xs font-bold text-[#e61f23] uppercase tracking-wider mb-4">
            Hotline {companyData.contact.shortCode}
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-gray-950 tracking-tight mb-3">
            Contact <span className="text-[#e61f23]">Red Cloud</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Direct communication channels to our technical team, sales consultants, and corporate office.
          </p>
        </div>
      </section>

      {/* Embedded Contact Component */}
      <ContactSection />
    </main>
  );
}
