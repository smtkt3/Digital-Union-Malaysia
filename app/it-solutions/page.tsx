"use client";

import { useEffect } from "react";
import styles from "./it-solutions.module.css";
import { itServices } from "./catalogue";
import ITNavigation from "./it-navigation";
import BrandLockup from "../brand-lockup";

const services = [
  { n: "01", slug: "digital-experiences", icon: "⌘", title: "Digital Experiences", text: "High-performance websites and platforms designed to turn attention into action.", tags: ["Next.js", "Commerce", "Portals"] },
  { n: "02", slug: "custom-software", icon: "◇", title: "Custom Software", text: "Purpose-built systems that simplify complex operations and scale with your organisation.", tags: ["Web Apps", "APIs", "Automation"] },
  { n: "03", slug: "ai-automation", icon: "◉", title: "AI & Automation", text: "Intelligent workflows that remove repetitive work and unlock faster, better decisions.", tags: ["AI Agents", "RAG", "Workflows"] },
  { n: "04", slug: "cloud-engineering", icon: "⬡", title: "Cloud Engineering", text: "Secure cloud foundations engineered for resilience, speed and controlled growth.", tags: ["Architecture", "DevOps", "Migration"] },
  { n: "05", slug: "data-intelligence", icon: "◎", title: "Data Intelligence", text: "Connected data, live dashboards and practical insight for confident decision-making.", tags: ["Analytics", "BI", "Data Layer"] },
  { n: "06", slug: "technology-advisory", icon: "▦", title: "Technology Advisory", text: "Clear technical direction that aligns investments, systems and teams around outcomes.", tags: ["Roadmaps", "Audits", "Strategy"] },
  { n: "07", slug: "airline-ticketing-systems", icon: "✈", title: "Airline Ticketing Systems", text: "B2B agency portals and B2C booking experiences built around airline retailing and ticketing operations.", tags: ["B2B", "B2C", "NDC & GDS"] }
];

const process = [
  { n: "01", title: "Discover", text: "We map the challenge, users and commercial outcome." },
  { n: "02", title: "Architect", text: "We shape the experience, system and delivery roadmap." },
  { n: "03", title: "Build", text: "We deliver in focused iterations with visible progress." },
  { n: "04", title: "Evolve", text: "We measure, optimise and scale what creates value." }
];

