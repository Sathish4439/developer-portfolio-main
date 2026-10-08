import type { Metadata } from "next";
import Link from "next/link";
import styles from "../app-developer-karur/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Windows & Desktop App Developer | Sathish G — Custom Offline & ERP Software",
  description:
    "Hire Sathish G, Windows desktop application developer. Engineered offline-first business software, POS systems, manufacturing ERPs, barcode printer integrations, and SQLite sync.",
  alternates: {
    canonical: "https://www.sathishdev.in/windows-desktop-app-developer",
  },
  openGraph: {
    title: "Windows & Desktop App Developer | Sathish G — Offline & ERP Software",
    description:
      "High-performance Windows and desktop applications: offline-first POS systems, ERP software, and hardware integrations for businesses.",
    url: "https://www.sathishdev.in/windows-desktop-app-developer",
    type: "website",
    images: [
      {
        url: "https://www.sathishdev.in/sathish.png",
        width: 800,
        height: 800,
        alt: "Sathish G — Windows Desktop Application Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Windows & Desktop App Developer | Sathish G",
    description:
      "Custom Windows desktop applications, offline-first POS systems, and enterprise software.",
    images: ["https://www.sathishdev.in/sathish.png"],
  },
};

const faqs = [
  {
    q: "Can you build desktop applications that work 100% offline?",
    a: "Yes. I specialize in offline-first architecture using embedded local databases (SQLite, Drift, Hive). Your staff can bill customers, record factory stock, and scan barcodes even when the internet is completely disconnected. All local records automatically sync with your central cloud server whenever connectivity resumes.",
  },
  {
    q: "Why choose a native desktop app over a web browser app?",
    a: "Native desktop applications offer instantaneous startup times, zero internet dependency, direct USB hardware access (thermal receipt printers, barcode scanners, digital weighing scales), and keyboard-shortcut velocity essential for busy retail cashiers and factory dispatch clerks.",
  },
  {
    q: "Can your desktop software connect with thermal printers and barcode scanners?",
    a: "Yes. I have implemented direct USB, Serial, and Network ESC/POS thermal printing, handheld 1D/2D barcode scanners, cash drawer kickouts, and weighing scale serial protocol readers into custom desktop software.",
  },
  {
    q: "How much does custom Windows desktop software development cost?",
    a: "A focused standalone desktop utility or single-store billing POS generally ranges from ₹35,000 to ₹65,000. Multi-counter manufacturing ERPs or multi-branch retail desktop systems with cloud sync typically range from ₹70,000 to ₹1,50,000. Delivered with clean architecture and lifetime source code ownership.",
  },
];

export default function WindowsDesktopAppDeveloper() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sathish G — Windows & Desktop Application Developer",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/windows-desktop-app-developer",
              "telephone": "+91-7868031207",
              "priceRange": "$$",
              "description":
                "Expert Windows desktop application engineer specializing in offline-first business software, POS billing systems, manufacturing ERPs, and thermal hardware integrations.",
              "knowsAbout": [
                "Windows Desktop Application Development",
                "Flutter Desktop for Windows & macOS",
                "Offline-First SQLite & Drift Architecture",
                "Retail POS Billing Software",
                "Manufacturing ERP Desktop Systems",
                "Thermal ESC/POS Receipt Printing",
                "Barcode Scanner USB Integration",
                "Cloud Data Synchronization",
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN",
              },
              "sameAs": [
                "https://github.com/Sathish4439",
                "https://www.linkedin.com/in/sathishgobi/",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a,
                },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.sathishdev.in",
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Windows Desktop App Developer",
                  "item": "https://www.sathishdev.in/windows-desktop-app-developer",
                },
              ],
            },
          ]),
        }}
      />

      <div className={styles.container}>
        <div className={styles.backLinkWrap}>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Home</span>
          </Link>
        </div>

        <div className={styles.badge}>WINDOWS &bull; DESKTOP &bull; OFFLINE-FIRST</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>
            WINDOWS &amp; DESKTOP APPLICATION DEVELOPER — CUSTOM BUSINESS SOFTWARE, ERP &amp; OFFLINE APPS
          </h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Architecting robust Windows desktop applications, offline-first billing POS software, and industrial ERP workstations. High performance, zero internet dependency, and seamless hardware connectivity for retail and manufacturing.
        </p>

        {/* Technical Highlights */}
        <div className={styles.trustBox}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span><strong>100% Offline Capability:</strong> Uninterrupted operations with embedded SQLite/Drift databases. Keep billing even when Wi-Fi or broadband drops.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🖨️</span>
            <span><strong>Direct Hardware Interfacing:</strong> Native support for USB thermal printers, ESC/POS commands, cash drawers, and barcode scanners.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>💻</span>
            <span><strong>Cross-Platform Ready:</strong> Native Windows 10/11 execution with seamless capability to compile for macOS and Linux from a single codebase.</span>
          </div>
        </div>

        <div className={styles.ctaGrid}>
          <a
            href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20am%20looking%20for%20a%20Windows/desktop%20application%20developer%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappHeroBtn}
          >
            <span>💬</span> WhatsApp: +91 78680 31207
          </a>
          <a href="tel:+917868031207" className={styles.callHeroBtn}>
            <span>📞</span> Direct Call
          </a>
          <Link href="/contact" className={styles.secondaryBtn}>
            Discuss Requirements &rarr;
          </Link>
        </div>

        {/* 1. Why Native Desktop Software in 2026? */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Native Desktop Software Outperforms Web Browsers in Core Operations</h2>
          <div className={styles.contentBlock}>
            <p>
              While cloud web apps are ideal for management dashboards and customer portals, mission-critical operations like <strong>supermarket checkout counters, warehouse sorting yards, and textile factory dispatch floors</strong> cannot afford internet downtime or browser tab crashes.
            </p>
            <p>
              I build native desktop software that runs directly on your Windows machines with compiled machine speed, instant keyboard shortcuts, and bulletproof offline synchronization.
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "2rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Offline-First Local Database</h3>
              <p className={styles.cardDesc}>
                Data is written instantly to embedded local tables with sub-5ms write times. Background sync processes mirror records to your cloud database whenever an internet connection is detected.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Instant Thermal &amp; Barcode Printing</h3>
              <p className={styles.cardDesc}>
                Zero print dialog delays. Raw byte transmission over USB, Serial, or LAN straight to thermal receipt printers, 2-inch barcode sticker printers, and continuous stationery dot matrix.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>High-Volume Keyboard Navigation</h3>
              <p className={styles.cardDesc}>
                Engineered for rapid cashier typing with custom shortcut bindings (F1–F12 quick keys, instant item search, Enter-to-tender checkout) that require zero mouse interaction.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Data Security &amp; Local Sovereignty</h3>
              <p className={styles.cardDesc}>
                Your business transactions and financial ledgers stay securely on your local storage drives without third-party subscription locks or recurring per-user fees.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Real Desktop Systems Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Real Desktop &amp; Offline Systems Shipped</h2>
          <div className={styles.contentBlock}>
            <p>
              Real production software handling daily commercial billing and industrial management:
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Splendour Park ERP Desktop Suite</h3>
              <p className={styles.cardDesc}>
                Comprehensive textile manufacturing desktop ERP with offline order progression, job-card registers, fabric stock control, and automated GST billing.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  View Project Architecture &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>MyShop POS (Flutter &amp; Drift SQLite)</h3>
              <p className={styles.cardDesc}>
                Offline-first retail POS system running on Windows and Android. Features instant barcode scanning, local SQLite caching, thermal bill generation, and cloud sync.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/myshop-pos" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Read Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Premium Parts Automotive ERP</h3>
              <p className={styles.cardDesc}>
                Enterprise spare-parts distribution software with multi-warehouse batch tracking, sales order registers, and customer payment reconciliation.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/premium-parts" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Read Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>WhatsApp Automation Desktop Tool</h3>
              <p className={styles.cardDesc}>
                Desktop automation tool for broadcasting order status updates, overdue payment reminders, and customer invoices directly through WhatsApp APIs.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Explore All Systems &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Tech Stack */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Desktop Technology Stack</h2>
          <div className={styles.skillsList} style={{ marginTop: "1rem" }}>
            <span className={styles.skillBadge}>Flutter Desktop (Windows &amp; macOS)</span>
            <span className={styles.skillBadge}>Drift &amp; SQLite Local DB</span>
            <span className={styles.skillBadge}>ESC/POS Thermal Printing</span>
            <span className={styles.skillBadge}>USB / Serial Port Drivers</span>
            <span className={styles.skillBadge}>Offline-First Cloud Sync</span>
            <span className={styles.skillBadge}>Node.js Sync Microservices</span>
            <span className={styles.skillBadge}>PostgreSQL Remote Database</span>
            <span className={styles.skillBadge}>Windows MSI / EXE Installers</span>
          </div>
        </section>

        {/* 4. Pricing / Investment */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Desktop Software Investment Models</h2>
          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Standalone POS / Utility Tool</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>₹35,000 – ₹60,000</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Single-machine offline desktop software with embedded SQLite database, barcode scanning, thermal receipt printing, and daily CSV reports. Shipped in 3 to 4 weeks.
              </p>
            </div>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Multi-Counter ERP with Cloud Sync</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>₹70,000 – ₹1,30,000</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Multi-workstation desktop system with centralized server sync, role-based access, inventory tracking, GST invoice creation, and web dashboard access. Shipped in 6 to 10 weeks.
              </p>
            </div>
          </div>
        </section>

        {/* 5. FAQs */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.5rem" }}>
            {faqs.map((f, i) => (
              <div key={i} className={styles.card} style={{ padding: "1.5rem" }}>
                <h3 className={styles.cardTitle} style={{ fontSize: "1.1rem", color: "#a3e635", marginBottom: "0.5rem" }}>
                  {f.q}
                </h3>
                <p className={styles.cardDesc} style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. CTA */}
        <section className={styles.section}>
          <div className={styles.consultationCard}>
            <h2 className={styles.consultationTitle}>Need Custom Windows or Offline Desktop Software?</h2>
            <p className={styles.consultationDesc}>
              Let&apos;s build software that accelerates your daily transactions, connects seamlessly to your thermal hardware, and never stops working when the internet goes down.
            </p>
            <div className={styles.ctaGrid} style={{ justifyContent: "center", marginBottom: 0 }}>
              <a
                href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20Windows/desktop%20software%20project."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappHeroBtn}
              >
                <span>💬</span> WhatsApp: +91 78680 31207
              </a>
              <a href="tel:+917868031207" className={styles.callHeroBtn}>
                <span>📞</span> Call +91 78680 31207
              </a>
              <Link href="/contact" className={styles.secondaryBtn}>
                Get Free Consultation &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
