import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../components/AnimeReveal";
import Testimonials from "../../components/Testimonials";

export const metadata: Metadata = {
  title: "Mobile App & Software Development in Karur | Sathish G — Flutter Engineer",
  description:
    "Custom mobile app and software development in Karur by Sathish G. Native Flutter iOS & Android apps, textile ERPs, and retail billing systems. Local in-person consultations. Call +91 78680 31207.",
  alternates: {
    canonical: "https://www.sathishdev.in/app-developer-karur",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Karur",
    "geo.position": "10.9601;78.0766",
    "ICBM": "10.9601, 78.0766",
  },
  openGraph: {
    title: "Mobile App & Software Development in Karur | Sathish G",
    description:
      "High-performance mobile apps, textile ERP systems, and retail POS software for Karur businesses. Direct engineer partnership and local on-site consultations.",
    url: "https://www.sathishdev.in/app-developer-karur",
    type: "website",
    images: [
      {
        url: "https://www.sathishdev.in/sathish.png",
        width: 800,
        height: 800,
        alt: "Sathish G — Mobile App & Software Development in Karur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App & Software Development in Karur | Sathish G",
    description:
      "Custom business software, textile ERPs, and Flutter mobile apps engineered for Karur enterprises and startups.",
    images: ["https://www.sathishdev.in/sathish.png"],
  },
};

const faqs = [
  {
    q: "How can a custom mobile app help businesses in Karur?",
    a: "Karur is renowned for home textiles, export manufacturing, bus body fabrication, and retail commerce. A custom mobile app or web portal streamlines factory order tracking, inventory counts, employee attendance, customer catalogs, and sales dispatching. Replacing manual register books and messaging spreadsheets with an automated mobile system eliminates errors and accelerates daily operations.",
  },
  {
    q: "Do you develop apps for both Android and iOS?",
    a: "Yes. Using Flutter, Google's modern UI toolkit, I write a single unified codebase that compiles to native 60fps applications for both Android smartphones and Apple iOS devices. This cuts development time and cost nearly in half compared to building separate apps, while maintaining native performance.",
  },
  {
    q: "Can we meet in person in Karur to discuss our software project?",
    a: "Yes. Being based in Western Tamil Nadu, I frequently travel to Karur for in-person requirements discovery, workflow audits, architecture reviews, and milestone demos. We can also coordinate smoothly via phone, WhatsApp, and Google Meet for fast daily updates.",
  },
  {
    q: "What types of software solutions do you build for local enterprises?",
    a: "I build end-to-end solutions: cross-platform mobile apps for Android and iOS, POS billing and inventory management systems, distributor order tracking apps, employee attendance and payroll portals, real-time dispatch systems, and secure REST API backends deployed on AWS cloud servers.",
  },
  {
    q: "What is the typical timeline and cost for building an app?",
    a: "Project timelines depend on feature scope. A focused business tool, retail POS, or custom MVP app typically takes 2 to 4 weeks. Full multi-role platforms (customer app, vendor app, and web admin dashboard) generally take 8 to 12 weeks. Working directly with me as an independent senior engineer eliminates agency management layers, ensuring faster iterations and direct technical accountability.",
  },
];

export default function AppDeveloperKarur() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sathish G — Software & Mobile App Development Karur",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/app-developer-karur",
              "telephone": "+91-7868031207",
              "priceRange": "$$",
              "description":
                "Professional software development and mobile app engineering services in Karur, Tamil Nadu. Specializing in custom business software, Flutter iOS & Android apps, Node.js backends, and cloud deployment.",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Karur",
                  "sameAs": "https://en.wikipedia.org/wiki/Karur"
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Tamil Nadu",
                  "sameAs": "https://en.wikipedia.org/wiki/Tamil_Nadu"
                }
              ],
              "knowsAbout": [
                "Software Development in Karur",
                "Custom Software Development",
                "Mobile App Development in Karur",
                "Flutter iOS & Android Development",
                "Textile ERP & Production Tracking",
                "Retail POS & Billing Software",
                "Full Stack Web Development",
                "Node.js Backend & REST APIs",
                "AWS Cloud Infrastructure"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Karur",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "sameAs": [
                "https://github.com/Sathish4439",
                "https://www.linkedin.com/in/sathishgobi/",
                "https://play.google.com/store/apps/dev?id=6517030172709793171&hl=en_IN"
              ]
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
              }))
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.sathishdev.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Software & App Development Karur",
                  "item": "https://www.sathishdev.in/app-developer-karur"
                }
              ]
            }
          ])
        }}
      />

      <div className={styles.container}>
        <div className={styles.backLinkWrap}>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Home</span>
          </Link>
        </div>

        <div className={styles.badge}>KARUR &amp; TAMIL NADU</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>MOBILE APP &amp; SOFTWARE DEVELOPMENT IN KARUR BY SATHISH G</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Engineering high-performance custom business software, textile ERPs, retail POS billing systems, and cloud-backed applications for Karur manufacturers, exporters, and retailers. Delivered directly by Sathish G with zero agency markups.
        </p>

        {/* Local Trust & On-Site Consultation Banner */}
        <div className={styles.trustBox}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📍</span>
            <span><strong>Karur &amp; Western Tamil Nadu:</strong> Available for on-site requirements discovery &amp; live software demo directly at your office or manufacturing facility within 2 hours.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🗣️</span>
            <span><strong>Bilingual Support:</strong> Direct discussion in Tamil or English to understand your factory operations and workflows with 100% clarity.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span><strong>Direct Senior Engineer:</strong> No sales middlemen or juniors — work one-on-one with the architect building your code.</span>
          </div>
        </div>

        <div className={styles.ctaGrid}>
          <a href="tel:+917868031207" className={styles.callHeroBtn}>
            <span>📞</span> Call: +91 78680 31207
          </a>
          <a
            href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20am%20looking%20for%20software/app%20development%20for%20my%20business%20in%20Karur."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappHeroBtn}
          >
            <span>💬</span> Chat on WhatsApp
          </a>
          <Link href="#services" className={styles.secondaryBtn}>
            Explore Solutions &darr;
          </Link>
        </div>

        {/* 1. Custom Software & App Development for Karur Businesses */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Custom Software &amp; App Development for Karur Businesses</h2>
          <div className={styles.contentBlock}>
            <p>
              Karur is a major industrial powerhouse in Tamil Nadu, recognized worldwide for home textiles, spinning mills, bus body building, and agricultural trade. As customer expectations evolve, progressive business owners across Karur are transitioning away from manual record books, paper orders, and disconnected spreadsheets toward dedicated mobile and cloud systems.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Whether you need an <strong>Android &amp; iOS app</strong> for field sales agents, a real-time order tracking portal for overseas buyers, or a tailored inventory management tool for your warehouse, I build tailor-made software engineered to solve your exact operational bottlenecks.
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "2rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Direct Technical Partnership</h3>
              <p className={styles.cardDesc}>
                Work directly with the engineer who writes your code. No sales reps, account managers, or junior outsourcing. You get crisp communication, fast iterations, and full accountability.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Single Codebase (iOS &amp; Android)</h3>
              <p className={styles.cardDesc}>
                Powered by Google Flutter, your application runs smoothly across both Android and iOS devices from a unified codebase, saving development time and maintenance overhead.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Offline-First Reliability</h3>
              <p className={styles.cardDesc}>
                Factory floors and warehouse yards often encounter weak network connectivity. I architect offline-first mobile apps with local SQLite databases that sync seamlessly whenever connectivity resumes.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Full-Stack Architecture</h3>
              <p className={styles.cardDesc}>
                Beyond the mobile screen, I engineer the complete backend: Node.js REST APIs, PostgreSQL databases, payment gateway integrations (Razorpay, UPI), and secure AWS cloud deployment.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Services Offered for Karur Enterprises */}
        <section id="services" className={styles.section}>
          <h2 className={styles.sectionTitle}>Services Offered for Karur Enterprises</h2>
          <p className={styles.subtitle} style={{ marginBottom: "1.5rem" }}>
            Comprehensive software development services designed to digitize and scale your commercial operations.
          </p>

          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Cross-Platform Flutter Mobile Apps</h3>
              <p className={styles.cardDesc}>
                Native-performance iOS and Android applications for customer ordering, distributor portals, delivery tracking, and field force management with custom UI and push notifications.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Custom ERP, Billing &amp; Inventory Software</h3>
              <p className={styles.cardDesc}>
                Tailored business management software that handles stock control, purchase orders, GST invoicing, barcode scanning, and multi-branch inventory tracking.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Web Dashboards &amp; Admin Portals</h3>
              <p className={styles.cardDesc}>
                Clean, responsive web control panels built with React and Next.js, allowing business owners to monitor daily sales metrics, generate reports, and manage permissions from any device.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>API Engineering &amp; Cloud Infrastructure</h3>
              <p className={styles.cardDesc}>
                High-throughput Node.js microservices, automated backups, Docker containers, and AWS EC2 cloud setup to ensure your software is always fast, secure, and accessible 24/7.
              </p>
            </div>
          </div>

          <div className={styles.skillsList} style={{ marginTop: "2rem" }}>
            <span className={styles.skillBadge}>Flutter (Android &amp; iOS)</span>
            <span className={styles.skillBadge}>Node.js &amp; Express</span>
            <span className={styles.skillBadge}>React &amp; Next.js</span>
            <span className={styles.skillBadge}>PostgreSQL &amp; SQLite</span>
            <span className={styles.skillBadge}>RESTful APIs</span>
            <span className={styles.skillBadge}>AWS Cloud Deployment</span>
            <span className={styles.skillBadge}>Payment Gateways (Razorpay/UPI)</span>
            <span className={styles.skillBadge}>Offline-First Sync</span>
          </div>
        </section>

        {/* 3. Industry Verticals in Karur */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Software Engineered for Karur&apos;s Core Industries</h2>
          <div className={styles.contentBlock}>
            <p>
              Every industry has distinct operational nuances. Here is how custom software directly empowers key Karur sectors:
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Textile Exporters &amp; Manufacturers</h3>
              <p className={styles.cardDesc}>
                Digital order progression from yarn procurement to weaving, dyeing, packing, and shipment. Production milestone tracking apps for supervisors on factory floors.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link
                  href="/blogs/textile-erp-software-karur"
                  style={{ color: "#a3e635", fontSize: "0.9rem", textDecoration: "underline" }}
                >
                  Read: Textile ERP Guide for Karur Exporters &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Bus Body Builders &amp; Engineering Fabricators</h3>
              <p className={styles.cardDesc}>
                Job-card tracking systems, raw material stock registers, chassis intake logs, and customer delivery scheduling applications accessible on mobile and tablet devices.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Retail Stores &amp; Wholesale Distributors</h3>
              <p className={styles.cardDesc}>
                Mobile billing, quick barcode lookup, offline-capable POS software, multi-warehouse stock visibility, and automated customer payment reminders via WhatsApp integration.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Agri-Commerce &amp; Paper Mills</h3>
              <p className={styles.cardDesc}>
                Weighbridge digital logging, vendor intake manifests, load verification, and dispatch fleet tracking applications for streamlined raw material management.
              </p>
            </div>
          </div>
        </section>

        {/* Transparent Cost & Investment Breakdown */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Flexible Delivery &amp; Investment Models for Karur Businesses</h2>
          <div className={styles.contentBlock}>
            <p>
              Unlike generic agency templates or inflexible off-the-shelf software that doesn&apos;t fit Karur&apos;s specific industrial workflows, every solution is built to match your operational requirements. Work directly with an experienced engineer with transparent, milestone-based pricing:
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Starter Tool / Retail Billing POS</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>Rapid Deployment</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Ideal for internal factory logs, single-store retail billing, barcode lookup tools, or focused MVP apps. Delivered in 2 to 4 weeks with local SQLite offline storage.
              </p>
              <div style={{ marginTop: "1rem" }}>
                <a href="tel:+917868031207" style={{ color: "#a3e635", fontWeight: "600", fontSize: "0.9rem", textDecoration: "none" }}>
                  📞 Call for Free Estimate &rarr;
                </a>
              </div>
            </div>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Textile ERP &amp; Manufacturing System</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>Custom Milestone Scope</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Custom textile production tracking, multi-warehouse inventory management, GST invoice generation, and customer portals with Node.js backend on AWS. Delivered in 4 to 8 weeks.
              </p>
              <div style={{ marginTop: "1rem" }}>
                <a href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20Textile%20ERP%20or%20Business%20System%20for%20my%20company%20in%20Karur." target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontWeight: "600", fontSize: "0.9rem", textDecoration: "none" }}>
                  💬 WhatsApp for Details &rarr;
                </a>
              </div>
            </div>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Full Multi-Role Platform (App + Web)</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>End-to-End Architecture</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Complete multi-app ecosystem (Customer App + Vendor App + Rider/Staff App + Web Admin Dashboard) with real-time Socket.io GPS tracking and payment gateway integration. Delivered in 8 to 12 weeks.
              </p>
              <div style={{ marginTop: "1rem" }}>
                <a href="tel:+917868031207" style={{ color: "#a3e635", fontWeight: "600", fontSize: "0.9rem", textDecoration: "none" }}>
                  📞 Discuss Your Platform &rarr;
                </a>
              </div>
            </div>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Monthly Engineering Retainer</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>Dedicated Partnership</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Continuous feature development, Play Store updates, server DevOps monitoring, local on-site visits, and database optimizations without hiring full-time internal IT staff.
              </p>
              <div style={{ marginTop: "1rem" }}>
                <a href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20am%20interested%20in%20a%20monthly%20developer%20retainer%20for%20my%20business." target="_blank" rel="noopener noreferrer" style={{ color: "#25D366", fontWeight: "600", fontSize: "0.9rem", textDecoration: "none" }}>
                  💬 Inquire Retainer on WhatsApp &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Proven Systems & Real Case Studies */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Proven Systems &amp; Real Case Studies</h2>
          <div className={styles.contentBlock}>
            <p>
              I bring hands-on experience architecting and launching robust software products for clients across Tamil Nadu:
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Judah Food Delivery Platform</h3>
              <p className={styles.cardDesc}>
                A complete 3-app ecosystem (Customer, Restaurant Partner, and Delivery Rider) built with Flutter, Socket.io real-time GPS tracking, and automated driver dispatching.
              </p>
              <div style={{ display: "flex", gap: "1rem", marginTop: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/work/judah-food-delivery" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Read Case Study &rarr;
                </Link>
                <a
                  href="https://play.google.com/store/apps/details?id=com.judah.fooddelivery&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff", fontSize: "0.85rem", opacity: 0.8 }}
                >
                  📱 Google Play &rarr;
                </a>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>MyShop POS &amp; Grocery Manager</h3>
              <p className={styles.cardDesc}>
                Offline-capable retail and wholesale billing application with SQLite synchronization, barcode integration, thermal printer connectivity, and daily sales dashboards.
              </p>
              <div style={{ display: "flex", gap: "1rem", marginTop: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/work/myshop-pos" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Read Case Study &rarr;
                </Link>
                <a
                  href="https://play.google.com/store/apps/details?id=com.sathishdev.myshop&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#25D366", fontSize: "0.85rem", fontWeight: "600" }}
                >
                  📱 Google Play &rarr;
                </a>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Premium Parts ERP System</h3>
              <p className={styles.cardDesc}>
                Custom offline-first mobile ERP for automotive distributors featuring geo-fenced employee attendance, automated payroll calculations, and multi-tier retail commissions.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/premium-parts" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Read Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Mayiliragu Academy LMS</h3>
              <p className={styles.cardDesc}>
                An enterprise e-learning platform supporting 1,000+ active concurrent students with Flutter mobile client, React admin panel, and high-concurrency Node.js database API.
              </p>
              <div style={{ display: "flex", gap: "1rem", marginTop: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                <Link href="/work/mayiliragu-academy" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Read Case Study &rarr;
                </Link>
                <a
                  href="https://play.google.com/store/apps/details?id=com.learning.mayiliragu.mayiliragu&pcampaignid=web_share"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#fff", fontSize: "0.85rem", opacity: 0.8 }}
                >
                  📱 Google Play &rarr;
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 5. In-Person & Remote Collaboration */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>In-Person &amp; Remote Collaboration for Karur</h2>
          <div className={styles.contentBlock}>
            <p>
              Collaborating on a software project requires clarity and prompt communication. I provide flexible working arrangements for businesses in Karur:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", marginTop: "1rem", lineHeight: "1.8", color: "#a1a1aa" }}>
              <li><strong style={{ color: "#fff" }}>In-Person Kickoff in Karur:</strong> Available for face-to-face requirement discussions, workflow demonstrations, and milestone reviews directly at your office or manufacturing facility.</li>
              <li><strong style={{ color: "#fff" }}>Continuous Progress Updates:</strong> Weekly build test APKs delivered straight to your phone, paired with transparent WhatsApp and Google Meet check-ins.</li>
              <li><strong style={{ color: "#fff" }}>Post-Launch Support &amp; Maintenance:</strong> Ongoing monitoring, Play Store and App Store updates, server health checks, and feature expansions as your business grows.</li>
            </ul>
          </div>
        </section>

        {/* 6. Client Feedback */}
        <Testimonials />

        {/* 7. Frequently Asked Questions */}
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

        {/* 8. Consultation CTA */}
        <section className={styles.section}>
          <div className={styles.consultationCard}>
            <h2 className={styles.consultationTitle}>Need Custom Software for Your Karur Business?</h2>
            <p className={styles.consultationDesc}>
              Whether you need to streamline factory orders, automate textile billing, or build a scalable mobile app, let&apos;s talk. Available for direct phone consultation or an in-person meeting at your Karur facility.
            </p>
            <div className={styles.ctaGrid} style={{ justifyContent: "center", marginBottom: 0 }}>
              <a href="tel:+917868031207" className={styles.callHeroBtn}>
                <span>📞</span> Call +91 78680 31207
              </a>
              <a
                href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20software%20project%20for%20my%20business%20in%20Karur."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappHeroBtn}
              >
                <span>💬</span> WhatsApp Direct
              </a>
              <Link href="/contact" className={styles.secondaryBtn}>
                Book In-Person Meeting &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
