import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

export const metadata = {
  title: "Flutter & Full Stack Services in Coimbatore | Sathish G",
  description: "End-to-end software development services available in Coimbatore and Tamil Nadu, spanning high-performance Flutter mobile applications, React layouts, scalable backend APIs, and AWS deployments.",
};

const services = [
  { title: "Flutter App Dev", desc: "Cross-platform mobile apps for Android & iOS with custom widgets, native integrations, and robust state management." },
  { title: "React Web Dev", desc: "Dynamic, fast, responsive web applications built with Next.js, modern CSS, and optimal client-side performance." },
  { title: "Full Stack Dev", desc: "End-to-end integration mapping frontend layouts to secure, scalable Node.js backends and Prisma ORM schemas." },
  { title: "MVP Development", desc: "Rapid prototyping and minimum viable product creation for early stage setups, converting Figma files to clean code." },
  { title: "SaaS Platforms", desc: "Multi-tenant platforms with user management, subscription billing (Stripe/Razorpay), and complex admin workspaces." },
  { title: "AWS & DevOps", desc: "Configuring containerized setups with Docker, Nginx reverse proxy, EC2 scaling, SSL setup, and CI/CD pipelines." },
  { title: "API Integration", desc: "Connecting WhatsApp Cloud API, payment processors, maps tracking systems, mail gateways, and automated webhook flow." },
  { title: "Maintenance", desc: "Legacy refactoring, database query optimizations, troubleshooting bottlenecks, and updating package dependencies." },
];

export default function Services() {
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
          <div className={`${styles.badge} fadeIn stagger-1`}>WHAT I DO</div>
          <AnimeReveal direction="fade" duration={800}>
            <h1 className={styles.title}>SERVICES</h1>
          </AnimeReveal>
          <div className={`${styles.titleLine} slideInLeft stagger-2`} />
        </div>
      </section>

      {/* ─────────── SERVICES LIST ─────────── */}
      <section className={styles.servicesSection}>
        <AnimeReveal stagger={60} direction="fade" delay={150}>
          <div className={styles.servicesGrid}>
            {services.map((svc) => (
              <div key={svc.title} className={styles.serviceCard}>
                <h3 className={styles.serviceTitle}>{svc.title}</h3>
                <p className={styles.serviceDesc}>{svc.desc}</p>
              </div>
            ))}
          </div>
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
