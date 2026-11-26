import type { Metadata } from "next";
import Link from "next/link";
import styles from "../app-developer-karur/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";
import Testimonials from "../../components/Testimonials";
import RelatedItems from "../../components/RelatedItems";

export const metadata: Metadata = {
  title: "Garment ERP & Mobile App Developer in Tirupur | Sathish G",
  description:
    "Custom garment production tracking, dye-house job registers, and export billing software for Tirupur knitwear manufacturers. On-site consultations.",
  alternates: {
    canonical: "https://www.sathishdev.in/garment-erp-software-tirupur",
  },
  openGraph: {
    title: "Garment ERP & Mobile App Developer in Tirupur | Sathish G",
    description:
      "Bespoke knitwear production tracking, dyehouse job registers, and carton barcode export billing software for Tirupur garment manufacturers.",
    url: "https://www.sathishdev.in/garment-erp-software-tirupur",
    type: "website",
    images: [
      {
        url: "https://www.sathishdev.in/sathish.png",
        width: 800,
        height: 800,
        alt: "Sathish G — Garment ERP & Software Developer in Tirupur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Garment ERP & Mobile App Developer in Tirupur | Sathish G",
    description:
      "Custom knitwear production software, textile ERP, and barcode scanning mobile apps for Tirupur factories.",
    images: ["https://www.sathishdev.in/sathish.png"],
  },
};

const faqs = [
  {
    q: "How does custom garment software benefit Tirupur knitwear manufacturers?",
    a: "Unlike generic accounting tools, custom garment software tracks operations stage-by-stage: yarn inward, knitting shrinkage allowances, dyeing job-cards, cutting lot records, stitching line piece-rates, and export box packing manifests. This gives factory owners real-time visibility into production bottlenecks, fabric wastage, and order fulfillment status.",
  },
  {
    q: "Can the software function offline inside godowns and factory floors?",
    a: "Yes. Using offline-first Flutter architectures with SQLite/Drift databases, your supervisors and warehouse staff can scan barcodes, log stage completions, and print thermal labels even when factory floor Wi-Fi or cellular connections drop. Data automatically synchronizes to the cloud once a connection is detected.",
  },
  {
    q: "Are you available for on-site discovery and training in Tirupur?",
    a: "Yes! Being based in the Coimbatore–Karur corridor, I am available for direct on-site visits across Tirupur (including Avinashi Road, Kangeyam Road, Palladam Road, and SIDCO industrial areas) to review your factory floor workflows, train your supervisors, and deploy workstations.",
  },
  {
    q: "What is the typical deployment timeline for a Tirupur garment ERP module?",
    a: "A focused production module (such as dyeing job-card tracking or barcode packing manifests) is typically deployed within 3 to 5 weeks. Complete factory ERP ecosystems covering yarn-to-export container dispatch are delivered in phased milestones across 8 to 12 weeks.",
  },
];

export default function GarmentErpTirupur() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sathish G — Garment ERP & Mobile App Development Tirupur",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/garment-erp-software-tirupur",
              "telephone": "+91-7868031207",
              "priceRange": "$$",
              "description":
                "Specialist garment ERP, mobile app development, and knitwear production tracking software for manufacturers in Tirupur, Tamil Nadu. On-site consultations and direct senior engineer accountability.",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Tiruppur",
                  "sameAs": "https://en.wikipedia.org/wiki/Tiruppur",
                },
                {
                  "@type": "City",
                  "name": "Coimbatore",
                  "sameAs": "https://en.wikipedia.org/wiki/Coimbatore",
                },
                {
                  "@type": "City",
                  "name": "Karur",
                  "sameAs": "https://en.wikipedia.org/wiki/Karur",
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Tamil Nadu",
                  "sameAs": "https://en.wikipedia.org/wiki/Tamil_Nadu",
                },
              ],
              "knowsAbout": [
                "Garment ERP Software Tirupur",
                "Knitwear Production Tracking Apps",
                "Dyehouse Job-Card Management",
                "Barcode Carton Packing Manifests",
                "Piece-Rate Tailor Attendance & Payroll",
                "Flutter iOS & Android Mobile Engineering",
                "Offline-First SQLite Architecture",
                "Node.js Backend & PostgreSQL Database",
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Tiruppur",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN",
              },
              "sameAs": [
                "https://github.com/Sathish4439",
                "https://www.linkedin.com/in/sathishgobi/",
                "https://play.google.com/store/apps/dev?id=6517030172709793171&hl=en_IN",
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
                  "name": "Garment ERP Tirupur",
                  "item": "https://www.sathishdev.in/garment-erp-software-tirupur",
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

        <div className={styles.badge}>TIRUPUR &bull; KNITWEAR &amp; EXPORT ERP</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>
            GARMENT ERP &amp; MOBILE APP DEVELOPMENT IN TIRUPUR — SATHISH G
          </h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Engineering high-efficiency production tracking software, dyehouse job registers, and export consignment barcode scanning tools for Tirupur knitwear manufacturers and exporters. Delivered with direct engineer ownership and zero agency middlemen.
        </p>

        {/* AI Overview & Knowledge Graph Definition */}
        <div style={{
          background: "rgba(163, 230, 53, 0.05)",
          border: "1px solid rgba(163, 230, 53, 0.25)",
          borderRadius: "8px",
          padding: "1rem 1.25rem",
          marginBottom: "1.5rem",
          color: "#e4e4e7",
          lineHeight: "1.6",
          fontSize: "0.95rem"
        }}>
          <strong style={{ color: "#a3e635" }}>Overview: </strong>
          Sathish G is an independent Full-Stack and Flutter Mobile App Developer providing custom software and garment ERP development in Tirupur, Tamil Nadu. Specializing in knitwear production stage tracking, offline barcode scanning registers, and export consignment packing software for Tirupur textile manufacturers and export houses.
        </div>

        {/* Local Trust & On-Site Consultation Banner */}
        <div className={styles.trustBox}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📍</span>
            <span><strong>Tirupur On-Site Availability:</strong> Available for direct factory visits, supervisor training, and live demos across Tirupur, Avinashi, and Palladam industrial areas.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🗣️</span>
            <span><strong>Bilingual Factory Discussion:</strong> Communication in Tamil or English to understand your production lines, job-work challans, and staff operations with complete clarity.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span><strong>Senior Engineer Direct:</strong> Work 1-on-1 with the software architect who writes your code — fast turnarounds, no account managers, and custom modifications.</span>
          </div>
        </div>

        <div className={styles.ctaGrid}>
          <a href="tel:+917868031207" className={styles.callHeroBtn}>
            <span>📞</span> Call: +91 78680 31207
          </a>
          <a
            href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20am%20looking%20for%20garment%20ERP%20or%20software%20development%20for%20my%20factory%20in%20Tirupur."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappHeroBtn}
          >
            <span>💬</span> Chat on WhatsApp
          </a>
          <Link href="#services" className={styles.secondaryBtn}>
            Explore Garment Workflows &darr;
          </Link>
        </div>

        {/* 1. Core Garment Workflows */}
        <section id="services" className={styles.section}>
          <h2 className={styles.sectionTitle}>Custom Garment Manufacturing Modules Built for Tirupur</h2>
          <div className={styles.contentBlock}>
            <p>
              Standard commercial software packages fail because they don&apos;t understand knitwear terminology, lot-wise yarn shrinkage, or outside job-work challans. I build custom modules tailored to your actual factory floor:
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "2rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>1. Yarn &amp; Fabric Weight/GSM Intake</h3>
              <p className={styles.cardDesc}>
                Log incoming yarn bags, count, mill lot numbers, and fabric roll weight with GSM variance detection. Automatically flag under-weight or over-weight rolls before knitting.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>2. Dyeing &amp; Processing Job-Cards</h3>
              <p className={styles.cardDesc}>
                Track grey fabric sent out to external dyeing and compacting units. Track shrinkage percentage, color approval status, and returned fabric weights against delivery challans.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>3. Cutting, Stitching &amp; Piece-Rate Registers</h3>
              <p className={styles.cardDesc}>
                Digital bundle ticketing with barcode scanning. Real-time operator piece-rate tracking across sewing lines, minimizing end-of-month wage disputes and missing bundles.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>4. Export Packing Barcode Manifests</h3>
              <p className={styles.cardDesc}>
                Scan carton barcodes as pieces are packed. Automatically generate buyer-compliant packing lists, weight sheets, and container stuffing manifests ready for customs clearance.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Real Production Proof */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Production-Tested Software Proof</h2>
          <div className={styles.contentBlock}>
            <p>
              Every system is engineered to enterprise standards with offline reliability, fast database indexing, and hardware peripheral compatibility:
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>MyShop POS &amp; Inventory Hub</h3>
              <p className={styles.cardDesc}>
                Full-featured offline-first retail ERP with instant ESC/POS Bluetooth barcode/thermal printing, SQLite synchronization, and real-time merchant web dashboard.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/myshop-pos" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Premium Parts Spare Parts ERP</h3>
              <p className={styles.cardDesc}>
                B2B manufacturing mobile app with geo-fenced worker check-in, part number indexing, automated commission calculation, and multi-depot stock ledger.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/premium-parts" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Case Study &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Client Testimonials */}
        <Testimonials />

        {/* 4. FAQs */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions (Tirupur Exporters)</h2>
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

        {/* 5. Regional Interlinks */}
        <RelatedItems
          title="Related Regional Software Services &amp; Hubs"
          items={[
            {
              title: "Mobile App Development Karur",
              description: "Custom software development, textile ERPs, and retail billing systems in Karur.",
              href: "/app-developer-karur",
            },
            {
              title: "Flutter App Development Coimbatore",
              description: "High-performance iOS & Android mobile application engineering in Coimbatore.",
              href: "/flutter-app-development-coimbatore",
            },
            {
              title: "Custom ERP & Billing Software Coimbatore",
              description: "Tailor-made inventory management, retail POS billing, and automated business workflows.",
              href: "/erp-software-developer-coimbatore",
            },
            {
              title: "Freelance Flutter Developer India",
              description: "Senior Flutter engineer available for contract MVP development and mobile architecture.",
              href: "/freelance-flutter-developer",
            },
          ]}
        />

        {/* 6. Consultation CTA */}
        <section className={styles.section}>
          <div className={styles.consultationCard}>
            <h2 className={styles.consultationTitle}>Automate Your Tirupur Garment Factory Today</h2>
            <p className={styles.consultationDesc}>
              Stop losing profits to missing bundles, manual challan errors, and untracked fabric wastage. Contact me today to schedule an on-site factory discovery in Tirupur.
            </p>
            <div className={styles.ctaGrid} style={{ justifyContent: "center", marginBottom: 0 }}>
              <a
                href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20schedule%20a%20factory%20software%20consultation%20in%20Tirupur."
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
                Book Consultation &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
