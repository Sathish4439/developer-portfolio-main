import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Hire Flutter Developer India | Sathish G — Mobile & Full Stack",
  description:
    "Hire Sathish G, an expert Flutter developer in India with 2+ years experience building production iOS and Android apps, scalable Node.js backends, and full-stack solutions.",
  alternates: {
    canonical: "https://www.sathishdev.in/hire-flutter-developer",
  },
  openGraph: {
    title: "Hire Flutter Developer India | Sathish G",
    description:
      "Expert cross-platform mobile app development in Flutter & Dart. Available for full-time, contract, and remote projects.",
    url: "https://www.sathishdev.in/hire-flutter-developer",
  },
};

export default function HireFlutterDeveloper() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sathish G — Hire Flutter Developer India",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/hire-flutter-developer",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "priceRange": "$$",
              "knowsAbout": ["Flutter", "Dart", "Node.js", "Firebase", "State Management", "REST APIs"]
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
                  "name": "Hire Flutter Developer",
                  "item": "https://www.sathishdev.in/hire-flutter-developer"
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

        <div className={styles.badge}>AVAILABLE FOR HIRE</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>HIRE FLUTTER DEVELOPER IN INDIA</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Looking for a dedicated Flutter developer to build or scale your cross-platform iOS and Android applications? I build fast, production-ready apps integrated with Node.js backends, Firebase, and cloud services.
        </p>

        <div className={styles.ctaGrid}>
          <Link href="/contact" className={styles.primaryBtn}>
            Hire Sathish G &rarr;
          </Link>
          <a
            href="/Sathish_G_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            Download Resume PDF
          </a>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Hire Me For Your Flutter Project?</h2>
          <div className={styles.contentBlock}>
            <p>
              With over 2+ years of professional software engineering experience, I specialize in architecting high-performance mobile apps using Flutter and Dart. From complex state management (GetX, Provider) to offline-first SQLite synchronization and real-time Socket.io channels, I deliver robust solutions tailored for startups and growing enterprises.
            </p>
          </div>

          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Production Experience</h3>
              <p className={styles.cardDesc}>
                Built and published 15+ mobile & web apps including food delivery systems, veterinary portals, and re-commerce platforms.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Full-Stack Capabilities</h3>
              <p className={styles.cardDesc}>
                I don&apos;t just build the frontend — I engineer backend Node.js APIs, PostgreSQL schemas, and AWS deployments for complete solutions.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Expertise</h2>
          <div className={styles.skillsList}>
            <span className={styles.skillBadge}>Flutter &amp; Dart</span>
            <span className={styles.skillBadge}>Clean Architecture</span>
            <span className={styles.skillBadge}>GetX / Provider</span>
            <span className={styles.skillBadge}>REST &amp; WebSockets</span>
            <span className={styles.skillBadge}>Firebase &amp; Firestore</span>
            <span className={styles.skillBadge}>SQLite &amp; Offline Sync</span>
            <span className={styles.skillBadge}>Google Maps API</span>
            <span className={styles.skillBadge}>Payment Gateway Integration</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ready to Start?</h2>
          <p className={styles.subtitle}>
            Whether you need a full-time Flutter engineer, a contract developer for an MVP, or assistance scaling your current mobile team — let&apos;s discuss your project goals.
          </p>
          <Link href="/contact" className={styles.primaryBtn}>
            Get in Touch Today &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
