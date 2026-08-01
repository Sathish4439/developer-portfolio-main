import type { Metadata } from "next";
import Link from "next/link";
import styles from "../hire-flutter-developer/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Flutter Developer in Coimbatore | Sathish G — Local & Remote",
  description:
    "Looking for a top Flutter developer in Coimbatore, Tamil Nadu? Sathish G builds custom mobile apps, e-commerce platforms, and full-stack solutions for Coimbatore businesses and global clients.",
  alternates: {
    canonical: "https://www.sathishdev.in/flutter-developer-coimbatore",
  },
  openGraph: {
    title: "Flutter Developer in Coimbatore | Sathish G",
    description:
      "Leading Flutter developer based in Coimbatore, Tamil Nadu. Mobile app development, SaaS, and Node.js APIs.",
    url: "https://www.sathishdev.in/flutter-developer-coimbatore",
  },
};

export default function FlutterDeveloperCoimbatore() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sathish G — Flutter Developer Coimbatore",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/flutter-developer-coimbatore",
              "telephone": "+91-7868031207",
              "priceRange": "$$",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 11.0168,
                "longitude": 76.9558
              }
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
                  "name": "Flutter Developer Coimbatore",
                  "item": "https://www.sathishdev.in/flutter-developer-coimbatore"
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

        <div className={styles.badge}>COIMBATORE, TAMIL NADU</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>FLUTTER DEVELOPER IN COIMBATORE</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Based right here in Coimbatore, Tamil Nadu. Providing top-tier Flutter mobile app development and full-stack software engineering for local startups, businesses, and global clients.
        </p>

        <div className={styles.ctaGrid}>
          <Link href="/contact" className={styles.primaryBtn}>
            Hire Local Developer &rarr;
          </Link>
          <Link href="/services" className={styles.secondaryBtn}>
            Explore Services
          </Link>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Local Expertise with Global Standards</h2>
          <div className={styles.contentBlock}>
            <p>
              As a Coimbatore-based software engineer with hands-on experience at regional companies like Dhigrowth and Elanoxtech, I help Coimbatore startups and enterprises digitize operations and launch mobile platforms quickly.
            </p>
          </div>

          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>In-Person &amp; Remote Collaboration</h3>
              <p className={styles.cardDesc}>
                Available for local project discussions, hybrid setups, and full remote engagements across Tamil Nadu.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>End-to-End App Delivery</h3>
              <p className={styles.cardDesc}>
                From Figma UI conversion to App Store and Google Play publication, plus backend server management.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Services Offered in Coimbatore</h2>
          <div className={styles.skillsList}>
            <span className={styles.skillBadge}>Flutter Cross-Platform Apps</span>
            <span className={styles.skillBadge}>Android &amp; iOS Apps</span>
            <span className={styles.skillBadge}>Node.js Backend &amp; APIs</span>
            <span className={styles.skillBadge}>React &amp; Next.js Web Dev</span>
            <span className={styles.skillBadge}>SaaS &amp; ERP Platforms</span>
            <span className={styles.skillBadge}>AWS &amp; Cloud Deployment</span>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Get a Free Quote in Coimbatore</h2>
          <p className={styles.subtitle}>
            Have a project idea or need a technical consultation? Reach out directly.
          </p>
          <Link href="/contact" className={styles.primaryBtn}>
            Contact Sathish G &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
