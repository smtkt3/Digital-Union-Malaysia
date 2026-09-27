"use client";

import { FormEvent, useEffect, useState } from "react";
import { businessAddress, businessMapUrl } from "./contact-info";
import BrandLockup from "./brand-lockup";

const Arrow = () => <span className="arrow" aria-hidden="true">→</span>;

const ServiceIcon = ({ children }: { children: React.ReactNode }) => <div className="service-icon"><span className="icon-signal" aria-hidden="true" />{children}</div>;

export default function Home() {
  const [showContact, setShowContact] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const openContact = () => setShowContact(true);

  const sendContactEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const message = String(form.get("message") || "").trim();
    const subject = encodeURIComponent(`Website enquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nHow we can help:\n${message}`);
    window.location.href = `mailto:hello@digitalunion.my?subject=${subject}&body=${body}`;
    setShowContact(false);
  };

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: .12 });
    items.forEach(item => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!showContact && !mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setShowContact(false);
        setMobileMenuOpen(false);
      }
    };
    const closeOnResize = () => {
      if (window.innerWidth > 850) setMobileMenuOpen(false);
    };
    const closeOnOutsideClick = (event: MouseEvent) => {
      if (!mobileMenuOpen) return;
      const target = event.target as HTMLElement;
      if (!target.closest("header.nav")) setMobileMenuOpen(false);
    };
    if (showContact) document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("click", closeOnOutsideClick);
    window.addEventListener("resize", closeOnResize);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("click", closeOnOutsideClick);
      window.removeEventListener("resize", closeOnResize);
    };
  }, [showContact, mobileMenuOpen]);

  return (
    <main>
      <div className="aurora one" /><div className="aurora two" />
      <header className={`nav shell ${mobileMenuOpen ? "menu-open" : ""}`}>
        <BrandLockup className="brand" markClassName="logo-mark" href="#home" />
        <nav className="home-nav" aria-label="Primary navigation">
          <a className="active" href="#home">Home</a><a href="/it-solutions">IT Solutions</a><a href="/global-trade">Global Trade</a><a href="/about">About</a><a href="/contact">Contact</a>
        </nav>
        <button className="outline-btn nav-cta" onClick={openContact}>Start a conversation <Arrow /></button>
        <button className="home-menu-toggle" type="button" aria-expanded={mobileMenuOpen} aria-controls="home-mobile-menu" aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"} onClick={() => setMobileMenuOpen(open => !open)}><i /><i /><i /></button>
        <div id="home-mobile-menu" className="home-mobile-menu" aria-hidden={!mobileMenuOpen}>
          <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="/it-solutions" onClick={() => setMobileMenuOpen(false)}>IT Solutions</a>
          <a href="/global-trade" onClick={() => setMobileMenuOpen(false)}>Global Trade &amp; Advisory</a>
          <a href="/about" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
          <button type="button" onClick={() => { setMobileMenuOpen(false); openContact(); }}>Start a conversation</button>
        </div>
      </header>

      <section id="home" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Malaysia to a brighter tomorrow</p>
          <h1>Technology.<span className="hero-mobile-break"><br /></span> Trade. Strategy.<br /><em>United for Growth.</em></h1>
          <p className="lede">We help businesses move forward through intelligent technology, global commerce and strategic advisory.</p>
          <div className="hero-actions"><button className="primary-btn" onClick={openContact}>Start a conversation <Arrow /></button><a className="text-link" href="#solutions">Explore our divisions <Arrow /></a></div>
        </div>
        <div className="earth-visual">
          <div className="hero-art" aria-label="Digital Earth centred on Malaysia" />
          <EarthNetwork />
        </div>
        <p className="hero-side">People<br />Businesses<br />Opportunities<br /><b>A brighter tomorrow</b></p>
        <p className="hero-caption"><i /> A more connected<br />tomorrow</p>
        <a className="scroll-cue" href="#approach"><span /> Scroll to explore</a>
      </section>

      <section id="approach" className="trust-strip shell reveal" data-reveal aria-label="Our approach">
        <Pillar code="01" title="Intelligent Systems" label="Technology" />
        <Pillar code="02" title="Borderless Opportunity" label="Trade" />
        <Pillar code="03" title="Practical Direction" label="Strategy" />
      </section>

      <section id="solutions" className="divisions shell">
        <a className="division-card tech-card reveal" href="/it-solutions" data-reveal aria-label="Explore IT Solutions">
          <span className="division-network" aria-hidden="true"><i /><i /><i /></span>
          <span className="card-index">01 / Technology</span><div className="card-visual tech-visual" aria-hidden="true"><i /><i /><i /></div>
          <p className="eyebrow division-kicker"><i /> Systems online</p><h2>IT Solutions</h2><p>Building intelligent digital infrastructure for modern businesses.</p>
          <div className="service-list"><ServiceIcon>⌘<small>Web Development</small></ServiceIcon><ServiceIcon>▱<small>Custom Software</small></ServiceIcon><ServiceIcon>◉<small>AI &amp; Automation</small></ServiceIcon></div>
          <span className="text-link">Explore IT Solutions <Arrow /></span>
        </a>
        <a id="trade" className="division-card trade-card reveal" href="/global-trade" data-reveal aria-label="Explore Global Trade">
          <span className="division-network" aria-hidden="true"><i /><i /><i /></span>
          <span className="card-index">02 / Advisory</span><div className="card-visual trade-visual" aria-hidden="true"><i /><i /><i /></div>
          <p className="eyebrow division-kicker"><i /> Expertise connected</p><h2>Global<br />Trade &amp; Advisory</h2><p>Practical expertise for decisions, delivery, people and professionally coordinated experiences.</p>
          <div className="service-list"><ServiceIcon>◇<small>Consultancy</small></ServiceIcon><ServiceIcon>↗<small>Advisory Services</small></ServiceIcon><ServiceIcon>▦<small>Management Services</small></ServiceIcon></div>
          <span className="text-link">Explore Global Trade <Arrow /></span>
        </a>
      </section>

      <section id="about" className="why shell reveal" data-reveal>
        <div className="why-signal" aria-hidden="true"><i /><i /><i /></div>
        <div className="section-heading"><div><p className="eyebrow">What we do</p><h2>Why Digital Union</h2></div><p>We combine technology, global reach and strategic insight<br />to help businesses grow further.</p></div>
        <div className="benefits">
          <Benefit icon="▣" title="Digital Transformation" text="Modern solutions for a more efficient, connected tomorrow." />
          <Benefit icon="◎" title="Global Commerce" text="Bridging markets and creating new opportunities." />
          <Benefit icon="▥" title="Strategic Advisory" text="Practical insights for sustainable growth." />
        </div>
      </section>

      <section className="statement shell reveal" data-reveal>
        <div className="statement-orbit" aria-hidden="true"><i /><i /><i /></div><CitySkyline />
        <div className="statement-network" aria-hidden="true"><span><b>01</b><em>Systems</em><small>Connected</small></span><span><b>02</b><em>Markets</em><small>Open</small></span><span><b>03</b><em>Direction</em><small>Aligned</small></span></div>
        <div className="statement-copy">
          <p className="eyebrow">The Digital Union difference</p><h2>Built at the Intersection<br />of Technology and Commerce.</h2>
          <p>Digital Union Malaysia is a forward-looking company with one clear mission: to create real opportunities through technology, trade and strategic collaboration.</p>
          <div className="statement-signals" aria-label="Our core capabilities"><span><i /> Technology</span><span><i /> Commerce</span><span><i /> Strategy</span></div>
          <a className="text-link" href="/about">Learn more about us <Arrow /></a>
        </div>
        <p className="statement-side">Stronger<br />together<br />A brighter<br />tomorrow</p>
      </section>

      <section id="contact" className="cta shell reveal" data-reveal><div className="cta-mesh" aria-hidden="true" /><div><p className="eyebrow">Let&apos;s create what&apos;s next</p><h2>Have a challenge? Let&apos;s build the solution.</h2><p className="cta-copy">Bring us the ambition. We&apos;ll help shape the path forward.</p></div><button className="primary-btn" onClick={openContact}>Start a conversation <Arrow /></button></section>

      <footer className="shell footer"><div className="footer-grid"><div className="footer-brand"><BrandLockup className="brand" markClassName="logo-mark" href="#home" /><p>Driving growth through technology, global commerce and strategic advisory. A brighter tomorrow, together.</p><span className="footer-origin"><i /> Malaysia, connected globally</span></div><FooterLinks title="Quick links" links={["Home", "IT Solutions", "Global Trade", "About", "Contact"]} /><FooterLinks title="Our divisions" links={["IT Solutions", "Global Trade & Advisory"]} /><div className="footer-connect"><p className="footer-kicker">Let&apos;s connect</p><h3>Bring us your next move.</h3><p>Tell us where you want to go. We&apos;ll help shape the way forward.</p><a className="footer-mail" href="mailto:hello@digitalunion.my">hello@digitalunion.my <span>↗</span></a><a className="footer-address" href={businessMapUrl} target="_blank" rel="noopener noreferrer">{businessAddress}</a></div></div><div className="copyright"><span>© 2026 Digital Union Malaysia. All rights reserved.</span><span className="footer-status"><i /> Ready for what&apos;s next</span><span><a href="/privacy">Privacy Policy</a>　|　<a href="/terms">Terms of Service</a></span></div></footer>

      {showContact && <div className="modal-backdrop" role="presentation" onClick={() => setShowContact(false)}><section className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-title" aria-describedby="contact-description" onClick={e => e.stopPropagation()}><button className="close" onClick={() => setShowContact(false)} aria-label="Close contact form">×</button><p className="eyebrow">Let&apos;s talk</p><h2 id="contact-title">Start a conversation.</h2><p id="contact-description">Share your challenge and we&apos;ll prepare a ready-to-send email enquiry.</p><form onSubmit={sendContactEnquiry}><label htmlFor="contact-name">Your name</label><input id="contact-name" name="name" required autoComplete="name" autoFocus placeholder="Your name" /><label htmlFor="contact-email">Work email</label><input id="contact-email" name="email" required type="email" autoComplete="email" placeholder="name@company.com" /><label htmlFor="contact-message">How can we help?</label><textarea id="contact-message" name="message" required placeholder="Tell us about your goal or challenge" rows={4} /><p className="form-note">Submitting opens your email application so you can review the message before sending.</p><button className="primary-btn" type="submit">Open email enquiry <Arrow /></button></form></section></div>}
    </main>
  );
}