export default function ITSolutionsPage() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-enter]");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add(styles.visible); observer.unobserve(entry.target); }
    }), { threshold: .14 });
    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return <main id="it-home" className={styles.page}>
    <ITNavigation ctaLabel="Start a project" />

    <section className={styles.hero}>
      <div className={styles.heroGrid} /><div className={styles.heroGlow} />
      <div className={styles.heroCopy}>
        <p className={styles.kicker}><i /> Digital systems for ambitious businesses</p>
        <h1>We engineer<br /><em>what&apos;s next.</em></h1>
        <p className={styles.heroText}>Strategy, software and intelligent automation, designed as one connected system to move your business forward.</p>
        <div className={styles.heroActions}><a className={styles.primary} href="/contact">Build something remarkable <span>→</span></a><a className={styles.secondary} href="#services">Explore capabilities <span>↓</span></a></div>
        <div className={styles.signalRow}><span><b /> Systems online</span><span>Malaysia / Global</span><span>Human-led. AI-enabled.</span></div>
      </div>
      <SystemVisual />
      <div className={styles.scrollMark}><span>SCROLL</span><i /></div>
    </section>

    <section className={styles.capabilityRail} aria-label="Technology capabilities"><div><span>PRODUCT STRATEGY <i /> EXPERIENCE DESIGN <i /> SOFTWARE ENGINEERING <i /> AI AUTOMATION <i /> CLOUD SYSTEMS <i /> DATA INTELLIGENCE <i /></span><span aria-hidden="true">PRODUCT STRATEGY <i /> EXPERIENCE DESIGN <i /> SOFTWARE ENGINEERING <i /> AI AUTOMATION <i /> CLOUD SYSTEMS <i /> DATA INTELLIGENCE <i /></span></div></section>

    <section id="services" className={styles.services}>
      <div className={`${styles.sectionHead} ${styles.enter}`} data-enter><div><p className={styles.eyebrow}>01 / What we build</p><h2>Technology that performs.<br /><em>Solutions that endure.</em></h2></div><p>From first idea to scaled platform, we bring strategy, design and engineering together under one accountable team.</p></div>
      <div className={styles.serviceGrid}>{services.map((service, index) => <article key={service.title} className={`${styles.serviceCard} ${styles.enter}`} style={{ "--delay": `${index * .085}s`, "--card-index": index } as React.CSSProperties} data-enter>
        <span className={styles.dataRail} aria-hidden="true"><i /><b /></span>
        <div className={styles.cardTop}><span>{service.n} / {String(services.length).padStart(2, "0")}</span><div className={styles.techIcon}><i>{service.icon}</i><b aria-hidden="true" /></div></div>
        <div className={styles.serviceStatus}><i /> System ready</div>
        <h3>{service.title}</h3><p>{service.text}</p>
        <div className={styles.tags}>{service.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
        <a href={`/it-solutions/${service.slug}`} aria-label={`View ${service.title} products`}>View product catalogue <b>↗</b></a>
      </article>)}</div>
    </section>

    <section id="products" className={styles.productIndex}>
      <div className={`${styles.sectionHead} ${styles.enter}`} data-enter><div><p className={styles.eyebrow}>02 / Product catalogue</p><h2>Clear starting points.<br /><em>Built around your needs.</em></h2></div><p>Explore all {itServices.reduce((total, service) => total + service.products.length, 0)} technology products in one place. Each product has a dedicated page with scope, deliverables, requirement-based delivery planning and a direct proposal path.</p></div>
      <div className={styles.productIndexGrid}>{itServices.map((service, serviceIndex) => <article key={service.slug} className={`${styles.productGroup} ${styles.enter}`} style={{ "--delay": `${serviceIndex * .07}s` } as React.CSSProperties} data-enter>
        <div className={styles.productGroupHead}><span>{service.number}</span><div><p>{service.eyebrow}</p><h3>{service.name}</h3></div><b>{service.icon}</b></div>
        <div className={styles.productLinks}>{service.products.map(product => <a key={product.slug} href={`/it-solutions/${service.slug}/${product.slug}`}><span>{product.code}</span><div><strong>{product.name}</strong><small>{product.tagline}</small></div><b>↗</b></a>)}</div>
        <a className={styles.groupCatalogueLink} href={`/it-solutions/${service.slug}`}>View {service.name} catalogue <span>→</span></a>
      </article>)}</div>
    </section>

    <section id="capabilities" className={styles.architecture}>
      <div className={`${styles.archCopy} ${styles.enter}`} data-enter><p className={styles.eyebrow}>03 / Connected by design</p><h2>One digital core.<br />Every system aligned.</h2><p>Great technology is not a collection of tools. It is an ecosystem where experiences, operations, intelligence and infrastructure work together.</p><ul><li><span>01</span> Modular foundations that scale</li><li><span>02</span> Secure by design, not by default</li><li><span>03</span> Built for teams to actually use</li></ul><a className={styles.textLink} href="/contact">Design your technology roadmap <span>→</span></a></div>
      <CoreVisual />
    </section>

    <section id="process" className={styles.process}>
      <div className={`${styles.sectionHead} ${styles.enter}`} data-enter><div><p className={styles.eyebrow}>04 / How we deliver</p><h2>Clarity at every step.</h2></div><p>A disciplined delivery model that keeps momentum high, decisions visible and outcomes at the centre.</p></div>
      <div className={styles.processLine}>{process.map((step, index) => <article key={step.n} className={`${styles.processStep} ${styles.enter}`} style={{ "--delay": `${index * .1}s` } as React.CSSProperties} data-enter><span>{step.n}</span><i /><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    </section>

    <section id="why-us" className={styles.principles}>
      <div className={`${styles.principleLead} ${styles.enter}`} data-enter><p className={styles.eyebrow}>The way we build</p><h2>Fast enough to matter.<br />Strong enough to last.</h2></div>
      <div className={styles.principleGrid}><article><b>01</b><h3>Outcome first</h3><p>Every decision traces back to a real business goal.</p></article><article><b>02</b><h3>Radical clarity</h3><p>No black boxes. You always know what is happening and why.</p></article><article><b>03</b><h3>Built to evolve</h3><p>Flexible systems that get better as your business grows.</p></article></div>
    </section>

    <section id="contact" className={`${styles.cta} ${styles.enter}`} data-enter><div className={styles.ctaGrid} /><div><p className={styles.eyebrow}>Your next move starts here</p><h2>Turn your boldest idea<br />into a working advantage.</h2><p>Let&apos;s explore the right technology path for your business.</p></div><a className={styles.ctaButton} href="/contact">Start the conversation <span>↗</span></a></section>

    <footer className={styles.footer}><BrandLockup className={styles.brand} markClassName={styles.mark} section="IT Solutions" /><p>Intelligent technology. Real business momentum.</p><div><a href="/it-solutions">IT Home</a><a href="#services">Services</a><a href="#products">Products</a><a href="#process">Delivery</a><a href="#why-us">Why us</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div><small>© 2026 Digital Union Malaysia</small></footer>
  </main>;
}

function SystemVisual() {
  return <div className={styles.systemVisual} aria-hidden="true"><div className={styles.orbitA} /><div className={styles.orbitB} /><div className={styles.interface}><div className={styles.windowBar}><i /><i /><i /><span>DU / INTELLIGENCE CORE</span></div><div className={styles.code}><span><b>01</b> initialise_business_core()</span><span><b>02</b> connect(data, operations)</span><span><b>03</b> automate(repetitive_work)</span><span><b>04</b> scale(opportunity)</span></div><div className={styles.graph}><i /><i /><i /><i /><i /><i /><i /></div><div className={styles.status}><span><b>98.7%</b> SYSTEM HEALTH</span><span><b>LIVE</b> INTELLIGENCE</span></div></div><div className={`${styles.floatCard} ${styles.floatOne}`}><span>AI</span><div><b>Automation layer</b><small>Active / Optimising</small></div></div><div className={`${styles.floatCard} ${styles.floatTwo}`}><span>↗</span><div><b>Growth signal</b><small>Opportunity detected</small></div></div></div>;
}

function CoreVisual() {
  return <div className={`${styles.coreVisual} ${styles.enter}`} data-enter aria-hidden="true"><div className={styles.coreRings}><div className={styles.coreNode}><span>DU</span><small>DIGITAL CORE</small></div><i /><i /><i /></div><div className={`${styles.satellite} ${styles.satOne}`}><b>EX</b><span>Experience</span></div><div className={`${styles.satellite} ${styles.satTwo}`}><b>AI</b><span>Intelligence</span></div><div className={`${styles.satellite} ${styles.satThree}`}><b>OP</b><span>Operations</span></div><div className={`${styles.satellite} ${styles.satFour}`}><b>CL</b><span>Cloud</span></div></div>;
}
