import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Mayiliragu Academy LMS — E-Learning Flutter App Case Study | Sathish G",
  description:
    "Technical case study by Sathish G, leading e-learning app developer india. How I built an enterprise LMS supporting 1,000+ active learners with a Flutter student app, React admin portal, and Node.js PostgreSQL backend on AWS.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/mayiliragu-academy",
  },
  openGraph: {
    title: "Mayiliragu Academy LMS — E-Learning Flutter App Case Study | Sathish G",
    description:
      "Enterprise e-learning LMS supporting 1,000+ learners across mobile and web platforms.",
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
            "name": "Mayiliragu Academy LMS — E-Learning Platform",
            "description": "Enterprise-grade Learning Management System engineered with Flutter, React, Node.js, Prisma ORM, and PostgreSQL by Sathish G, an expert e-learning app developer in India.",
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

        <div className={styles.badge}>CASE STUDY — EDTECH &amp; E-LEARNING</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>MAYILIRAGU ACADEMY LMS</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          An enterprise-grade Learning Management System (LMS) engineered to support 1,000+ active concurrent learners across a mobile app and web management portal. Built by a specialized <strong>e-learning app developer in India</strong>.
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

        {/* 1. The Challenge */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <div className={styles.contentBlock}>
            <p>
              Mayiliragu Academy needed a modern digital education infrastructure to deliver structured video courses, mock exam test series, downloadable PDF study materials, and real-time student performance analytics to over 1,000 active learners across Tamil Nadu.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Key engineering challenges included: preventing unauthorized screen recording of proprietary video content, handling simultaneous exam submissions during timed test windows without server crashes, ensuring fast video playback buffering on low-bandwidth 3G/4G networks, and providing non-technical instructors with an intuitive web admin portal to manage thousands of questions and video lessons effortlessly.
            </p>
          </div>
        </section>

        {/* 2. The Solution I Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution I Built</h2>
          <div className={styles.contentBlock}>
            <p>
              As a full-stack <strong>e-learning app developer in India</strong>, I designed and developed a 3-tier software ecosystem:
            </p>

            <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>1. Student Mobile App (Flutter)</h3>
                <p className={styles.cardDesc}>
                  Cross-platform iOS and Android app featuring encrypted HLS video streaming, offline PDF viewing, interactive timed quiz interfaces with instant score reports, and personalized course progress dashboards.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>2. Instructor Management Portal (React)</h3>
                <p className={styles.cardDesc}>
                  A responsive Next.js/React web dashboard enabling course creators to upload video lessons to AWS S3, organize modular course chapters, construct bulk test question banks, and evaluate student analytics.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>3. Scalable Backend API (Node.js &amp; Prisma)</h3>
                <p className={styles.cardDesc}>
                  Express microservice backend paired with a PostgreSQL database and Prisma ORM, handling secure JWT authentication, subscription access control, automated test scoring, and Razorpay payment webhooks.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>4. AWS Cloud Infrastructure</h3>
                <p className={styles.cardDesc}>
                  Hosted on AWS EC2 instances behind Nginx reverse proxies with SSL termination, media storage on AWS S3, and CloudFront CDN integration for fast asset delivery across India.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Technical Architecture */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Architecture &amp; Stack</h2>
          <div className={styles.contentBlock}>
            <p>
              The platform utilizes a decoupled microservices architecture designed for high availability during mock exam schedules:
            </p>

            <div className={styles.skillsList} style={{ marginTop: "1.5rem" }}>
              <span className={styles.skillBadge}>Flutter Client</span>
              <span className={styles.skillBadge}>React.js Admin</span>
              <span className={styles.skillBadge}>Node.js / Express API</span>
              <span className={styles.skillBadge}>Prisma ORM</span>
              <span className={styles.skillBadge}>PostgreSQL Database</span>
              <span className={styles.skillBadge}>AWS EC2 &amp; S3</span>
              <span className={styles.skillBadge}>Razorpay Gateway</span>
              <span className={styles.skillBadge}>HLS Video Encryption</span>
            </div>

            <p style={{ marginTop: "1.5rem" }}>
              State management in the Flutter mobile application was implemented using the BLoC pattern. This enabled clean event-driven handling of video playback states, test timers, and offline data sync without memory leaks.
            </p>
          </div>
        </section>

        {/* 4. Key Features Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features Built</h2>
          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Secure Adaptive Video Player</h3>
              <p className={styles.cardDesc}>
                Custom Flutter video player with playback speed controls, resolution switching, auto-resume watch history, and DRM security flags preventing screen capture.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Interactive Mock Exam Engine</h3>
              <p className={styles.cardDesc}>
                Timed test engine with question flagging, instant answer keys, detailed explanation sheets, and nationwide leaderboard scoring calculations.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Offline Materials &amp; PDF Reader</h3>
              <p className={styles.cardDesc}>
                Encrypted local device storage allowing students to download study notes and read offline without requiring active internet connectivity.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Automated Course Subscriptions</h3>
              <p className={styles.cardDesc}>
                Integrated Razorpay payment gateway handling course purchases, promo discount codes, instant invoice generation, and automated access provisioning.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Results & Impact */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Results &amp; Impact</h2>
          <div className={styles.contentBlock}>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", lineHeight: "1.8", color: "#a1a1aa" }}>
              <li><strong style={{ color: "#a3e635" }}>1,000+ Active Students:</strong> Successfully onboarded and served over a thousand active learners with seamless daily course access.</li>
              <li><strong style={{ color: "#a3e635" }}>99.9% Uptime on AWS:</strong> Maintained zero downtime during peak exam window traffic spikes.</li>
              <li><strong style={{ color: "#a3e635" }}>Sub-200ms Test Scoring:</strong> Optimized Prisma SQL queries process test results and rank updates instantaneously.</li>
            </ul>
          </div>
        </section>

        {/* 6. What I Learned */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Learned</h2>
          <div className={styles.contentBlock}>
            <p>
              Building Mayiliragu Academy highlighted the importance of media delivery optimization in EdTech platforms. Encrypting video streams using HLS protocols while maintaining fast buffer start times requires careful CDN edge configuration. Additionally, designing database indexes specifically around test result write transactions prevents locking issues during synchronous exam completions.
            </p>
          </div>
        </section>

        {/* 7. CTA */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Building an EdTech or E-Learning Platform?</h2>
          <p className={styles.subtitle}>
            Let&apos;s collaborate to design a high-capacity mobile learning app and web platform for your academy or EdTech startup.
          </p>
          <div className={styles.ctaGrid} style={{ marginTop: "1.5rem" }}>
            <Link href="/contact" className={styles.primaryBtn}>
              Discuss Your EdTech App &rarr;
            </Link>
            <Link href="/work" className={styles.secondaryBtn}>
              Explore More Case Studies
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
