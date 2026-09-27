import { businessPostalAddress } from "./contact-info";

export const siteUrl = "https://www.digitalunion.my";

export const organisation = {
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "Digital Union Malaysia",
  url: siteUrl,
  email: "hello@digitalunion.my",
  telephone: "+60146629384",
  address: businessPostalAddress,
  areaServed: [
    { "@type": "Country", name: "Malaysia" },
    { "@type": "Place", name: "International" }
  ],
  knowsAbout: [
    "Digital strategy",
    "Custom software development",
    "Artificial intelligence automation",
    "Cloud engineering",
    "Data analytics",
    "Technology advisory",
    "B2B and B2C airline ticketing systems",
    "Business consultancy",
    "Strategic advisory",
    "Management services",
    "Training of personnel",
    "Corporate entertainment programmes"
  ]
};

export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
