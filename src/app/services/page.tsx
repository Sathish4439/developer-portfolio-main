import Link from "next/link";
import styles from "./page.module.css";

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
    <main className={styles.wrapper}>
      {/* ─────────── HERO ─────────── */}
      <section className={styles.heroSection}>
        <div className={styles.backLinkWrap}>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Home</span>
          </Link>
        </div>

        <div className={styles.titleArea}>
          <div className={styles.badge}>WHAT I DO</div>
          <h1 className={styles.title}>SERVICES</h1>
          <div className={styles.titleLine} />
        </div>
      </section>

      {/* ─────────── SERVICES LIST ─────────── */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesGrid}>
          {services.map((svc) => (
            <div key={svc.title} className={styles.serviceCard}>
              <h3 className={styles.serviceTitle}>{svc.title}</h3>
              <p className={styles.serviceDesc}>{svc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─────────── RETURN FOOTER ─────────── */}
      <section className={styles.returnFooter}>
        <Link href="/" className={styles.returnBtn}>
          <span className={styles.backIcon}>&larr;</span>
          <span className={styles.returnText}>Return to Home</span>
        </Link>
      </section>
    </main>
  );
}
