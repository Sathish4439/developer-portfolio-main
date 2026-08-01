import type { Metadata } from "next";
import Link from "next/link";
import styles from "../flutter-development/page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Full Stack Development Services in Coimbatore | Sathish G",
  description:
    "End-to-end full stack web & mobile development services in Coimbatore, Tamil Nadu. Combining React, Next.js, Flutter, Node.js, and AWS deployments.",
  alternates: {
    canonical: "https://www.sathishdev.in/services/full-stack-development",
  },
  openGraph: {
    title: "Full Stack Development Services | Sathish G",
    description:
      "Complete product engineering across mobile, frontend, backend APIs, and AWS cloud hosting.",
    url: "https://www.sathishdev.in/services/full-stack-development",
  },
};

export default function FullStackDevelopmentService() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Full Stack Development",
              "serviceType": "End-to-End Software Engineering",
              "description": "Integrated mobile apps (Flutter), web applications (React/Next.js), backend APIs (Node.js), and cloud infrastructure (AWS/Docker).",
              "provider": {
                "@type": "Person",
                "name": "Sathish G",
                "url": "https://www.sathishdev.in"
              },
              "areaServed": [
                { "@type": "AdministrativeArea", "name": "Coimbatore" },
                { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
                { "@type": "Country", "name": "India" }
              ]
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
                  "name": "Services",
                  "item": "https://www.sathishdev.in/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Full Stack Development",
                  "item": "https://www.sathishdev.in/services/full-stack-development"
                }
              ]
            }
          ])
        }}
      />

      <div className={styles.container}>
        <div className={styles.backLinkWrap}>
          <Link href="/services" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Services</span>
          </Link>
        </div>

        <div className={styles.badge}>SERVICE DETAILS</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>FULL STACK DEVELOPMENT</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Full-lifecycle software engineering linking responsive client interfaces, cross-platform mobile apps, secure backend architectures, and production cloud infrastructure.
        </p>

        <div className={styles.ctaGrid}>
          <Link href="/contact" className={styles.primaryBtn}>
            Request Full Stack Quote &rarr;
          </Link>
          <Link href="/work" className={styles.secondaryBtn}>
            View Selected Work
          </Link>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What Full-Stack Covers</h2>
          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Mobile &amp; Web Interfaces</h3>
              <p className={styles.cardDesc}>
                Cross-platform mobile applications built in Flutter, alongside web dashboards and portals engineered with React.js and Next.js.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>APIs &amp; Cloud Deployment</h3>
              <p className={styles.cardDesc}>
                REST and WebSocket API servers built with Node.js &amp; Express, connected to PostgreSQL databases and hosted on AWS EC2 with Docker.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>What is the benefit of hiring a single full-stack engineer?</div>
            <div className={styles.faqAnswer}>
              A single full-stack engineer ensures seamless integration between frontend layouts and backend APIs, eliminating communication overhead and speeding up MVP delivery.
            </div>
          </div>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>Do you handle cloud deployment and DevOps?</div>
            <div className={styles.faqAnswer}>
              Yes, I configure containerized environments with Docker, Nginx reverse proxies, SSL certificates, and auto-deploy pipelines on AWS EC2.
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ready to Build Your Platform?</h2>
          <p className={styles.subtitle}>
            Let&apos;s engineer a complete software ecosystem for your business.
          </p>
          <Link href="/contact" className={styles.primaryBtn}>
            Get in Touch &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
