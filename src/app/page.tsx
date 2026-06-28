import Link from "next/link";
import styles from "./page.module.css";
import ScrollReveal from "../components/ScrollReveal";

const skills = [
  "Flutter Developer",
  "Full Stack Engineer",
  "Node.js Backend",
  "React & Next.js",
  "AWS Deployment",
  "Docker",
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

const services = [
  { title: "Flutter App Dev", desc: "Cross-platform mobile apps for Android & iOS." },
  { title: "React Web Dev", desc: "Modern, responsive web apps with Next.js." },
  { title: "Node.js Backend", desc: "Scalable REST APIs & full-stack solutions." },
  { title: "AWS & DevOps", desc: "Cloud infra, Docker, Nginx, CI/CD pipelines." },
];

const brands = ["Dhigrowth", "Elanoxtech", "Befhue", "Mayiliragu Academy", "Premium Parts", "akirva"];

export default function Home() {
  return (
    <main className={`${styles.main} fadeIn`}>
      {/* ─────────── HERO ─────────── */}
      <section className={styles.heroSection}>
        {/* PORT + Image + FOLIO row */}
        <div className={styles.heroTitleRow}>
          <div className={`${styles.portSide} slideInLeft`}>
            <span className={styles.heroWord}>PORT</span>
          </div>

          {/* Profile Image sits between PORT and FOLIO */}
          <div className={`${styles.heroImgWrap} scaleIn stagger-1`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sathish.png"
              alt="Sathish G"
              className={styles.heroImg}
            />
          </div>

          <div className={styles.folioSide}>
            <span className={`${styles.heroWord} slideInRight stagger-1`}>FOLIO</span>
            {/* Yellow badge under FOLIO */}
            <div className={`${styles.heroBadgeWrap} fadeUp stagger-2`}>
              <div className={styles.heroBadgeBg} />
              <div className={styles.heroBadgeText}>Full Stack &amp; Flutter Engineer</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={`${styles.scrollIndicator} fadeIn stagger-3`}>
          <span className={styles.scrollLabel}>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ─────────── INTRO CARD ─────────── */}
      <section className={styles.introSection}>
        <ScrollReveal animationClass="fadeUp">
          <div className={styles.introCard}>
            {/* Left: Name + Description */}
            <aside className={styles.introLeft}>
              <h2 className={styles.introName}>
                <span className={styles.accent}>G. </span>Sathish
              </h2>
              <p className={styles.introTagline}>
                I Build High-Performance Flutter Apps & Scalable Full-Stack Systems. Clean Code, Real Results.
              </p>
              <p className={styles.introDesc}>
                Based in Tamil Nadu, India. 2+ years building cross-platform apps and cloud-deployed web platforms.
                Every function optimised. Every UI pixel purposeful.
              </p>
              <Link href="/about" className={styles.introCta}>
                Learn More &rarr;
              </Link>
            </aside>

            {/* Middle: Skills pills */}
            <div className={styles.introMiddle}>
              <h3 className={styles.introSkillsHeading}>Specializations</h3>
              <ul className={styles.skillsList}>
                {skills.map((s, idx) => (
                  <ScrollReveal
                    key={s}
                    animationClass="fadeUp"
                    delayClass={`stagger-${Math.min(idx + 1, 6)}`}
                  >
                    <li className="skillPill">{s}</li>
                  </ScrollReveal>
                ))}
              </ul>
            </div>

            {/* Right: Stats */}
            <div className={styles.introRight}>
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
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section className={styles.servicesSection}>
        <ScrollReveal animationClass="fadeUp">
          <div className={styles.sectionTop}>
            <h2 className={styles.sectionTitle}>Services</h2>
            <Link href="/services" className={styles.viewAllBtn}>View All Services &rarr;</Link>
          </div>
        </ScrollReveal>
        <div className={styles.servicesGrid}>
          {services.map((svc, idx) => (
            <ScrollReveal
              key={svc.title}
              animationClass="scaleIn"
              delayClass={`stagger-${idx + 1}`}
            >
              <Link href="/services" className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceDesc}>{svc.desc}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>
      {/* ─────────── BRANDS ─────────── */}
      <section className={styles.brandsSection}>
        <ScrollReveal animationClass="fadeUp">
          <h2 className={styles.brandsTitle}>Brands Worked With</h2>
          <div className={styles.brandsCard}>
            <div className={styles.brandsRow}>
              {brands.map((b, idx) => (
                <ScrollReveal
                  key={b}
                  animationClass="scaleIn"
                  delayClass={`stagger-${Math.min(idx + 1, 6)}`}
                >
                  <span className={styles.brandName}>{b}</span>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className={styles.ctaSection}>
        <ScrollReveal animationClass="scaleIn">
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlow1} />
            <div className={styles.ctaGlow2} />
            <h2 className={styles.ctaTitle}>LET&apos;S WORK TOGETHER</h2>
            <p className={styles.ctaText}>Got a project in mind? Let&apos;s make it real.</p>
            <Link href="/contact" className={styles.ctaBtn}>Say Hello &rarr;</Link>
          </div>
        </ScrollReveal>
      </section>
    </main>
  );
}
