import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "MyShop — Grocery Business Manager POS & ERP Case Study | Sathish G",
  description:
    "Technical case study of MyShop — Grocery Business Manager POS by Sathish G, lead Flutter & Full-Stack engineer. Featuring offline-first Drift SQLite, ESC/POS Bluetooth thermal printing, Node.js sync engine, and Next.js 14 Super Admin Portal.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/myshop-pos",
  },
  openGraph: {
    title: "MyShop — Grocery Business Manager POS & ERP Case Study | Sathish G",
    description:
      "An offline-first enterprise grocery Point of Sale (POS) and inventory management ERP with sub-second barcode checkout, Bluetooth thermal receipt printing, double-entry stock/cash ledgers, and cloud sync.",
    url: "https://www.sathishdev.in/work/myshop-pos",
  },
};

const screenshots = [
  {
    src: "/projects/myshop/01_dashboard.jpg",
    title: "Executive Store Dashboard",
    desc: "Live daily sales, net profit margins, top-selling SKUs, and low-stock alerts powered by Drift reactive streams.",
  },
  {
    src: "/projects/myshop/02_pos_billing.jpg",
    title: "High-Speed POS Billing Screen",
    desc: "Sub-second barcode scanning, quick-touch item grids, discount engines, and multi-mode payment splits.",
  },
  {
    src: "/projects/myshop/03_profit_analytics.jpg",
    title: "Sales & Profit Analytics",
    desc: "Interactive financial charts breaking down revenue, gross margin, COGS, and daily transaction volume.",
  },
  {
    src: "/projects/myshop/04_inventory_stock.jpg",
    title: "Inventory & Stock Catalog",
    desc: "Real-time stock level tracking, batch management, expiry date surveillance, and Excel catalog import/export.",
  },
  {
    src: "/projects/myshop/05_thermal_receipt.jpg",
    title: "ESC/POS Thermal Receipt",
    desc: "Instant byte-level formatting for 58mm/80mm Bluetooth thermal printers with store branding and tax breakdown.",
  },
  {
    src: "/projects/myshop/06_customer_khata.jpg",
    title: "Customer Khata (Credit Ledger)",
    desc: "Customer credit accounting, partial payment logs, due reminders, and WhatsApp statement sharing.",
  },
  {
    src: "/projects/myshop/07_purchase_orders.jpg",
    title: "Supplier Purchase Orders",
    desc: "Supplier invoice tracking, inward stock verification, payable ledgers, and automated stock incrementing.",
  },
  {
    src: "/projects/myshop/08_store_expenses.jpg",
    title: "Store Expenses & Cash Flow",
    desc: "Daily operational expense categorization, register cash drawer reconciliation, and net profit deductions.",
  },
];

const technicalHighlights = [
  {
    title: "100% Offline-First Architecture",
    desc: "All billing, inventory lookups, and customer ledgers execute entirely against a local SQLite database using Drift with WAL (Write-Ahead Logging). Store operations never freeze during internet outages.",
  },
  {
    title: "Atomic Double-Entry Consistency",
    desc: "Every completed bill or purchase order executes an atomic database transaction that updates both financial ledgers and physical stock units simultaneously, eliminating discrepancies.",
  },
  {
    title: "ESC/POS Thermal Printing Engine",
    desc: "Custom binary byte-stream generator tailored for 58mm and 80mm Bluetooth thermal printers, producing formatted tabular itemizations, tax summaries, and QR codes in under 300ms.",
  },
  {
    title: "Zero setState() Reactive MVVM",
    desc: "Structured strictly with ChangeNotifier ViewModels and selective context listeners (Selector), ensuring 60 FPS UI rendering even during rapid barcode scanning loops.",
  },
  {
    title: "Node.js & TypeScript Sync Engine",
    desc: "Express 5 and Prisma ORM backend on PostgreSQL handling revision-based delta synchronization, store-level tenant isolation, and background data integrity verification.",
  },
  {
    title: "Next.js 14 Super Admin Portal",
    desc: "Administrative web dashboard featuring Recharts analytics, subscription license management, remote tenant diagnostics, and global multi-store reports.",
  },
];

