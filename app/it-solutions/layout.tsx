import type { Metadata } from "next";
import { JsonLd, organisation, siteUrl } from "../seo";
import { itServices } from "./catalogue";

export const metadata: Metadata = {
  title: {
    default: "IT Solutions",
    template: "%s | IT Solutions | Digital Union Malaysia"
  },
  description: "IT solutions in Malaysia for websites, custom software, AI automation, cloud engineering, data intelligence, airline ticketing systems and technology advisory.",
  keywords: ["IT solutions Malaysia", "custom software Malaysia", "AI automation Malaysia", "cloud engineering Malaysia", "web development Malaysia", "B2B airline ticketing software", "B2C airline booking website", "technology consulting Malaysia"],
  alternates: { canonical: "/it-solutions" },
  openGraph: {
    type: "website",
    locale: "en_MY",
    url: "/it-solutions",
    title: "IT Solutions in Malaysia",
    description: "Explore software, AI, cloud, data and B2B and B2C airline ticketing solutions for ambitious organisations."
  },
  twitter: {
    card: "summary",
    title: "IT Solutions in Malaysia",
    description: "Custom software, AI automation, cloud, data, digital experience and airline ticketing services from Digital Union Malaysia."
  }
};

export default function ITSolutionsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const data = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/it-solutions/#collection`,
    name: "IT Solutions by Digital Union Malaysia",
    description: "Custom software, AI automation, cloud engineering, digital experience, data intelligence, airline ticketing and technology advisory services in Malaysia.",
    url: `${siteUrl}/it-solutions`,
    provider: { "@id": organisation["@id"] },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: itServices.length,
      itemListElement: itServices.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.name,
        url: `${siteUrl}/it-solutions/${service.slug}`
      }))
    }
  };
  return <><JsonLd data={data} />{children}</>;
}
