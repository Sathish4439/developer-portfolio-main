"use client";

import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

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
            <h1 className={styles.title}>ABOUT</h1>
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
                I Design And Build Smooth, Aesthetic Web Experiences Where Code Meets Clean Vibes. UI/UX Is My Zone — Minimal, Intuitive, And Made To Feel Right.
              </p>
              <p className={styles.bioParagraph2}>
                With a background in computer systems, I bridge the gap between beautiful design and rock-solid development. Every pixel matters. Every interaction tells a story. Based in Tamil Nadu, India, I bring 2+ years of professional experience building cross-platform solutions and scaling architectures.
              </p>
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
