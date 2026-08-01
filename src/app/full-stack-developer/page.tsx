import type { Metadata } from "next";
import Link from "next/link";
import styles from "../hire-flutter-developer/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Full Stack Developer India | React, Node.js, Flutter & AWS — Sathish G",
  description:
    "Hire Sathish G, a full stack developer skilled in Flutter, React, Next.js, Node.js, PostgreSQL, Prisma, and AWS deployments. Building complete mobile and web ecosystems.",
  alternates: {
    canonical: "https://www.sathishdev.in/full-stack-developer",
  },
  openGraph: {
    title: "Full Stack Developer India | Sathish G",
    description:
      "End-to-end full stack web and mobile engineer specializing in Flutter, React, Node.js, PostgreSQL, and AWS.",
    url: "https://www.sathishdev.in/full-stack-developer",
  },
};

export default function FullStackDeveloper() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sathish G — Full Stack Developer India",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/full-stack-developer",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "priceRange": "$$",
              "knowsAbout": ["Full Stack Engineering", "React", "Next.js", "Node.js", "Flutter", "PostgreSQL", "AWS"]
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.sathishdev.in"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Full Stack Developer",
                  "item": "https://www.sathishdev.in/full-stack-developer"
                }
              ]
            }
          ])
        }}
      />

      <div className={styles.container}>
        <div className={styles.backLinkWrap}>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Home</span>
          </Link>
        </div>

        <div className={styles.badge}>END-TO-END ENGINEERING</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>FULL STACK DEVELOPER</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Engineering entire digital product ecosystems — bridging high-converting frontends (React / Next.js), cross-platform mobile apps (Flutter), robust backend APIs (Node.js / Express), and cloud servers (AWS / Docker).
        </p>

        <div className={styles.ctaGrid}>
          <Link href="/contact" className={styles.primaryBtn}>
            Hire Full Stack Engineer &rarr;
          </Link>
          <Link href="/work" className={styles.secondaryBtn}>
            View Case Studies
          </Link>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Unified Web, Mobile &amp; Cloud Systems</h2>
          <div className={styles.contentBlock}>
            <p>
              Instead of hiring separate developers for mobile, frontend web, backend API, and DevOps, I build unified software architectures. From single-tenant tools to complex multi-role platforms like Mayiliragu LMS or Judah Food Delivery.
            </p>
          </div>

          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Frontend &amp; Mobile UI</h3>
              <p className={styles.cardDesc}>
                React.js, Next.js, and Flutter — responsive web layouts, custom widgets, state management, and smooth 60 FPS user experiences.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Backend &amp; DevOps</h3>
              <p className={styles.cardDesc}>
                Node.js, Express, PostgreSQL, Prisma ORM, MongoDB, Docker containers, Nginx reverse proxying, and AWS EC2 hosting.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Complete Tech Stack</h2>
          <div className={styles.skillsList}>
            <span className={styles.skillBadge}>Flutter / Dart</span>
            <span className={styles.skillBadge}>React.js / Next.js</span>
            <span className={styles.skillBadge}>TypeScript</span>
            <span className={styles.skillBadge}>Node.js / Express</span>
            <span className={styles.skillBadge}>PostgreSQL / Prisma</span>
            <span className={styles.skillBadge}>MongoDB / Mongoose</span>
            <span className={styles.skillBadge}>AWS EC2 / S3</span>
            <span className={styles.skillBadge}>Docker Containerization</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Build Your Full Ecosystem</h2>
          <p className={styles.subtitle}>
            Ready to bring your full-stack product idea to reality? Reach out today.
          </p>
          <Link href="/contact" className={styles.primaryBtn}>
            Contact Sathish G &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