export default function MyShopCaseStudy() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "MyShop — Grocery Business Manager POS & Inventory Platform",
            "description":
              "Comprehensive technical case study of MyShop — an offline-first enterprise grocery POS and inventory management system engineered by Sathish G with Flutter, Drift SQLite, ESC/POS printing, Node.js, and Next.js 14.",
            "author": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in",
            },
            "url": "https://www.sathishdev.in/work/myshop-pos",
            "keywords": [
              "MyShop grocery POS",
              "grocery business manager",
              "flutter POS developer india",
              "offline-first flutter app",
              "Drift SQLite flutter",
              "ESC/POS bluetooth thermal printing flutter",
              "retail inventory management ERP",
              "Node.js sync backend",
              "Next.js 14 admin portal",
            ],
          }),
        }}
      />

      <div className={styles.container}>
        <div className={styles.backLinkWrap}>
          <Link href="/work" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Work</span>
          </Link>
        </div>

        <div className={styles.badge}>CASE STUDY — OFFLINE-FIRST ENTERPRISE POS</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>MYSHOP — GROCERY BUSINESS MANAGER</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          An enterprise-grade offline-first Point of Sale (POS) and inventory management ecosystem engineered for supermarkets and retail grocery stores. Architected with Flutter, Drift SQLite, ESC/POS Bluetooth thermal printing, a Node.js/Prisma sync backend, and a Next.js 14 Super Admin Portal.
        </p>

        <div className={styles.metaGrid}>
          <div>
            <div className={styles.metaLabel}>ROLE</div>
            <div className={styles.metaValue}>Principal Architect &amp; Lead Full-Stack Engineer</div>
          </div>
          <div>
            <div className={styles.metaLabel}>TIMELINE</div>
            <div className={styles.metaValue}>2025 - 2026</div>
          </div>
          <div>
            <div className={styles.metaLabel}>KEY METRIC</div>
            <div className={styles.metaValue}>100% Offline Resilience (0ms Network Dependency)</div>
          </div>
          <div>
            <div className={styles.metaLabel}>TECH STACK</div>
            <div className={styles.metaValue}>Flutter, Drift SQLite, Node.js, Prisma, Next.js 14</div>
          </div>
        </div>

        {/* Hero Showcase Graphic */}
        <div className={styles.heroBannerWrap}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/projects/myshop/myshop_showcase_hero.jpg"
            alt="MyShop Grocery Business Manager POS Showcase"
            className={styles.heroBannerImg}
          />
        </div>

        {/* 1. The Challenge */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <div className={styles.contentBlock}>
            <p>
              Retail grocery stores and neighborhood supermarkets operate under relentless throughput demands. During peak rush hours, checkout counters handle dozens of transactions per minute. Traditional cloud-dependent POS SaaS software fails catastrophically when internet connectivity fluctuates, resulting in frozen checkout screens, lost queues, and direct revenue loss.
            </p>
            <p>
              Furthermore, retail store owners struggle with hardware peripheral integration. Connecting low-cost Bluetooth thermal receipt printers, handling ESC/POS byte buffers, and maintaining sub-second camera barcode scanning across varied Android hardware requires robust systems engineering rather than generic web views. Finally, store owners require strict double-entry ledger balance to guarantee that physical stock movements match cash in the drawer and customer credit ledgers without discrepancies.
            </p>
          </div>
        </section>

        {/* 2. The 3-Tier Architecture */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The 3-Tier Architecture</h2>
          <div className={styles.contentBlock}>
            <p>
              To deliver unconditional speed and zero-downtime reliability, I designed a resilient 3-tier system:
            </p>

            <div className={styles.gridThree} style={{ marginTop: "1.5rem" }}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Tier 1: POS Client (Flutter)</h3>
                <p className={styles.cardDesc}>
                  Cross-platform mobile and desktop application powered by Drift SQLite. Features reactive queries, zero <code>setState()</code> MVVM state management, hardware barcode decoding, and raw byte-level ESC/POS thermal printing.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Tier 2: Sync Engine (Node.js)</h3>
                <p className={styles.cardDesc}>
                  High-throughput Express 5 &amp; Prisma ORM backend on PostgreSQL. Orchestrates revision-based delta synchronization, multi-tenant store isolation, automated cloud backups, and transaction verification.
                </p>
              </div>

              <div className={styles.card}>
                <h3 className={styles.cardTitle}>Tier 3: Super Admin (Next.js 14)</h3>
                <p className={styles.cardDesc}>
                  Enterprise web administration portal built with Next.js 14, Tailwind CSS, and Recharts. Enables global store oversight, license subscription tracking, remote telemetry, and financial auditing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Deep Engineering Highlights */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Deep Engineering Invariants</h2>
          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            {technicalHighlights.map((item) => (
              <div key={item.title} className={styles.card}>
                <h3 className={styles.cardTitle} style={{ color: "#10b981" }}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Visual Showcase Gallery */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Application Interface Showcase</h2>
          <p className={styles.contentBlock}>
            Explore the production user interface implemented with custom Material 3 Emerald (<code>#006c49</code>) design tokens, high-contrast typography, and intuitive cashier workflows:
          </p>

          <div className={styles.galleryGrid}>
            {screenshots.map((s) => (
              <div key={s.title} className={styles.galleryCard}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={s.src} alt={s.title} className={styles.galleryImg} />
                <div className={styles.galleryCaption}>
                  <div className={styles.galleryTitle}>{s.title}</div>
                  <div className={styles.galleryDesc}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Business Impact & Results */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Business Impact &amp; Metrics</h2>
          <div className={styles.gridThree} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <div style={{ fontFamily: "League Gothic", fontSize: "44px", color: "#10b981", lineHeight: 1 }}>0ms</div>
              <div className={styles.cardTitle}>Network Latency</div>
              <p className={styles.cardDesc}>Local Drift SQLite execution guarantees instantaneous checkout unaffected by network speeds or outages.</p>
            </div>

            <div className={styles.card}>
              <div style={{ fontFamily: "League Gothic", fontSize: "44px", color: "#10b981", lineHeight: 1 }}>&lt; 300ms</div>
              <div className={styles.cardTitle}>Thermal Print Time</div>
              <p className={styles.cardDesc}>Optimized ESC/POS binary streams print receipts instantly via Bluetooth thermal hardware.</p>
            </div>

            <div className={styles.card}>
              <div style={{ fontFamily: "League Gothic", fontSize: "44px", color: "#10b981", lineHeight: 1 }}>100%</div>
              <div className={styles.cardTitle}>Ledger Integrity</div>
              <p className={styles.cardDesc}>Strict atomic transactions balance inventory units and cash accounts with zero recorded discrepancies.</p>
            </div>
          </div>
        </section>

        {/* 6. Skills & Tech Stack Used */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technologies &amp; Architecture Patterns</h2>
          <div className={styles.skillsList}>
            {[
              "Flutter (Dart)",
              "Drift ORM (SQLite)",
              "Write-Ahead Logging (WAL)",
              "Provider & ChangeNotifier",
              "ESC/POS Thermal Printing",
              "Mobile Barcode Scanner",
              "Node.js",
              "TypeScript",
              "Express 5",
              "Prisma ORM",
              "PostgreSQL",
              "Next.js 14",
              "Tailwind CSS",
              "Recharts",
              "Double-Entry Bookkeeping",
              "Delta Conflict Resolution",
              "Excel Stock Ingestion",
            ].map((skill) => (
              <span key={skill} className={styles.skillBadge}>
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 7. Call To Action */}
        <section className={styles.section}>
          <div className={styles.card} style={{ textAlign: "center", padding: "3rem 2rem", borderColor: "rgba(16, 185, 129, 0.4)" }}>
            <h3 style={{ fontFamily: "League Gothic", fontSize: "42px", color: "#fff", letterSpacing: "1px", marginBottom: "0.75rem" }}>
              NEED AN ENTERPRISE POS OR FULL-STACK SYSTEM?
            </h3>
            <p className={styles.contentBlock} style={{ maxWidth: "650px", margin: "0 auto 1.5rem auto" }}>
              Whether you require high-speed offline-first mobile applications, custom hardware integrations (printers/scanners), or high-concurrency Node.js backend architectures, I deliver production-ready software.
            </p>
            <div className={styles.ctaGrid} style={{ justifyContent: "center" }}>
              <Link href="/contact" className={styles.primaryBtn}>
                Hire Sathish G &rarr;
              </Link>
              <Link href="/work" className={styles.secondaryBtn}>
                Explore Other Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
