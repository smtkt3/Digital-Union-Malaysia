import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../info-components";
import styles from "../info.module.css";

export const metadata: Metadata = { title: "Privacy Policy | Digital Union Malaysia", description: "Digital Union Malaysia website privacy policy." };

export default function PrivacyPage() {
  return <main className={styles.page}><SiteHeader active="privacy" /><article className={styles.legal}><header className={styles.legalHeader}><p className={styles.eyebrow}>Legal / Privacy</p><h1>Privacy Policy</h1><p>This policy explains how information is handled when you visit this website or choose to contact Digital Union Malaysia.</p><span className={styles.legalMeta}>Effective 15 September 2026</span></header><div className={styles.legalBody}>
    <section><h2>1. Information you choose to provide</h2><p>When you contact us by email, WhatsApp or another channel, we receive the information you choose to share, such as your name, contact details, organisation and enquiry. The website enquiry form prepares a message in your own email application; it does not submit the form to a website database.</p></section>
    <section><h2>2. Technical information</h2><p>Standard hosting and security systems may process limited technical information such as browser type, device type, requested pages, timestamps and IP address. This information may be used to operate, secure and improve the website.</p></section>
    <section><h2>3. How information is used</h2><ul><li>To respond to enquiries and provide requested information.</li><li>To evaluate potential projects, services or partnerships.</li><li>To maintain website reliability, security and performance.</li><li>To meet applicable legal and regulatory obligations.</li></ul></section>
    <section><h2>4. Sharing and retention</h2><p>We do not sell personal information. Information may be shared with service providers when necessary to operate our business or website, or when required by law. We retain information only for as long as reasonably necessary for the purpose it was collected and any applicable obligations.</p></section>
    <section><h2>5. External services</h2><p>Links to email, WhatsApp and other third-party services are governed by those providers&apos; own privacy practices. You should review their policies before providing information through those services.</p></section>
    <section><h2>6. Your choices</h2><p>You may ask us to access, correct or delete personal information that we hold, subject to applicable law and legitimate record-keeping requirements.</p></section>
    <section><h2>7. Contact</h2><p>For privacy questions or requests, contact <a href="mailto:hello@digitalunion.my">hello@digitalunion.my</a>.</p></section>
  </div></article><SiteFooter /></main>;
}
