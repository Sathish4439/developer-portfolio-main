import type { Metadata } from "next";
import Link from "next/link";
import styles from "../hire-flutter-developer/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Node.js Developer India | REST APIs & Microservices — Sathish G",
  description:
    "Hire Sathish G, a skilled Node.js backend developer in India. Express.js REST APIs, PostgreSQL, Prisma ORM, MongoDB, Redis caching, and Docker cloud deployments.",
  alternates: {
    canonical: "https://www.sathishdev.in/nodejs-developer",
  },
  openGraph: {
    title: "Node.js Developer India | Sathish G",
    description:
      "Backend developer specializing in Node.js, Express, PostgreSQL, Prisma, Docker, and scalable REST/GraphQL APIs.",
    url: "https://www.sathishdev.in/nodejs-developer",
  },
};

export default function NodejsDeveloper() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sathish G — Node.js Developer India",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/nodejs-developer",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "priceRange": "$$",
              "knowsAbout": ["Node.js", "Express.js", "PostgreSQL", "Prisma ORM", "Docker", "REST APIs", "AWS"]
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
                  "name": "Node.js Developer",
                  "item": "https://www.sathishdev.in/nodejs-developer"
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

        <div className={styles.badge}>BACKEND &amp; API ENGINEERING</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>NODE.JS BACKEND DEVELOPER</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Building high-concurrency Node.js microservices, secure RESTful APIs, relational SQL schema migrations, real-time WebSocket channels, and containerized backend deployments.
        </p>

        <div className={styles.ctaGrid}>
          <Link href="/contact" className={styles.primaryBtn}>
            Hire Backend Engineer &rarr;
          </Link>
          <a
            href="/Sathish_G_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            Download Resume
          </a>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Backend Architecture &amp; Database Design</h2>
          <div className={styles.contentBlock}>
            <p>
              A fast mobile app or web platform requires a bulletproof backend. I engineer Node.js &amp; Express APIs optimized for query performance, structured with Prisma ORM and PostgreSQL databases, and secured with JWT authentication &amp; role-based access control (RBAC).
            </p>
          </div>

          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Scalable API Endpoints</h3>
              <p className={styles.cardDesc}>
                Clean MVC / Layered architecture, request validation, middleware security headers, rate limiting, and automated error logging.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Real-Time &amp; Cloud Infra</h3>
              <p className={styles.cardDesc}>
                Socket.io real-time streaming for chat &amp; tracking, Docker containerization, Nginx reverse proxy setup, and AWS EC2 hosting.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Node.js Stack &amp; Tools</h2>
          <div className={styles.skillsList}>
            <span className={styles.skillBadge}>Node.js Runtime</span>
            <span className={styles.skillBadge}>Express.js</span>
            <span className={styles.skillBadge}>TypeScript</span>
            <span className={styles.skillBadge}>PostgreSQL</span>
            <span className={styles.skillBadge}>Prisma ORM</span>
            <span className={styles.skillBadge}>MongoDB</span>
            <span className={styles.skillBadge}>Redis Caching</span>
            <span className={styles.skillBadge}>Docker &amp; Nginx</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Need a Backend Engineer?</h2>
          <p className={styles.subtitle}>
            Let&apos;s build scalable, maintainable server architecture for your application.
          </p>
          <Link href="/contact" className={styles.primaryBtn}>
            Get in Touch &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
