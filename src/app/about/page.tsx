"use client";

import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../components/AnimeReveal";
import Testimonials from "../../components/Testimonials";

const skills = [
  "Flutter Developer",
  "Full Stack Engineer",
  "Node.js Backend",
  "React & Next.js",
  "AWS Deployment",
  "Docker Containerization",
  "Firebase",
  "PostgreSQL",
  "MongoDB",
  "TypeScript",
  "Prisma ORM",
  "REST APIs",
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Projects Done" },
  { value: "1K+", label: "Users Served" },
  { value: "99.9%", label: "Uptime" },
];

export default function About() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      {/* ─────────── HERO ─────────── */}
      <section className={styles.heroSection}>
        <div className={`${styles.backLinkWrap} fadeIn stagger-1`}>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Home</span>
          </Link>
        </div>

        <div className={styles.titleArea}>
          <div className={`${styles.badge} fadeIn stagger-1`}>WHO I AM</div>
          <AnimeReveal direction="fade" duration={800}>
            <h1 className={styles.title}>About Sathish G — Flutter Developer &amp; Full Stack Engineer</h1>
          </AnimeReveal>
          <div className={`${styles.titleLine} slideInLeft stagger-2`} />
        </div>
      </section>

      {/* ─────────── BIO SECTION ─────────── */}
      <section className={styles.bioSection}>
        <div className={styles.bioGrid}>
          {/* Bio Text */}
          <AnimeReveal direction="fade" duration={800}>
            <div className={styles.bioTextCol}>
              <h2 className={styles.bioHeading}>
                <span className={styles.accent}>G </span>Sathish 
              </h2>
              <p className={styles.bioParagraph1}>
                I am a passionate Full-Stack Engineer and specialized Flutter Developer based in Coimbatore, Tamil Nadu. With over 2 years of hands-on experience building production mobile apps and scalable web architectures, I turn complex business ideas into intuitive, high-performance software.
              </p>
              <p className={styles.bioParagraph2}>
                My engineering approach bridges frontend aesthetics with rock-solid backend infrastructure. From designing cross-platform Flutter mobile applications for Android &amp; iOS to writing RESTful microservices in Node.js, Prisma ORM, and PostgreSQL, I engineer systems built for speed, security, and enterprise reliability.
              </p>

              <h3 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", fontWeight: "600" }}>
                Work History &amp; Experience
              </h3>
              <p className={styles.bioParagraph2}>
                <strong>Full Stack Developer at Dhigrowth (Sep 2025 – Present):</strong> Leading mobile and backend initiatives in a hybrid setup. Engineered cross-platform Flutter applications integrated with real-time webhooks, automated subscription workflows, and custom payment gateway pipelines. Built responsive Next.js web portals optimized for Core Web Vitals and rapid page load speeds.
              </p>
              <p className={styles.bioParagraph2}>
                <strong>Full Stack Developer at Elanoxtech (May 2024 – Sep 2025):</strong> Developed high-concurrency Node.js REST APIs serving 1,000+ active users. Managed PostgreSQL databases with Prisma ORM, configured background job queues, and deployed Dockerized services onto AWS EC2 instances behind Nginx reverse proxies with automated SSL renewal.
              </p>
              <p className={styles.bioParagraph2}>
                <strong>Freelance Software Engineer (2023 – Present):</strong> Partnered with startups and regional businesses in Tamil Nadu to deliver end-to-end custom mobile solutions — including multi-app delivery ecosystems, offline-first attendance trackers with SQLite synchronization, and educational LMS platforms serving thousands of students.
              </p>

              <h3 style={{ fontSize: "1.5rem", color: "#fff", marginTop: "2rem", marginBottom: "1rem", fontWeight: "600" }}>
                Why Work With Me?
              </h3>
              <ul style={{ color: "#aaa", lineHeight: "1.8", paddingLeft: "1.2rem", marginBottom: "1.5rem" }}>
                <li><strong style={{ color: "#fff" }}>Zero-Crash Mobile Reliability:</strong> Clean architecture using BLoC &amp; Provider pattern ensures 99.9% crash-free sessions across Android &amp; iOS devices.</li>
                <li><strong style={{ color: "#fff" }}>Sub-100ms API Performance:</strong> Database queries tuned with Prisma indexes and redis caching for instant data delivery.</li>
                <li><strong style={{ color: "#fff" }}>End-to-End Ownership:</strong> From initial Figma mockups to App Store publishing and AWS CloudWatch monitoring, I handle the full lifecycle.</li>
                <li><strong style={{ color: "#fff" }}>Clear Communication:</strong> Daily async updates, transparent progress tracking, and commitment to project timelines.</li>
              </ul>
            </div>
          </AnimeReveal>

          {/* Profile Photo */}
          <AnimeReveal direction="fade" duration={900}>
            <div className={styles.photoCol}>
              <div className={styles.photoContainer}>
                <div className={styles.photoGlow} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={styles.profileImg}
                  alt="Sathish G"
                  src="/sathish.png"
                />
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ─────────── STATS SECTION ─────────── */}
      <section className={styles.statsSection}>
        <AnimeReveal stagger={80} direction="fade" delay={100}>
          <div className={styles.statsGrid}>
            {stats.map(({ value, label }) => (
              <div key={label} className={styles.statCard}>
                <div className={styles.statValue}>{value}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            ))}
          </div>
        </AnimeReveal>
      </section>

      {/* ─────────── TESTIMONIALS ─────────── */}
      <Testimonials />

      {/* ─────────── SKILLS SECTION ─────────── */}
      <section className={styles.skillsSection}>
        <AnimeReveal direction="fade" duration={700}>
          <h2 className={styles.skillsHeading}>Skill Level</h2>
        </AnimeReveal>
        <AnimeReveal stagger={50} direction="fade" delay={150}>
          <ul className={styles.skillsList}>
            {skills.map((skill) => (
              <li key={skill} className={styles.skillPill}>
                {skill}
              </li>
            ))}
          </ul>
        </AnimeReveal>
      </section>

      {/* ─────────── RETURN FOOTER ─────────── */}
      <section className={styles.returnFooter}>
        <AnimeReveal direction="fade" duration={600}>
          <Link href="/" className={styles.returnBtn}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.returnText}>Return to Home</span>
          </Link>
        </AnimeReveal>
      </section>
    </main>
  );
}
