import type { Metadata } from "next";
import Link from "next/link";
import styles from "../app-developer-karur/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";
import Testimonials from "../../components/Testimonials";

export const metadata: Metadata = {
  title: "Web Developer in Coimbatore | Sathish G — React, Next.js & Full-Stack Web Apps",
  description:
    "Hire Sathish G, premier web developer in Coimbatore. High-performance Next.js 14 websites, React SaaS web applications, custom ERP admin dashboards, and Node.js APIs.",
  alternates: {
    canonical: "https://www.sathishdev.in/web-developer-coimbatore",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore",
    "geo.position": "11.0168;76.9558",
    "ICBM": "11.0168, 76.9558",
  },
  openGraph: {
    title: "Web Developer in Coimbatore | Sathish G — React, Next.js & Full-Stack",
    description:
      "Modern web development in Coimbatore by Sathish G. Custom Next.js web apps, admin portals, e-commerce platforms, and scalable cloud backends.",
    url: "https://www.sathishdev.in/web-developer-coimbatore",
    type: "website",
    images: [
      {
        url: "https://www.sathishdev.in/sathish.png",
        width: 800,
        height: 800,
        alt: "Sathish G — Web Developer in Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer in Coimbatore | Sathish G — Next.js & Full-Stack",
    description:
      "High-performance React & Next.js web development for Coimbatore businesses and global founders.",
    images: ["https://www.sathishdev.in/sathish.png"],
  },
};

const faqs = [
  {
    q: "How much does custom web development cost in Coimbatore?",
    a: "A modern business website or MVP web application typically ranges from ₹25,000 to ₹50,000. Full-scale custom web platforms, multi-tenant SaaS dashboards, and complex database-driven portals range from ₹50,000 to ₹1,20,000+ depending on feature requirements. Working directly with me eliminates agency commissions while ensuring enterprise-grade Next.js code quality.",
  },
  {
    q: "What web technologies and frameworks do you use?",
    a: "I specialize in modern TypeScript, React, Next.js (App Router, Server Components), Node.js, Express, PostgreSQL, Prisma ORM, Tailwind/CSS Modules, and AWS cloud hosting. For real-time functionality, I integrate Socket.io and Redis queue systems.",
  },
  {
    q: "Can you build custom admin dashboards, portals, and ERP web apps?",
    a: "Yes. I have engineered multiple production dashboards, including the MyShop POS Admin Portal (Next.js 14), RAG AI Dashboard, and Nest Pilot SaaS management console with role-based authentication, real-time analytics, and data export features.",
  },
  {
    q: "Do you handle domain configuration, technical SEO, and cloud deployment?",
    a: "Yes. Every website and web app is built with mobile responsiveness, Core Web Vitals optimization, semantic HTML5, Open Graph metadata, structured JSON-LD schema, and deployed on platforms like AWS EC2, Vercel, or custom VPS with automated SSL certificates.",
  },
];

export default function WebDeveloperCoimbatore() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sathish G — Web Developer Coimbatore",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/web-developer-coimbatore",
              "telephone": "+91-7868031207",
              "priceRange": "$$",
              "description":
                "Professional web developer based in Coimbatore, Tamil Nadu. Building high-performance Next.js websites, React SaaS applications, admin dashboards, and custom web portals.",
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
                "Web Development in Coimbatore",
                "Next.js Development",
                "React Web Applications",
                "Full-Stack Web Development",
                "Admin Dashboards & Portals",
                "E-Commerce Web Solutions",
                "Node.js Backend & REST APIs",
                "PostgreSQL & Prisma ORM",
                "AWS Deployment & SEO Optimization",
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
                  "name": "Web Developer Coimbatore",
                  "item": "https://www.sathishdev.in/web-developer-coimbatore",
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

        <div className={styles.badge}>COIMBATORE &bull; TAMIL NADU</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>
            WEB DEVELOPER IN COIMBATORE — REACT, NEXT.JS &amp; FULL STACK WEB APPS
          </h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Designing and engineering lightning-fast modern websites, SaaS platforms, and enterprise web dashboards for Coimbatore startups, manufacturers, and growing businesses. Direct engineer accountability with zero agency fluff.
        </p>

        {/* Local Trust Banner */}
        <div className={styles.trustBox}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📍</span>
            <span><strong>Coimbatore Local:</strong> Available for face-to-face requirements sessions across Gandhipuram, Peelamedu, Saravanampatti, RS Puram &amp; TIDEL Park.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span><strong>Sub-Second Load Times:</strong> Engineered using Next.js 14 SSR/SSG, modern caching, clean TypeScript, and 95+ Google Lighthouse scores.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🛠️</span>
            <span><strong>End-to-End Delivery:</strong> UI design, frontend coding, backend API, database modeling, and production AWS cloud deployment.</span>
          </div>
        </div>

        <div className={styles.ctaGrid}>
          <a
            href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20am%20looking%20for%20a%20web%20developer%20in%20Coimbatore%20for%20my%20business."
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
            Request Quote &rarr;
          </Link>
        </div>

        {/* 1. Why Choose a Direct Web Developer in Coimbatore? */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Choose an Independent Web Engineer in Coimbatore?</h2>
          <div className={styles.contentBlock}>
            <p>
              Many Coimbatore businesses hire traditional web agencies only to discover slow turnaround times, junior developers assigned to their projects, bloated WordPress templates, and endless support ticket delays.
            </p>
            <p>
              When you collaborate directly with me, you get a senior full-stack software engineer who writes hand-crafted, maintainable TypeScript and Next.js code tailored to your exact business operations. You get higher velocity, transparent milestone pricing, and direct technical consultation.
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "2rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Custom Next.js &amp; React Architecture</h3>
              <p className={styles.cardDesc}>
                No heavy page-builders or slow WordPress themes. Your site is custom-engineered using Next.js 14 for lightning-quick page transitions and maximum security.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>SEO &amp; Conversion First</h3>
              <p className={styles.cardDesc}>
                Built-in technical SEO, JSON-LD structured data, responsive mobile layouts, and high-converting CTAs that convert organic Google searchers into inbound leads.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Full-Stack Backend Integration</h3>
              <p className={styles.cardDesc}>
                Need customer logins, payment gateways (Razorpay/Stripe), automated invoices, or CRM synchronization? I engineer the Node.js API and PostgreSQL backend as one seamless unit.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Direct Local Support</h3>
              <p className={styles.cardDesc}>
                Quick communication on WhatsApp, flexible on-site meetings across Coimbatore, and proactive post-launch maintenance to keep your digital platform running at peak performance.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Web Development Services */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Web Development Services Offered in Coimbatore</h2>
          <p className={styles.subtitle} style={{ marginBottom: "1.5rem" }}>
            Tailored digital solutions from single-page marketing sites to complex enterprise web platforms:
          </p>

          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>High-Converting Corporate &amp; Business Websites</h3>
              <p className={styles.cardDesc}>
                Fast, responsive, and visually compelling web presence for Coimbatore manufacturers, textile firms, tech companies, and professional service providers.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>SaaS Platforms &amp; Client Portals</h3>
              <p className={styles.cardDesc}>
                Multi-tenant cloud applications featuring subscription billing, secure JWT/OAuth authentication, role-based access control, and user workspaces.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Custom Admin Dashboards &amp; ERP Portals</h3>
              <p className={styles.cardDesc}>
                Internal operations portals to track sales, factory production milestones, inventory levels, and real-time operational reports from any desktop or mobile browser.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>API Engineering &amp; Third-Party Integrations</h3>
              <p className={styles.cardDesc}>
                Integrating WhatsApp Cloud API for automated notifications, Google Maps, payment gateways, SMS routers (like FlatSMS), and third-party accounting software.
              </p>
            </div>
          </div>

          <div className={styles.skillsList} style={{ marginTop: "2rem" }}>
            <span className={styles.skillBadge}>Next.js 14 App Router</span>
            <span className={styles.skillBadge}>React &amp; TypeScript</span>
            <span className={styles.skillBadge}>Node.js &amp; Express</span>
            <span className={styles.skillBadge}>PostgreSQL &amp; Prisma</span>
            <span className={styles.skillBadge}>AWS EC2 &amp; Docker</span>
            <span className={styles.skillBadge}>Technical SEO &amp; Schema</span>
            <span className={styles.skillBadge}>Razorpay &amp; Stripe</span>
            <span className={styles.skillBadge}>Socket.io WebSockets</span>
          </div>
        </section>

        {/* 3. Real Web Projects & Proof */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Featured Web Platforms &amp; Applications</h2>
          <div className={styles.contentBlock}>
            <p>
              Here are actual production web systems engineered with modern full-stack architectures:
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>MyShop POS Admin Portal</h3>
              <p className={styles.cardDesc}>
                Enterprise retail web control panel built with Next.js 14, featuring real-time stock registers, multi-counter billing reconciliation, and GST reports.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/myshop-pos" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Read Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>RAG AI Knowledge Dashboard</h3>
              <p className={styles.cardDesc}>
                Interactive web dashboard for enterprise document vector search, real-time embeddings analytics, and conversational intelligence querying.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Explore Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Nest Pilot SaaS Web Console</h3>
              <p className={styles.cardDesc}>
                Multi-tenant facility management web app featuring automated rent invoicing, tenant lifecycle onboarding, and expense auditing.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  View All Work &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Judah Food Delivery Dispatch Web</h3>
              <p className={styles.cardDesc}>
                Live web dispatcher interface built for restaurant coordinators with real-time GPS tracking, active order statuses, and driver assignment.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/judah-food-delivery" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Read Case Study &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Transparent Pricing Models */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Transparent Investment Models for Coimbatore Businesses</h2>
          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>High-Speed Business Website</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>₹25,000 – ₹45,000</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Custom Next.js corporate website with up to 6 pages, dynamic lead capture forms, WhatsApp integration, full SEO setup, and SSL hosting. Shipped in 2 to 3 weeks.
              </p>
            </div>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Custom Web Portal &amp; Admin Dashboard</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>₹50,000 – ₹95,000</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Interactive web application with PostgreSQL database, user roles, real-time analytics, REST API integration, and automated reporting. Shipped in 4 to 6 weeks.
              </p>
            </div>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Full-Stack SaaS Platform</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>₹95,000+</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Multi-tenant SaaS product with subscription billing (Razorpay/Stripe), authentication, automated background jobs, and cloud deployment on AWS. Shipped in 6 to 10 weeks.
              </p>
            </div>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Dedicated Developer Retainer</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>Flexible Terms</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Continuous web feature engineering, bug fixes, server maintenance, and performance optimization on a monthly contractual engagement.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Frequently Asked Questions */}
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

        {/* 6. Consultation CTA */}
        <section className={styles.section}>
          <div className={styles.consultationCard}>
            <h2 className={styles.consultationTitle}>Ready to Build Your Web Application in Coimbatore?</h2>
            <p className={styles.consultationDesc}>
              Discuss your project goals directly with Sathish G. Whether you need a lightning-fast marketing site, an internal operational portal, or a scalable SaaS product, let&apos;s talk today.
            </p>
            <div className={styles.ctaGrid} style={{ justifyContent: "center", marginBottom: 0 }}>
              <a
                href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20web%20development%20project%20in%20Coimbatore."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappHeroBtn}
              >
                <span>💬</span> WhatsApp: +91 78680 31207
              </a>
              <a href="tel:+917868031207" className={styles.callHeroBtn}>
                <span>📞</span> Call Direct
              </a>
              <Link href="/contact" className={styles.secondaryBtn}>
                Send Project Inquiry &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
