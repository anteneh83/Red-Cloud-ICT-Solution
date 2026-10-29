"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
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

// Section mapping for home page scroll tracking
const homeSectionIds = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "products", label: "Products" },
  { id: "industries", label: "Industries" },
  { id: "partners", label: "Partners" },
  { id: "insights", label: "Insights" },
  { id: "contact", label: "Contact" },
];

function getInitialSection(path: string): string {
  if (path.startsWith("/solutions")) return "Services";
  if (path.startsWith("/products")) return "Products";
  if (path.startsWith("/industries")) return "Industries";
  if (path.startsWith("/partners")) return "Partners";
  if (path.startsWith("/insights")) return "Insights";
  if (path.startsWith("/careers")) return "Careers";
  if (path.startsWith("/contact")) return "Contact";
  if (path.startsWith("/about")) return "About";
  return "Home";
}

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>(() => getInitialSection(pathname));

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

  // Track the active section dynamically as the user scrolls or navigates
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(getInitialSection(pathname));
      return;
    }

    const checkActiveSection = () => {
      // 1. If at the top of the page
      if (window.scrollY < 120) {
        setActiveSection("Home");
        return;
      }

      // 2. If near bottom of the document
      const scrollBottom = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      if (docHeight - scrollBottom < 80) {
        setActiveSection("Contact");
        return;
      }

      // 3. Find section currently intersecting the viewport
      const offset = 180;
      const currentPos = window.scrollY + offset;
      let matched = "Home";

      for (const { id, label } of homeSectionIds) {
        const el = document.getElementById(id);
        if (el && currentPos >= el.offsetTop) {
          matched = label;
        }
      }
      setActiveSection(matched);
    };

    checkActiveSection();
    window.addEventListener("scroll", checkActiveSection, { passive: true });
    window.addEventListener("resize", checkActiveSection, { passive: true });
    return () => {
      window.removeEventListener("scroll", checkActiveSection);
      window.removeEventListener("resize", checkActiveSection);
    };
  }, [pathname]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      if (href.startsWith("/#") && pathname === "/") {
        e.preventDefault();
        const targetId = href.replace("/#", "");
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          window.history.pushState(null, "", href);
          const matched = homeSectionIds.find((s) => s.id === targetId);
          if (matched) {
            setActiveSection(matched.label);
          }
        }
      }
    },
    [pathname]
  );

  const handleMobileNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      setMobileMenuOpen(false);
      if (href.startsWith("/#") && pathname === "/") {
        e.preventDefault();
        const targetId = href.replace("/#", "");
        const element = document.getElementById(targetId);
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth" });
            window.history.pushState(null, "", href);
            const matched = homeSectionIds.find((s) => s.id === targetId);
            if (matched) {
              setActiveSection(matched.label);
            }
          }, 100);
        }
      }
    },
    [pathname]
  );

  // Close mobile menu and dropdowns on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsOpen(false);
    setMobileServicesOpen(false);
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
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-16 sm:h-20 flex items-center transition-all duration-300 ${isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm"
            : "bg-white/95 backdrop-blur-sm border-b border-gray-100"
          }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between">
            {/* Brand Logo (Static) */}
            <Logo />

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5">
              {navigationItems.map((item) => {
                const isActive = activeSection === item.label;

                if (item.children) {
                  return (
                    <div
                      key={item.label}
                      className="relative py-1"
                      onMouseEnter={() => setSolutionsOpen(true)}
                      onMouseLeave={() => setSolutionsOpen(false)}
                    >
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href)}
                        className={`relative whitespace-nowrap flex items-center gap-1 px-2.5 2xl:px-3 py-2 text-xs 2xl:text-sm font-medium rounded-md transition-colors ${isActive
                            ? "text-[#e61f23] font-semibold"
                            : "text-gray-700 hover:text-[#e61f23]"
                          }`}
                        aria-expanded={solutionsOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsOpen ? "rotate-180 text-[#e61f23]" : ""
                            }`}
                        />
                        {isActive && (
                          <motion.span
                            layoutId="activeHeaderUnderline"
                            className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#e61f23] rounded-full shadow-[0_1px_6px_rgba(230,31,35,0.4)] pointer-events-none"
                            transition={{
                              type: "spring",
                              stiffness: 380,
                              damping: 30,
                            }}
                          />
                        )}
                      </Link>

                      {/* Solutions Dropdown Menu */}
                      {solutionsOpen && (
                        <div
                          className="absolute top-full left-0 w-80 sm:w-88 pt-2 z-50"
                          onMouseEnter={() => setSolutionsOpen(true)}
                          onMouseLeave={() => setSolutionsOpen(false)}
                        >
                          <div className="bg-white/95 backdrop-blur-xl border border-gray-200/90 rounded-2xl p-2.5 shadow-2xl space-y-1">
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
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`relative whitespace-nowrap px-2.5 2xl:px-3 py-2 text-xs 2xl:text-sm font-medium rounded-md transition-colors ${isActive
                        ? "text-[#e61f23] font-semibold"
                        : "text-gray-700 hover:text-[#e61f23]"
                      }`}
                  >
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeHeaderUnderline"
                        className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-[#e61f23] rounded-full shadow-[0_1px_6px_rgba(230,31,35,0.4)] pointer-events-none"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right Action & Phone Hotline */}
            <div className="hidden xl:flex items-center gap-3 2xl:gap-4 shrink-0">
              {/* 8025 Shortcode Pill */}
              <a
                href={`tel:${companyData.contact.shortCode}`}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 hover:border-[#e61f23]/50 text-xs font-semibold text-gray-800 transition-all whitespace-nowrap"
                title="Call Red Cloud Enterprise Hotline"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#e61f23]" />
                <span>{companyData.contact.shortCode}</span>
              </a>

              {/* Get Started CTA */}
              <Link
                href="/#about"
                className="btn-primary inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs 2xl:text-sm font-semibold tracking-wide whitespace-nowrap"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile & Tablet Hamburger Button & Hotline */}
            <div className="flex items-center gap-2 xl:hidden">
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
      </header>

      {/* Mobile & Tablet Translucent Floating Dropdown (Does not cover full screen) */}
      {mobileMenuOpen && (
        <>
          {/* Subtle click-outside backdrop overlay */}
          <div
            className="fixed inset-0 top-16 sm:top-20 bg-black/20 backdrop-blur-xs z-30 xl:hidden transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Floating Translucent Menu Card */}
          <div
            className="fixed inset-x-3 sm:inset-x-6 top-[68px] sm:top-[84px] max-h-[calc(100dvh-5.5rem)] bg-white/92 backdrop-blur-xl z-40 xl:hidden overflow-y-auto rounded-2xl sm:rounded-3xl border border-gray-200/80 shadow-2xl shadow-black/15 transition-all"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div className="max-w-xl mx-auto px-4 sm:px-6 py-4 sm:py-5 space-y-4">
              {/* Primary Core Navigation */}
              <div className="space-y-1">
                {navigationItems.slice(0, 5).map((item) => {
                  const isActive = activeSection === item.label;

                  if (item.children) {
                    return (
                      <div
                        key={item.label}
                        className="rounded-xl overflow-hidden transition-all"
                        onMouseEnter={() => setMobileServicesOpen(true)}
                        onMouseLeave={() => setMobileServicesOpen(false)}
                      >
                        <button
                          type="button"
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all ${isActive || mobileServicesOpen
                              ? "text-[#e61f23] bg-red-50/80 shadow-xs border-l-2 border-[#e61f23]"
                              : "text-gray-800 hover:text-[#e61f23] hover:bg-gray-100/70"
                            }`}
                          aria-expanded={mobileServicesOpen}
                        >
                          <div className="flex items-center gap-2">
                            <span>{item.label}</span>
                            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-red-100 text-[#e61f23]">
                              5 Solutions
                            </span>
                          </div>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 text-gray-400 ${mobileServicesOpen ? "rotate-180 text-[#e61f23]" : ""
                              }`}
                          />
                        </button>

                        {/* Expandable Services Accordion (Minimizes when hover removed) */}
                        {mobileServicesOpen && (
                          <div className="mt-1 mb-2 ml-2 pl-3 border-l-2 border-red-200 space-y-1 bg-white/70 backdrop-blur-md rounded-r-xl py-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-xs font-medium text-gray-700 hover:text-[#e61f23] hover:bg-red-50/60 transition-colors"
                              >
                                <div className="p-1.5 rounded-md bg-red-50 text-[#e61f23] shrink-0">
                                  {getSolutionIcon(child.iconName)}
                                </div>
                                <span className="font-medium text-gray-900">{child.label}</span>
                              </Link>
                            ))}
                            <Link
                              href="/solutions"
                              onClick={() => setMobileMenuOpen(false)}
                              className="flex items-center justify-between px-2.5 py-1.5 text-xs font-bold text-[#e61f23] hover:underline"
                            >
                              <span>Explore All 5 Core Solutions</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={(e) => handleMobileNavClick(e, item.href)}
                      className={`block px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-colors ${isActive
                          ? "text-[#e61f23] bg-red-50 font-bold border-l-2 border-[#e61f23]"
                          : "text-gray-800 hover:text-[#e61f23] hover:bg-gray-100/70"
                        }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              {/* Secondary Company & Network 2-Column Grid */}
              <div className="pt-3 border-t border-gray-200/60">
                <div className="text-[11px] font-bold uppercase tracking-wider text-gray-400 px-3 mb-2">
                  Company &amp; Resources
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {navigationItems.slice(5).map((sec) => {
                    const isSecActive = activeSection === sec.label;
                    return (
                      <Link
                        key={sec.href}
                        href={sec.href}
                        onClick={(e) => handleMobileNavClick(e, sec.href)}
                        className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${isSecActive
                            ? "bg-red-50 text-[#e61f23] border-[#e61f23] font-bold"
                            : "bg-white/70 text-gray-700 hover:bg-white hover:text-[#e61f23] hover:border-red-200 border-gray-200/80 shadow-2xs"
                          }`}
                      >
                        <span>{sec.label}</span>
                        <ArrowRight className={`w-3 h-3 ${isSecActive ? "text-[#e61f23]" : "text-gray-400"}`} />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
