import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Mayiliragu Academy LMS Case Study | Flutter, React & Node.js — Sathish G",
  description:
    "Case study on building Mayiliragu Academy: an enterprise Learning Management System supporting 1,000+ active learners with Flutter student app, React admin panel, and Node.js backend on AWS EC2.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/mayiliragu-academy",
  },
  openGraph: {
    title: "Mayiliragu Academy LMS Case Study | Sathish G",
    description:
      "Enterprise LMS supporting 1,000+ learners across mobile and web platforms.",
    url: "https://www.sathishdev.in/work/mayiliragu-academy",
  },
};

export default function MayiliraguAcademyCaseStudy() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Mayiliragu Academy LMS",
            "description": "Enterprise-grade Learning Management System engineered with Flutter, React, Node.js, and PostgreSQL.",
            "author": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "url": "https://www.sathishdev.in/work/mayiliragu-academy"
          })
        }}
      />

      <div className={styles.container}>
        <div className={styles.backLinkWrap}>
          <Link href="/work" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Work</span>
          </Link>
        </div>

        <div className={styles.badge}>CASE STUDY</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>MAYILIRAGU ACADEMY LMS</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          An enterprise-grade Learning Management System (LMS) engineered to support 1,000+ active concurrent learners across a mobile app and web management portal.
        </p>

        <div className={styles.metaGrid}>
          <div>
            <div className={styles.metaLabel}>ROLE</div>
            <div className={styles.metaValue}>Lead Full-Stack Developer</div>
          </div>
          <div>
            <div className={styles.metaLabel}>TIMELINE</div>
            <div className={styles.metaValue}>2025</div>
          </div>
          <div>
            <div className={styles.metaLabel}>METRIC</div>
            <div className={styles.metaValue}>1,000+ Active Learners</div>
          </div>
          <div>
            <div className={styles.metaLabel}>STACK</div>
            <div className={styles.metaValue}>Flutter, React, Node.js, AWS</div>
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <div className={styles.contentBlock}>
            <p>
              Mayiliragu Academy needed a scalable digital platform to deliver video courses, interactive test series, current affairs feeds, and automated PDF materials to over a thousand students across Tamil Nadu. The system required low-latency video streaming, offline test caching, and a powerful back-office admin dashboard for course creators.
            </p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution</h2>
          <div className={styles.contentBlock}>
            <p>
              I engineered a 3-part software ecosystem:
            </p>
            <p><strong>1. Student Mobile App (Flutter &amp; Dart):</strong> Cross-platform app with secure video playback, bookmarking, test timers, and offline material storage.</p>
            <p><strong>2. Instructor Admin Portal (React &amp; Next.js):</strong> Web dashboard for managing courses, uploading media assets to AWS S3, creating test question banks, and evaluating student performance.</p>
            <p><strong>3. Scalable Backend API (Node.js &amp; Prisma ORM):</strong> Express server hosted on AWS EC2 with a PostgreSQL relational database handling user authentication, payment processing, and test scoring.</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Tech Stack &amp; Infrastructure</h2>
          <div className={styles.skillsList}>
            <span className={styles.skillBadge}>Flutter</span>
            <span className={styles.skillBadge}>React.js</span>
            <span className={styles.skillBadge}>Node.js / Express</span>
            <span className={styles.skillBadge}>PostgreSQL</span>
            <span className={styles.skillBadge}>Prisma ORM</span>
            <span className={styles.skillBadge}>AWS EC2 &amp; S3</span>
            <span className={styles.skillBadge}>Docker</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Results</h2>
          <div className={styles.contentBlock}>
            <p>&bull; Successfully onboarded 1,000+ active student accounts.</p>
            <p>&bull; Maintained 99.9% uptime during peak exam schedule hours on AWS.</p>
            <p>&bull; Reduced test submission latency to under 200ms using optimized SQL transactions.</p>
          </div>

          <Link href="/contact" className={styles.primaryBtn}>
            Build a Similar Platform &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
