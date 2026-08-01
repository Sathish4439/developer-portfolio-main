import type { Metadata } from "next";
import Link from "next/link";
import styles from "../hire-flutter-developer/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Freelance Flutter Developer | Contract & MVP Specialist — Sathish G",
  description:
    "Hire Sathish G as your freelance Flutter developer. Fast MVP delivery, cross-platform iOS/Android development, offline sync, state management, and API integration.",
  alternates: {
    canonical: "https://www.sathishdev.in/freelance-flutter-developer",
  },
  openGraph: {
    title: "Freelance Flutter Developer | Sathish G",
    description:
      "Independent contract Flutter developer available for startups, agencies, and custom mobile applications.",
    url: "https://www.sathishdev.in/freelance-flutter-developer",
  },
};

export default function FreelanceFlutterDeveloper() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sathish G — Freelance Flutter Developer",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/freelance-flutter-developer",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "priceRange": "$$",
              "knowsAbout": ["Freelance Mobile Apps", "Flutter", "MVP Development", "Node.js", "Firebase"]
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
                  "name": "Freelance Flutter Developer",
                  "item": "https://www.sathishdev.in/freelance-flutter-developer"
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

        <div className={styles.badge}>FREELANCE &amp; CONTRACT</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>FREELANCE FLUTTER DEVELOPER</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Need a reliable freelance engineer to build your MVP, add features to an existing mobile app, or fix production bottlenecks? I work directly with founders and product teams.
        </p>

        <div className={styles.ctaGrid}>
          <Link href="/contact" className={styles.primaryBtn}>
            Hire Freelancer &rarr;
          </Link>
          <a
            href="/Sathish_G_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondaryBtn}
          >
            Download Resume
          </a>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Flexible Contract Engagement</h2>
          <div className={styles.contentBlock}>
            <p>
              As an independent freelance Flutter engineer, I offer milestone-based or hourly contract models. Whether you need 2 weeks of rapid prototyping or ongoing app maintenance, you get direct communication without agency overhead.
            </p>
          </div>

          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Rapid MVP Prototyping</h3>
              <p className={styles.cardDesc}>
                Turn your Figma or XD designs into functional Flutter mobile builds ready for investors and early beta testers.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Code Refactoring &amp; Fixes</h3>
              <p className={styles.cardDesc}>
                Inheriting legacy Flutter code? I fix memory leaks, state issues, package deprecations, and layout glitches.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What You Get</h2>
          <div className={styles.skillsList}>
            <span className={styles.skillBadge}>Clean Dart Code</span>
            <span className={styles.skillBadge}>Full Source Code Ownership</span>
            <span className={styles.skillBadge}>Daily Work Updates</span>
            <span className={styles.skillBadge}>App Store &amp; Play Store Upload</span>
            <span className={styles.skillBadge}>Post-Launch Support</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Discuss Your Project</h2>
          <p className={styles.subtitle}>
            Have a project scope ready or need an estimate? Send me a message and I&apos;ll get back within 24 hours.
          </p>
          <Link href="/contact" className={styles.primaryBtn}>
            Start a Conversation &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
