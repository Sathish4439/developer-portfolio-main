import type { Metadata } from "next";
import Link from "next/link";
import styles from "../hire-flutter-developer/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Flutter Developer India | Cross-Platform Mobile Apps — Sathish G",
  description:
    "Top Flutter developer in India offering remote and full-time mobile app development. 2+ years experience building fast, beautiful iOS and Android apps with Dart, Node.js, and AWS.",
  alternates: {
    canonical: "https://www.sathishdev.in/flutter-developer-india",
  },
  openGraph: {
    title: "Flutter Developer India | Sathish G",
    description:
      "Expert cross-platform Flutter mobile engineer in India. Specializing in high-performance iOS and Android apps.",
    url: "https://www.sathishdev.in/flutter-developer-india",
  },
};

export default function FlutterDeveloperIndia() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sathish G — Flutter Developer India",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/flutter-developer-india",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "priceRange": "$$",
              "knowsAbout": ["Flutter", "Dart", "Cross-Platform Apps", "Node.js", "Firebase", "AWS"]
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
                  "name": "Flutter Developer India",
                  "item": "https://www.sathishdev.in/flutter-developer-india"
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

        <div className={styles.badge}>INDIA &amp; REMOTE WORLDWIDE</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>FLUTTER DEVELOPER IN INDIA</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Engineering native-quality iOS and Android applications from India for startups, founders, and growing product teams worldwide.
        </p>

        <div className={styles.ctaGrid}>
          <Link href="/contact" className={styles.primaryBtn}>
            Hire Me in India &rarr;
          </Link>
          <Link href="/work" className={styles.secondaryBtn}>
            View Selected Projects
          </Link>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Cross-Platform Excellence from India</h2>
          <div className={styles.contentBlock}>
            <p>
              As a Flutter developer based in India, I help businesses launch scalable cross-platform mobile apps with a single codebase — reducing time-to-market and development costs while delivering 60 FPS native performance.
            </p>
          </div>

          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Global Work Experience</h3>
              <p className={styles.cardDesc}>
                Experienced in remote communication, agile workflows, async updates, and working across international timezones.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Scalable Architecture</h3>
              <p className={styles.cardDesc}>
                Clean code structures ensuring your Flutter application can grow seamlessly from early MVP to enterprise scale.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Featured Expertise</h2>
          <div className={styles.skillsList}>
            <span className={styles.skillBadge}>Flutter SDK</span>
            <span className={styles.skillBadge}>Dart Language</span>
            <span className={styles.skillBadge}>Android &amp; iOS Deployments</span>
            <span className={styles.skillBadge}>RESTful APIs</span>
            <span className={styles.skillBadge}>Node.js Backends</span>
            <span className={styles.skillBadge}>Firebase Suite</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Let&apos;s Build Together</h2>
          <p className={styles.subtitle}>
            Ready to hire a reliable Flutter engineer in India for your next big mobile app launch?
          </p>
          <Link href="/contact" className={styles.primaryBtn}>
            Contact Sathish G &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
