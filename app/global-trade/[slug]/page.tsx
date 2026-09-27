import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTradeService, tradeEnquiryLink, tradeServices } from "../catalogue";
import TradeNavigation from "../trade-navigation";
import { JsonLd, organisation, siteUrl } from "../../seo";
import styles from "./service.module.css";
import BrandLockup from "../../brand-lockup";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return tradeServices.map(service => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getTradeService((await params).slug);
  if (!service) return {};
  const path = `/global-trade/${service.slug}`;
  const title = `${service.name} Services in Malaysia`;
  const description = `${service.summary} Explore capabilities, delivery and future project showcases from Digital Union Malaysia.`;
  return {
    title,
    description,
    keywords: [service.name, `${service.name} Malaysia`, ...service.capabilities, "Global Trade and Advisory", "Digital Union Malaysia"],
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "en_MY", url: path, title, description, siteName: "Digital Union Malaysia" },
    twitter: { card: "summary", title, description },
    robots: { index: true, follow: true }
  };
}

export default async function TradeServicePage({ params }: PageProps) {
  const service = getTradeService((await params).slug);
  if (!service) notFound();
  const related = tradeServices.filter(item => item.slug !== service.slug).slice(0, 3);
  const serviceUrl = `${siteUrl}/global-trade/${service.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "Global Trade & Advisory", item: `${siteUrl}/global-trade` },
        { "@type": "ListItem", position: 3, name: service.name, item: serviceUrl }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${serviceUrl}/#service`,
      name: `${service.name} by Digital Union Malaysia`,
      serviceType: service.name,
      description: service.summary,
      url: serviceUrl,
      provider: { "@id": organisation["@id"] },
      areaServed: organisation.areaServed,
      audience: service.audiences.map(name => ({ "@type": "Audience", name }))
    }
  ];

  return <main className={styles.page}>
    <JsonLd data={structuredData} />
    <TradeNavigation />

    <section className={styles.hero}>
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={styles.heroCopy}>
        <a className={styles.backLink} href="/global-trade">← All Global Trade &amp; Advisory services</a>
        <p className={styles.eyebrow}>{service.number} / {service.eyebrow}</p>
        <h1>{service.name}</h1>
        <p className={styles.heroLead}>{service.summary}</p>
        <div className={styles.heroActions}><a className={styles.primary} href="#scope">Explore the scope <span>↓</span></a><a className={styles.secondary} href={tradeEnquiryLink(service)}>Discuss your requirement <span>→</span></a></div>
      </div>
      <div className={styles.heroVisual} aria-hidden="true"><div className={styles.orbit}><i /><i /><i /></div><div className={styles.core}><b>{service.icon}</b><small>{service.number} / ACTIVE</small></div><span className={styles.nodeOne}>UNDERSTAND</span><span className={styles.nodeTwo}>ALIGN</span><span className={styles.nodeThree}>DELIVER</span></div>
    </section>

    <section className={styles.capabilityRail} aria-label={`${service.name} capabilities`}><div>{service.capabilities.map(item => <span key={item}>{item}<i /></span>)}{service.capabilities.map(item => <span key={`repeat-${item}`} aria-hidden="true">{item}<i /></span>)}</div></section>

    <section id="scope" className={styles.scope}>
      <div className={styles.scopeIntro}><p className={styles.eyebrow}>Starting scope</p><h2>Defined around the outcome you need.</h2><p>{service.promise}</p></div>
      <div className={styles.deliverables}>{service.deliverables.map((item, index) => <article key={item}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item}</h3><p>Confirmed and tailored during discovery as part of the agreed {service.name.toLowerCase()} engagement.</p></article>)}</div>
    </section>

    <section className={styles.fit}><div><p className={styles.eyebrow}>Who it is built for</p><h2>Useful support for real organisational decisions.</h2></div><div className={styles.fitGrid}>{service.audiences.map((audience, index) => <article key={audience}><b>{String(index + 1).padStart(2, "0")}</b><h3>{audience}</h3><p>The engagement is shaped around your context, stakeholders, responsibilities and success measures.</p></article>)}</div></section>

    <section id="projects" className={styles.projects}>
      <div className={styles.projectsHead}><div><p className={styles.eyebrow}>Selected projects</p><h2>Proof, presented with purpose.</h2></div><p>This showcase is ready for approved {service.name.toLowerCase()} projects, including the challenge, scope, work delivered and measurable outcomes.</p></div>
      {service.projects.length > 0 ? <div className={styles.projectGrid}>{service.projects.map(project => <article key={project.slug}><span>{project.year || "PROJECT"} / {project.sector}</span><h3>{project.title}</h3><p>{project.summary}</p><ul>{project.outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}</ul>{project.client && <small>Client: {project.client}</small>}</article>)}</div> : <div className={styles.emptyProjects}><span>PROJECT SHOWCASE READY</span><h3>Verified work will be added here.</h3><p>Client names, outcomes and media will only be published after approval. The page structure is ready, so future projects can be added without changing the design.</p><a href={tradeEnquiryLink(service)}>Discuss a {service.name.toLowerCase()} engagement →</a></div>}
    </section>

    <section id="delivery" className={styles.delivery}>
      <div><p className={styles.eyebrow}>Requirement-based delivery</p><h2>A clear engagement from first question to final handover.</h2><p>Timing and investment depend on the required depth, stakeholders, information readiness, delivery responsibilities and review process.</p></div>
      <ol><li><span>01</span><div><b>Understand</b><p>Confirm the decision, outcome, audience and operating context.</p></div></li><li><span>02</span><div><b>Define</b><p>Agree scope, responsibilities, deliverables and success measures.</p></div></li><li><span>03</span><div><b>Deliver</b><p>Complete the work through visible stages and accountable reviews.</p></div></li><li><span>04</span><div><b>Handover</b><p>Close with clear outputs, ownership and recommended next actions.</p></div></li></ol>
    </section>

    <section className={styles.related}><div className={styles.relatedHead}><div><p className={styles.eyebrow}>Related capabilities</p><h2>Connect the right expertise.</h2></div><a href="/global-trade#services">View all services →</a></div><div className={styles.relatedGrid}>{related.map(item => <a href={`/global-trade/${item.slug}`} key={item.slug}><span>{item.number}</span><b>{item.icon}</b><h3>{item.name}</h3><p>{item.summary}</p><em>Explore service →</em></a>)}</div></section>

    <section className={styles.cta}><div><p className={styles.eyebrow}>Start with your requirement</p><h2>Make {service.name.toLowerCase()} useful for your organisation.</h2><p>Share the context and outcome. We will help define the right scope and next step.</p></div><a href={tradeEnquiryLink(service)}>Discuss your requirement <span>→</span></a></section>

    <footer className={styles.footer}><BrandLockup className={styles.brand} markClassName={styles.mark} section="Global Trade & Advisory" /><div><a href="/global-trade">Overview</a><a href="/global-trade#services">All Services</a><a href="#scope">Scope</a><a href="#projects">Projects</a><a href="#delivery">Delivery</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div><small>© 2026 Digital Union Malaysia</small></footer>
  </main>;
}
