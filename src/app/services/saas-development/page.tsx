import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "SaaS Platform Development Services in Coimbatore | Sathish G",
  description:
    "Full-stack SaaS application development services in Coimbatore, Tamil Nadu. Building multi-tenant cloud platforms, subscription billing workflows, and enterprise management tools.",
  alternates: {
    canonical: "https://www.sathishdev.in/services/saas-development",
  },
  openGraph: {
    title: "SaaS Platform Development | Sathish G",
    description:
      "End-to-end SaaS architecture development — multi-tenancy, Stripe/Razorpay billing, auth, RBAC, and scalable microservices.",
    url: "https://www.sathishdev.in/services/saas-development",
  },
};

export default function SaaSDevelopmentService() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "SaaS Platform Development",
              "serviceType": "Software-as-a-Service Application Engineering",
              "description": "Custom multi-tenant SaaS architecture engineering with subscription management, automated billing, role-based security, and cloud scalability.",
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
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.sathishdev.in" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.sathishdev.in/services" },
                { "@type": "ListItem", "position": 3, "name": "SaaS Development", "item": "https://www.sathishdev.in/services/saas-development" }
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

        <section className={styles.hero}>
          <span className={styles.badge}>SAAS ARCHITECTURE SPECIALIST</span>
          <h1 className={styles.title}>SaaS Platform Development Services in Coimbatore</h1>
          <p className={styles.lead}>
            Launch and scale your Software-as-a-Service product with a battle-tested architecture. I build multi-tenant SaaS platforms featuring automated subscription billing (Stripe/Razorpay), secure JWT/OAuth authentication, tenant isolation, and modular Node.js/PostgreSQL backends.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features of SaaS Platforms I Engineer</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Multi-Tenant Architecture</h3>
              <p className={styles.cardDesc}>
                Strict tenant data isolation at the database level using Prisma ORM schemas to ensure security, compliance, and effortless scaling as subscriber volume grows.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Automated Subscription Billing</h3>
              <p className={styles.cardDesc}>
                Seamless integration with Stripe Subscriptions and Razorpay recurring payments, including automated webhooks for invoice generation, tier upgrades, and dunning management.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Role-Based Access Control (RBAC)</h3>
              <p className={styles.cardDesc}>
                Fine-grained team permissions allowing admins, managers, and standard users to operate securely with customized dashboard views.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqItem}>
            <div className={styles.faqQ}>What stack do you use for SaaS products?</div>
            <div className={styles.faqA}>
              I typically build SaaS platforms with Next.js or React on the frontend, Node.js/Express on the backend, PostgreSQL database with Prisma ORM, and AWS EC2/S3 cloud infrastructure.
            </div>
          </div>
          <div className={styles.faqItem}>
            <div className={styles.faqQ}>Can existing mobile apps connect to the SaaS platform?</div>
            <div className={styles.faqA}>
              Yes! The Node.js backend API is architected to serve both the web dashboard and Flutter cross-platform mobile apps simultaneously from a unified API schema.
            </div>
          </div>
          <div className={styles.faqItem}>
            <div className={styles.faqQ}>Do you help deploy the SaaS product onto AWS?</div>
            <div className={styles.faqA}>
              Absolutely. I containerize the services with Docker, set up Nginx reverse proxying with SSL, configure PostgreSQL databases, and deploy the entire environment onto AWS EC2.
            </div>
          </div>
        </section>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Ready to Build Your SaaS Product?</h2>
          <p style={{ color: "#a1a1aa", maxWidth: "600px", margin: "0 auto 1.5rem" }}>
            Let&apos;s discuss your SaaS idea and design a scalable cloud architecture ready for monetization.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Build Your SaaS Platform &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
