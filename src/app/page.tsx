import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../components/AnimeReveal";

const skills = [
  { name: "Flutter", icon: "devicon-flutter-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: "Next.js", icon: "devicon-nextjs-plain" },
  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
  { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "Prisma ORM", icon: "devicon-prisma-original" },
  { name: "Firebase", icon: "devicon-firebase-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "REST APIs", icon: "devicon-network-wired" },
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
        <div className={styles.heroTitleRow}>
          <AnimeReveal direction="fade" duration={800} delay={100} className={styles.portSide}>
            <div>
              <span className={styles.heroWord}>PORT</span>
            </div>
          </AnimeReveal>

          <AnimeReveal direction="fade" duration={1000} delay={300} className={styles.heroImgWrap}>
            <div style={{ display: "contents" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sathish.png"
                alt="Sathish G"
                className={styles.heroImg}
              />
            </div>
          </AnimeReveal>

          <AnimeReveal direction="fade" duration={800} delay={100} className={styles.folioSide}>
            <div>
              <span className={styles.heroWord}>FOLIO</span>
              {/* Yellow badge under FOLIO */}
              <AnimeReveal direction="fade" duration={600} delay={500}>
                <div className={styles.heroBadgeWrap}>
                  <div className={styles.heroBadgeBg} />
                  <div className={styles.heroBadgeText}>Full Stack &amp; Flutter Engineer</div>
                </div>
              </AnimeReveal>
              {/* Geo Location Badge */}
              <AnimeReveal direction="fade" duration={600} delay={650}>
                <div className={styles.locationBadge}>
                  <span className={styles.locationPin}>📍</span>
                  <span className={styles.locationText}>Based in Coimbatore, Tamil Nadu</span>
                </div>
              </AnimeReveal>
            </div>
          </AnimeReveal>
        </div>

        {/* Hero CTA & Availability */}
        <div style={{ marginTop: "2.5rem", display: "flex", gap: "1.25rem", zIndex: 30, flexWrap: "wrap", justifyContent: "center" }}>
          <a
            href="/Sathish_G_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroResumeBtn}
          >
            Download Resume &rarr;
          </a>
          <Link href="/contact" className={styles.heroContactBtn}>
            Hire Me
          </Link>
        </div>

        {/* Scroll indicator */}
        <AnimeReveal direction="fade" duration={800} delay={800}>
          <div className={styles.scrollIndicator}>
            <span className={styles.scrollLabel}>Scroll</span>
            <div className={styles.scrollLine} />
          </div>
        </AnimeReveal>
      </section>

      {/* ─────────── INTRO CARD ─────────── */}
      <section className={styles.introSection}>
        <AnimeReveal direction="fade" duration={900}>
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
              <AnimeReveal stagger={50} direction="fade" delay={200}>
                <ul className={styles.skillsList}>
                  {skills.map((s) => (
                    <li key={s.name} className={styles.skillPill}>
                      {s.icon && <i className={`${s.icon} ${styles.skillIcon}`} />}
                      <span>{s.name}</span>
                    </li>
                  ))}
                </ul>
              </AnimeReveal>
            </div>

            {/* Right: Stats */}
            <div className={styles.introRight}>
              <AnimeReveal stagger={80} direction="fade" delay={300}>
                <div className={styles.statsGrid}>
                  {stats.map(({ value, label }) => (
                    <div key={label} className={styles.statCard}>
                      <div className={styles.statValue}>{value}</div>
                      <div className={styles.statLabel}>{label}</div>
                    </div>
                  ))}
                </div>
              </AnimeReveal>
            </div>
          </div>
        </AnimeReveal>
      </section>

      {/* ─────────── SERVICES ─────────── */}
      <section className={styles.servicesSection}>
        <AnimeReveal direction="fade" duration={800}>
          <div className={styles.sectionTop}>
            <h2 className={styles.sectionTitle}>Services</h2>
            <Link href="/services" className={styles.viewAllBtn}>View All Services &rarr;</Link>
          </div>
        </AnimeReveal>
        <AnimeReveal stagger={100} direction="fade" delay={150}>
          <div className={styles.servicesGrid}>
            {services.map((svc) => (
              <Link key={svc.title} href="/services" className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceDesc}>{svc.desc}</p>
              </Link>
            ))}
          </div>
        </AnimeReveal>
      </section>

      {/* ─────────── EXPERIENCE TIMELINE ─────────── */}
      <section className={styles.experienceSection}>
        <AnimeReveal direction="fade" duration={800}>
          <div className={styles.sectionTop}>
            <h2 className={styles.sectionTitle}>Work Experience</h2>
            <Link href="/about" className={styles.viewAllBtn}>More About Me &rarr;</Link>
          </div>
        </AnimeReveal>

        <div className={styles.timeline}>
          <AnimeReveal stagger={100} direction="fade" delay={150}>
            <div className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.roleTitle}>Full Stack Developer</h3>
                <span className={styles.duration}>Sep 2025 - Present</span>
              </div>
              <div className={styles.companyLoc}>
                <span className={styles.company}>Dhigrowth</span>
                <span className={styles.loc}>Coimbatore, TN (Hybrid)</span>
              </div>
              <p className={styles.timelineDesc}>
                Engineered the complete Judah Food Delivery 3-app ecosystem with Flutter &amp; Socket.io and developed the Nest Pilot facility management SaaS using Node.js &amp; PostgreSQL.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.roleTitle}>Flutter Developer</h3>
                <span className={styles.duration}>Jul 2024 - Sep 2025</span>
              </div>
              <div className={styles.companyLoc}>
                <span className={styles.company}>Elanoxtech</span>
                <span className={styles.loc}>Chennai, TN (On-site)</span>
              </div>
              <p className={styles.timelineDesc}>
                Built key cross-platform mobile apps (Virtual to Live, Ovantica, lalassa) integrating Google Maps tracking APIs, Firebase listeners, and secure payment modules.
              </p>
            </div>

            <div className={styles.timelineItem}>
              <div className={styles.timelineHeader}>
                <h3 className={styles.roleTitle}>Freelance / Independent Developer</h3>
                <span className={styles.duration}>Jun 2023 - Jun 2024</span>
              </div>
              <div className={styles.companyLoc}>
                <span className={styles.company}>Freelance</span>
                <span className={styles.loc}>Coimbatore &amp; Karur, TN</span>
              </div>
              <p className={styles.timelineDesc}>
                Designed custom client applications including the Premium Parts ERP with offline SQLite synchronization and Mayiliragu Academy learning portal.
              </p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ─────────── BRANDS ─────────── */}
      <section className={styles.brandsSection}>
        <AnimeReveal direction="fade" duration={800}>
          <div>
            <h2 className={styles.brandsTitle}>Brands Worked With</h2>
            <div className={styles.brandsCard}>
              <AnimeReveal stagger={60} direction="fade" delay={200}>
                <div className={styles.brandsRow}>
                  {brands.map((b) => (
                    <span key={b} className={styles.brandName}>{b}</span>
                  ))}
                </div>
              </AnimeReveal>
            </div>
          </div>
        </AnimeReveal>
      </section>

      {/* ─────────── CTA ─────────── */}
      <section className={styles.ctaSection}>
        <AnimeReveal direction="fade" duration={1000}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlow1} />
            <div className={styles.ctaGlow2} />
            <h2 className={styles.ctaTitle}>LET&apos;S WORK TOGETHER</h2>
            <p className={styles.ctaText}>Open for full-time engineering roles, remote hybrid opportunities, and freelance consulting projects.</p>

            <div className={styles.contactDetailsRow}>
              <a href="mailto:sathishg.dev@gmail.com" className={styles.contactPill}>
                📧 sathishg.dev@gmail.com
              </a>
              <a href="tel:+917868031207" className={styles.contactPill}>
                📞 +91 7868031207
              </a>
              <span className={styles.contactPill}>
                📍 Coimbatore, TN, India
              </span>
            </div>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center" }}>
              <Link href="/contact" className={styles.ctaBtn}>Contact Me</Link>
              <a href="/Sathish_G_Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeCtaBtn}>Download Resume</a>
            </div>
          </div>
        </AnimeReveal>
      </section>
    </main>
  );
}
