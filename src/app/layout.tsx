import type { Metadata, Viewport } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { companyData } from "@/data/company";
import "./globals.css";

export const metadata: Metadata = {
  title: `${companyData.name} | Digital Transformation & Technology Solutions`,
  description:
    "Empowering businesses with cutting-edge technology solutions to drive efficiency, growth, and success. Data Center, FinTech, E-Commerce, VISP, and Sales Automation.",
  keywords: [
    "Red Cloud",
    "Red Cloud ICT Solutions PLC",
    "Ethiopian IT Park",
    "Data Center Ethiopia",
    "FinTech Ethiopia",
    "VISP Ethiopia",
    "E-Commerce Solutions",
    "Sales Automation",
    "Cloud Infrastructure Africa",
  ],
  authors: [{ name: companyData.name }],
  creator: companyData.name,
  publisher: companyData.name,
  metadataBase: new URL("https://redcloud.com.et"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${companyData.name} | Enterprise Digital Infrastructure`,
    description:
      "Building the digital infrastructure for tomorrow. Cloud, FinTech, VISP, E-Commerce, and Automation.",
    url: "https://redcloud.com.et",
    siteName: companyData.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${companyData.name} | Enterprise Digital Infrastructure`,
    description:
      "Building the digital infrastructure for tomorrow. Technology solutions driving efficiency, growth, and success.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col bg-white text-gray-800 antialiased selection:bg-[#e61f23] selection:text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
