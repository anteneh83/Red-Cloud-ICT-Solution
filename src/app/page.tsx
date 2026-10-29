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
      <Hero />
      <TrustMetrics />
      <AboutSection />
      <SolutionsShowcase />
      <TechEcosystem />
      <ProductsSection />
      <IndustriesSection />
      <WhyRedCloud />
      <CaseStudiesSection />
      <PartnersSection />
      <InsightsSection />
      <ContactSection />
    </main>
  );
}
