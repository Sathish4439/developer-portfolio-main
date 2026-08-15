import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Premium Parts ERP — Automotive Supply Chain Case Study | Sathish G",
  description:
    "Technical case study of Premium Parts ERP by Sathish G, premier flutter ERP developer in India. Features GetX state, mobile QR scan, and Prisma Express API.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/premium-parts",
  },
  openGraph: {
    title: "Premium Parts ERP — Automotive Supply Chain Case Study | Sathish G",
    description:
      "A multi-role automotive supply chain Premium Parts ERP app automating check-ins, QR rewards, and payouts.",
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
            "name": "Premium Parts ERP — Automotive Supply Chain Platform",
            "description": "Comprehensive technical case study of the Premium Parts ERP platform engineered with a multi-role Flutter application and a Node.js Express API using Prisma ORM.",
            "author": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "url": "https://www.sathishdev.in/work/premium-parts",
            "keywords": [
              "Premium Parts ERP",
              "Premium Parts app",
              "automotive parts ERP",
              "flutter ERP developer india",
              "GetX state management",
              "Express 5 Prisma ERP",
              "QR code verification scanner"
            ]
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
          An enterprise field-sales, payroll automation, and inventory Premium Parts ERP application built for automotive parts distributors in South India, featuring structured local variable caching and real-time inventory management.
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
            <div className={styles.metaValue}>GetX Controller Bindings</div>
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
              Automotive spare parts distributors operate across widespread industrial zones and retail workshop networks. Automating workflows required managing several distinct user roles (including Mechanics, Retailers, Fleet Owners, and Sales Employees) through a unified client, which introduced complex state transitions and interface conditions.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Field sales representatives visiting retail workshops needed to record geolocated attendance checks and register transactions without data discrepancies. Mechanics and Retailers required secure points verification and parts scan verification to claim loyalty rewards. On the administrative side, bulk parts databases containing thousands of SKUs had to be processed from Excel catalogs without causing database lockouts or API timeouts. Resolving these challenges required a dedicated flutter ERP developer in India to design clean role-based dashboards and efficient bulk data ingestion pipelines.
            </p>
          </div>
        </section>

        {/* 2. The Solution */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution I Built</h2>
          <div className={styles.contentBlock}>
            <p>
              I architected a multi-role Premium Parts mobile app and decoupled Node.js API to coordinate operations across the supply chain:
            </p>

            <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>1. Mechanic &amp; Retailer Rewards Portal</h3>
                <p className={styles.cardDesc}>
                  Allows automotive mechanics and retail owners to scan QR codes on parts using a mobile scanner module. Validates codes instantly to credit loyalty points and displays digital ledger balances.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>2. Agent Field Sales App</h3>
                <p className={styles.cardDesc}>
                  Enforces geolocated attendance check-ins using GPS geofencing, retrieves product pricing lists, logs customer orders on-site, and triggers local PDF invoices dynamically.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>3. Administrative Web Dashboard</h3>
                <p className={styles.cardDesc}>
                  A control center for managers to handle user approvals, inspect employee route maps, review ledger audits, and upload bulk Excel inventory catalogs.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>4. Decoupled Backend Service</h3>
                <p className={styles.cardDesc}>
                  An Express 5 backend built with Prisma ORM and PostgreSQL. Integrates AWS S3 for secure asset storage, Winstron structured logging, Joi schemas, and bulk spreadsheet excel parsing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Tech Stack & Infrastructure */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack &amp; Infrastructure</h2>
          <div className={styles.contentBlock}>
            <p>
              The platform utilizes a modern service layer and decoupled controllers to manage multiple roles:
            </p>

            <div className={styles.skillsList} style={{ marginTop: "1.5rem" }}>
              <span className={styles.skillBadge}>Flutter 3.x / Dart</span>
              <span className={styles.skillBadge}>GetX State Management</span>
              <span className={styles.skillBadge}>mobile_scanner QR</span>
              <span className={styles.skillBadge}>pretty_qr_code</span>
              <span className={styles.skillBadge}>toastification</span>
              <span className={styles.skillBadge}>printing / pdf</span>
              <span className={styles.skillBadge}>Node.js ESM</span>
              <span className={styles.skillBadge}>Express 5 API</span>
              <span className={styles.skillBadge}>Prisma 6.19.x</span>
              <span className={styles.skillBadge}>PostgreSQL Database</span>
              <span className={styles.skillBadge}>AWS S3 Storage</span>
              <span className={styles.skillBadge}>Firebase Messaging</span>
              <span className={styles.skillBadge}>xlsx Parser</span>
              <span className={styles.skillBadge}>pdfkit Generator</span>
              <span className={styles.skillBadge}>Joi Schema Validation</span>
            </div>

            <p style={{ marginTop: "1.5rem" }}>
              To handle state cleanly, the Premium Parts app uses GetX controllers and bindings. This enables the UI to swap features dynamically based on the logged-in user profile, maintaining clean separation of concerns.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Rather than sqflite, local data caching uses FlutterSecureStorage for secure session variables, checked-in attendance coordinates, device tokens, and temporary validation codes. An active network controller monitors connectivity changes, displaying a grounded Snackbar warning when offline to enforce secure, live data operations.
            </p>
          </div>
        </section>

        {/* 4. Key Features Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features Built</h2>
          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Dual QR Point Verification</h3>
              <p className={styles.cardDesc}>
                Integrates mobile_scanner to scan part QR barcodes, validating coupon codes and crediting mechanic wallets instantly using pretty_qr_code and toastification alerts.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Geo-Fenced Check-In Tracker</h3>
              <p className={styles.cardDesc}>
                Uses Geolocator GPS coordinates to validate sales rep check-ins, verifying their physical radius within 50 meters of client workshop coordinates.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>PDF Invoice &amp; printing</h3>
              <p className={styles.cardDesc}>
                Enables on-site receipt creation and PDF document generation, facilitating local printing via thermal printers.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Excel Catalog Ingestion</h3>
              <p className={styles.cardDesc}>
                A server-side xlsx parser that processes large product spreadsheets, updating catalog data in PostgreSQL via Prisma transactions.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Results & Impact */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Results &amp; Impact</h2>
          <div className={styles.contentBlock}>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", lineHeight: "1.8", color: "#a1a1aa" }}>
              <li><strong style={{ color: "#a855f7" }}>90% Faster Payroll Processing:</strong> Commission payouts and agent ledgers are computed dynamically, eliminating manual spreadsheet accounting.</li>
              <li><strong style={{ color: "#a855f7" }}>30% Higher Order Volume:</strong> Sales reps log orders directly at retail sites, accelerating dispatch cycles.</li>
              <li><strong style={{ color: "#a855f7" }}>100% Verified Attendance:</strong> Geo-fenced location scans completely resolved remote check-in coordinate discrepancies.</li>
            </ul>
          </div>
        </section>

        {/* 6. What I Learned */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Learned</h2>
          <div className={styles.contentBlock}>
            <p>
              Designing the Premium Parts ERP reinforced lessons in coordinating complex multi-role mobile layouts. I learned how to use GetX controller bindings to inject dependencies dynamically, and how to cache transient session variables securely. On the backend, parsing large bulk xlsx sheets in memory highlighted the need for transactional database batch writes to protect PostgreSQL pool connections.
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
