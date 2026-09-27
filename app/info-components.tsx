"use client";

import { useEffect, useRef } from "react";
import styles from "./info.module.css";
import { businessAddress, businessMapUrl } from "./contact-info";
import BrandLockup from "./brand-lockup";

type ActivePage = "about" | "contact" | "privacy" | "terms";

export function SiteHeader({ active }: { active?: ActivePage }) {
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
      if (window.innerWidth > 960) close();
    };
    // Backdrop is a ::before on <details>, so a backdrop tap targets the <details> itself.
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

  return (
    <header className={styles.nav}>
      <BrandLockup className={styles.brand} markClassName={styles.mark} />
      <nav className={styles.navLinks} aria-label="Primary navigation">
        <a href="/">Home</a>
        <a href="/it-solutions">IT Solutions</a>
        <a href="/global-trade">Global Trade</a>
        <a className={active === "about" ? styles.active : ""} href="/about">About</a>
        <a className={active === "contact" ? styles.active : ""} href="/contact">Contact</a>
      </nav>
      <a className={styles.navContact} href="/contact"><span>Start a conversation</span><b>→</b></a>
      <details ref={menuRef as React.RefObject<HTMLDetailsElement>} className={styles.mobileMenu}>
        <summary aria-label="Open navigation menu"><i /><i /><i /></summary>
        <div className={styles.mobilePanel}>
          <a href="/" onClick={closeMenu}>Home</a>
          <a href="/it-solutions" onClick={closeMenu}>IT Solutions</a>
          <a href="/global-trade" onClick={closeMenu}>Global Trade &amp; Advisory</a>
          <a href="/about" onClick={closeMenu}>About</a>
          <a href="/contact" onClick={closeMenu}>Contact</a>
          <a className={styles.mobileContact} href="/contact" onClick={closeMenu}>Start a conversation</a>
        </div>
      </details>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerGrid}>
        <div className={styles.footerBrand}>
          <BrandLockup className={styles.brand} markClassName={styles.mark} />
          <p>Technology, global commerce and strategic advisory, connected for a brighter tomorrow.</p>
        </div>
        <div><h3>Navigate</h3><a href="/">Home</a><a href="/about">About</a><a href="/contact">Contact</a></div>
        <div><h3>Our divisions</h3><a href="/it-solutions">IT Solutions</a><a href="/global-trade">Global Trade &amp; Advisory</a></div>
        <div className={styles.footerContact}><span>READY FOR WHAT&apos;S NEXT</span><h3>Bring us your next move.</h3><a href="mailto:hello@digitalunion.my">hello@digitalunion.my ↗</a><address><a href={businessMapUrl} target="_blank" rel="noopener noreferrer">{businessAddress}</a></address></div>
      </div>
      <div className={styles.footerBottom}>
        <span>© 2026 Digital Union Malaysia. All rights reserved.</span>
        <span><a href="/privacy">Privacy Policy</a><i /> <a href="/terms">Terms of Service</a></span>
      </div>
    </footer>
  );
}

export function PageCTA({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className={styles.pageCta}>
      <div className={styles.ctaMesh} aria-hidden="true" />
      <div><p className={styles.eyebrow}>{eyebrow}</p><h2>{title}</h2><p>{text}</p></div>
      <a href="/contact">Start a conversation <span>→</span></a>
    </section>
  );
}
