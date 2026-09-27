"use client";

import { useEffect, useRef } from "react";
import { itServices } from "./catalogue";
import styles from "./it-navigation.module.css";
import BrandLockup from "../brand-lockup";

type ITNavigationProps = {
  ctaHref?: string;
  ctaLabel?: string;
};

const deliverySteps = [
  { number: "01", name: "Discover", text: "Goals, users and requirements" },
  { number: "02", name: "Architect", text: "Scope, system and roadmap" },
  { number: "03", name: "Build", text: "Visible, accountable delivery" },
  { number: "04", name: "Evolve", text: "Launch, measure and improve" }
];

export default function ITNavigation({ ctaHref = "/contact", ctaLabel = "Request a proposal" }: ITNavigationProps) {
  const productCount = itServices.reduce((total, service) => total + service.products.length, 0);
  const menuRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const menu = menuRef.current;
    if (!menu) return;
    const close = () => {
      if (menu.hasAttribute("open")) menu.removeAttribute("open");
    };
    const onToggle = () => {
      document.body.style.overflow = menu.hasAttribute("open") ? "hidden" : "";
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    const onResize = () => {
      if (window.innerWidth > 900) close();
    };
    const onClick = (event: MouseEvent) => {
      if (event.target === menu) close();
    };
    menu.addEventListener("toggle", onToggle);
    menu.addEventListener("click", onClick);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      menu.removeEventListener("toggle", onToggle);
      menu.removeEventListener("click", onClick);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
      document.body.style.overflow = "";
    };
  }, []);

  const closeMenu = () => menuRef.current?.removeAttribute("open");

  return <header className={styles.nav}>
    <BrandLockup className={styles.brand} markClassName={styles.mark} section="IT Solutions" ariaLabel="Digital Union Malaysia main website" />

    <nav className={styles.desktopNav} aria-label="IT Solutions navigation">
      <a className={styles.topLink} href="/it-solutions">IT Home</a>

      <div className={styles.menu}>
        <a className={styles.topLink} href="/it-solutions#services">All Services</a>
        <div className={`${styles.dropdown} ${styles.servicesDropdown}`}>
          <div className={styles.dropdownIntro}><small>Technology services</small><strong>Explore {itServices.length} connected capabilities.</strong><a href="/it-solutions#services">View all services</a></div>
          <div className={styles.serviceList}>{itServices.map(service => <a key={service.slug} href={`/it-solutions/${service.slug}`}><b>{service.number}</b><span><strong>{service.name}</strong><small>{service.eyebrow}</small></span><i>{service.icon}</i></a>)}</div>
        </div>
      </div>

      <div className={styles.menu}>
        <a className={styles.topLink} href="/it-solutions#products">Products</a>
        <div className={`${styles.dropdown} ${styles.productsDropdown}`}>
          <div className={styles.megaHead}><div><small>Product catalogue</small><strong>{productCount} clear ways to start.</strong></div><a href="/it-solutions#products">Explore the complete catalogue</a></div>
          <div className={styles.productGroups}>{itServices.map(service => <div key={service.slug}><a className={styles.groupTitle} href={`/it-solutions/${service.slug}`}><span>{service.number}</span>{service.name}</a>{service.products.map(product => <a className={styles.productLink} key={product.slug} href={`/it-solutions/${service.slug}/${product.slug}`}><span>{product.code}</span>{product.name}</a>)}</div>)}</div>
        </div>
      </div>

      <div className={styles.menu}>
        <a className={styles.topLink} href="/it-solutions#process">How We Deliver</a>
        <div className={`${styles.dropdown} ${styles.deliveryDropdown}`}><small>Requirement-based delivery</small>{deliverySteps.map(step => <a key={step.number} href="/it-solutions#process"><b>{step.number}</b><span><strong>{step.name}</strong><small>{step.text}</small></span></a>)}</div>
      </div>

      <a className={styles.topLink} href="/it-solutions#why-us">Why Us</a>
    </nav>

    <a className={styles.siteHome} href="/" aria-label="Back to the Digital Union Malaysia main website"><span>←</span><b>Main site</b></a>
    <a className={styles.cta} href={ctaHref}>{ctaLabel} <span>↗</span></a>

    <details ref={menuRef as React.RefObject<HTMLDetailsElement>} className={styles.mobileMenu}>
      <summary aria-label="Open IT Solutions menu"><i /><i /><i /></summary>
      <div className={styles.mobilePanel}>
        <div className={styles.mobilePrimary}><a href="/it-solutions" onClick={closeMenu}>IT Home</a><a href="/it-solutions#services" onClick={closeMenu}>All Services</a><a href="/it-solutions#products" onClick={closeMenu}>All Products</a><a href="/it-solutions#process" onClick={closeMenu}>How We Deliver</a><a href="/it-solutions#why-us" onClick={closeMenu}>Why Us</a></div>
        <div className={styles.mobileServices}><small>Services</small>{itServices.map(service => <a key={service.slug} href={`/it-solutions/${service.slug}`} onClick={closeMenu}><span>{service.number}</span>{service.name}</a>)}</div>
        <a className={styles.mobileCta} href={ctaHref} onClick={closeMenu}>{ctaLabel}</a>
      </div>
    </details>
  </header>;
}
