import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../info-components";
import styles from "../info.module.css";

export const metadata: Metadata = { title: "Terms of Service | Digital Union Malaysia", description: "Terms governing use of the Digital Union Malaysia website." };

export default function TermsPage() {
  return <main className={styles.page}><SiteHeader active="terms" /><article className={styles.legal}><header className={styles.legalHeader}><p className={styles.eyebrow}>Legal / Website use</p><h1>Terms of Service</h1><p>These terms govern your use of the Digital Union Malaysia website. By using the website, you agree to these terms.</p><span className={styles.legalMeta}>Effective 15 September 2026</span></header><div className={styles.legalBody}>
    <section><h2>1. Website purpose</h2><p>This website provides general information about Digital Union Malaysia and its technology, trade and advisory capabilities. Website content is informational and does not constitute a binding offer, professional advice or a commitment to provide services.</p></section>
    <section><h2>2. Acceptable use</h2><p>You may use the website for lawful purposes. You must not attempt to disrupt the website, gain unauthorised access, introduce malicious code, misuse its content or use it in a way that infringes another person&apos;s rights.</p></section>
    <section><h2>3. Enquiries and engagements</h2><p>Sending an enquiry does not create a client, advisory, agency or commercial relationship. Any services, deliverables, fees and responsibilities will be governed by a separate written agreement accepted by the relevant parties.</p></section>
    <section><h2>4. Intellectual property</h2><p>Unless otherwise stated, the website design, branding, copy and original visual material belong to Digital Union Malaysia or its licensors. You may view the website for personal or internal business purposes, but may not reproduce or commercially exploit its content without permission.</p></section>
    <section><h2>5. Accuracy and availability</h2><p>We aim to keep information useful and current, but do not guarantee that all content is complete, accurate or continuously available. We may update, suspend or withdraw website content without notice.</p></section>
    <section><h2>6. External links</h2><p>The website may link to third-party services. Those services are outside our control, and their terms and privacy policies apply when you use them.</p></section>
    <section><h2>7. Liability</h2><p>To the extent permitted by applicable law, Digital Union Malaysia is not liable for indirect or consequential loss arising solely from use of, or inability to use, this informational website.</p></section>
    <section><h2>8. Contact</h2><p>Questions about these terms may be sent to <a href="mailto:hello@digitalunion.my">hello@digitalunion.my</a>.</p></section>
  </div></article><SiteFooter /></main>;
}
