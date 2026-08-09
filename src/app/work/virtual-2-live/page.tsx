import type { Metadata } from "next";
import Link from "next/link";
import styles from "../akirva-rider/page.module.css";

export const metadata: Metadata = {
  title: "Virtual 2 Live — AI Shopping & VR 360 Platform | Flutter Case Study | Sathish G",
  description:
    "Case study on building Virtual 2 Live: an AI-powered shopping, VR 360 content, virtual trial room, and no-code customer journey automation platform built with Flutter & Node.js by Sathish G.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/virtual-2-live",
  },
  openGraph: {
    title: "Virtual 2 Live — AI Shopping & VR 360 Platform | Sathish G",
    description:
      "AI-powered virtual shopping, VR 360 viewer, and no-code customer journey Flutter mobile app with 5,000+ downloads.",
    url: "https://www.sathishdev.in/work/virtual-2-live",
  },
};

export default function Virtual2LiveCaseStudy() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "CreativeWork",
              "name": "Virtual 2 Live Business HUB",
              "description": "AI-powered all-in-one platform for shopping, services, VR 360 content, virtual trial rooms, and visual no-code customer journey automation built with Flutter.",
              "author": {
                "@type": "Person",
                "name": "Sathish G",
                "url": "https://www.sathishdev.in"
              },
              "url": "https://www.sathishdev.in/work/virtual-2-live"
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.sathishdev.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Work",
                  "item": "https://www.sathishdev.in/work"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Virtual 2 Live",
                  "item": "https://www.sathishdev.in/work/virtual-2-live"
                }
              ]
            }
          ])
        }}
      />

      <div className={styles.container}>
        <div className={styles.backLinkWrap}>
          <Link href="/work" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Work</span>
          </Link>
        </div>

        <div className={styles.badge}>CASE STUDY — AI &amp; VR PLATFORM</div>

        <h1 className={styles.title}>VIRTUAL 2 LIVE BUSINESS HUB</h1>
        <p className={styles.subtitle}>
          An AI-powered all-in-one platform for shopping, local services, 360-degree virtual reality content, virtual trial rooms, and visual no-code customer journey automation engineered with Flutter.
        </p>

        <div className={styles.metaGrid}>
          <div>
            <div className={styles.metaLabel}>APP / CLIENT</div>
            <div className={styles.metaVal}>Virtual 2 Live</div>
          </div>
          <div>
            <div className={styles.metaLabel}>ROLE</div>
            <div className={styles.metaVal}>Flutter &amp; Mobile Architect</div>
          </div>
          <div>
            <div className={styles.metaLabel}>TIMELINE</div>
            <div className={styles.metaValue} style={{ color: "#fff" }}>2025</div>
          </div>
          <div>
            <div className={styles.metaLabel}>METRIC</div>
            <div className={styles.metaVal}>5,000+ Downloads</div>
          </div>
        </div>

        {/* 1. The Challenge */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <p className={styles.paragraph}>
            E-commerce and local service booking platforms often struggle with flat 2D product catalog presentation. Virtual 2 Live set out to transform online shopping into an immersive virtual experience — combining 360-degree VR store tours, virtual try-on rooms, interactive vendor bookings, and an automated visual no-code journey builder for business owners.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "1rem" }}>
            Rendering 360-degree panoramic VR views and AI-driven trial rooms on cross-platform mobile devices without frame drops or high memory consumption required an expert <strong>live streaming app flutter developer in India</strong> capable of optimizing heavy graphics workloads within Dart.
          </p>
        </section>

        {/* 2. The Solution I Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution I Built</h2>
          <p className={styles.paragraph}>
            I built the cross-platform Flutter application for Virtual 2 Live, focusing on smooth 60fps rendering, custom WebGL/OpenGL integration wrappers, and clean BLoC state management:
          </p>
          <p className={styles.paragraph} style={{ marginTop: "1rem" }}>
            &bull; <strong>VR 360 Viewer:</strong> Embedded panoramic gyroscope-enabled image &amp; video viewer allowing shoppers to explore retail showrooms virtually.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "0.5rem" }}>
            &bull; <strong>No-Code Journey Builder:</strong> Visual workflow interface enabling non-technical store owners to construct automated customer engagement flows.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "0.5rem" }}>
            &bull; <strong>High-Performance REST Integration:</strong> Connected the Flutter client to scalable backend microservices for product catalog indexing and checkout processing.
          </p>
        </section>

        {/* 3. Tech Stack Used */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack &amp; Frameworks</h2>
          <div className={styles.tags}>
            <span className={styles.tagPill}>Flutter / Dart</span>
            <span className={styles.tagPill}>VR 360 Panorama SDK</span>
            <span className={styles.tagPill}>AI Recommendation Engine</span>
            <span className={styles.tagPill}>No-Code Builder Engine</span>
            <span className={styles.tagPill}>Node.js REST APIs</span>
            <span className={styles.tagPill}>Firebase Analytics</span>
          </div>
        </section>

        {/* 4. Key Features Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features Built</h2>
          <p className={styles.paragraph}>
            &bull; <strong>Interactive 360 VR Showrooms:</strong> Gyroscope and touch-controlled virtual store tours with clickable product hotspot pins.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "0.75rem" }}>
            &bull; <strong>AI Virtual Trial Room:</strong> Image overlay engine allowing customers to preview apparel items virtually on device screens.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "0.75rem" }}>
            &bull; <strong>Multi-Category Services Hub:</strong> Unified catalog spanning physical retail goods, professional service bookings, and virtual event tickets.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "0.75rem" }}>
            &bull; <strong>Secure Multi-Currency Checkout:</strong> Integrated payment processing handling instant booking confirmations and order tracking.
          </p>
        </section>

        {/* 5. Results & Impact */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Results &amp; Impact</h2>
          <p className={styles.paragraph}>
            &bull; <strong style={{ color: "#a3e635" }}>5,000+ Play Store Downloads:</strong> Published on Google Play, serving active shoppers and local business vendors.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "0.75rem" }}>
            &bull; <strong style={{ color: "#a3e635" }}>60fps Smooth VR Rendering:</strong> Optimized texture memory management prevents device overheating during 360-degree tour panning.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "0.75rem" }}>
            &bull; <strong style={{ color: "#a3e635" }}>High User Engagement:</strong> Interactive VR showrooms increased average customer session duration by over 40%.
          </p>
        </section>

        {/* 6. What I Learned */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Learned</h2>
          <p className={styles.paragraph}>
            Integrating heavy 360 VR graphics into Flutter applications requires strict memory management. Disposing bitmap texture memory promptly when navigating between store screens prevents garbage collection pauses, keeping screen transitions fluid.
          </p>
        </section>

        {/* CTA */}
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Building an AI or VR-Enhanced App?</h2>
          <p style={{ color: "#a1a1aa", maxWidth: "600px", margin: "0 auto 1.5rem" }}>
            Let&apos;s collaborate to design an innovative mobile experience with Flutter.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Discuss Your Project &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
