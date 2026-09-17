import { MetadataRoute } from "next";
import { solutionsData } from "@/data/solutions";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://redcloud.com.et";

  const routes = [
    "",
    "/about",
    "/solutions",
    "/products",
    "/industries",
    "/partners",
    "/insights",
    "/careers",
    "/contact",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const solutionRoutes = solutionsData.map((sol) => ({
    url: `${baseUrl}/solutions/${sol.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  return [...routes, ...solutionRoutes];
}
