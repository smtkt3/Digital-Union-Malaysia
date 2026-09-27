import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getITService, itServices, orderLink } from "../catalogue";
import ITNavigation from "../it-navigation";
import { JsonLd, organisation, siteUrl } from "../../seo";
import styles from "./service.module.css";
import BrandLockup from "../../brand-lockup";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return itServices.map(service => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const service = getITService((await params).slug);
  if (!service) return {};
  const path = `/it-solutions/${service.slug}`;
  const title = `${service.name} Services in Malaysia`;
  const description = `${service.summary} Explore ${service.products.map(product => product.name).join(", ")} from Digital Union Malaysia.`;
  return {
    title,
    description,
    keywords: [service.name, `${service.name} Malaysia`, ...service.capabilities, ...service.products.map(product => product.name)],
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "en_MY", url: path, title, description, siteName: "Digital Union Malaysia" },
    twitter: { card: "summary", title, description },
    robots: { index: true, follow: true }
  };
}

export default async function ITServicePage({ params }: PageProps) {
  const service = getITService((await params).slug);
  if (!service) notFound();
  const related = itServices.filter(item => item.slug !== service.slug).slice(0, 3);
  const projects = service.projects ?? [];
  const serviceUrl = `${siteUrl}/it-solutions/${service.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
        { "@type": "ListItem", position: 2, name: "IT Solutions", item: `${siteUrl}/it-solutions` },
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
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${service.name} product catalogue`,
        itemListElement: service.products.map(product => ({
          "@type": "Offer",
          url: `${serviceUrl}/${product.slug}`,
          itemOffered: { "@type": "Service", name: product.name, description: product.description }
        }))
      }
    }
  ];

  return <main className={styles.page}>
    <JsonLd data={structuredData} />
    <ITNavigation />

    <section className={styles.hero}>
      <div className={styles.heroGrid} aria-hidden="true" />
      <div className={styles.heroCopy}>
        <a className={styles.backLink} href="/it-solutions">← All IT Solutions</a>
        <p className={styles.eyebrow}>{service.number} / {service.eyebrow}</p>
        <h1>{service.name}</h1>
        <p className={styles.heroLead}>{service.summary}</p>
        <div className={styles.heroActions}><a className={styles.primary} href="#catalogue">Explore products <span>↓</span></a><a className={styles.secondary} href="/contact">Talk to a specialist <span>→</span></a></div>
      </div>
      <div className={styles.heroSystem} aria-hidden="true"><div className={styles.orbit}><i /><i /><i /></div><div className={styles.core}><b>{service.icon}</b><small>{service.number} / ACTIVE</small></div><span className={styles.nodeOne}>DISCOVER</span><span className={styles.nodeTwo}>DELIVER</span><span className={styles.nodeThree}>EVOLVE</span></div>
    </section>

    <section className={styles.capabilityRail} aria-label={`${service.name} capabilities`}><div>{service.capabilities.map(item => <span key={item}>{item}<i /></span>)}{service.capabilities.map(item => <span key={`repeat-${item}`} aria-hidden="true">{item}<i /></span>)}</div></section>

    <section id="catalogue" className={styles.catalogue}>
      <div className={styles.sectionHead}><div><p className={styles.eyebrow}>Product catalogue</p><h2>Choose a clear place to start.</h2></div><p>Each product gives you a clear starting scope. Delivery timing and investment are tailored after discovery to match your requirements, integrations, readiness and priorities.</p></div>
      <div className={styles.productGrid}>{service.products.map((product, index) => <article className={styles.productCard} key={product.code}>
        <div className={styles.productTop}><span>{product.code}</span>{index === 0 && <b>POPULAR START</b>}</div>
        <p className={styles.productTagline}>{product.tagline}</p><h3>{product.name}</h3><p className={styles.productDescription}>{product.description}</p>
        <div className={styles.productMeta}><span><small>DELIVERY PLAN</small>{product.timeline}</span><span><small>ENGAGEMENT</small>{product.engagement}</span></div>
        <ul>{product.includes.map(item => <li key={item}><i>✓</i>{item}</li>)}</ul>
        <div className={styles.investment}><span><small>INVESTMENT</small>Tailored proposal</span><div className={styles.productActions}><a href={`/it-solutions/${service.slug}/${product.slug}`}>View details</a><a href={orderLink(service, product)}>Request proposal <b>→</b></a></div></div>
      </article>)}</div>
    </section>

    <section id="projects" className={styles.projects}>
      <div className={styles.projectsHead}><div><p className={styles.eyebrow}>Selected projects</p><h2>Work that proves the capability.</h2></div><p>This showcase is ready for approved {service.name.toLowerCase()} projects, including the challenge, solution, delivery and measurable outcomes.</p></div>
      {projects.length > 0 ? <div className={styles.projectGrid}>{projects.map(project => <article key={project.slug}><span>{project.year || "PROJECT"} / {project.sector}</span><h3>{project.title}</h3><p>{project.summary}</p><ul>{project.outcomes.map(outcome => <li key={outcome}>{outcome}</li>)}</ul>{project.client && <small>Client: {project.client}</small>}</article>)}</div> : <div className={styles.emptyProjects}><span>PROJECT SHOWCASE READY</span><h3>Verified work will be added here.</h3><p>Client names, results and media will only be published after approval. The section is ready for future projects without changing the page design.</p><a href="/contact">Discuss a {service.name.toLowerCase()} project →</a></div>}
    </section>

    <section id="delivery" className={styles.delivery}>
      <div><p className={styles.eyebrow}>How your order moves</p><h2>Clear from first conversation to launch.</h2><p>{service.promise}</p></div>
      <ol><li><span>01</span><div><b>Select</b><p>Choose the product closest to your goal or bring us your exact requirement.</p></div></li><li><span>02</span><div><b>Discover</b><p>We confirm users, scope, integrations, priorities and delivery constraints.</p></div></li><li><span>03</span><div><b>Plan</b><p>You receive a requirement-based delivery plan, milestones and tailored proposal.</p></div></li><li><span>04</span><div><b>Deliver</b><p>We build, validate, launch and hand over in visible, accountable stages.</p></div></li></ol>
    </section>

    <section className={styles.related}><div className={styles.relatedHead}><div><p className={styles.eyebrow}>Explore more capabilities</p><h2>Build the complete system.</h2></div><a href="/it-solutions">View all IT Solutions →</a></div><div className={styles.relatedGrid}>{related.map(item => <a href={`/it-solutions/${item.slug}`} key={item.slug}><span>{item.number}</span><b>{item.icon}</b><h3>{item.name}</h3><p>{item.summary}</p><em>View products →</em></a>)}</div></section>

    <section className={styles.cta}><div><p className={styles.eyebrow}>Ready to move?</p><h2>Choose a product or bring us the challenge.</h2><p>We will help you identify the strongest starting point.</p></div><a href="/contact">Start a conversation <span>→</span></a></section>

    <footer className={styles.footer}><BrandLockup className={styles.brand} markClassName={styles.mark} section="IT Solutions" /><div><a href="/it-solutions">IT Home</a><a href="/it-solutions#services">All Services</a><a href="/it-solutions#products">All Products</a><a href="#catalogue">This Catalogue</a><a href="#projects">Projects</a><a href="#delivery">Delivery</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div><small>© 2026 Digital Union Malaysia</small></footer>
  </main>;
}
