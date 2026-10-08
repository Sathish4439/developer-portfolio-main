import type { Metadata } from "next";
import Link from "next/link";
import styles from "../app-developer-karur/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "ERP & Business Software Developer in Coimbatore | Sathish G",
  description:
    "Hire Sathish G, premier ERP software developer in Coimbatore. Custom inventory management, automated payroll, textile ERP, automotive distribution systems, and retail POS software.",
  alternates: {
    canonical: "https://www.sathishdev.in/erp-software-developer-coimbatore",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore",
    "geo.position": "11.0168;76.9558",
    "ICBM": "11.0168, 76.9558",
  },
  openGraph: {
    title: "ERP Software Developer in Coimbatore | Sathish G",
    description:
      "Custom ERP systems, inventory software, and automated business management tools built for Coimbatore manufacturers, distributors, and retailers.",
    url: "https://www.sathishdev.in/erp-software-developer-coimbatore",
    type: "website",
    images: [
      {
        url: "https://www.sathishdev.in/sathish.png",
        width: 800,
        height: 800,
        alt: "Sathish G — ERP Software Developer in Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ERP Software Developer in Coimbatore | Sathish G",
    description:
      "Custom ERP software, inventory systems, and automated billing for Coimbatore enterprises.",
    images: ["https://www.sathishdev.in/sathish.png"],
  },
};

const faqs = [
  {
    q: "How long does custom ERP software development take in Coimbatore?",
    a: "A focused modular ERP system (such as inventory management + billing + customer ledger) typically takes 4 to 8 weeks. Comprehensive multi-department enterprise ERPs with production tracking, geo-fenced attendance, and payroll generally take 8 to 14 weeks, delivered in phased milestones so your staff can start using core modules early.",
  },
  {
    q: "Do you build industry-specific ERP for textiles, automotive, and manufacturing?",
    a: "Yes. Unlike rigid one-size-fits-all ERP packages, I build custom workflows designed around your exact operational steps — including yarn/fabric registers for textiles, batch/part number lookup for automotive spare parts, and job-card routing for machine shops.",
  },
  {
    q: "Can custom ERP integrate with existing accounting tools or Tally?",
    a: "Yes. I can implement automated data synchronization and export routines compatible with Tally XML/Excel formats, GST portal CSV filing formats, and direct bank API payout gateways.",
  },
  {
    q: "What is the cost difference between custom ERP and off-the-shelf software like SAP or Zoho?",
    a: "Off-the-shelf enterprise platforms charge expensive recurring monthly per-user subscriptions, rigid feature locks, and hefty consultant fees. A custom ERP built by me gives you 100% full source code ownership, zero recurring user licenses, and an exact match to your operational workflows, saving hundreds of thousands over 2–3 years.",
  },
];

export default function ErpSoftwareDeveloperCoimbatore() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sathish G — ERP Software Developer Coimbatore",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/erp-software-developer-coimbatore",
              "telephone": "+91-7868031207",
              "priceRange": "$$",
              "description":
                "Specialist ERP and business management software engineer in Coimbatore, Tamil Nadu. Architecting custom inventory systems, payroll automation, textile manufacturing workflows, and multi-branch POS software.",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Coimbatore",
                  "sameAs": "https://en.wikipedia.org/wiki/Coimbatore",
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Tamil Nadu",
                  "sameAs": "https://en.wikipedia.org/wiki/Tamil_Nadu",
                },
              ],
              "knowsAbout": [
                "ERP Software Development Coimbatore",
                "Custom Inventory Management Systems",
                "Textile Manufacturing ERP",
                "Automotive Spare Parts Distribution Software",
                "Geo-Fenced Attendance & Automated Payroll",
                "Retail & Wholesale POS Systems",
                "Node.js Backend & PostgreSQL Architecture",
                "Flutter Mobile & Desktop ERP Workstations",
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
                  "name": "ERP Software Developer Coimbatore",
                  "item": "https://www.sathishdev.in/erp-software-developer-coimbatore",
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

        <div className={styles.badge}>COIMBATORE &bull; ENTERPRISE SYSTEMS</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>
            ERP &amp; BUSINESS SOFTWARE DEVELOPER IN COIMBATORE — CUSTOM INVENTORY, PAYROLL &amp; POS SYSTEMS
          </h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Designing and engineering custom ERP systems tailored to Coimbatore&apos;s industrial DNA. Eliminate disconnected spreadsheets, automate factory workflows, track multi-warehouse inventory, and control billing with complete source code ownership.
        </p>

        {/* Local Advantage Banner */}
        <div className={styles.trustBox}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🏭</span>
            <span><strong>Industrial Understanding:</strong> Deep domain experience building software for Coimbatore manufacturing, textile mills, pump fabrication, and auto component distribution.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🔒</span>
            <span><strong>Zero Recurring Licenses:</strong> Own your complete source code and database. Never pay monthly per-user fees to corporate SaaS providers.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📍</span>
            <span><strong>Local On-Site Rollout:</strong> Direct on-premise consultation, staff training, and deployment across Coimbatore, Tirupur, and Pollachi.</span>
          </div>
        </div>

        <div className={styles.ctaGrid}>
          <a
            href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20custom%20ERP/business%20software%20for%20my%20company%20in%20Coimbatore."
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
            Book ERP Discovery &rarr;
          </Link>
        </div>

        {/* 1. Why Coimbatore Businesses Need Custom ERP */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Custom ERP Outperforms Generic Software for Coimbatore Businesses</h2>
          <div className={styles.contentBlock}>
            <p>
              Off-the-shelf software products force your business to conform to rigid templates. In contrast, Coimbatore&apos;s leading manufacturers, engineering firms, and distributors have unique operational strengths — such as custom pricing tiers for wholesale dealers, complex raw material wastage allowances, and multi-unit inventory counts (meters, kilograms, boxes).
            </p>
            <p>
              I engineer bespoke ERP systems designed precisely around your existing paperwork, factory stages, and management metrics.
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "2rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Custom Production &amp; Job-Card Tracking</h3>
              <p className={styles.cardDesc}>
                Track goods through raw material receipt, machining, heat treatment, quality checks, packaging, and dispatch with digital barcoding and time stamps.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Real-Time Multi-Warehouse Stock</h3>
              <p className={styles.cardDesc}>
                Maintain instant stock visibility across your main factory, godowns, and distributor retail points with automatic low-stock alerts and purchase orders.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Geo-Fenced Attendance &amp; Payroll</h3>
              <p className={styles.cardDesc}>
                Mobile app check-in restricted by GPS coordinates, automated overtime calculations, shift management, and one-click salary slip generation.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Executive Mobile &amp; Web Dashboards</h3>
              <p className={styles.cardDesc}>
                Owners can monitor daily sales, cash collections, pending vendor payments, and factory production numbers from anywhere on their smartphone.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Proven Production ERP Projects */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Production Systems &amp; Real Proof</h2>
          <div className={styles.contentBlock}>
            <p>
              Here are enterprise business software solutions built and deployed for real companies:
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Premium Parts Automotive ERP</h3>
              <p className={styles.cardDesc}>
                Enterprise software for spare parts distribution featuring geo-fenced employee attendance, automated commission tiers, multi-godown stock registers, and GST billing.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/premium-parts" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Read Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>MyShop POS &amp; Inventory Suite</h3>
              <p className={styles.cardDesc}>
                Offline-capable retail and wholesale management platform with barcode scanning, batch tracking, thermal bill printing, and centralized web analytics.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/myshop-pos" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Read Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Splendour Park Textile ERP</h3>
              <p className={styles.cardDesc}>
                Manufacturing suite managing yarn inwarding, loom production milestones, dyeing batch registers, finished goods inventory, and dispatch invoices.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Explore Architecture &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Nest Pilot SaaS Facility Management</h3>
              <p className={styles.cardDesc}>
                Multi-tenant commercial property and hostel management system with tenant digital KYC, automated monthly rent invoicing, and expense reporting.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  View All Work &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Industry Verticals in Coimbatore */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Custom ERP Solutions by Industry</h2>
          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Textile &amp; Spinning Mills</h3>
              <p className={styles.cardDesc}>
                Bale inventory, yarn count tracking, weaving warp/weft calculations, fabric grading, roll inspection logs, and domestic/export invoice generation.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Pumps, Motors &amp; Foundries</h3>
              <p className={styles.cardDesc}>
                Raw metal intake, pattern registers, casting batch tracking, assembly line job cards, testing bench test logs, and warranty certificate generation.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Automotive Component Distributors</h3>
              <p className={styles.cardDesc}>
                Part number cataloging, multi-vehicle fitment indexing, dealer credit limit control, field sales booking app, and courier tracking integration.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Wholesale &amp; Retail Supermarkets</h3>
              <p className={styles.cardDesc}>
                Barcode label printing, expiry date batch alerts, fast counter checkout, supplier return registers, and profit-margin analytics per product category.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Frequently Asked Questions */}
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

        {/* 5. Consultation CTA */}
        <section className={styles.section}>
          <div className={styles.consultationCard}>
            <h2 className={styles.consultationTitle}>Digitize Your Business Operations in Coimbatore</h2>
            <p className={styles.consultationDesc}>
              Schedule a technical discovery session with Sathish G. We will audit your existing workflow bottlenecks and map out a phased custom software architecture.
            </p>
            <div className={styles.ctaGrid} style={{ justifyContent: "center", marginBottom: 0 }}>
              <a
                href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20custom%20ERP%20system%20for%20my%20business."
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
                Request On-Site Audit &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