function Benefit({ icon, title, text }: { icon: string; title: string; text: string }) { return <article className="benefit"><span className="benefit-current" aria-hidden="true"><i /></span><div className="round-icon"><i aria-hidden="true" />{icon}</div><div><small className="benefit-status">Connected capability</small><h3>{title}</h3><p>{text}</p></div></article>; }
function FooterLinks({ title, links }: { title: string; links: string[] }) {
  const destinations: Record<string, string> = { Home: "/", "IT Solutions": "/it-solutions", "Global Trade": "/global-trade", "Global Trade & Advisory": "/global-trade", About: "/about", Contact: "/contact" };
  return <div><h3>{title}</h3>{links.map(link => <a key={link} href={destinations[link]}>{link}</a>)}</div>;
}
function Pillar({ code, title, label }: { code: string; title: string; label: string }) { return <article className="pillar"><i aria-hidden="true" /><span>{code}</span><div><small>{label}</small><strong>{title}</strong></div></article>; }
function CitySkyline() {
  const heights = [92, 126, 78, 166, 112, 198, 138, 88, 151, 108, 174, 96];
  return <div className="city-glow" aria-hidden="true"><div className="city-skyline">
    {heights.map((height, index) => <span key={index} className={`building ${index === 5 || index === 6 ? "twin" : ""}`} style={{ "--building-height": `${height}px` } as React.CSSProperties} />)}
    <i className="sky-bridge" />
  </div></div>;
}

