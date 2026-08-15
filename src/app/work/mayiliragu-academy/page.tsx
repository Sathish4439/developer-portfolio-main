import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Mayiliragu Academy LMS — Flutter EdTech App Case Study | Sathish G",
  description:
    "Case study of Mayiliragu Academy by Sathish G, e-learning app developer India. How I built a Flutter LMS, React admin portal, and Node.js Prisma backend.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/mayiliragu-academy",
  },
  openGraph: {
    title: "Mayiliragu Academy LMS — Flutter EdTech App Case Study | Sathish G",
    description:
      "Enterprise e-learning LMS supporting 1,000+ learners with a 4-tier architecture across mobile, web, and desktop.",
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
            "name": "Mayiliragu Academy LMS — Government Exam E-Learning Platform",
            "description": "Enterprise-grade Learning Management System engineered with a Flutter student app, React admin portal, Node.js Express API with Prisma ORM, and Flutter desktop video processor.",
            "author": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "url": "https://www.sathishdev.in/work/mayiliragu-academy",
            "keywords": [
              "Flutter LMS",
              "EdTech developer India",
              "TNPSC exam app",
              "e-learning Flutter app",
              "Node.js education platform",
              "Prisma ORM developer"
            ]
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
          An enterprise-grade Learning Management System (LMS) custom-built by an expert e-learning app developer in India. Engineered to support 1,000+ active concurrent learners with a modular Flutter LMS client, serving aspirants preparing for competitive government examinations like TNPSC, UPSC, SSC, and Banking.
        </p>

        <div className={styles.metaGrid}>
          <div>
            <div className={styles.metaLabel}>ROLE</div>
            <div className={styles.metaValue}>Lead Full-Stack Developer &amp; Architect</div>
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
            <div className={styles.metaValue}>Flutter, React 19, Node.js, AWS EC2</div>
          </div>
        </div>

        {/* 1. The Challenge */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <div className={styles.contentBlock}>
            <p>
              Mayiliragu Academy required a modern digital education infrastructure to deliver high-quality video lectures, timed mock exam test series, downloadable study notes, and real-time performance tracking to thousands of students preparing for competitive government exams. Managing this scale required solving the concurrency issues that arise during synchronized mock exam schedules, preventing system lag, and maintaining buffer-free video streams over low-bandwidth 3G/4G cellular networks.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Furthermore, content protection was a critical commercial priority: the platform needed to strictly prevent unauthorized downloads and public sharing of proprietary lectures. Faculty also required a simple administrative dashboard to coordinate course material, review user metrics, and resolve student doubts. This meant the software system had to implement granular Role-Based Access Control (RBAC) across multiple user roles (Students, Faculty, Counselors, and Admins).
            </p>
          </div>
        </section>

        {/* 2. The Solution I Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution I Built</h2>
          <div className={styles.contentBlock}>
            <p>
              To address these requirements, I designed and developed a 4-tier software ecosystem:
            </p>

            <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>1. Flutter Student App</h3>
                <p className={styles.cardDesc}>
                  A cross-platform mobile client built with Flutter, utilizing `better_player_enhanced` for encrypted media streams, `firebase_messaging` for pushes, and secure local storage for offline PDF document access.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>2. React 19 Admin &amp; Faculty Portal</h3>
                <p className={styles.cardDesc}>
                  A web application built with React 19 + TypeScript + Vite + Tailwind CSS 4, utilizing Zustand for lightweight state management and TanStack React Query for smooth CRUD operations. Deployed on Firebase Hosting.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>3. Node.js Backend API</h3>
                <p className={styles.cardDesc}>
                  A REST API server built with Express 5, TypeScript, and Prisma ORM (Prisma 7.x) interfacing a PostgreSQL database. Implements JWT sessions, AWS S3 storage, Firebase Admin SDK integration, and automated Zod validation.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>4. Flutter Desktop Video Processor</h3>
                <p className={styles.cardDesc}>
                  An internal desktop utility built for faculty to process raw educational lectures, handle batch transcodings, and prepare secure video formats before uploading to cloud storage assets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Core Modules Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Core Modules Built</h2>
          <div className={styles.gridThree}>
            <div className={styles.moduleCard}>
              <span className={styles.moduleIcon}>📹</span>
              <h3 className={styles.moduleTitle}>Video Learning Engine</h3>
              <p className={styles.moduleDesc}>
                Secure tokenized video streaming player supporting custom playback speeds (0.5x to 2x), auto-saving watch positions every 10 seconds, bookmarks, and offline resume.
              </p>
            </div>
            <div className={styles.moduleCard}>
              <span className={styles.moduleIcon}>📝</span>
              <h3 className={styles.moduleTitle}>Test Engine</h3>
              <p className={styles.moduleDesc}>
                Interactive exam system simulating actual government testing. Supports negative markings, timers, question review palettes (Green/Red/Yellow), auto-save, and instant evaluations.
              </p>
            </div>
            <div className={styles.moduleCard}>
              <span className={styles.moduleIcon}>📊</span>
              <h3 className={styles.moduleTitle}>Performance Analytics</h3>
              <p className={styles.moduleDesc}>
                Detailed analytics reporting student accuracy by subject and topic. Identifies weak areas (below 50%) and prompts personalized learning recommendations.
              </p>
            </div>
            <div className={styles.moduleCard}>
              <span className={styles.moduleIcon}>📰</span>
              <h3 className={styles.moduleTitle}>Current Affairs Feed</h3>
              <p className={styles.moduleDesc}>
                Chronological feed containing daily updates, news summaries, and monthly PDF booklets tailored for TNPSC prep, paired with quick daily retention quizzes.
              </p>
            </div>
            <div className={styles.moduleCard}>
              <span className={styles.moduleIcon}>🛒</span>
              <h3 className={styles.moduleTitle}>Book Store &amp; Coupons</h3>
              <p className={styles.moduleDesc}>
                E-commerce portal for physical books and courses, integrated with discount coupon validations, purchase histories, and access provisioning.
              </p>
            </div>
            <div className={styles.moduleCard}>
              <span className={styles.moduleIcon}>🙋</span>
              <h3 className={styles.moduleTitle}>Doubt Management</h3>
              <p className={styles.moduleDesc}>
                Allows students to raise questions directly from any screen or video, feeding a centralized admin queue where instructors reply with text/images.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Technical Architecture */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Architecture &amp; Stack</h2>
          <div className={styles.contentBlock}>
            <p>
              The platform utilizes a decoupled microservices architecture deployed to AWS EC2 using Docker containers behind an Nginx reverse proxy.
            </p>

            <div className={styles.skillsList} style={{ marginTop: "1.5rem" }}>
              <span className={styles.skillBadge}>Flutter / Dart</span>
              <span className={styles.skillBadge}>better_player_enhanced</span>
              <span className={styles.skillBadge}>React 19 / TypeScript</span>
              <span className={styles.skillBadge}>Vite + Tailwind CSS 4</span>
              <span className={styles.skillBadge}>Zustand</span>
              <span className={styles.skillBadge}>TanStack Query</span>
              <span className={styles.skillBadge}>Node.js / Express 5</span>
              <span className={styles.skillBadge}>Prisma ORM 7.x</span>
              <span className={styles.skillBadge}>PostgreSQL Database</span>
              <span className={styles.skillBadge}>AWS EC2 &amp; S3</span>
              <span className={styles.skillBadge}>Firebase Auth &amp; Hosting</span>
              <span className={styles.skillBadge}>Firebase FCM Messaging</span>
              <span className={styles.skillBadge}>Google Gemini AI API</span>
              <span className={styles.skillBadge}>Docker &amp; Nginx</span>
              <span className={styles.skillBadge}>Zod &amp; JWT Authorization</span>
            </div>

            <p style={{ marginTop: "1.5rem" }}>
              To optimize resources and ensure high availability, administrative CRUD tasks are decoupled from student database transactions. By leveraging Zustand for local web state and Prisma ORM for structured database operations, Mayiliragu minimizes system overhead and ensures immediate loading times across web and mobile surfaces.
            </p>
          </div>
        </section>

        {/* 5. Key Features Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features Built</h2>
          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Secure Gated Streaming</h3>
              <p className={styles.cardDesc}>
                Uses short-lived tokenized stream URLs generated on-demand to protect premium lectures. Disables native screen recording and sharing features on mobile devices.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Real-Exam Test Simulator</h3>
              <p className={styles.cardDesc}>
                Replicates the exact testing screen used in TNPSC examinations, including a detailed question palette and a robust auto-save mechanism protecting student progress.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>AI Recommendations</h3>
              <p className={styles.cardDesc}>
                Integrated with Google Gemini AI to analyze incorrect mock test responses and recommend specific course chapters, video lectures, or practice materials to review.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Automatic PDF Certificates</h3>
              <p className={styles.cardDesc}>
                Generates stylized course completion and test completion certificates programmatically on the backend using `pdfkit`, which can be viewed or printed by students.
              </p>
            </div>
          </div>
        </section>

        {/* 6. Results & Impact */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Results &amp; Impact</h2>
          <div className={styles.contentBlock}>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", lineHeight: "1.8", color: "#a1a1aa" }}>
              <li><strong style={{ color: "#ff3b3b" }}>1,000+ Active Students:</strong> Deployed successfully to production, serving thousands of exam takers across multiple examination tiers.</li>
              <li><strong style={{ color: "#ff3b3b" }}>15 Feature Modules:</strong> A complete, end-to-end e-learning suite replacing various third-party services with a single custom interface.</li>
              <li><strong style={{ color: "#ff3b3b" }}>4-Layer Architecture:</strong> Clean, maintainable separation of student apps, admin interfaces, backend APIs, and internal encoding utilities.</li>
            </ul>
          </div>
        </section>

        {/* 7. What I Learned */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Learned</h2>
          <div className={styles.contentBlock}>
            <p>
              Designing and building Mayiliragu was a major milestone in EdTech development. I learned how to implement custom media gates to protect premium video libraries, and how to build resilient local cache systems in Flutter to preserve student quiz states during network dropouts. Additionally, integrating Gemini AI models to analyze student performance metrics highlighted how modern API layers can turn static logs into actionable tutoring advice.
            </p>
          </div>
        </section>

        {/* 8. CTA */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Building an EdTech or E-Learning Platform?</h2>
          <p className={styles.subtitle}>
            Let&apos;s collaborate to design and develop your custom LMS dashboard, cross-platform mobile apps, or smart educational APIs.
          </p>
          <div className={styles.ctaGrid} style={{ marginTop: "1.5rem" }}>
            <Link href="/contact" className={styles.primaryBtn} style={{ backgroundColor: "#ff3b3b", color: "#fff" }}>
              Discuss Your EdTech Project &rarr;
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
