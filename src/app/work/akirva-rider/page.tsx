import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Akirva Rider App Case Study | Flutter Logistics & Route Optimization — Sathish G",
  description:
    "Case study on building Akirva Rider Partner App: a real-time logistics, dispatch, and delivery routing application built with Flutter, Dart, Google Maps, and Node.js.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/akirva-rider",
  },
  openGraph: {
    title: "Akirva Rider App Case Study | Sathish G",
    description:
      "Real-time logistics and delivery partner Flutter app with background location tracking and automated route optimization.",
    url: "https://www.sathishdev.in/work/akirva-rider",
  },
};

export default function AkirvaRiderCaseStudy() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Akirva Rider & Partner Platform",
            "description": "Real-time logistics and delivery application built with Flutter, background location tracking, and automated dispatching.",
            "author": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "url": "https://www.sathishdev.in/work/akirva-rider"
          })
        }}
      />

      <div className={styles.container}>
        <div className={styles.backLinkWrap}>
          <Link href="/work" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Work</span>
          </Link>
        </div>

        <div className={styles.badge}>CASE STUDY</div>

        <h1 className={styles.title}>AKIRVA RIDER &amp; PARTNER PLATFORM</h1>
        <p className={styles.subtitle}>
          A high-reliability delivery partner mobile application engineered with Flutter to handle real-time GPS location streaming, automated order accept/reject cycles, and driver earnings payouts.
        </p>

        <div className={styles.metaGrid}>
          <div>
            <div className={styles.metaLabel}>CLIENT / APP</div>
            <div className={styles.metaVal}>Akirva Partner</div>
          </div>
          <div>
            <div className={styles.metaLabel}>ROLE</div>
            <div className={styles.metaVal}>Flutter &amp; API Developer</div>
          </div>
          <div>
            <div className={styles.metaLabel}>TIMELINE</div>
            <div className={styles.metaVal}>2024</div>
          </div>
          <div>
            <div className={styles.metaLabel}>METRIC</div>
            <div className={styles.metaVal}>Real-Time GPS Sync</div>
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <p className={styles.paragraph}>
            Logistics applications require robust background location updates that operate continuously even when the app is minimized or the mobile screen is locked. Preserving battery efficiency while streaming GPS lat/long updates to the backend at sub-5 second intervals was the primary engineering challenge.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution</h2>
          <p className={styles.paragraph}>
            I built a native background location service isolate using Flutter&apos;s foreground service capabilities and Google Maps API SDK. The app queues location payloads locally during weak network connectivity and syncs in batches to the Node.js API, drastically reducing battery drain while keeping dispatcher maps updated.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack Used</h2>
          <div className={styles.tags}>
            <span className={styles.tagPill}>Flutter</span>
            <span className={styles.tagPill}>Dart</span>
            <span className={styles.tagPill}>Google Maps SDK</span>
            <span className={styles.tagPill}>Background Location Isolate</span>
            <span className={styles.tagPill}>Node.js &amp; Express</span>
            <span className={styles.tagPill}>Webhooks &amp; WebSockets</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Results</h2>
          <p className={styles.paragraph}>
            - Published to Google Play, serving active delivery partners across target regional hubs.
          </p>
          <p className={styles.paragraph}>
            - Reduced battery consumption by ~35% compared to naive GPS tracking setups through adaptive distance-filter updates.
          </p>
        </section>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Building a Logistics or Location-Based App?</h2>
          <p style={{ color: "#a1a1aa", maxWidth: "600px", margin: "0 auto 1.5rem" }}>
            Let&apos;s collaborate to design a real-time mobile tracking app built for enterprise stability.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Discuss Your App &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
