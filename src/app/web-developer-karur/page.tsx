import type { Metadata } from "next";
import Link from "next/link";
import styles from "../app-developer-karur/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Web Developer in Karur | Sathish G — Modern Websites & Web Portals",
  description:
    "Hire Sathish G, professional web developer in Karur. Custom Next.js business websites, textile export portals, retail billing web dashboards, and secure cloud apps.",
  alternates: {
    canonical: "https://www.sathishdev.in/web-developer-karur",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Karur",
    "geo.position": "10.9601;78.0766",
    "ICBM": "10.9601, 78.0766",
  },
  openGraph: {
    title: "Web Developer in Karur | Sathish G — Websites & Web Portals",
    description:
      "Modern web development and portal engineering for Karur businesses. Custom Next.js websites, textile export catalogs, and billing dashboards.",
    url: "https://www.sathishdev.in/web-developer-karur",
    type: "website",
    images: [
      {
        url: "https://www.sathishdev.in/sathish.png",
        width: 800,
        height: 800,
        alt: "Sathish G — Web Developer in Karur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer in Karur | Sathish G",
    description:
      "Custom business websites, web portals, and billing dashboards for Karur enterprises.",
    images: ["https://www.sathishdev.in/sathish.png"],
  },
};

const faqs = [
  {
    q: "How much does a website or web portal cost for a business in Karur?",
    a: "A professional corporate website for a Karur manufacturer or exporter typically costs ₹20,000 to ₹40,000 with custom design, mobile responsiveness, and SEO. Specialized internal web portals, online product catalogs with quote generation, or multi-role dashboards range from ₹45,000 to ₹90,000. Working directly with me saves over 50% compared to metro agencies while delivering superior code quality.",
  },
  {
    q: "Can you build a private web portal for our textile factory or export buyers?",
    a: "Yes. I build secure web portals where overseas buyers can review fabric samples, track production order milestones, and download shipping manifests. Factory supervisors can also update job card statuses directly from tablets or office computers.",
  },
  {
    q: "Can our website connect with WhatsApp and payment gateways?",
    a: "Yes. I integrate direct WhatsApp click-to-chat, WhatsApp Business automated lead notifications, Razorpay/UPI payment collection, and instant PDF quotation generation.",
  },
  {
    q: "Can we meet in person in Karur to plan the website?",
    a: "Yes. Being based in Western Tamil Nadu, I frequently visit Karur to meet business owners and factory managers for in-person requirements discovery, live demonstrations, and project milestones.",
  },
];

export default function WebDeveloperKarur() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sathish G — Web Developer Karur",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/web-developer-karur",
              "telephone": "+91-7868031207",
              "priceRange": "$$",
              "description":
                "Professional web developer serving Karur, Tamil Nadu. Engineering fast business websites, textile export portals, and custom cloud software.",
              "areaServed": [
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
                "Web Development in Karur",
                "Website Design Karur",
                "Textile Export Portals",
                "Next.js Web Applications",
                "Factory Order Tracking Systems",
                "Retail Billing Dashboards",
                "Node.js Backend & Cloud Hosting",
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karur",
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
                  "name": "Web Developer Karur",
                  "item": "https://www.sathishdev.in/web-developer-karur",
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

        <div className={styles.badge}>KARUR &bull; TAMIL NADU</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>
            WEB DEVELOPER IN KARUR — MODERN WEBSITES, WEB PORTALS &amp; E-COMMERCE
          </h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Building modern, high-speed corporate websites, online export catalogs, and custom factory portals for Karur home textile manufacturers, bus body fabricators, and retailers. Direct engineering partnership with on-site availability.
        </p>

        {/* Local Karur Trust Banner */}
        <div className={styles.trustBox}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📍</span>
            <span><strong>Karur On-Site Consultation:</strong> Meet directly at your office, factory, or showroom in Karur to discuss requirements in Tamil or English.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span><strong>Global-Standard Speed:</strong> Modern Next.js websites that load instantly for domestic customers and international buyers in the US, Europe, and UAE.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🤝</span>
            <span><strong>Direct Senior Developer:</strong> You communicate directly with the engineer who builds your website, with zero agency markups or delays.</span>
          </div>
        </div>

        <div className={styles.ctaGrid}>
          <a
            href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20am%20looking%20for%20a%20web%20developer%20in%20Karur%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappHeroBtn}
          >
            <span>💬</span> WhatsApp: +91 78680 31207
          </a>
          <a href="tel:+917868031207" className={styles.callHeroBtn}>
            <span>📞</span> Call: +91 78680 31207
          </a>
          <Link href="/contact" className={styles.secondaryBtn}>
            Book Meeting &rarr;
          </Link>
        </div>

        {/* 1. Tailored for Karur Industries */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Web Solutions Tailored for Karur Businesses</h2>
          <div className={styles.contentBlock}>
            <p>
              Karur is globally celebrated for home textiles, export garments, bus body building, and agriculture trade. Yet many established manufacturers in the region still rely on outdated static websites that do not reflect their true production capability to overseas clients.
            </p>
            <p>
              I engineer bespoke web platforms that present your products with crisp visual fidelity, allow global buyers to submit RFQs (Request For Quotation) with one click, and automate internal administrative workflows.
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "2rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Textile Exporter Product Catalogs</h3>
              <p className={styles.cardDesc}>
                High-definition digital product showcases for bed linen, curtains, kitchen textiles, and fabrics with filterable categories, specification downloads, and direct inquiry forms.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Internal Factory Order Portals</h3>
              <p className={styles.cardDesc}>
                Web portals accessible from any computer or mobile tablet to log production batches, track dyeing/weaving statuses, and reduce internal paperwork.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Retail &amp; Wholesale Billing Web Dashboards</h3>
              <p className={styles.cardDesc}>
                Cloud-synchronized sales registers and inventory control panels for Karur retailers, allowing shop owners to check daily receipts from home or while traveling.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Corporate Portals for Fabricators</h3>
              <p className={styles.cardDesc}>
                Professional digital presence for Karur bus body builders, engineering fabricators, and equipment distributors to showcase completed vehicle projects and client portfolios.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Core Web Capabilities */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technologies &amp; Standards</h2>
          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Next.js &amp; React Development</h3>
              <p className={styles.cardDesc}>
                Sub-second page speeds, seamless mobile experience, and modern layouts that outperform traditional WordPress websites by 3x in speed and security.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Google Search &amp; Local SEO</h3>
              <p className={styles.cardDesc}>
                Comprehensive on-page SEO, Google My Business alignment, structured schema, and keyword optimization to attract high-intent local and international inquiries.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>WhatsApp &amp; CRM Integrations</h3>
              <p className={styles.cardDesc}>
                Every customer inquiry on your site instantly pings your personal WhatsApp number with project details, customer name, and contact information.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Secure Cloud Hosting &amp; Backups</h3>
              <p className={styles.cardDesc}>
                Configured on reliable cloud servers (AWS/Vercel) with free SSL encryption, automated daily backups, and 99.9% uptime monitoring.
              </p>
            </div>
          </div>

          <div className={styles.skillsList} style={{ marginTop: "2rem" }}>
            <span className={styles.skillBadge}>Next.js Web Applications</span>
            <span className={styles.skillBadge}>React UI</span>
            <span className={styles.skillBadge}>WhatsApp Automation</span>
            <span className={styles.skillBadge}>Local SEO Karur</span>
            <span className={styles.skillBadge}>Textile Catalog Portals</span>
            <span className={styles.skillBadge}>PostgreSQL &amp; Node.js</span>
            <span className={styles.skillBadge}>Cloud AWS Deployment</span>
          </div>
        </section>

        {/* 3. Pricing Packages */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Transparent Web Packages for Karur Businesses</h2>
          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Corporate Business Website</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>₹20,000 – ₹38,000</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Modern Next.js website with 5–8 pages, mobile-friendly design, WhatsApp lead button, inquiry forms, and complete Google search setup. Shipped in 2 to 3 weeks.
              </p>
            </div>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Textile Export Product Portal</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>₹40,000 – ₹75,000</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Interactive digital product catalog with filterable fabric categories, quotation cart, international buyer inquiry forms, and PDF export. Shipped in 3 to 5 weeks.
              </p>
            </div>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Custom Factory / Billing Portal</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>₹75,000+</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Custom database portal for multi-station manufacturing tracking, inventory register, or multi-branch retail sales consolidation. Shipped in 5 to 8 weeks.
              </p>
            </div>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Website Maintenance &amp; Retainer</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>Flexible Terms</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Ongoing product updates, photo uploads, domain/SSL renewal management, and technical troubleshooting on a monthly basis.
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
            <h2 className={styles.consultationTitle}>Looking for a Web Developer in Karur?</h2>
            <p className={styles.consultationDesc}>
              Let&apos;s build a website or web portal that elevates your business image and generates genuine sales inquiries. Available for direct calls or on-site visits in Karur.
            </p>
            <div className={styles.ctaGrid} style={{ justifyContent: "center", marginBottom: 0 }}>
              <a
                href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20website%20project%20for%20my%20business%20in%20Karur."
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
                Schedule Consultation &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
