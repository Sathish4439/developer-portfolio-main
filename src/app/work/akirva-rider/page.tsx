import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Akirva Rider — Flutter Logistics & GPS Tracking App | Sathish G",
  description:
    "Case study on building Akirva Rider Partner App: a real-time rider tracking app developer india solution built with Flutter background isolates, adaptive GPS distance filtering, Google Maps API, and Node.js backend.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/akirva-rider",
  },
  openGraph: {
    title: "Akirva Rider — Flutter Logistics & GPS Tracking App | Sathish G",
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
            "description": "Real-time logistics and rider tracking application built with Flutter, background location isolates, adaptive GPS filtering, and automated dispatch by Sathish G.",
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

        <div className={styles.badge}>CASE STUDY — LOGISTICS &amp; GPS ISOLATES</div>

        <h1 className={styles.title}>AKIRVA RIDER &amp; PARTNER PLATFORM</h1>
        <p className={styles.subtitle}>
          A high-reliability delivery partner mobile application engineered with Flutter to handle continuous real-time GPS location streaming, background task isolates, automated order dispatch, and driver earnings payouts.
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
            <div className={styles.metaVal}>35% Battery Drain Reduction</div>
          </div>
        </div>

        {/* 1. The Challenge */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <p className={styles.paragraph}>
            Enterprise logistics and delivery partner applications require continuous background location updates that operate uninterrupted even when the mobile app is minimized, swapped to background memory, or when the smartphone screen is locked.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "1rem" }}>
            Naive mobile GPS tracking implementations continuously query device hardware sensors every second, rapidly draining driver batteries within 3 to 4 hours of active shifts. Preserving device battery efficiency while streaming accurate GPS lat/long coordinates to dispatcher dashboards at sub-5 second intervals was the primary engineering challenge.
          </p>
        </section>

        {/* 2. The Solution */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution I Built</h2>
          <p className={styles.paragraph}>
            As a specialized <strong>rider tracking app developer in India</strong>, I built a native background location service isolate using Flutter&apos;s foreground service capabilities, Android Native Services API, and Google Maps SDK.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "1rem" }}>
            The app utilizes an adaptive distance-filter algorithm: when a delivery driver is stationary or stopped at traffic lights, GPS sampling frequency automatically drops to conserve battery. When vehicle motion accelerates, GPS sampling frequency dynamically scales up. In weak network zones, location payloads are queued locally in encrypted memory and batch-synced to the Node.js backend upon signal restoration.
          </p>
        </section>

        {/* 3. Tech Stack Used */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack &amp; Architecture</h2>
          <div className={styles.tags}>
            <span className={styles.tagPill}>Flutter / Dart</span>
            <span className={styles.tagPill}>Background Location Isolate</span>
            <span className={styles.tagPill}>Adaptive Distance Filter</span>
            <span className={styles.tagPill}>Google Maps SDK</span>
            <span className={styles.tagPill}>Node.js &amp; Express</span>
            <span className={styles.tagPill}>Socket.io WebSockets</span>
          </div>
        </section>

        {/* 4. Key Features Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features Built</h2>
          <p className={styles.paragraph}>
            &bull; <strong>Background Isolate Tracking:</strong> Continuous GPS location broadcast operating under OS background restrictions without screen wake-lock penalties.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "0.75rem" }}>
            &bull; <strong>Automated Order Accept/Reject Cycle:</strong> Timed order popup overlays allowing riders to accept incoming delivery assignments within 30 seconds.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "0.75rem" }}>
            &bull; <strong>Turn-by-Turn Navigation Launch:</strong> Seamless one-tap integration opening Google Maps or Waze with pre-filled destination coordinates.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "0.75rem" }}>
            &bull; <strong>Real-Time Earnings &amp; Trip Logs:</strong> Transparent daily and weekly payout logs displaying completed delivery bonuses, distance metrics, and tip totals.
          </p>
        </section>

        {/* 5. Key Results */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Results &amp; Impact</h2>
          <p className={styles.paragraph}>
            &bull; <strong style={{ color: "#a3e635" }}>35% Reduced Battery Drain:</strong> Adaptive distance-filtered location updates significantly outperformed naive continuous GPS tracking setups.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "0.75rem" }}>
            &bull; <strong style={{ color: "#a3e635" }}>Published on Google Play Store:</strong> Successfully serving active delivery partners across target regional logistics hubs.
          </p>
          <p className={styles.paragraph} style={{ marginTop: "0.75rem" }}>
            &bull; <strong style={{ color: "#a3e635" }}>99.8% Route Sync Accuracy:</strong> Zero lost delivery location records even across weak regional cellular coverage zones.
          </p>
        </section>

        {/* 6. What I Learned */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Learned</h2>
          <p className={styles.paragraph}>
            Handling location services in production Flutter applications requires respecting platform-specific background battery optimizations (Doze Mode on Android and Background App Refresh limits on iOS). Offloading location stream parsing to a separate Dart Isolate ensures main UI thread frame rates stay locked at 60fps during heavy navigation interactions.
          </p>
        </section>

        {/* 7. CTA */}
        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Building a Logistics or Location-Based App?</h2>
          <p style={{ color: "#a1a1aa", maxWidth: "600px", margin: "0 auto 1.5rem" }}>
            Let&apos;s collaborate to design a real-time mobile tracking app built for enterprise stability and long battery life.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Discuss Your Logistics App &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
