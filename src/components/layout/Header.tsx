"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/brand/Logo";
import { navigationItems } from "@/data/navigation";
import { companyData } from "@/data/company";
import { 
  Menu, 
  X, 
  ChevronDown, 
  PhoneCall, 
  ArrowRight, 
  Server, 
  ShoppingBag, 
  CreditCard, 
  Radio, 
  Workflow 
} from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile drawer is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const getSolutionIcon = (name?: string) => {
    switch (name) {
      case "Server":
        return <Server className="w-4 h-4 text-[#e61f23]" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-4 h-4 text-[#e61f23]" />;
      case "CreditCard":
        return <CreditCard className="w-4 h-4 text-[#e61f23]" />;
      case "Radio":
        return <Radio className="w-4 h-4 text-[#e61f23]" />;
      case "Workflow":
        return <Workflow className="w-4 h-4 text-[#e61f23]" />;
      default:
        return <Server className="w-4 h-4 text-[#e61f23]" />;
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-gray-200 py-3 shadow-sm"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo (Static) */}
          <Logo />

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navigationItems.map((item) => {
              const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

              if (item.children) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                  >
                    <button
                      className={`flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? "text-[#e61f23] font-semibold"
                          : "text-gray-700 hover:text-[#e61f23]"
                      }`}
                      aria-expanded={solutionsOpen}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          solutionsOpen ? "rotate-180 text-[#e61f23]" : ""
                        }`}
                      />
                    </button>

                    {/* Solutions Dropdown Menu */}
                    {solutionsOpen && (
                      <div className="absolute top-full left-0 w-84 pt-2 z-50">
                        <div className="bg-white border border-gray-200 rounded-xl p-2.5 shadow-xl space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group flex items-start gap-3 p-2.5 rounded-lg hover:bg-gray-50 transition-all"
                            >
                              <div className="p-2 rounded-md bg-gray-100 group-hover:bg-[#e61f23]/10 transition-colors mt-0.5">
                                {getSolutionIcon(child.iconName)}
                              </div>
                              <div>
                                <div className="text-sm font-medium text-gray-900 group-hover:text-[#e61f23] transition-colors">
                                  {child.label}
                                </div>
                                <div className="text-xs text-gray-500 line-clamp-1 mt-0.5">
                                  {child.description}
                                </div>
                              </div>
                            </Link>
                          ))}
                          <div className="pt-2 mt-1 border-t border-gray-100">
                            <Link
                              href="/solutions"
                              className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-gray-700 hover:text-[#e61f23] hover:bg-gray-50 rounded-md transition-colors"
                            >
                              <span>Explore All 5 Core Solutions</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#e61f23]" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? "text-[#e61f23] font-semibold"
                      : "text-gray-700 hover:text-[#e61f23]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action & Phone Hotline */}
          <div className="hidden lg:flex items-center gap-4">
            {/* 8025 Shortcode Pill */}
            <a
              href={`tel:${companyData.contact.shortCode}`}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:border-[#e61f23]/50 text-xs font-semibold text-gray-800 transition-all"
              title="Call Red Cloud Enterprise Hotline"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#e61f23]" />
              <span>{companyData.contact.shortCode}</span>
            </a>

            {/* Get Started CTA */}
            <Link
              href="/#about"
              className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold tracking-wide"
            >
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${companyData.contact.shortCode}`}
              className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gray-100 border border-gray-200 text-xs font-medium text-gray-800 mr-1"
            >
              <PhoneCall className="w-3 h-3 text-[#e61f23]" />
              <span>{companyData.contact.shortCode}</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#e61f23]"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[65px] bg-white/98 backdrop-blur-xl z-40 lg:hidden overflow-y-auto border-t border-gray-200 shadow-lg">
          <div className="px-5 py-6 space-y-4">
            <div className="space-y-1">
              {navigationItems.map((item) => {
                const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));

                if (item.children) {
                  return (
                    <div key={item.label} className="py-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-gray-500 px-3 mb-2">
                        {item.label}
                      </div>
                      <div className="space-y-1 pl-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-gray-700 hover:text-[#e61f23] hover:bg-gray-50"
                          >
                            <div className="p-1.5 rounded bg-gray-100">
                              {getSolutionIcon(child.iconName)}
                            </div>
                            <span className="font-medium">{child.label}</span>
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "text-[#e61f23] bg-red-50 font-semibold"
                        : "text-gray-700 hover:text-[#e61f23] hover:bg-gray-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="pt-6 border-t border-gray-200 space-y-3">
              <Link
                href="/#about"
                className="btn-primary w-full flex items-center justify-center gap-2 py-3 rounded-xl text-base font-semibold"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <div className="text-center text-xs text-gray-500 pt-2">
                Ethiopian IT Park, Goro Road to Tulu Dimtu • Hotline: 8025
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
