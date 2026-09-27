import type { MetadataRoute } from "next";
import { itServices } from "./it-solutions/catalogue";
import { tradeServices } from "./global-trade/catalogue";
import { siteUrl } from "./seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const corePages = ["", "/it-solutions", "/global-trade", "/about", "/contact", "/privacy", "/terms"];
  const servicePages = itServices.map(service => `/it-solutions/${service.slug}`);
  const productPages = itServices.flatMap(service => service.products.map(product => `/it-solutions/${service.slug}/${product.slug}`));
  const tradeServicePages = tradeServices.map(service => `/global-trade/${service.slug}`);

  return [...corePages, ...servicePages, ...productPages, ...tradeServicePages].map(path => ({
    url: `${siteUrl}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/it-solutions" || path === "/global-trade" ? 0.9 : path.startsWith("/it-solutions/") || path.startsWith("/global-trade/") ? 0.8 : 0.6
  }));
}
