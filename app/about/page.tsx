import type { Metadata } from "next";
import { PageCTA, SiteFooter, SiteHeader } from "../info-components";
import styles from "../info.module.css";

export const metadata: Metadata = {
  title: "About | Digital Union Malaysia",
  description: "Meet Digital Union Malaysia: connecting technology, trade and strategic direction to create practical business growth."
};

export default function AboutPage() {
  return <main className={styles.page}>
    <SiteHeader active="about" />
    <section className={`${styles.hero} ${styles.inner}`}>
      <div className={styles.heroCopy}>
        <p className={styles.eyebrow}>About Digital Union Malaysia</p>
        <h1>One company.<br /><em>Three forces for growth.</em></h1>
        <p className={styles.heroLead}>We unite intelligent technology, global commerce and practical strategy to help ambitious businesses move with greater clarity and confidence.</p>
        <div className={styles.heroActions}><a className={styles.primary} href="/contact">Work with us <span>→</span></a><a className={styles.textLink} href="#story">Discover our purpose <span>↓</span></a></div>
      </div>
      <div className={styles.heroVisual} aria-hidden="true"><div className={styles.orbit}><i /><i /><i /></div><div className={styles.visualCore}><div><b>DU</b><span>CONNECTED GROWTH</span></div></div><span className={`${styles.visualLabel} ${styles.labelOne}`}>TECHNOLOGY / 01</span><span className={`${styles.visualLabel} ${styles.labelTwo}`}>COMMERCE / 02</span><span className={`${styles.visualLabel} ${styles.labelThree}`}>STRATEGY / 03</span></div>
    </section>
    <section className={styles.signalStrip}><div><b>01</b><span>Malaysia-rooted</span></div><div><b>02</b><span>Globally connected</span></div><div><b>03</b><span>Built for practical outcomes</span></div></section>
    <section className={`${styles.section} ${styles.inner}`}>
      <div className={styles.sectionHead}><div><p className={styles.eyebrow}>What makes us different</p><h2>Connected thinking.<br />Practical execution.</h2></div><p>Modern business challenges rarely fit into a single box. We connect disciplines, markets and people so each decision strengthens the whole business.</p></div>
      <div className={styles.cardGrid}><article className={styles.card}><span>01 / TECHNOLOGY</span><h3>Intelligent systems</h3><p>Digital products, software, automation and infrastructure designed around real business needs.</p></article><article className={styles.card}><span>02 / COMMERCE</span><h3>Borderless opportunity</h3><p>Trade execution, market access and operating support that turn commercial intent into movement.</p></article><article className={styles.card}><span>03 / STRATEGY</span><h3>Clear direction</h3><p>Grounded advisory that helps leaders make better choices and move forward decisively.</p></article></div>
    </section>
    <section id="story" className={styles.story}>
      <div className={styles.storyCopy}><p className={styles.eyebrow}>Our purpose</p><h2>Built at the intersection of technology and commerce.</h2><p>Digital Union Malaysia was created around a simple belief: progress happens faster when the right systems, opportunities and decisions are connected. We work as one accountable partner, from the first question to the practical path forward.</p></div>
      <div className={styles.storyPoints}><article><b>01</b><div><h3>See the whole opportunity</h3><p>We look beyond individual deliverables to understand the wider commercial outcome.</p></div></article><article><b>02</b><div><h3>Make complexity useful</h3><p>We translate difficult technology and market questions into clear next actions.</p></div></article><article><b>03</b><div><h3>Build for lasting momentum</h3><p>Our work is designed to keep creating value as the business evolves.</p></div></article></div>
    </section>
    <PageCTA eyebrow="A brighter tomorrow, together" title="Let’s create what comes next." text="Tell us where you want to go. We’ll help connect the path forward." />
    <SiteFooter />
  </main>;
}
