"use client";

import { useEffect } from "react";
import { tradeServices } from "./catalogue";
import TradeNavigation from "./trade-navigation";
import styles from "./global-trade.module.css";
import BrandLockup from "../brand-lockup";

const journey = [
  { n: "01", title: "Understand", text: "Confirm the decision, audience, outcomes and operating context." },
  { n: "02", title: "Define", text: "Shape the scope, responsibilities, evidence and success measures." },
  { n: "03", title: "Mobilise", text: "Align the right people, partners, controls and delivery plan." },
  { n: "04", title: "Deliver", text: "Execute with visibility, useful communication and accountable review." }
];

export default function GlobalTradePage() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-enter]");
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add(styles.visible); observer.unobserve(entry.target); }
    }), { threshold: .14 });
    nodes.forEach(node => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return <main className={styles.page}>
    <TradeNavigation />

    <section className={styles.hero}>
      <div className={styles.mapGrid} /><div className={styles.heroAura} />
      <div className={styles.heroCopy}>
        <p className={styles.kicker}><i /> Malaysia connected to opportunity</p>
        <h1>Clear direction.<br /><em>Confident execution.</em></h1>
        <p className={styles.heroText}>Consultancy, strategic advisory, management, personnel training and entertainment services shaped around real organisational outcomes.</p>
        <div className={styles.heroActions}><a className={styles.primary} href="/contact?interest=Global+Trade+%26+Advisory">Discuss an opportunity <span>→</span></a><a className={styles.secondary} href="#services">Explore services <span>↓</span></a></div>
        <div className={styles.signalRow}><span><b /> Advisory network active</span><span>Malaysia / International</span><span>Requirement led</span></div>
      </div>
      <TradeGlobe />
      <div className={styles.coordinate}>03.1390° N<br />101.6869° E<br /><span>KUALA LUMPUR / MY</span></div>
    </section>

    <section className={styles.tradeRail} aria-label="Global Trade and Advisory capabilities"><div>{[0, 1].map(copy => <span key={copy} aria-hidden={copy === 1 ? "true" : undefined}>{tradeServices.map(service => <span key={`${copy}-${service.slug}`}>{service.name}<i /></span>)}</span>)}</div></section>

    <section id="services" className={styles.services}>
      <div className={`${styles.sectionHead} ${styles.enter}`} data-enter><div><p className={styles.eyebrow}>01 / Professional services</p><h2>Expert support for<br /><em>decisions and delivery.</em></h2></div><p>Choose the capability closest to your requirement. Every service has its own scope, delivery path and future-ready project showcase.</p></div>
      <div className={styles.serviceGrid}>{tradeServices.map((service, index) => <a href={`/global-trade/${service.slug}`} key={service.slug} className={`${styles.serviceCard} ${styles.enter}`} style={{ "--delay": `${index * .085}s`, "--card-index": index } as React.CSSProperties} data-enter>
        <span className={styles.cardPulse} aria-hidden="true"><i /></span>
        <div className={styles.cardTop}><span>{service.number} / {String(tradeServices.length).padStart(2, "0")}</span><div className={styles.iconOrbit}><i>{service.icon}</i></div></div>
        <div className={styles.serviceStatus}><i /> Active capability</div>
        <h3>{service.name}</h3><p>{service.summary}</p>
        <div className={styles.tags}>{service.capabilities.slice(0, 3).map(tag => <span key={tag}>{tag}</span>)}</div>
        <span className={styles.serviceLink}>Explore service <b>↗</b></span>
      </a>)}</div>
    </section>

    <section id="projects" className={styles.projectFramework}>
      <div className={styles.projectHead}><div><p className={styles.eyebrow}>02 / Project showcase</p><h2>Built to present verified work beautifully.</h2></div><p>Each service page now includes a dedicated project showcase. Approved client projects can be added with the challenge, scope, delivery, outcomes and supporting media.</p></div>
      <div className={styles.projectServiceGrid}>{tradeServices.map(service => <a href={`/global-trade/${service.slug}#projects`} key={service.slug}><span>{service.number}</span><b>{service.icon}</b><h3>{service.name}</h3><p>Project display ready</p><em>Open showcase →</em></a>)}</div>
      <p className={styles.projectNote}>Only real, client-approved work will be published. No placeholder claims or invented results are displayed.</p>
    </section>

    <section className={styles.marketSection}>
      <MarketCompass />
      <div className={`${styles.marketCopy} ${styles.enter}`} data-enter><p className={styles.eyebrow}>03 / Connected perspective</p><h2>Local understanding.<br />Global perspective.</h2><p>Strong decisions depend on context. We connect strategic direction with operating realities, stakeholder expectations, capability needs and responsible execution.</p><div className={styles.marketList}><article><span>01</span><div><b>Evidence</b><small>Useful insight before resources are committed.</small></div></article><article><span>02</span><div><b>Alignment</b><small>Clear ownership across leaders, teams and partners.</small></div></article><article><span>03</span><div><b>Execution</b><small>A practical route from decision to delivery.</small></div></article></div><a className={styles.textLink} href="/contact?interest=Global+Trade+%26+Advisory">Discuss your requirement <span>→</span></a></div>
    </section>

    <section id="approach" className={styles.journey}>
      <div className={`${styles.sectionHead} ${styles.enter}`} data-enter><div><p className={styles.eyebrow}>04 / How we work</p><h2>A clearer path from question to outcome.</h2></div><p>One accountable approach that adapts to consultancy, advisory, management, training and entertainment engagements.</p></div>
      <div className={styles.journeyLine}>{journey.map((step, index) => <article key={step.n} className={`${styles.journeyStep} ${styles.enter}`} style={{ "--delay": `${index * .1}s` } as React.CSSProperties} data-enter><span>{step.n}</span><i /><h3>{step.title}</h3><p>{step.text}</p></article>)}</div>
    </section>

    <section className={`${styles.cta} ${styles.enter}`} data-enter><div className={styles.ctaMap} /><div><p className={styles.eyebrow}>Start with the requirement</p><h2>What outcome do you<br />need to create next?</h2><p>Tell us the decision, programme, capability or experience you are planning.</p></div><a className={styles.ctaButton} href="/contact?interest=Global+Trade+%26+Advisory">Start the conversation <span>↗</span></a></section>

    <footer className={styles.footer}><BrandLockup className={styles.brand} markClassName={styles.mark} section="Global Trade & Advisory" /><p>Practical expertise for better decisions, stronger teams and accountable delivery.</p><div><a href="/global-trade">Overview</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#approach">How We Work</a><a href="/contact">Contact</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a></div><small>© 2026 Digital Union Malaysia</small></footer>
  </main>;
}

