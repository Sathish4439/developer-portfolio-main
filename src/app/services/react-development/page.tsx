import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "React & Next.js Web Development Services in Coimbatore | Sathish G",
  description:
    "Expert React.js and Next.js web application development services in Coimbatore, Tamil Nadu. Building fast, SEO-optimized web portals, dashboards, and enterprise web solutions.",
  alternates: {
    canonical: "https://www.sathishdev.in/services/react-development",
  },
  openGraph: {
    title: "React & Next.js Web Development | Sathish G",
    description:
      "Modern React and Next.js web application development with sub-second page loads, Server Components, and clean state management.",
    url: "https://www.sathishdev.in/services/react-development",
  },
};

export default function ReactDevelopmentService() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "React & Next.js Web Development",
              "serviceType": "Web Application Development",
              "description": "High-performance React and Next.js web development services, focusing on Server-Side Rendering (SSR), Core Web Vitals optimization, and modern UI/UX design.",
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
                { "@type": "ListItem", "position": 3, "name": "React Development", "item": "https://www.sathishdev.in/services/react-development" }
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
          <span className={styles.badge}>REACT &amp; NEXT.JS SPECIALIST</span>
          <h1 className={styles.title}>React &amp; Next.js Web Development Services in Coimbatore</h1>
          <p className={styles.lead}>
            Transform your vision into high-speed, SEO-optimized web applications. I craft modern web interfaces using Next.js App Router, React Server Components, TypeScript, and clean CSS Modules for maximum performance and lightning-fast user interactions.
          </p>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Build with React &amp; Next.js</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Enterprise Admin Dashboards</h3>
              <p className={styles.cardDesc}>
                Complex data management interfaces with real-time charts, role-based access control (RBAC), and fast filtering for enterprise workflows.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>SEO-Optimized Web Portals</h3>
              <p className={styles.cardDesc}>
                Static and server-rendered portals optimized for 90+ Lighthouse performance scores, dynamic Open Graph tags, and structured JSON-LD schemas.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Progressive Web Apps (PWAs)</h3>
              <p className={styles.cardDesc}>
                Web applications with offline capabilities, push notifications, and native-feeling mobile responsive layouts across all device sizes.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqItem}>
            <div className={styles.faqQ}>Why use Next.js instead of standard Create React App?</div>
            <div className={styles.faqA}>
              Next.js provides built-in Server-Side Rendering (SSR) and Static Site Generation (SSG), which drastically improves search engine indexing (SEO) and initial page load speed compared to client-side only React bundles.
            </div>
          </div>
          <div className={styles.faqItem}>
            <div className={styles.faqQ}>Can you integrate custom REST APIs or GraphQL backends?</div>
            <div className={styles.faqA}>
              Yes, I specialize in mapping React interfaces to Node.js REST microservices, Prisma ORM database layers, and third-party API webhooks seamlessly with clean state management.
            </div>
          </div>
          <div className={styles.faqItem}>
            <div className={styles.faqQ}>How long does a custom React web project take?</div>
            <div className={styles.faqA}>
              Depending on scope, a streamlined MVP web portal typically takes 2–4 weeks from design sign-off to cloud deployment on AWS or Vercel.
            </div>
          </div>
        </section>

        <div className={styles.cta}>
          <h2 className={styles.ctaTitle}>Ready to Build Your React Web Platform?</h2>
          <p style={{ color: "#a1a1aa", maxWidth: "600px", margin: "0 auto 1.5rem" }}>
            Let&apos;s discuss your web application requirements and engineer a platform tailored for speed and growth.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Start Your Project &rarr;
          </Link>
        </div>
      </div>
    </main>
  );
}
