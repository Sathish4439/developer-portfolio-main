import type { Metadata } from "next";
import Link from "next/link";
import styles from "../hire-flutter-developer/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";
import Testimonials from "../../components/Testimonials";

export const metadata: Metadata = {
  title: "Mobile App Development in Karur | App & Software Developer — Sathish G",
  description:
    "Looking for mobile app development in Karur? Sathish G builds custom Flutter iOS & Android apps, business software, and textile ERP systems for Karur businesses. Direct developer pricing, no agency middlemen.",
  keywords: [
    "mobile app development in karur",
    "mobile app development company in karur",
    "app developer in karur",
    "software company in karur",
    "software development in karur",
    "flutter developer in karur",
    "android app development karur",
    "ios app development karur",
    "web development company in karur",
    "textile erp software karur",
    "custom software developer karur",
  ],
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
    title: "Mobile App Development in Karur | Flutter & Software Developer — Sathish G",
    description:
      "Expert mobile app and software development services for Karur businesses. Cross-platform Flutter apps, Node.js backends, and custom business management software.",
    url: "https://www.sathishdev.in/app-developer-karur",
    type: "website",
    images: [
      {
        url: "https://www.sathishdev.in/sathish.png",
        width: 800,
        height: 800,
        alt: "Sathish G — Mobile App & Software Developer in Karur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development in Karur | Sathish G",
    description:
      "Custom Flutter mobile apps, Node.js backends, and business software engineered for Karur enterprises and startups.",
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
    a: "Project timelines depend on feature scope. A focused MVP (Minimum Viable Product) or custom business tracking tool typically takes 4 to 8 weeks. Complex multi-role platforms (customer app + vendor app + admin dashboard) generally take 8 to 14 weeks. Working directly with me as an independent engineer eliminates agency management markups, saving you 40% to 60% in development costs.",
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
              "name": "Sathish G — App & Software Developer",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/app-developer-karur",
              "telephone": "+91-7868031207",
              "priceRange": "$$",
              "description":
                "Professional mobile app development and custom software engineering services serving Karur, Tamil Nadu. Specializing in Flutter iOS & Android apps, Node.js backends, and cloud deployment.",
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
                "Mobile App Development in Karur",
                "Flutter iOS & Android Development",
                "Custom Software Development",
                "Textile ERP & Production Tracking",
                "Retail POS & Billing Software",
                "Full Stack Web Development",
                "Node.js Backend & REST APIs",
                "AWS Cloud Infrastructure"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              }
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
                  "name": "App Developer Karur",
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
          <h1 className={styles.title}>MOBILE APP &amp; SOFTWARE DEVELOPER IN KARUR</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Engineering high-performance mobile apps, custom billing systems, and cloud-backed software for Karur businesses, manufacturers, exporters, and entrepreneurs. Built by Sathish G — an experienced Full Stack &amp; Mobile Systems Architect.
        </p>

        <div className={styles.ctaGrid}>
          <Link href="/contact" className={styles.primaryBtn}>
            Hire Developer &rarr;
          </Link>
          <Link href="/services" className={styles.secondaryBtn}>
            Explore Services
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
        <section className={styles.section}>
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
              <Link href="/work/judah-food-delivery" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600", marginTop: "0.75rem", display: "inline-block" }}>
                Read Case Study &rarr;
              </Link>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>MyShop POS &amp; Inventory Management</h3>
              <p className={styles.cardDesc}>
                Offline-capable retail and wholesale billing application with SQLite synchronization, barcode integration, thermal printer connectivity, and daily sales dashboards.
              </p>
              <Link href="/work" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600", marginTop: "0.75rem", display: "inline-block" }}>
                View Project Details &rarr;
              </Link>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Premium Parts ERP System</h3>
              <p className={styles.cardDesc}>
                Custom offline-first mobile ERP for automotive distributors featuring geo-fenced employee attendance, automated payroll calculations, and multi-tier retail commissions.
              </p>
              <Link href="/work/premium-parts" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600", marginTop: "0.75rem", display: "inline-block" }}>
                Read Case Study &rarr;
              </Link>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Mayiliragu Academy LMS</h3>
              <p className={styles.cardDesc}>
                An enterprise e-learning platform supporting 1,000+ active concurrent students with Flutter mobile client, React admin panel, and high-concurrency Node.js database API.
              </p>
              <Link href="/work/mayiliragu-academy" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600", marginTop: "0.75rem", display: "inline-block" }}>
                Read Case Study &rarr;
              </Link>
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
          <h2 className={styles.sectionTitle}>Get a Free Technical Consultation for Your Karur Business</h2>
          <p className={styles.subtitle}>
            Have an app idea or need to modernize your business operations with custom software? Let&apos;s discuss how to build it efficiently.
          </p>
          <div className={styles.ctaGrid} style={{ marginTop: "1.5rem" }}>
            <Link href="/contact" className={styles.primaryBtn}>
              Contact Sathish G &rarr;
            </Link>
            <a
              href="mailto:sathishg.dev@gmail.com"
              className={styles.secondaryBtn}
            >
              Email Directly
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
