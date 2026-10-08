import type { Metadata } from "next";
import Link from "next/link";
import styles from "../app-developer-karur/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";
import Testimonials from "../../components/Testimonials";

export const metadata: Metadata = {
  title: "Custom Software Development in Coimbatore | Sathish G — Full Stack Engineer",
  description:
    "Hire Sathish G for custom software development in Coimbatore. End-to-end mobile apps (Flutter), web platforms (React/Next.js), high-performance APIs (Node.js), and ERP systems.",
  alternates: {
    canonical: "https://www.sathishdev.in/custom-software-development-coimbatore",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore",
    "geo.position": "11.0168;76.9558",
    "ICBM": "11.0168, 76.9558",
  },
  openGraph: {
    title: "Custom Software Development in Coimbatore | Sathish G",
    description:
      "Full-stack custom software development in Coimbatore. Mobile apps, web platforms, cloud microservices, and ERP business software with direct engineer collaboration.",
    url: "https://www.sathishdev.in/custom-software-development-coimbatore",
    type: "website",
    images: [
      {
        url: "https://www.sathishdev.in/sathish.png",
        width: 800,
        height: 800,
        alt: "Sathish G — Custom Software Development in Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Software Development in Coimbatore | Sathish G",
    description:
      "Tailor-made software engineering for Coimbatore startups and businesses. Mobile, web, APIs, and ERP systems.",
    images: ["https://www.sathishdev.in/sathish.png"],
  },
};

const faqs = [
  {
    q: "Why hire Sathish G instead of a large software company in Coimbatore?",
    a: "When you hire a software agency, up to 60% of your budget goes to office overheads, sales commissions, and middle managers, while your code is often handed to junior developers. Working with me gives you 100% direct collaboration with a senior full-stack engineer who architects, writes, and deploys every line of code with high velocity, daily transparent updates, and substantial cost savings.",
  },
  {
    q: "What end-to-end software development services do you provide?",
    a: "I handle the entire product lifecycle: requirement analysis, UI/UX architecture, cross-platform mobile apps (Flutter for iOS & Android), responsive web platforms (React & Next.js), backend microservices (Node.js, Express, BullMQ, Redis), database design (PostgreSQL, SQLite), cloud DevOps on AWS, and automated CI/CD pipelines.",
  },
  {
    q: "What is your typical software development process and timeline?",
    a: "We start with a detailed technical discovery and scope definition. MVPs and focused business software ship within 3 to 6 weeks. Comprehensive multi-app platforms or complex ERP systems take 8 to 12 weeks. You receive test builds weekly, ensuring complete transparency throughout development.",
  },
  {
    q: "Do I get full ownership of the source code and database?",
    a: "Yes, 100%. Upon milestone completion, you receive complete intellectual property ownership of all source code, database architectures, server configurations, and deployment credentials with zero vendor lock-in.",
  },
];

export default function CustomSoftwareDevelopmentCoimbatore() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sathish G — Custom Software Development Coimbatore",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/custom-software-development-coimbatore",
              "telephone": "+91-7868031207",
              "priceRange": "$$",
              "description":
                "Premier custom software development services in Coimbatore, Tamil Nadu. Building cross-platform mobile applications, scalable Next.js web platforms, Node.js microservices, and custom ERP systems.",
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
                "Custom Software Development Coimbatore",
                "Mobile App Development",
                "Web Application Development",
                "Enterprise ERP Systems",
                "Flutter iOS & Android Apps",
                "Next.js & React Dashboards",
                "Node.js Backend & BullMQ Microservices",
                "AWS Cloud Infrastructure & Docker",
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
                  "name": "Custom Software Development Coimbatore",
                  "item": "https://www.sathishdev.in/custom-software-development-coimbatore",
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

        <div className={styles.badge}>COIMBATORE &bull; FULL-STACK ENGINEERING</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>
            CUSTOM SOFTWARE DEVELOPMENT IN COIMBATORE — MOBILE APPS, WEB PLATFORMS, APIS &amp; BUSINESS SOFTWARE
          </h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Delivering tailor-made digital products that scale. From mobile applications and responsive web platforms to high-concurrency cloud backends and industrial ERP workstations for Coimbatore enterprises and global founders.
        </p>

        {/* Local Advantage Banner */}
        <div className={styles.trustBox}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🎯</span>
            <span><strong>Senior Engineering Velocity:</strong> Direct collaboration with Sathish G — no junior interns, sales account reps, or slow ticket queues.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🌐</span>
            <span><strong>Global Standard, Local Presence:</strong> Code crafted to Silicon Valley standards with convenient in-person availability across Coimbatore tech hubs.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📦</span>
            <span><strong>15+ Shipped Production Systems:</strong> Proven track record across food delivery, ride-hailing, e-learning, SMS gateways, and manufacturing ERPs.</span>
          </div>
        </div>

        <div className={styles.ctaGrid}>
          <a
            href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20am%20looking%20for%20custom%20software%20development%20in%20Coimbatore."
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
            Schedule Project Scoping &rarr;
          </Link>
        </div>

        {/* 1. Full Spectrum Capabilities */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Full-Stack Capabilities Across the Software Lifecycle</h2>
          <div className={styles.contentBlock}>
            <p>
              Whether you need to launch a high-growth mobile startup or automate legacy paper operations inside an established manufacturing facility, I provide cohesive full-stack engineering without needing to hire separate specialists:
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "2rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Cross-Platform Mobile Apps</h3>
              <p className={styles.cardDesc}>
                Native 60fps Android and iOS applications built with Flutter, featuring custom UI animations, offline SQLite caching, push notifications, and device GPS tracking.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Next.js &amp; React Web Applications</h3>
              <p className={styles.cardDesc}>
                High-converting websites, SaaS consoles, and enterprise admin control panels optimized for sub-second page loads and technical SEO dominance.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Node.js APIs &amp; Microservices</h3>
              <p className={styles.cardDesc}>
                High-throughput RESTful endpoints, BullMQ background job queues, Redis caching, Socket.io WebSockets, and Prisma ORM database models.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Custom ERP, POS &amp; Desktop Software</h3>
              <p className={styles.cardDesc}>
                Industrial desktop workstations, inventory managers, automated payroll systems, and thermal printer-connected POS software with offline reliability.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Shipped Software Proof */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Production Software Shipped &amp; Tested</h2>
          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Judah Food Delivery Platform</h3>
              <p className={styles.cardDesc}>
                Complete 3-app ecosystem (Customer, Partner, Rider) with automated driver dispatching, Socket.io live tracking, and payment gateways.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/judah-food-delivery" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Mayiliragu Academy LMS</h3>
              <p className={styles.cardDesc}>
                Scalable e-learning platform supporting 1,000+ active students with Flutter mobile client, React teacher portal, and high-concurrency Node.js API.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/mayiliragu-academy" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>FlatSMS Cloud Gateway</h3>
              <p className={styles.cardDesc}>
                High-throughput distributed SMS gateway service engineered with Node.js, BullMQ background queues, Redis, and real-time delivery monitoring.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/flatsms-sms-gateway" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Premium Parts ERP</h3>
              <p className={styles.cardDesc}>
                Offline-capable distribution ERP with geo-fenced staff attendance, multi-warehouse stock management, and automated sales commission calculations.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/premium-parts" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Case Study &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Tech Stack Badges */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Full-Stack Technology Suite</h2>
          <div className={styles.skillsList} style={{ marginTop: "1rem" }}>
            <span className={styles.skillBadge}>Flutter (iOS, Android, Desktop)</span>
            <span className={styles.skillBadge}>Next.js 14 App Router</span>
            <span className={styles.skillBadge}>React &amp; TypeScript</span>
            <span className={styles.skillBadge}>Node.js &amp; Express</span>
            <span className={styles.skillBadge}>Prisma &amp; PostgreSQL</span>
            <span className={styles.skillBadge}>Redis &amp; BullMQ</span>
            <span className={styles.skillBadge}>Socket.io Real-Time</span>
            <span className={styles.skillBadge}>AWS EC2 &amp; Docker DevOps</span>
            <span className={styles.skillBadge}>SQLite &amp; Drift Offline DB</span>
            <span className={styles.skillBadge}>Razorpay &amp; Stripe</span>
          </div>
        </section>

        {/* 4. Client Testimonials */}
        <Testimonials />

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
            <h2 className={styles.consultationTitle}>Have a Software Project in Coimbatore?</h2>
            <p className={styles.consultationDesc}>
              Let&apos;s turn your product blueprint into a production-grade application. Direct technical partnership with fast milestones and zero agency overhead.
            </p>
            <div className={styles.ctaGrid} style={{ justifyContent: "center", marginBottom: 0 }}>
              <a
                href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20custom%20software%20development%20project%20in%20Coimbatore."
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
                Contact Sathish G &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
