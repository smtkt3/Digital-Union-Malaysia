"use client";

import { FormEvent, useEffect, useState } from "react";
import { SiteFooter, SiteHeader } from "../info-components";
import { businessAddress, businessMapUrl } from "../contact-info";
import styles from "../info.module.css";

export default function ContactPage() {
  const [interest, setInterest] = useState("General enquiry");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const selectedInterest = query.get("interest");
    const service = query.get("service");
    const product = query.get("product");
    const code = query.get("code");
    if (selectedInterest) setInterest(selectedInterest);
    if (product) setMessage(`I would like to request a proposal for ${product}${code ? ` (${code})` : ""}${service ? ` under ${service}` : ""}. Please contact me to confirm the requirements, delivery plan and investment.`);
    else if (service) setMessage(`I would like to discuss a ${service} engagement. Please contact me to confirm the requirements, scope, delivery plan and investment.`);
  }, []);

  const submitEnquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const email = String(form.get("email") || "").trim();
    const interest = String(form.get("interest") || "General enquiry");
    const message = String(form.get("message") || "").trim();
    const subject = encodeURIComponent(`${interest} from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nArea: ${interest}\n\nMessage:\n${message}`);
    window.location.href = `mailto:hello@digitalunion.my?subject=${subject}&body=${body}`;
  };

  return <main className={styles.page}>
    <SiteHeader active="contact" />
    <section className={styles.contactHero}><p className={styles.eyebrow}>Start a conversation</p><h1>Let&apos;s turn ambition<br /><em>into action.</em></h1><p>Tell us what you are building, moving or solving. We&apos;ll connect you with the right path forward.</p></section>
    <section className={`${styles.contactLayout} ${styles.inner}`}>
      <div className={styles.contactOptions}>
        <a className={styles.contactCard} href="mailto:hello@digitalunion.my"><span>GENERAL ENQUIRIES</span><b>hello@digitalunion.my</b><small>Company, partnership and general questions.</small></a>
        <a className={styles.contactCard} href={businessMapUrl} target="_blank" rel="noopener noreferrer"><span>OUR OFFICE</span><b>Kuala Lumpur</b><small>{businessAddress}</small></a>
        <a className={styles.contactCard} href="mailto:hello@digitalunion.my?subject=IT%20Solutions%20enquiry"><span>IT SOLUTIONS</span><b>Build what&apos;s next</b><small>Web, software, AI, automation and digital systems.</small></a>
        <a className={styles.contactCard} href="mailto:trade@digitalunion.my"><span>GLOBAL TRADE &amp; ADVISORY</span><b>Move an opportunity</b><small>Consultancy, advisory, management, personnel training and entertainment.</small></a>
        <a className={styles.contactCard} href="https://wa.me/60146629384" target="_blank" rel="noopener noreferrer"><span>WHATSAPP</span><b>Chat with our team</b><small>For a direct conversation during business hours.</small></a>
      </div>
      <form className={styles.contactForm} onSubmit={submitEnquiry}>
        <h2>Tell us about your next move.</h2><p>Complete the form and review the prepared enquiry in your email app before sending.</p>
        <div className={styles.formGrid}>
          <div className={styles.field}><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required placeholder="Your name" /></div>
          <div className={styles.field}><label htmlFor="email">Work email</label><input id="email" name="email" type="email" autoComplete="email" required placeholder="name@company.com" /></div>
          <div className={`${styles.field} ${styles.fieldFull}`}><label htmlFor="interest">How can we help?</label><select id="interest" name="interest" value={interest} onChange={event => setInterest(event.target.value)}><option>General enquiry</option><option>IT Solutions</option><option>Global Trade &amp; Advisory</option><option>Partnership opportunity</option></select></div>
          <div className={`${styles.field} ${styles.fieldFull}`}><label htmlFor="message">Your goal or challenge</label><textarea id="message" name="message" required placeholder="Share a little context about what you want to achieve." value={message} onChange={event => setMessage(event.target.value)} /></div>
          <p className={styles.formNote}>This website does not send or store the form directly. Your email application opens so you remain in control before sending.</p>
          <button className={styles.submit} type="submit">Prepare email enquiry →</button>
        </div>
      </form>
    </section>
    <SiteFooter />
  </main>;
}
