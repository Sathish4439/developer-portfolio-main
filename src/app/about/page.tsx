"use client";

import Link from "next/link";
import styles from "./page.module.css";
import ScrollReveal from "../../components/ScrollReveal";

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
          <ScrollReveal animationClass="fadeUp" delayClass="stagger-1">
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
          </ScrollReveal>

          {/* Profile Photo */}
          <ScrollReveal animationClass="slideInRight" delayClass="stagger-1">
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
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────── STATS SECTION ─────────── */}
      <section className={styles.statsSection}>
        <div className={styles.statsGrid}>
          {stats.map(({ value, label }, idx) => (
            <ScrollReveal
              key={label}
              animationClass="scaleIn"
              delayClass={`stagger-${idx + 1}`}
            >
              <div className={styles.statCard}>
                <div className={styles.statValue}>{value}</div>
                <div className={styles.statLabel}>{label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* ─────────── SKILLS SECTION ─────────── */}
      <section className={styles.skillsSection}>
        <ScrollReveal animationClass="fadeUp">
          <h2 className={styles.skillsHeading}>Skill Level</h2>
        </ScrollReveal>
        <ul className={styles.skillsList}>
          {skills.map((skill, idx) => (
            <ScrollReveal
              key={skill}
              animationClass="fadeUp"
              delayClass={`stagger-${Math.min(idx + 1, 6)}`}
            >
              <li className="skillPill">
                {skill}
              </li>
            </ScrollReveal>
          ))}
        </ul>
      </section>

      {/* ─────────── RETURN FOOTER ─────────── */}
      <section className={styles.returnFooter}>
        <ScrollReveal animationClass="fadeIn">
          <Link href="/" className={styles.returnBtn}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.returnText}>Return to Home</span>
          </Link>
        </ScrollReveal>
      </section>
    </main>
  );
}