function TradeGlobe() {
  const paths = ["M340 285 Q220 110 82 185", "M340 285 Q250 220 82 302", "M340 285 Q205 355 118 425", "M340 285 Q390 110 506 86", "M340 285 Q485 190 620 218", "M340 285 Q500 335 636 392", "M340 285 Q415 420 470 493"];
  return <div className={styles.globeWrap} aria-hidden="true"><svg viewBox="0 0 700 560" className={styles.globeSvg}><defs><radialGradient id="tradeSphere"><stop stopColor="#0b5270" stopOpacity=".72" /><stop offset=".55" stopColor="#06283b" stopOpacity=".75" /><stop offset="1" stopColor="#020b13" stopOpacity=".2" /></radialGradient><filter id="goldGlow"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter></defs><circle cx="350" cy="282" r="228" fill="url(#tradeSphere)" stroke="#2fb8d2" strokeOpacity=".25" /><ellipse cx="350" cy="282" rx="228" ry="82" className={styles.latitude} /><ellipse cx="350" cy="282" rx="228" ry="155" className={styles.latitude} /><ellipse cx="350" cy="282" rx="76" ry="228" className={styles.longitude} /><ellipse cx="350" cy="282" rx="158" ry="228" className={styles.longitude} /><path className={styles.land} d="M214 169l42-39 62 4 25 32-18 32 35 30-26 47-61-4-22-31-48-12-18-29zm181 30 34-36 55 9 31 43-18 29 25 28-21 36-59-17-18-31-42-25zm-9 133 48 11 32 44-27 57-55 13-32-40 7-52z" />{paths.map((path, index) => <g key={path}><path d={path} pathLength="100" className={styles.tradeRoute} style={{ "--route-delay": `${-index * .7}s` } as React.CSSProperties} /><circle r="3.5" className={styles.routeDot} filter="url(#goldGlow)"><animateMotion dur={`${4.2 + index * .3}s`} begin={`${-index * .7}s`} repeatCount="indefinite" path={path} /></circle></g>)}<circle cx="340" cy="285" r="20" className={styles.tradeHubPulse} /><circle cx="340" cy="285" r="6" className={styles.tradeHub} /></svg><div className={`${styles.globeCard} ${styles.cardAsia}`}><small>ORIGIN</small><b>MALAYSIA</b><span>Connected</span></div><div className={`${styles.globeCard} ${styles.cardGlobal}`}><small>PERSPECTIVE</small><b>GLOBAL CONTEXT</b><span>Active</span></div></div>;
}

function MarketCompass() {
  return <div className={`${styles.compass} ${styles.enter}`} data-enter aria-hidden="true"><div className={styles.compassRing}><span>N</span><span>E</span><span>S</span><span>W</span><i /><i /><i /></div><div className={styles.compassCore}><b>MY</b><small>LOCAL<br />ORIGIN</small></div><div className={`${styles.compassLabel} ${styles.labelOne}`}><b>01</b><span>EVIDENCE</span></div><div className={`${styles.compassLabel} ${styles.labelTwo}`}><b>02</b><span>ALIGNMENT</span></div><div className={`${styles.compassLabel} ${styles.labelThree}`}><b>03</b><span>DELIVERY</span></div></div>;
}
