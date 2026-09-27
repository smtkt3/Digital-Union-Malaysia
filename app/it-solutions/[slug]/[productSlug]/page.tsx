import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, organisation, siteUrl } from "../../../seo";
import { getITProduct, getITService, itServices, orderLink } from "../../catalogue";
import ITNavigation from "../../it-navigation";
import styles from "./product.module.css";
import BrandLockup from "../../../brand-lockup";

type PageProps = { params: Promise<{ slug: string; productSlug: string }> };

export function generateStaticParams() {
  return itServices.flatMap(service => service.products.map(product => ({ slug: service.slug, productSlug: product.slug })));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug, productSlug } = await params;
  const service = getITService(slug);
  const product = service ? getITProduct(service, productSlug) : undefined;
  if (!service || !product) return {};
  const path = `/it-solutions/${service.slug}/${product.slug}`;
  const title = `${product.name} in Malaysia`;
  const description = `${product.description} Get a requirement-based delivery plan and tailored proposal from Digital Union Malaysia.`;
  return {
    title,
    description,
    keywords: [product.name, `${product.name} Malaysia`, service.name, ...product.includes, "Digital Union Malaysia"],
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "en_MY", url: path, title, description, siteName: "Digital Union Malaysia" },
    twitter: { card: "summary", title, description },
    robots: { index: true, follow: true }
  };
}

