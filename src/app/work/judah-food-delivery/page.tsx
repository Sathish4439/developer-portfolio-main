import type { Metadata } from "next";
import Link from "next/link";
import styles from "../mayiliragu-academy/page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Judah Food Delivery Platform Case Study | Flutter & Socket.io — Sathish G",
  description:
    "Case study on building Judah Food Delivery: a 3-app real-time Flutter ecosystem for customers, restaurant partners, and delivery riders with Socket.io GPS tracking.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/judah-food-delivery",
  },
  openGraph: {
    title: "Judah Food Delivery Case Study | Sathish G",
    description:
      "Real-time food delivery app suite built with Flutter, Socket.io, Node.js, and Google Maps API.",
    url: "https://www.sathishdev.in/work/judah-food-delivery",
  },
};

export default function JudahFoodDeliveryCaseStudy() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Judah Food Delivery Platform",
            "description": "3-App real-time food delivery ecosystem built with Flutter, Socket.io, and Node.js.",
            "author": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "url": "https://www.sathishdev.in/work/judah-food-delivery"
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

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>JUDAH FOOD DELIVERY</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          A complete 3-app mobile ecosystem facilitating real-time food ordering, live driver GPS tracking, restaurant order fulfillment, and automated dispatch.
        </p>

        <div className={styles.metaGrid}>
          <div>
            <div className={styles.metaLabel}>ROLE</div>
            <div className={styles.metaValue}>Flutter &amp; Real-Time Lead</div>
          </div>
          <div>
            <div className={styles.metaLabel}>TIMELINE</div>
            <div className={styles.metaValue}>2025</div>
          </div>
          <div>
            <div className={styles.metaLabel}>TECH HIGHLIGHT</div>
            <div className={styles.metaValue}>Socket.io GPS Tracking</div>
          </div>
          <div>
            <div className={styles.metaLabel}>ECOSYSTEM</div>
            <div className={styles.metaValue}>Customer, Vendor &amp; Rider Apps</div>
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <div className={styles.contentBlock}>
            <p>
              Judah needed a seamless, multi-party food delivery network capable of handling active order state transitions, real-time rider location updates on live maps, and instant audio notifications for restaurant kitchens.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution</h2>
          <div className={styles.contentBlock}>
            <p>
              I built three interconnected Flutter mobile applications powered by a Node.js Socket.io backend:
            </p>
            <p><strong>1. Consumer App:</strong> Cart management, Razorpay payment processing, order history, and live map tracking of delivery riders.</p>
            <p><strong>2. Restaurant Partner App:</strong> Kitchen order accept/reject management, menu item availability toggles, and live earnings reports.</p>
            <p><strong>3. Rider Dispatch App:</strong> Background GPS location broadcast, trip navigation, and delivery acceptance.</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technologies Used</h2>
          <div className={styles.skillsList}>
            <span className={styles.skillBadge}>Flutter / Dart</span>
            <span className={styles.skillBadge}>Socket.io Real-Time</span>
            <span className={styles.skillBadge}>Google Maps API</span>
            <span className={styles.skillBadge}>Node.js / Express</span>
            <span className={styles.skillBadge}>Razorpay Payments</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Results</h2>
          <div className={styles.contentBlock}>
            <p>&bull; Sub-100ms real-time GPS location updates on consumer map screens.</p>
            <p>&bull; Zero lost orders thanks to WebSocket reconnection fallbacks.</p>
            <p>&bull; Published and active on Google Play Store.</p>
          </div>

          <Link href="/contact" className={styles.primaryBtn}>
            Build a Real-Time App &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
