import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../components/AnimeReveal";
import Testimonials from "../components/Testimonials";

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
  { name: "Redis", icon: "devicon-redis-plain colored" },
  { name: "REST APIs", icon: "devicon-network-wired" },
];

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Projects Completed" },
  { value: "10+", label: "Production Apps" },
  { value: "100%", label: "On-Time Delivery" },
];

const services = [
  { title: "Flutter App Dev", desc: "Cross-platform mobile apps for Android & iOS.", href: "/services/flutter-development" },
  { title: "React Web Dev", desc: "Modern, responsive web apps with Next.js.", href: "/services/react-development" },
  { title: "Node.js Backend", desc: "Scalable REST APIs & full-stack solutions.", href: "/services/nodejs-development" },
  { title: "Full Stack & Cloud", desc: "Cloud infra, Docker, Nginx, CI/CD pipelines.", href: "/services/full-stack-development" },
];

const brands = ["Dhigrowth", "Elanoxtech", "Befhue", "MyShop POS", "Mayiliragu Academy", "Premium Parts", "akirva"];

export default function Home() {
  return (
    <main className={`${styles.main} fadeIn`}>
      {/* ─────────── HERO ─────────── */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroH1}>Sathish G — Full-Stack &amp; Mobile App Engineer — Scalable Digital Products</h1>

        {/* ── DESKTOP HERO: PORT | image | FOLIO (hidden on mobile) ── */}
        <div className={`${styles.heroTitleRow} ${styles.heroDesktop}`}>
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
                alt="Sathish G — Full Stack Engineer and Mobile App Developer"
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
                  <div className={styles.heroBadgeText}>Full Stack &amp; Mobile Engineer</div>
                </div>
              </AnimeReveal>
              {/* Geo Location & Remote Badge */}
              <AnimeReveal direction="fade" duration={600} delay={650}>
                <div className={styles.locationBadge}>
                  <span className={styles.locationPin}>🌐</span>
                  <span className={styles.locationText}>Available Worldwide • India (IST) • Remote / Contract</span>
                </div>
              </AnimeReveal>
            </div>
          </AnimeReveal>
        </div>

        {/* ── MOBILE HERO: stacked image + text (hidden on desktop) ── */}
        <div className={styles.heroMobile}>
          {/* Profile image */}
          <div className={styles.heroMobileImg}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/sathish.png" alt="Sathish G — Full Stack Engineer and Mobile App Developer" className={styles.heroImg} />
          </div>
          {/* PORTFOLIO text */}
          <div className={styles.heroMobileTitle}>
            <span className={styles.heroWordMobile}>PORT</span>
            <span className={styles.heroWordMobile}>FOLIO</span>
          </div>
          {/* Role badge */}
          <div className={styles.heroMobileBadge}>Full Stack &amp; Mobile Engineer</div>
          {/* Location */}
          <div className={styles.heroMobileLocation}>
            <span>🌐</span>
            <span>Available Worldwide • India (IST) • Remote</span>
          </div>
        </div>

        {/* Hero CTA & Availability */}
        <div className={styles.heroCta}>
          <a
            href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20project"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroWaBtn}
          >
            💬 Chat on WhatsApp
          </a>
          <Link href="/contact" className={styles.heroContactBtn}>
            📅 Book a Discovery Call
          </Link>
          <a
            href="/Sathish_G_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.heroResumeBtn}
          >
            Resume &rarr;
          </a>
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
                Full-Stack Mobile Engineer &amp; Product Architect collaborating with startups and growing businesses worldwide — Specializing in cross-platform Android &amp; iOS mobile apps, high-concurrency Node.js REST microservices, and modern React/Next.js platforms.
              </p>
              <p className={styles.introDesc}>
                With 2+ years of production engineering experience across fast-growing tech startups (Dhigrowth, Elanoxtech, Befhue), I design, build, and deploy end-to-end digital software. From architecting offline-first SQLite databases with background location synchronization to deploying Docker containers on AWS EC2 behind Nginx reverse proxies with SSL termination, I focus on clean code, responsive API architecture, pixel-perfect interfaces, and robust state management. Whether you are an international founder building a scalable MVP, a hiring team needing seamless timezone overlap (US/EU/APAC), an experienced <Link href="/app-developer-karur" className={styles.inlineLink}>mobile app developer in Karur</Link>, a <Link href="/flutter-developer-coimbatore" className={styles.inlineLink}>freelance Flutter developer in Coimbatore</Link>, or a partner for <Link href="/freelance-flutter-developer" className={styles.inlineLink}>freelance MVP development</Link>, I deliver production-ready software engineered for enterprise reliability and measurable business impact.
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

      {/* ─────────── TESTIMONIALS ─────────── */}
      <Testimonials />

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
              <Link key={svc.title} href={svc.href} className={styles.serviceCard}>
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
                Architected enterprise systems including MyShop Grocery POS with Drift offline SQLite synchronization, Premium Parts ERP, and Mayiliragu Academy learning portal.
              </p>
            </div>
          </AnimeReveal>
        </div>
      </section>

      {/* ─────────── WHY WORK WITH ME ─────────── */}
      <section className={styles.whySection}>
        <AnimeReveal direction="fade" duration={800}>
          <div className={styles.whyCard}>
            <h2 className={styles.whyTitle}>Why Founders &amp; Recruiters Choose Sathish G</h2>
            <div className={styles.whyGrid}>
              <div className={styles.whyItem}>
                <div className={styles.whyItemHeader}>
                  <span className={styles.whyIcon}>⚡</span>
                  <h3 className={styles.whyItemTitle}>Full-Stack Coverage</h3>
                </div>
                <p className={styles.whyItemDesc}>
                  Flutter mobile apps + Node.js backend + AWS cloud deployment — one dedicated engineer providing complete product coverage.
                </p>
              </div>

              <div className={styles.whyItem}>
                <div className={styles.whyItemHeader}>
                  <span className={styles.whyIcon}>🚀</span>
                  <h3 className={styles.whyItemTitle}>Real Production Proof</h3>
                </div>
                <p className={styles.whyItemDesc}>
                  Every listed app is shipped and active. Serving 1,000+ daily users across food delivery, LMS, and ERP enterprise platforms.
                </p>
              </div>

              <div className={styles.whyItem}>
                <div className={styles.whyItemHeader}>
                  <span className={styles.whyIcon}>🎯</span>
                  <h3 className={styles.whyItemTitle}>Sub-100ms API Latencies</h3>
                </div>
                <p className={styles.whyItemDesc}>
                  High-speed backend performance micro-tuned with Prisma ORM indexes, PostgreSQL queries, and Redis caching layers.
                </p>
              </div>

              <div className={styles.whyItem}>
                <div className={styles.whyItemHeader}>
                  <span className={styles.whyIcon}>📱</span>
                  <h3 className={styles.whyItemTitle}>End-to-End Delivery</h3>
                </div>
                <p className={styles.whyItemDesc}>
                  From initial Figma UI wireframes to Google Play and Apple App Store publishing with zero-crash stability.
                </p>
              </div>

              <div className={styles.whyItem}>
                <div className={styles.whyItemHeader}>
                  <span className={styles.whyIcon}>🤝</span>
                  <h3 className={styles.whyItemTitle}>Direct Communication</h3>
                </div>
                <p className={styles.whyItemDesc}>
                  Daily async updates, clear milestone tracking, and transparent progress without agency middleman delays.
                </p>
              </div>
            </div>
          </div>
        </AnimeReveal>
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
              <a href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20project" target="_blank" rel="noopener noreferrer" className={styles.contactPill}>
                💬 WhatsApp: +91 7868031207
              </a>
              <span className={styles.contactPill}>
                🌐 Remote Worldwide • IST (US/EU Overlap)
              </span>
            </div>

            <div style={{ marginTop: "2rem", display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20project"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.heroWaBtn}
              >
                💬 Instant WhatsApp
              </a>
              <Link href="/contact" className={styles.ctaBtn}>Book A Discovery Call / Email</Link>
              <a href="/Sathish_G_Resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.resumeCtaBtn}>Download Resume</a>
            </div>
          </div>
        </AnimeReveal>
      </section>
    </main>
  );
}
