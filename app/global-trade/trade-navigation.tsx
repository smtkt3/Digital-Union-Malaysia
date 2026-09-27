"use client";

import { useEffect, useRef } from "react";
import { tradeServices } from "./catalogue";
import styles from "./trade-navigation.module.css";
import BrandLockup from "../brand-lockup";

export default function TradeNavigation() {
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

  return <header className={styles.nav} style={{ zIndex: 1000 }}>
    <BrandLockup className={styles.brand} markClassName={styles.mark} section="Global Trade & Advisory" />
    <nav className={styles.desktopNav} aria-label="Global Trade and Advisory navigation">
      <a className={styles.topLink} href="/global-trade">Overview</a>
      <div className={styles.menu}>
        <a className={styles.topLink} href="/global-trade#services">Services</a>
        <div className={styles.dropdown}>
          <div className={styles.dropdownIntro}><small>Connected capabilities</small><strong>{tradeServices.length} professional services.</strong><a href="/global-trade#services">View all services</a></div>
          <div className={styles.serviceList}>{tradeServices.map(service => <a key={service.slug} href={`/global-trade/${service.slug}`}><b>{service.number}</b><span><strong>{service.name}</strong><small>{service.eyebrow}</small></span><i>{service.icon}</i></a>)}</div>
        </div>
      </div>
      <a className={styles.topLink} href="/global-trade#projects">Projects</a>
      <a className={styles.topLink} href="/global-trade#approach">How We Work</a>
    </nav>
    <a className={styles.siteHome} href="/" aria-label="Back to the Digital Union Malaysia main website"><span>←</span><b>Main site</b></a>
    <a className={styles.cta} href="/contact?interest=Global+Trade+%26+Advisory">Discuss an opportunity <span>↗</span></a>
    <details ref={menuRef as React.RefObject<HTMLDetailsElement>} className={styles.mobileMenu}>
      <summary aria-label="Open Global Trade and Advisory menu"><i /><i /><i /></summary>
      <div className={styles.mobilePanel}>
        <div className={styles.mobilePrimary}><a href="/global-trade" onClick={closeMenu}>Overview</a><a href="/global-trade#services" onClick={closeMenu}>All Services</a><a href="/global-trade#projects" onClick={closeMenu}>Projects</a><a href="/global-trade#approach" onClick={closeMenu}>How We Work</a></div>
        <div className={styles.mobileServices}><small>Services</small>{tradeServices.map(service => <a key={service.slug} href={`/global-trade/${service.slug}`} onClick={closeMenu}><span>{service.number}</span>{service.name}</a>)}</div>
        <a className={styles.mobileCta} href="/contact?interest=Global+Trade+%26+Advisory" onClick={closeMenu}>Discuss an opportunity</a>
      </div>
    </details>
  </header>;
}
