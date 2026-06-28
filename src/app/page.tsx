import Link from "next/link";
import styles from "./page.module.css";

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
    <main className={styles.main}>
      {/* ─────────── HERO ─────────── */}
      <section className={styles.heroSection}>
        {/* PORT + Image + FOLIO row */}
        <div className={styles.heroTitleRow}>
          <div className={styles.portSide}>
            <span className={styles.heroWord}>PORT</span>
          </div>

          {/* Profile Image sits between PORT and FOLIO */}
          <div className={styles.heroImgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/sathish.png"
              alt="Sathish G"
              className={styles.heroImg}
            />
          </div>

          <div className={styles.folioSide}>
            <span className={styles.heroWord}>FOLIO</span>
            {/* Yellow badge under FOLIO */}
            <div className={styles.heroBadgeWrap}>
              <div className={styles.heroBadgeBg} />
              <div className={styles.heroBadgeText}>Full Stack &amp; Flutter Engineer</div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className={styles.scrollIndicator}>
          <span className={styles.scrollLabel}>Scroll</span>
          <div className={styles.scrollLine} />
        </div>
      </section>

      {/* ─────────── INTRO CARD ─────────── */}
      <section className={styles.introSection}>
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
              {skills.map((s) => (
                <li key={s} className={styles.skillPill}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Right: Stats */}
          <div className={styles.introRight}>
            <div className={styles.statsGrid}>
              {stats.map(({ value, label }) => (
                <div key={label} className={styles.statCard}>
                  <div className={styles.statValue}>{value}</div>
                  <div className={styles.statLabel}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionTop}>
          <h2 className={styles.sectionTitle}>Services</h2>
          <Link href="/services" className={styles.viewAllBtn}>View All Services &rarr;</Link>
        </div>
        <div className={styles.servicesGrid}>
          {services.map((svc) => (
            <Link href="/services" key={svc.title} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{svc.title}</h3>
              <p className={styles.serviceDesc}>{svc.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─────────── BRANDS ─────────── */}
      <section className={styles.brandsSection}>
        <h2 className={styles.brandsTitle}>Brands Worked With</h2>
        <div className={styles.brandsCard}>
          <div className={styles.brandsRow}>
            {brands.map((b) => (
              <span key={b} className={styles.brandName}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaGlow1} />
          <div className={styles.ctaGlow2} />
          <h2 className={styles.ctaTitle}>LET&apos;S WORK TOGETHER</h2>
          <p className={styles.ctaText}>Got a project in mind? Let&apos;s make it real.</p>
          <Link href="/contact" className={styles.ctaBtn}>Say Hello &rarr;</Link>
        </div>
      </section>
    </main>
  );
}
