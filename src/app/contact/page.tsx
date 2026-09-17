import React from "react";
import { Metadata } from "next";
import { ContactSection } from "@/components/home/ContactSection";
import { companyData } from "@/data/company";
import { Phone, Mail, MapPin, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: `Contact & Support | ${companyData.name}`,
  description:
    "Get in touch with Red Cloud ICT Solutions PLC. Hotline: 8025, Email: admin@redcloud.com.et, Address: Ethiopian IT Park, Goro Road to Tulu Dimtu.",
};

export default function ContactPage() {
  return (
    <main className="flex-1 pt-28 pb-12">
      {/* Top Banner */}
      <section className="py-12 bg-radial-gradient border-b border-slate-900 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E50914]/10 border border-[#E50914]/30 text-xs font-semibold text-[#E50914] uppercase tracking-wider mb-4">
            Hotline {companyData.contact.shortCode}
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-3">
            ENTERPRISE <span className="text-gradient-red">CONTACT HUB</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">
            Direct communication channels to our solution architects, technical support engineers, and corporate leadership.
          </p>
        </div>
      </section>

      {/* Embedded Contact Component */}
      <ContactSection />
    </main>
  );
}
