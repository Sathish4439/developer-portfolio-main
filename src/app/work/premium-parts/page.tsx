import type { Metadata } from "next";
import Link from "next/link";
import styles from "../mayiliragu-academy/page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Premium Parts ERP Case Study | Offline Flutter & SQLite — Sathish G",
  description:
    "Case study on building Premium Parts ERP: an offline-first mobile app with local SQLite synchronization, geo-fenced attendance, and automated commission calculations.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/premium-parts",
  },
  openGraph: {
    title: "Premium Parts ERP Case Study | Sathish G",
    description:
      "Automotive parts ERP built with Flutter, offline SQLite sync, Node.js, and PostgreSQL.",
    url: "https://www.sathishdev.in/work/premium-parts",
  },
};

export default function PremiumPartsCaseStudy() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Premium Parts ERP",
            "description": "Offline-first automotive inventory and payroll ERP built with Flutter and SQLite.",
            "author": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "url": "https://www.sathishdev.in/work/premium-parts"
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
          <h1 className={styles.title}>PREMIUM PARTS ERP</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          An enterprise field-sales and inventory ERP application built for automotive parts distributors, featuring offline-first local database synchronization.
        </p>

        <div className={styles.metaGrid}>
          <div>
            <div className={styles.metaLabel}>ROLE</div>
            <div className={styles.metaValue}>Lead Mobile Architect</div>
          </div>
          <div>
            <div className={styles.metaLabel}>TIMELINE</div>
            <div className={styles.metaValue}>2024</div>
          </div>
          <div>
            <div className={styles.metaLabel}>KEY FEATURE</div>
            <div className={styles.metaValue}>Offline SQLite Synchronization</div>
          </div>
          <div>
            <div className={styles.metaLabel}>INDUSTRY</div>
            <div className={styles.metaValue}>Automotive Supply Chain</div>
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <div className={styles.contentBlock}>
            <p>
              Sales reps visiting automotive workshops frequently encountered low-connectivity or zero-signal dead zones. Premium Parts needed a mobile solution that allowed sales reps to record orders, check stock levels, and clock geo-fenced attendance completely offline — syncing automatically when back online.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution</h2>
          <div className={styles.contentBlock}>
            <p>
              I architected an offline-first Flutter application utilizing sqflite:
            </p>
            <p>&bull; <strong>Local Transaction Cache:</strong> All sales orders and attendance punches store immediately in local SQLite storage.</p>
            <p>&bull; <strong>Background Conflict Resolver:</strong> A custom background sync queue uploads queued records to the Node.js / PostgreSQL backend upon network restoration.</p>
            <p>&bull; <strong>Geo-Fencing:</strong> Integrated Google Maps SDK to verify sales rep physical presence at workshop coordinates before enabling order entry.</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technologies Used</h2>
          <div className={styles.skillsList}>
            <span className={styles.skillBadge}>Flutter / Dart</span>
            <span className={styles.skillBadge}>SQLite (sqflite)</span>
            <span className={styles.skillBadge}>Google Maps Geofencing</span>
            <span className={styles.skillBadge}>Node.js / Express</span>
            <span className={styles.skillBadge}>PostgreSQL &amp; Prisma</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Results</h2>
          <div className={styles.contentBlock}>
            <p>&bull; 100% operational uptime for field reps even in zero-coverage areas.</p>
            <p>&bull; Automated multi-tier retail commission calculations reduced payroll processing time from days to minutes.</p>
          </div>

          <Link href="/contact" className={styles.primaryBtn}>
            Discuss Offline ERP Solutions &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