export default async function ITProductPage({ params }: PageProps) {
  const { slug, productSlug } = await params;
  const service = getITService(slug);
  const product = service ? getITProduct(service, productSlug) : undefined;
  if (!service || !product) notFound();

  const productUrl = `${siteUrl}/it-solutions/${service.slug}/${product.slug}`;
  const siblings = service.products.filter(item => item.slug !== product.slug);
  const standardFaqs = [
    { question: `What is included in the ${product.name}?`, answer: `The starting scope includes ${product.includes.join(", ")}. We confirm the final scope with you before delivery begins.` },
    { question: `Who is the ${product.name} designed for?`, answer: `It is designed for organisations that need ${product.tagline.toLowerCase()} Digital Union Malaysia adapts the solution to your users, systems, priorities and operating environment.` },
    { question: `How long does ${product.name} delivery take?`, answer: "The delivery plan is based on your requirements, integrations, content and data readiness, review cycles and launch priorities. You receive confirmed milestones after discovery." },
    { question: `Can the ${product.name} integrate with existing systems?`, answer: "Yes. We assess the systems, APIs, security controls and data flows involved, then include suitable integrations in the proposed scope." },
    { question: "How do we get a proposal?", answer: `Request a proposal and tell us your goals. We will confirm fit, requirements, delivery milestones and investment for your ${product.name}.` }
  ];
  const faqs = [...(product.faqs ?? []), ...standardFaqs];
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "IT Solutions", item: `${siteUrl}/it-solutions` },
        { "@type": "ListItem", position: 3, name: service.name, item: `${siteUrl}/it-solutions/${service.slug}` },
        { "@type": "ListItem", position: 4, name: product.name, item: productUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${productUrl}/#service`,
      name: product.name,
      alternateName: `${product.name} by Digital Union Malaysia`,
      serviceType: `${service.name}: ${product.name}`,
      description: product.description,
      url: productUrl,
      provider: { "@id": organisation["@id"] },
      areaServed: organisation.areaServed,
      audience: { "@type": "BusinessAudience", audienceType: product.audiences?.join(", ") ?? "Businesses and organisations" },
      termsOfService: `${siteUrl}/terms`
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map(faq => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer }
      }))
    }
  ];

  return <main className={styles.page}>
    <JsonLd data={structuredData} />
    <ITNavigation ctaHref={orderLink(service, product)} />

    <section className={styles.hero}>
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={styles.heroCopy}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb"><a href="/it-solutions">IT Solutions</a><span>/</span><a href={`/it-solutions/${service.slug}`}>{service.name}</a><span>/</span><b>{product.name}</b></nav>
        <p className={styles.eyebrow}>{product.code} / {service.name}</p>
        <h1>{product.name}</h1>
        <p className={styles.tagline}>{product.tagline}</p>
        <p className={styles.lead}>{product.description}</p>
        <div className={styles.actions}><a className={styles.primary} href={orderLink(service, product)}>Request a tailored proposal <span>→</span></a><a className={styles.secondary} href="#scope">Review the scope <span>↓</span></a></div>
      </div>
      <div className={styles.productVisual} aria-hidden="true"><div className={styles.rings}><i /><i /><i /></div><div className={styles.visualCore}><strong>{service.icon}</strong><small>{product.code}</small></div><span>REQUIREMENTS</span><span>DELIVERY</span><span>OUTCOMES</span></div>
    </section>

    <section className={styles.signalBar} aria-label="Engagement summary"><span><i /> REQUIREMENT LED</span><span>{product.engagement.toUpperCase()}</span><span>MALAYSIA / INTERNATIONAL</span><span>TAILORED PROPOSAL</span></section>

    <section id="scope" className={styles.scope}>
      <div className={styles.scopeIntro}><p className={styles.eyebrow}>Starting scope</p><h2>Everything needed to move with clarity.</h2><p>The catalogue scope gives you a practical starting point. We adapt it to your business requirements, technology environment and target outcomes.</p></div>
      <div className={styles.deliverables}>
        {product.includes.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><div><h3>{item}</h3><p>Defined, designed and delivered as part of your agreed {product.name} scope.</p></div></article>)}
      </div>
    </section>

    <section className={styles.fit}>
      <div><p className={styles.eyebrow}>{product.audiences ? "Who it is built for" : "Designed around your business"}</p><h2>{product.audiences ? "Built for modern travel sellers and airline retailing teams." : "A solution shaped by requirements, not assumptions."}</h2></div>
      <div className={styles.fitGrid}>{product.audiences ? product.audiences.slice(0, 3).map((audience, index) => <article key={audience}><b>{String(index + 1).padStart(2, "0")}</b><h3>{audience}</h3><p>Configured around your commercial model, users, controls and operational responsibilities.</p></article>) : <><article><b>01</b><h3>Your operating context</h3><p>We learn how your people, customers and systems work before defining the solution.</p></article><article><b>02</b><h3>Your success measures</h3><p>Scope and priorities connect to the outcomes your organisation needs to achieve.</p></article><article><b>03</b><h3>Your future roadmap</h3><p>The delivered foundation is planned for adoption, maintainability and responsible growth.</p></article></>}</div>
    </section>

    <section id="delivery" className={styles.delivery}>
      <div className={styles.deliveryCopy}><p className={styles.eyebrow}>Requirement-based delivery</p><h2>Your plan is confirmed after discovery.</h2><p>Delivery time depends on functionality, integrations, security, content or data readiness, stakeholder reviews and launch priorities. We turn those requirements into accountable milestones before work starts.</p>{product.requirements && <div className={styles.requirements}><strong>Key inputs for planning</strong><ul>{product.requirements.map(item => <li key={item}>{item}</li>)}</ul></div>}<a href={orderLink(service, product)}>Discuss your requirements <span>→</span></a></div>
      <ol><li><span>01</span><div><b>Discovery</b><p>Goals, users, requirements and constraints.</p></div></li><li><span>02</span><div><b>Proposal</b><p>Scope, milestones, responsibilities and investment.</p></div></li><li><span>03</span><div><b>Delivery</b><p>Visible progress, reviews and quality validation.</p></div></li><li><span>04</span><div><b>Launch</b><p>Deployment, handover and next-stage roadmap.</p></div></li></ol>
    </section>

    <section id="faq" className={styles.faq}>
      <div className={styles.faqHead}><p className={styles.eyebrow}>Common questions</p><h2>{product.name} FAQs</h2><p>Clear answers for teams evaluating this solution.</p></div>
      <div className={styles.faqList}>{faqs.map(faq => <details key={faq.question}><summary>{faq.question}<span>+</span></summary><p>{faq.answer}</p></details>)}</div>
    </section>

    <section className={styles.more}>
      <div className={styles.moreHead}><div><p className={styles.eyebrow}>More in {service.name}</p><h2>Compare related products.</h2></div><a href={`/it-solutions/${service.slug}`}>View full catalogue →</a></div>
      <div className={styles.moreGrid}>{siblings.map(item => <a href={`/it-solutions/${service.slug}/${item.slug}`} key={item.slug}><span>{item.code}</span><h3>{item.name}</h3><p>{item.description}</p><b>View product →</b></a>)}</div>
    </section>

    <section className={styles.cta}><div><p className={styles.eyebrow}>Start with your requirement</p><h2>Make {product.name}<br />work for your business.</h2><p>Tell us what you need. We will return with the right scope and next step.</p></div><a href={orderLink(service, product)}>Request your proposal <span>↗</span></a></section>

    <footer className={styles.footer}><BrandLockup className={styles.brand} markClassName={styles.mark} section="IT Solutions" /><div><a href="/it-solutions">IT Home</a><a href="/it-solutions#products">All Products</a><a href={`/it-solutions/${service.slug}`}>{service.name}</a><a href="#scope">Scope</a><a href="#delivery">Delivery</a><a href="#faq">FAQ</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div><small>© 2026 Digital Union Malaysia</small></footer>
  </main>;
}
