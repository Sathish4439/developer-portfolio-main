import type { Metadata } from "next";
import Link from "next/link";
import styles from "../flutter-development/page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Node.js Backend Development Services in Coimbatore | Sathish G",
  description:
    "Professional Node.js backend development services in Coimbatore, India. Scalable REST APIs, Express.js microservices, PostgreSQL with Prisma ORM, and AWS hosting.",
  alternates: {
    canonical: "https://www.sathishdev.in/services/nodejs-development",
  },
  openGraph: {
    title: "Node.js Backend Development Services | Sathish G",
    description:
      "Scalable server-side development — RESTful APIs, PostgreSQL databases, Docker containers, and cloud deployments.",
    url: "https://www.sathishdev.in/services/nodejs-development",
  },
};

export default function NodejsDevelopmentService() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Node.js Backend Development",
              "serviceType": "Server-Side & API Software Development",
              "description": "Scalable REST API design, Express.js microservices, database modeling with PostgreSQL and Prisma, Redis caching, and Docker cloud deployments.",
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
                  "name": "Node.js Development",
                  "item": "https://www.sathishdev.in/services/nodejs-development"
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
          <h1 className={styles.title}>NODE.JS BACKEND DEVELOPMENT</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Engineering high-speed, scalable backend servers and microservices using Node.js, Express, PostgreSQL, Prisma ORM, and cloud infrastructure on AWS.
        </p>

        <div className={styles.ctaGrid}>
          <Link href="/contact" className={styles.primaryBtn}>
            Request Backend Quote &rarr;
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
          <h2 className={styles.sectionTitle}>Core Node.js Services</h2>
          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>REST &amp; GraphQL APIs</h3>
              <p className={styles.cardDesc}>
                Designing clean, documented API endpoints with JWT authorization, payload validation, and CORS security headers.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Database Modeling &amp; Migration</h3>
              <p className={styles.cardDesc}>
                Relational schema design with PostgreSQL and Prisma ORM, query optimization, and MongoDB document modeling.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>Why use Node.js for backend development?</div>
            <div className={styles.faqAnswer}>
              Node.js offers an asynchronous, event-driven non-blocking I/O model ideal for data-intensive real-time applications and high concurrent request traffic.
            </div>
          </div>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>Which ORMs and databases do you work with?</div>
            <div className={styles.faqAnswer}>
              I specialize in Prisma ORM paired with PostgreSQL or MySQL, as well as Mongoose for MongoDB data layers.
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Build a Scalable Backend</h2>
          <p className={styles.subtitle}>
            Need a reliable Node.js engineer to build or refactor your backend infrastructure? Reach out today.
          </p>
          <Link href="/contact" className={styles.primaryBtn}>
            Contact Sathish G &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
