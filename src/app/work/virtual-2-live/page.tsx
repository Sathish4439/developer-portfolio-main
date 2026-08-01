import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Virtual 2 Live App Case Study | Flutter & AI Automation — Sathish G",
  description:
    "Case study detailing Virtual 2 Live: an AI-powered shopping, VR 360, and automated customer journey mobile application built with Flutter & Dart serving 5,000+ users.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/virtual-2-live",
  },
  openGraph: {
    title: "Virtual 2 Live App Case Study | Sathish G",
    description:
      "AI-powered multi-category shopping and VR experience mobile app with 5,000+ Google Play downloads.",
    url: "https://www.sathishdev.in/work/virtual-2-live",
  },
};

export default function Virtual2LiveCaseStudy() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Virtual 2 Live Business HUB",
            "description": "AI-powered all-in-one platform for shopping, services, VR 360 content, and visual customer journey automation.",
            "author": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "url": "https://www.sathishdev.in/work/virtual-2-live"
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

        <h1 className={styles.title}>VIRTUAL 2 LIVE BUSINESS HUB</h1>
        <p className={styles.subtitle}>
          An AI-driven mobile ecosystem integrating cross-category commerce, 360 VR virtual store views, and no-code automated customer workflows into a unified Flutter application.
        </p>

        <div className={styles.metaGrid}>
          <div>
            <div className={styles.metaLabel}>CLIENT / APP</div>
            <div className={styles.metaVal}>Virtual 2 Live</div>
          </div>
          <div>
            <div className={styles.metaLabel}>ROLE</div>
            <div className={styles.metaVal}>Lead Flutter Developer</div>
          </div>
          <div>
            <div className={styles.metaLabel}>TIMELINE</div>
            <div className={styles.metaVal}>2025</div>
          </div>
          <div>
            <div className={styles.metaLabel}>METRIC</div>
            <div className={styles.metaVal}>5,000+ Downloads</div>
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <p className={styles.paragraph}>
            The Virtual 2 Live platform aimed to combine immersive commerce, virtual shop visits (360 VR), and multi-vendor service scheduling under one umbrella app. The primary hurdle was building a smooth Flutter mobile UI capable of rendering heavy 360-degree media assets without triggering frame drops or memory leaks on low-end Android devices.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution</h2>
          <p className={styles.paragraph}>
            I architected a modular Flutter solution utilizing lazy asset loading, memory-bounded image caching, and BLoC state management to isolate high-bandwidth VR render views. I integrated RESTful microservices for real-time order tracking and automated customer notifications.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack Used</h2>
          <div className={styles.tags}>
            <span className={styles.tagPill}>Flutter</span>
            <span className={styles.tagPill}>Dart</span>
            <span className={styles.tagPill}>BLoC Pattern</span>
            <span className={styles.tagPill}>VR 360 Viewers</span>
            <span className={styles.tagPill}>Node.js API</span>
            <span className={styles.tagPill}>Firebase Messaging</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Results</h2>
          <p className={styles.paragraph}>
            - Successfully published to Google Play, crossing 5,000+ active app installs.
          </p>
          <p className={styles.paragraph}>
            - Achieved stable 60 FPS scrolling and low memory footprint during 360 VR room transitions.
          </p>
        </section>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Need a High-Performance Flutter App?</h2>
          <p style={{ color: "#a1a1aa", maxWidth: "600px", margin: "0 auto 1.5rem" }}>
            Let&apos;s build a custom cross-platform mobile application engineered for speed and scale.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Get in Touch &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