function EarthNetwork() {
  // Coordinates are traced directly against the 1672×936 Earth artwork.
  // The origin is Kuala Lumpur on Peninsular Malaysia, not a regional approximation.
  // The image owns the route strokes; these paths drive only the travelling lights.
  const routes = [
    "M 1076 451 C 950 270, 805 210, 630 328",
    "M 1076 451 C 915 325, 755 325, 607 395",
    "M 1076 451 C 890 390, 760 480, 705 630",
    "M 1076 451 C 985 480, 995 610, 1029 673",
    "M 1076 451 C 1205 490, 1340 610, 1407 738",
    "M 1076 451 C 1310 445, 1515 590, 1538 750",
    "M 1076 451 C 1340 300, 1580 420, 1635 676",
    "M 1076 451 C 1220 325, 1385 360, 1450 465",
    "M 1076 451 C 1115 350, 1185 325, 1250 445",
    "M 1076 451 C 1120 245, 1245 185, 1355 220",
    "M 1076 451 C 1240 165, 1505 125, 1665 302",
    "M 1076 451 C 1200 415, 1295 475, 1335 570"
  ];
  return <svg className="earth-network" viewBox="0 0 1672 941" preserveAspectRatio="none" aria-hidden="true" focusable="false">
    <defs><radialGradient id="originGlow"><stop stopColor="#fff" /><stop offset=".18" stopColor="#4cf0ff" /><stop offset=".55" stopColor="#0b8dff" stopOpacity=".55" /><stop offset="1" stopColor="#038fff" stopOpacity="0" /></radialGradient></defs>
    <g className="route-lines">
      {routes.map((path, index) => (
        <g
          key={path}
          className="route-pair"
          style={{ "--route-duration": `${7.4 + (index % 4) * .6}s`, "--route-delay": `${-index * .92}s` } as React.CSSProperties}
        >
          <path d={path} pathLength="100" className="route-trail route-trail-blur" />
          <path d={path} pathLength="100" className="route-trail" />
          <path d={path} pathLength="100" className="route-head" />
        </g>
      ))}
    </g>
    <g className="origin">
      <circle cx="1076" cy="451" r="36" fill="url(#originGlow)" className="hub-halo" />
      <circle cx="1076" cy="451" r="12" className="hub-ripple" />
      <circle cx="1076" cy="451" r="7" className="hub-core" />
    </g>
  </svg>;
}
