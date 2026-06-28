"use client";

import Link from "next/link";
import styles from "./page.module.css";

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
          <h1 className={`${styles.title} slideInLeft stagger-2`}>ABOUT</h1>
          <div className={`${styles.titleLine} slideInLeft stagger-2`} />
        </div>
      </section>

      {/* ─────────── BIO SECTION ─────────── */}
      <section className={styles.bioSection}>
        <div className={styles.bioGrid}>
          {/* Bio Text */}
          <div className={`${styles.bioTextCol} fadeUp stagger-3`}>
            <h2 className={styles.bioHeading}>
              <span className={styles.accent}>R U </span>Sathish G
            </h2>
            <p className={styles.bioParagraph1}>
              I Design And Build Smooth, Aesthetic Web Experiences Where Code Meets Clean Vibes. UI/UX Is My Zone — Minimal, Intuitive, And Made To Feel Right.
            </p>
            <p className={styles.bioParagraph2}>
              With a background in computer systems, I bridge the gap between beautiful design and rock-solid development. Every pixel matters. Every interaction tells a story. Based in Tamil Nadu, India, I bring 2+ years of professional experience building cross-platform solutions and scaling architectures.
            </p>
          </div>

          {/* Profile Photo */}
          <div className={`${styles.photoCol} slideInRight stagger-3`}>
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
        </div>
      </section>

      {/* ─────────── STATS SECTION ─────────── */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map(({ value, label }, idx) => (
            <div key={label} className={`${styles.statCard} scaleIn stagger-${idx + 1}`}>
              <div className={styles.statValue}>{value}</div>
              <div className={styles.statLabel}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── SKILLS SECTION ─────────── */}
      <section className={styles.skillsSection}>
        <h2 className={`${styles.skillsHeading} fadeUp stagger-1`}>Skill Level</h2>
        <ul className={styles.skillsList}>
          {skills.map((skill, idx) => (
            <li key={skill} className={`skillPill fadeUp stagger-${Math.min(idx + 1, 6)}`}>
              {skill}
            </li>
          ))}
        </ul>
      </section>

      {/* ─────────── RETURN FOOTER ─────────── */}
      <section className={`${styles.returnFooter} fadeIn stagger-4`}>
        <Link href="/" className={styles.returnBtn}>
          <span className={styles.backIcon}>&larr;</span>
          <span className={styles.returnText}>Return to Home</span>
        </Link>
      </section>
    </main>
  );
}
