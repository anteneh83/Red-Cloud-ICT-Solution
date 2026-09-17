import React from "react";
import { Hero } from "@/components/hero/Hero";
import { TrustMetrics } from "@/components/home/TrustMetrics";
import { AboutSection } from "@/components/home/AboutSection";
import { SolutionsShowcase } from "@/components/home/SolutionsShowcase";
import { TechEcosystem } from "@/components/home/TechEcosystem";
import { ProductsSection } from "@/components/home/ProductsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyRedCloud } from "@/components/home/WhyRedCloud";
import { CaseStudiesSection } from "@/components/home/CaseStudiesSection";
import { PartnersSection } from "@/components/home/PartnersSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { ContactSection } from "@/components/home/ContactSection";

export default function HomePage() {
  return (
    <main className="flex-1">
      {/* 01. Hero with 3D Infrastructure Network */}
      <Hero />

      {/* 02. Trust & Metrics Bar */}
      <TrustMetrics />

      {/* 03. About Red Cloud & Strategic Commitments */}
      <AboutSection />

      {/* 04. Core Solutions Interactive Showcase */}
      <SolutionsShowcase />

      {/* 05. Technology Ecosystem Layered Architecture */}
      <TechEcosystem />

      {/* 06. Enterprise Software Products */}
      <ProductsSection />

      {/* 07. Industry Ecosystems */}
      <IndustriesSection />

      {/* 08. Why Red Cloud Value Pillars */}
      <WhyRedCloud />

      {/* 09. Case Studies & Real Implementations */}
      <CaseStudiesSection />

      {/* 10. Partners & Collaboration Wall */}
      <PartnersSection />

      {/* 11. Insights & Thought Leadership */}
      <InsightsSection />

      {/* 12. Enterprise Contact Form & Geographic Coordinates */}
      <ContactSection />
    </main>
  );
}
