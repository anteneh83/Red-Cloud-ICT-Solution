import React from "react";
import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { companyData } from "@/data/company";
import { solutionsData } from "@/data/solutions";
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react";
import { SocialIcons } from "@/components/ui/SocialIcons";

export function Footer() {
  return (
    <footer className="relative bg-gray-50 border-t border-gray-200 pt-16 pb-12 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-gray-200">
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" />
            <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
              Empowering businesses with cutting-edge technology solutions to drive efficiency, growth, and success. Trusted digital transformation partner established in 2022.
            </p>

            <div className="space-y-2.5 pt-2">
              <div className="flex items-start gap-3 text-xs text-gray-600">
                <MapPin className="w-4 h-4 text-[#e61f23] shrink-0 mt-0.5" />
                <span>{companyData.address.full}</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-600">
                <Phone className="w-4 h-4 text-[#e61f23] shrink-0" />
                <span>Hotline: <strong className="text-gray-900 font-bold">{companyData.contact.shortCode}</strong></span>
              </div>
              <div className="flex items-center gap-3 text-xs text-gray-600">
                <Mail className="w-4 h-4 text-[#e61f23] shrink-0" />
                <a href={`mailto:${companyData.contact.email}`} className="hover:text-[#e61f23] transition-colors">
                  {companyData.contact.email}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <SocialIcons />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {solutionsData.map((sol) => (
                <li key={sol.id}>
                  <Link
                    href={`/solutions/${sol.slug}`}
                    className="text-gray-600 hover:text-[#e61f23] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="text-[10px] text-gray-400 group-hover:text-[#e61f23] transition-colors">{sol.index}</span>
                    <span>{sol.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-gray-600 hover:text-[#e61f23] transition-colors">
                  About Red Cloud
                </Link>
              </li>
              <li>
                <Link href="/about#mission" className="text-gray-600 hover:text-[#e61f23] transition-colors">
                  Mission & Commitment
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 hover:text-[#e61f23] transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-600 hover:text-[#e61f23] transition-colors">
                  Insights & News
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#e61f23] transition-colors">
                  Contact & Support
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-900">
              Platforms & Sectors
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/products" className="text-gray-600 hover:text-[#e61f23] transition-colors">
                  Enterprise Products
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-600 hover:text-[#e61f23] transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-gray-600 hover:text-[#e61f23] transition-colors">
                  Partners & Alliances
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-[#e61f23] transition-colors">
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {companyData.name}. All Rights Reserved.
          </div>
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-6">
            <span className="hover:text-gray-700 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-gray-700 cursor-pointer">Terms of Service</span>
            <span className="text-gray-400">Ethiopian IT Park</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
