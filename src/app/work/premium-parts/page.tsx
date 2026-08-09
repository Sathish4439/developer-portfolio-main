import type { Metadata } from "next";
import Link from "next/link";
import styles from "../mayiliragu-academy/page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Premium Parts ERP — Offline Flutter & SQLite Case Study | Sathish G",
  description:
    "Case study by Sathish G, premier offline flutter ERP developer in India. How I engineered an offline-first field sales & inventory ERP app using Flutter, local SQLite background sync, Google Maps geofencing, and Node.js backend.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/premium-parts",
  },
  openGraph: {
    title: "Premium Parts ERP — Offline Flutter & SQLite Case Study | Sathish G",
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
            "name": "Premium Parts ERP — Offline Flutter Application",
            "description": "Offline-first automotive inventory and payroll ERP application engineered with Flutter, SQLite, and Node.js by Sathish G, an expert offline flutter ERP developer in India.",
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

        <div className={styles.badge}>CASE STUDY — OFFLINE-FIRST ENTERPRISE ERP</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>PREMIUM PARTS ERP</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          An enterprise field-sales, payroll automation, and inventory ERP application built for automotive parts distributors in South India, featuring zero-latency offline-first SQLite database synchronization.
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

        {/* 1. The Challenge */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <div className={styles.contentBlock}>
            <p>
              Automotive spare parts distributors operate across widespread industrial zones, workshop basements, and remote regional highways where cellular network coverage is unreliable or completely absent. Field sales representatives visiting retail workshops needed to access thousands of product SKUs, verify real-time price tiers, log customer orders, and punch geo-fenced attendance timestamps without relying on an active internet connection.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Existing web-based ERP systems failed repeatedly in zero-signal dead zones, leading to lost order entries, manual paperwork backlogs, and payroll calculation disputes regarding commission tiers. Building a solution required an expert <strong>offline flutter ERP app developer in India</strong> to architect a true offline-first local cache synchronization queue.
            </p>
          </div>
        </section>

        {/* 2. The Solution */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution I Built</h2>
          <div className={styles.contentBlock}>
            <p>
              I architected an offline-first Flutter application utilizing local SQLite database caching and automated background sync queues:
            </p>

            <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>1. Local SQLite Data Vault</h3>
                <p className={styles.cardDesc}>
                  All catalog inventory, customer credit balances, pending orders, and attendance logs are cached locally using `sqflite`. Search operations respond instantly in under 10ms regardless of network state.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>2. Background Queue &amp; Conflict Resolver</h3>
                <p className={styles.cardDesc}>
                  A custom background worker queues offline order transactions locally with cryptographic timestamp hashes. When internet connectivity is restored, the queue automatically syncs updates to the Node.js server with zero data loss.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>3. Geo-Fenced Attendance Tracking</h3>
                <p className={styles.cardDesc}>
                  Google Maps SDK integration verifying field reps&apos; exact physical GPS coordinates against registered workshop locations before allowing check-in or order entry.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>4. Multi-Tier Commission Engine</h3>
                <p className={styles.cardDesc}>
                  Automated payroll calculation engine dynamically computing sales representative commission percentages based on category volume, payment collection speed, and monthly target tiers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Tech Stack & Infrastructure */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack &amp; Infrastructure</h2>
          <div className={styles.contentBlock}>
            <div className={styles.skillsList}>
              <span className={styles.skillBadge}>Flutter / Dart</span>
              <span className={styles.skillBadge}>SQLite (sqflite)</span>
              <span className={styles.skillBadge}>Google Maps Geofencing</span>
              <span className={styles.skillBadge}>Node.js / Express</span>
              <span className={styles.skillBadge}>Prisma ORM</span>
              <span className={styles.skillBadge}>PostgreSQL Database</span>
              <span className={styles.skillBadge}>PDF Receipt Generator</span>
            </div>

            <p style={{ marginTop: "1.5rem" }}>
              The application uses BLoC state management to handle offline/online network state toggles cleanly, giving field reps clear visual status indicators when working in offline mode versus live sync mode.
            </p>
          </div>
        </section>

        {/* 4. Key Features Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features Built</h2>
          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Zero-Latency Offline Search</h3>
              <p className={styles.cardDesc}>
                Instant fuzzy search across 10,000+ automotive part SKUs, part numbers, and vehicle compatibility charts directly from local SQLite storage.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Geo-Fenced Customer Check-In</h3>
              <p className={styles.cardDesc}>
                Prevents remote attendance fraud by enforcing 50-meter GPS radius validation around client workshop locations during visit logging.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>PDF Invoice &amp; Receipt Generation</h3>
              <p className={styles.cardDesc}>
                Instant thermal printer bluetooth pairing and local PDF invoice generation for sales receipts issued directly at customer sites.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Automated Commission Payroll</h3>
              <p className={styles.cardDesc}>
                Reduces month-end payroll calculation overhead from several days to minutes by automatically processing multi-tier commission structures.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Results & Impact */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Results &amp; Impact</h2>
          <div className={styles.contentBlock}>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", lineHeight: "1.8", color: "#a1a1aa" }}>
              <li><strong style={{ color: "#a3e635" }}>100% Field Uptime:</strong> Zero order entry delays or lost transactions across all regional workshop visits.</li>
              <li><strong style={{ color: "#a3e635" }}>90% Faster Payroll Processing:</strong> Automated commission calculations eliminated manual ledger auditing.</li>
              <li><strong style={{ color: "#a3e635" }}>30% Higher Order Volume:</strong> Field reps completed more workshop visits per day thanks to instant local app response times.</li>
            </ul>
          </div>
        </section>

        {/* 6. What I Learned */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Learned</h2>
          <div className={styles.contentBlock}>
            <p>
              Designing offline-first mobile enterprise applications requires prioritizing local transaction immutability. By assigning UUID v4 keys generated client-side for offline records, backends can resolve write conflicts safely without relying on auto-incrementing server IDs.
            </p>
          </div>
        </section>

        {/* 7. CTA */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Need an Offline-First Enterprise App?</h2>
          <p className={styles.subtitle}>
            Let&apos;s build an offline-resilient mobile ERP, CRM, or field management app tailored for your business.
          </p>
          <div className={styles.ctaGrid} style={{ marginTop: "1.5rem" }}>
            <Link href="/contact" className={styles.primaryBtn}>
              Discuss Your ERP Project &rarr;
            </Link>
            <Link href="/services/flutter-development" className={styles.secondaryBtn}>
              Explore Flutter Services
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
