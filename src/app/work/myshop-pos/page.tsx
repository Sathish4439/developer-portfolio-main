import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";
import RelatedItems from "../../../components/RelatedItems";

export const metadata: Metadata = {
  title: "MyShop — Grocery Business Manager POS, Website & Growth Ecosystem | Sathish G",
  description:
    "Technical case study of MyShop — Grocery Business Manager POS by Sathish G, lead Flutter & Full-Stack engineer. Featuring offline-first Drift SQLite, ESC/POS Bluetooth thermal printing, production Next.js 14 website (myshop.sathishdev.in), Instagram Reels growth engine (@myshop.billing), and automated WhatsApp customer Khata dispatcher.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/myshop-pos",
  },
  openGraph: {
    title: "MyShop — Grocery Business Manager POS, Website & Growth Ecosystem | Sathish G",
    description:
      "An offline-first enterprise grocery Point of Sale (POS) and inventory management ERP with sub-second barcode checkout, Bluetooth thermal receipt printing, production Next.js website, Instagram campaign (@myshop.billing), and WhatsApp Khata integration.",
    url: "https://www.sathishdev.in/work/myshop-pos",
  },
};

const screenshots = [
  {
    src: "/projects/myshop/myshop_website_dashboard.png",
    title: "Official Production Website (myshop.sathishdev.in)",
    desc: "Next.js 14 marketing portal with high-conversion landing page, live Play Store QR conversion, and hardware guides.",
  },
  {
    src: "/projects/myshop/myshop_website_simulator.png",
    title: "Interactive In-Browser POS Simulator (/demo)",
    desc: "Zero-install web sandbox letting merchants test sub-second camera barcode scanning, itemization, and thermal receipts.",
  },
  {
    src: "/projects/myshop/myshop_instagram_carousel_01.png",
    title: "Instagram Marketing Campaign (@myshop.billing)",
    desc: "High-contrast visual carousel deck educating grocers on replacing ₹25,000 desktop POS setups with Android phones.",
  },
  {
    src: "/projects/myshop/myshop_whatsapp_khata_slide.png",
    title: "WhatsApp Customer Khata & Balance Reminders",
    desc: "1-Click automated WhatsApp customer credit reminders with Tamil & English balance statements and UPI QR codes.",
  },
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
  {
    src: "/projects/myshop/myshop_playstore_qr_card.png",
    title: "Instant Play Store QR Onboarding",
    desc: "Camera-scannable merchant acquisition card enabling immediate desktop-to-mobile app installation.",
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
            "sameAs": [
              "https://myshop.sathishdev.in",
              "https://www.instagram.com/myshop.billing/",
              "https://play.google.com/store/apps/details?id=com.sathishdev.myshop"
            ],
            "keywords": [
              "MyShop grocery POS",
              "grocery business manager",
              "myshop website",
              "myshop instagram",
              "myshop billing",
              "flutter POS developer india",
              "offline-first flutter app",
              "Drift SQLite flutter",
              "ESC/POS bluetooth thermal printing flutter",
              "retail inventory management ERP",
              "Node.js sync backend",
              "Next.js 14 admin portal",
              "WhatsApp khata billing",
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

        <div className={styles.badge}>CASE STUDY — OFFLINE-FIRST ENTERPRISE POS &amp; GROWTH ECOSYSTEM</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>MYSHOP — GROCERY BUSINESS MANAGER</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          An enterprise-grade offline-first Point of Sale (POS) and inventory management ecosystem engineered for supermarkets and retail grocery stores. Architected with Flutter, Drift SQLite, ESC/POS Bluetooth thermal printing, a Node.js/Prisma sync backend, a Next.js 14 Super Admin Portal, a production merchant website with interactive web simulator, and an omnichannel Instagram &amp; WhatsApp acquisition pipeline.
        </p>

        {/* Action Buttons: Web, Demo, Play Store, Instagram, WhatsApp */}
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "2.5rem" }}>
          <a
            href="https://myshop.sathishdev.in"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.omniBtn} ${styles.btnWebsite}`}
            style={{ fontSize: "16px", padding: "0.75rem 1.4rem", borderRadius: "9999px" }}
          >
            <span>🌐</span> Official Website &rarr;
          </a>
          <a
            href="https://myshop.sathishdev.in/demo"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.omniBtn} ${styles.omniBtnPrimary}`}
            style={{ fontSize: "16px", padding: "0.75rem 1.4rem", borderRadius: "9999px" }}
          >
            <span>⚡</span> Try Web POS Simulator &rarr;
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.omniBtn} ${styles.omniBtnSecondary}`}
            style={{ fontSize: "16px", padding: "0.75rem 1.4rem", borderRadius: "9999px" }}
          >
            <span>📱</span> Google Play &rarr;
          </a>
          <a
            href="https://www.instagram.com/myshop.billing/"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.omniBtn} ${styles.btnInstagram}`}
            style={{ fontSize: "16px", padding: "0.75rem 1.4rem", borderRadius: "9999px" }}
          >
            <span>📸</span> Instagram @myshop.billing &rarr;
          </a>
          <a
            href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20see%20a%20demo%20of%20MyShop%20Grocery%20POS"
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.omniBtn} ${styles.btnWhatsApp}`}
            style={{ fontSize: "16px", padding: "0.75rem 1.4rem", borderRadius: "9999px" }}
          >
            <span>💬</span> WhatsApp Live Demo &rarr;
          </a>
        </div>

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

        {/* ==================================================================
            OMNICHANNEL GROWTH & DIGITAL ECOSYSTEM:
            Website, Instagram, WhatsApp & Facebook
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.badge} style={{ background: "rgba(14, 165, 233, 0.2)", borderColor: "#38bdf8", color: "#38bdf8" }}>
            MERCHANT ACQUISITION &amp; DIGITAL PRESENCE
          </div>
          <h2 className={styles.sectionTitle} style={{ color: "#38bdf8" }}>
            Omnichannel Ecosystem: Website, Instagram, WhatsApp &amp; Meta Feeds
          </h2>
          <div className={styles.contentBlock}>
            <p>
              Engineering enterprise offline-first software is only half the battle. Independent grocers and kirana store owners across India often stick with manual pen-and-paper ledgers because traditional desktop POS setups demand heavy capital expenditure (₹30,000+), cumbersome PC hardware, and complicated software licenses.
            </p>
            <p>
              To drive real-world merchant adoption and build brand authority, I engineered an integrated digital presence and acquisition funnel covering a dedicated <strong>Next.js 14 merchant website</strong>, an active <strong>Instagram Reels &amp; carousel educational series</strong>, a native <strong>WhatsApp automated customer Khata &amp; outreach engine</strong>, and <strong>Facebook Reels/Meta merchant campaigns</strong>:
            </p>
          </div>

          {/* Interactive Browser Frame: Official Website Showcase */}
          <div className={styles.browserFrame}>
            <div className={styles.browserBar}>
              <div className={styles.browserControls}>
                <span className={`${styles.dot} ${styles.dotClose}`}></span>
                <span className={`${styles.dot} ${styles.dotMin}`}></span>
                <span className={`${styles.dot} ${styles.dotMax}`}></span>
              </div>
              <div className={styles.browserAddress}>
                <span>🔒</span>
                <span>myshop.sathishdev.in</span>
              </div>
              <div className={styles.browserStatus}>
                <span className={styles.statusPulse}></span>
                <span>PRODUCTION WEB SERVICE</span>
              </div>
            </div>
            <div className={styles.browserViewport}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/myshop/myshop_website_dashboard.png"
                alt="MyShop Official Website & Merchant Portal — myshop.sathishdev.in"
              />
            </div>
          </div>

          {/* 4 Omnichannel Pillar Cards */}
          <div className={styles.omniGrid}>
            {/* Card 1: Official Website & Web Simulator */}
            <div className={`${styles.omniCard} ${styles.cardWebsite}`}>
              <div>
                <div className={styles.omniHeader}>
                  <span className={`${styles.omniBadge} ${styles.badgeWebsite}`}>🌐 Official Web Portal</span>
                  <span style={{ fontSize: "13px", color: "#38bdf8", fontFamily: "monospace" }}>myshop.sathishdev.in</span>
                </div>
                <h3 className={styles.omniTitle}>Next.js 14 Website &amp; Interactive Web POS Simulator</h3>
                <p className={styles.omniDesc}>
                  Engineered with Next.js 14 App Router, TypeScript, and Tailwind CSS. Acts as the primary digital anchor, merchant education hub, and Play Store conversion machine.
                </p>
                <ul className={styles.omniBulletList}>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>⚡</span>
                    <span><strong>In-Browser POS Simulator (<code>/demo</code>):</strong> Full sandbox enabling store owners to test sub-second camera barcode scanning, touch billing, and live 80mm thermal receipt generation with zero install.</span>
                  </li>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>🖨️</span>
                    <span><strong>Hardware Compatibility Guide (<code>/hardware</code>):</strong> Step-by-step buyer guide for certified 58mm/80mm ESC/POS Bluetooth printers (TVS, NGX, Everycom).</span>
                  </li>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>📊</span>
                    <span><strong>Year-1 Savings Calculator:</strong> Interactive widget proving how smartphone POS saves ₹34,000+ vs legacy desktop systems.</span>
                  </li>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>🔒</span>
                    <span><strong>Play Store Compliance:</strong> Complete policy documentation (<code>/privacy</code>, <code>/terms</code>, <code>/account-deletion</code>).</span>
                  </li>
                </ul>
              </div>
              <div className={styles.omniActions}>
                <a
                  href="https://myshop.sathishdev.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.omniBtn} ${styles.btnWebsite}`}
                >
                  Visit Website &rarr;
                </a>
                <a
                  href="https://myshop.sathishdev.in/demo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.omniBtn} ${styles.omniBtnSecondary}`}
                >
                  Try POS Simulator
                </a>
              </div>
            </div>

            {/* Card 2: Instagram Growth Strategy */}
            <div className={`${styles.omniCard} ${styles.cardInstagram}`}>
              <div>
                <div className={styles.omniHeader}>
                  <span className={`${styles.omniBadge} ${styles.badgeInstagram}`}>📸 Instagram Strategy</span>
                  <span style={{ fontSize: "13px", color: "#f472b6", fontFamily: "monospace" }}>@myshop.billing</span>
                </div>
                <h3 className={styles.omniTitle}>&ldquo;Smart Kadai&rdquo; Reels &amp; Viral Carousel Growth</h3>
                <p className={styles.omniDesc}>
                  Direct-to-merchant social acquisition system designed to reach independent grocers, provision, maligai, and kirana stores across South India and Bengaluru.
                </p>
                <ul className={styles.omniBulletList}>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>🎬</span>
                    <span><strong>15 Tamil Reels (&ldquo;Smart Kadai Series&rdquo;):</strong> Tailored vertical video scripts addressing pain points: peak-hour counter rush, misplaced credit notebooks, and late-night manual accounting.</span>
                  </li>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>📈</span>
                    <span><strong>3-Second Hold Rate Hooks:</strong> High-energy visual problem-first hooks designed to maximize Instagram algorithm distribution and store owner shares.</span>
                  </li>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>📱</span>
                    <span><strong>High-Contrast 7-Slide Carousels:</strong> Step-by-step swipeable decks demonstrating how a merchant&apos;s existing Android phone replaces heavy hardware.</span>
                  </li>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>🎯</span>
                    <span><strong>Direct Bio Conversion:</strong> Zero-friction bio funnel directing viewers directly to Google Play Store.</span>
                  </li>
                </ul>
              </div>
              <div className={styles.omniActions}>
                <a
                  href="https://www.instagram.com/myshop.billing/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.omniBtn} ${styles.btnInstagram}`}
                >
                  Follow @myshop.billing &rarr;
                </a>
              </div>
            </div>

            {/* Card 3: WhatsApp Customer Khata & Dispatcher */}
            <div className={`${styles.omniCard} ${styles.cardWhatsApp}`}>
              <div>
                <div className={styles.omniHeader}>
                  <span className={`${styles.omniBadge} ${styles.badgeWhatsApp}`}>💬 WhatsApp Automation</span>
                  <span style={{ fontSize: "13px", color: "#34d399", fontFamily: "monospace" }}>1-Click Messaging</span>
                </div>
                <h3 className={styles.omniTitle}>1-Click Customer Khata &amp; Merchant Outreach Dispatcher</h3>
                <p className={styles.omniDesc}>
                  Deep WhatsApp integration bridging daily customer credit recovery with an automated merchant onboarding pipeline.
                </p>
                <ul className={styles.omniBulletList}>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>🧾</span>
                    <span><strong>In-App Customer Khata Sharing:</strong> Cashiers can send formatted Tamil/English balance reminders and thermal PDF receipts directly to customer WhatsApp with a single tap.</span>
                  </li>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>🤖</span>
                    <span><strong>Automated WhatsApp Dispatcher (Python):</strong> Built <code>auto_whatsapp_sender.py</code> and web dispatcher for high-throughput personalized outreach to retail grocers.</span>
                  </li>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>💳</span>
                    <span><strong>UPI Payment Integration:</strong> Automated WhatsApp invoices embed UPI QR links for instant customer credit settlement.</span>
                  </li>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>📞</span>
                    <span><strong>Instant Merchant Support:</strong> Direct live chat and remote onboarding support line for shopkeepers (+91 78680 31207).</span>
                  </li>
                </ul>
              </div>
              <div className={styles.omniActions}>
                <a
                  href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20see%20a%20demo%20of%20MyShop%20Grocery%20POS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.omniBtn} ${styles.btnWhatsApp}`}
                >
                  WhatsApp Live Demo &rarr;
                </a>
              </div>
            </div>

            {/* Card 4: Facebook & Meta Omnichannel Strategy */}
            <div className={`${styles.omniCard} ${styles.cardFacebook}`}>
              <div>
                <div className={styles.omniHeader}>
                  <span className={`${styles.omniBadge} ${styles.badgeFacebook}`}>👥 Facebook &amp; Meta Feeds</span>
                  <span style={{ fontSize: "13px", color: "#60a5fa", fontFamily: "monospace" }}>Retail Ads &amp; Groups</span>
                </div>
                <h3 className={styles.omniTitle}>Meta Omnichannel Merchant Acquisition Campaigns</h3>
                <p className={styles.omniDesc}>
                  Cross-platform ad creatives and community engagement campaigns targeting traditional merchants across regional business communities.
                </p>
                <ul className={styles.omniBulletList}>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>📣</span>
                    <span><strong>Facebook Feeds &amp; Reels:</strong> Video reels cross-posted across Facebook and YouTube Shorts targeting retail merchants aged 28–55 in Tamil Nadu and Karnataka.</span>
                  </li>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>🏷️</span>
                    <span><strong>High-Converting Value Proposition:</strong> Creative positioning: &ldquo;₹0 Zero-Hardware Grocery POS — Turn Your Android Phone into a Billing Counter&rdquo;.</span>
                  </li>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>🤝</span>
                    <span><strong>Retail Merchant Community Outreach:</strong> Structured outreach across local grocer WhatsApp and Facebook groups, sharing practical inventory tips and accounting guides.</span>
                  </li>
                  <li className={styles.omniBulletItem}>
                    <span className={styles.omniBulletIcon}>🎨</span>
                    <span><strong>Consistent Brand Identity:</strong> Unified emerald design palette (<code>#006c49</code>) across website, Google Play, social decks, and in-app interfaces.</span>
                  </li>
                </ul>
              </div>
              <div className={styles.omniActions}>
                <a
                  href="https://myshop.sathishdev.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${styles.omniBtn} ${styles.omniBtnSecondary}`}
                >
                  Explore Brand Hub &rarr;
                </a>
              </div>
            </div>
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
              "Next.js 14 Production Website",
              "In-Browser Web POS Simulator",
              "ESC/POS Hardware Matrix Guide",
              "1-Tap WhatsApp Khata Reminders",
              "Automated Python WhatsApp Dispatcher",
              "Instagram Reels Strategy (@myshop.billing)",
              "Viral Carousel Content Architecture",
              "Meta Multi-Channel Campaigns",
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

        <RelatedItems
          title="Related Production Case Studies &amp; Mobile Services"
          items={[
            {
              title: "Flutter App Development in Coimbatore",
              description: "Turnkey iOS & Android mobile engineering and offline-first database systems for Tamil Nadu businesses.",
              href: "/flutter-app-development-coimbatore",
            },
            {
              title: "FlatSMS — Android Cellular SMS Gateway SaaS",
              description: "High-throughput cloud control plane and real-time WebSocket telecommunication gateway with BullMQ and Kotlin.",
              href: "/work/flatsms-sms-gateway",
            },
            {
              title: "VoiceVertick AI — Autonomous Voice Telephony",
              description: "Sub-800ms low-latency bidirectional telephony engine with Twilio Media Streams, Sarvam AI, and live ledgers.",
              href: "/work/voice-vertick",
            },
          ]}
        />

        {/* 7. Call To Action */}
        <section className={styles.section}>
          <div className={styles.card} style={{ textAlign: "center", padding: "3rem 2rem", borderColor: "rgba(16, 185, 129, 0.4)" }}>
            <h3 style={{ fontFamily: "League Gothic", fontSize: "42px", color: "#fff", letterSpacing: "1px", marginBottom: "0.75rem" }}>
              NEED AN ENTERPRISE POS OR COMPLETE PRODUCT ECOSYSTEM?
            </h3>
            <p className={styles.contentBlock} style={{ maxWidth: "680px", margin: "0 auto 1.5rem auto" }}>
              From offline-first Flutter mobile apps and hardware peripheral integration (Bluetooth printers/barcode scanners) to production Next.js marketing websites, WhatsApp automation pipelines, and social growth architectures — I build end-to-end commercial solutions.
            </p>
            <div className={styles.ctaGrid} style={{ justifyContent: "center" }}>
              <a
                href="https://myshop.sathishdev.in"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.omniBtn} ${styles.btnWebsite}`}
                style={{ fontSize: "16px", padding: "0.8rem 1.6rem", borderRadius: "9999px" }}
              >
                🌐 Visit Website &rarr;
              </a>
              <a
                href="https://myshop.sathishdev.in/demo"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.omniBtn} ${styles.omniBtnPrimary}`}
                style={{ fontSize: "16px", padding: "0.8rem 1.6rem", borderRadius: "9999px" }}
              >
                ⚡ Try Web Simulator
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.omniBtn} ${styles.omniBtnSecondary}`}
                style={{ fontSize: "16px", padding: "0.8rem 1.6rem", borderRadius: "9999px" }}
              >
                📱 Google Play
              </a>
              <a
                href="https://www.instagram.com/myshop.billing/"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.omniBtn} ${styles.btnInstagram}`}
                style={{ fontSize: "16px", padding: "0.8rem 1.6rem", borderRadius: "9999px" }}
              >
                📸 Instagram @myshop.billing
              </a>
              <a
                href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20see%20a%20demo%20of%20MyShop%20Grocery%20POS"
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.omniBtn} ${styles.btnWhatsApp}`}
                style={{ fontSize: "16px", padding: "0.8rem 1.6rem", borderRadius: "9999px" }}
              >
                💬 WhatsApp Demo
              </a>
              <Link
                href="/contact"
                className={styles.secondaryBtn}
                style={{ fontSize: "16px", padding: "0.8rem 1.6rem", borderRadius: "9999px" }}
              >
                Hire Sathish G &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
