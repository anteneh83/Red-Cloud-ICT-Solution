import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { companyData } from "@/data/company";
import { solutionsData } from "@/data/solutions";
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative bg-[#05070a] border-t border-slate-900 pt-16 pb-12 overflow-hidden">
      {/* Subtle ambient red gradient */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-radial-bottom pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-14 border-b border-slate-800/80">
          {/* Col 1: Brand & Contact Info */}
          <div className="lg:col-span-2 space-y-5">
            <Logo size="lg" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Empowering businesses with cutting-edge technology solutions to drive efficiency, growth, and success. Trusted digital infrastructure partner established in 2022.
            </p>

            {/* Preserved Direct Contact Details */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-3 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-[#E50914] shrink-0 mt-0.5" />
                <span>{companyData.address.full}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Phone className="w-4 h-4 text-[#E50914] shrink-0" />
                <span>Hotline: <strong className="text-white font-semibold">{companyData.contact.shortCode}</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-[#E50914] shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-white transition-colors">
                  {companyData.contact.email}
                </a>
              </div>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-3 pt-3">
              {companyData.social.linkedin && (
                <a
                  href={companyData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#E50914]/40 text-xs text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="w-3 h-3 text-[#E50914]" />
                </a>
              )}
              {companyData.social.telegram && (
                <a
                  href={companyData.social.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-[#E50914]/40 text-xs text-slate-300 hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <span>Telegram</span>
                  <ArrowUpRight className="w-3 h-3 text-[#E50914]" />
                </a>
              )}
            </div>
          </div>

          {/* Col 2: Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Core Solutions
            </h4>
            <ul className="space-y-2.5 text-sm">
              {solutionsData.map((sol) => (
                <li key={sol.id}>
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[10px] text-slate-500 group-hover:text-[#E50914] transition-colors">{sol.index}</span>
                    <span>{sol.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Red Cloud
                </Link>
              </li>
              <li>
                <Link href="/about#mission" className="text-slate-400 hover:text-white transition-colors">
                  Mission & Commitment
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-400 hover:text-white transition-colors">
                  Insights & News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Platform & Ecosystem */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Platforms & Sectors
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products" className="text-slate-400 hover:text-white transition-colors">
                  Enterprise Products
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-white transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-slate-400 hover:text-white transition-colors">
                  Partners & Alliances
                </Link>
              </li>
              <li>
                <Link href="/about#technology" className="text-slate-400 hover:text-white transition-colors">
                  Technology Ecosystem
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} {companyData.name}. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            <span className="text-slate-600">Ethiopian IT Park Hub</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
