import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Flutter App Development Services in Coimbatore | Sathish G",
  description:
    "Professional Flutter app development services in Coimbatore, Tamil Nadu. Building fast, native cross-platform iOS & Android mobile apps for startups and enterprises.",
  alternates: {
    canonical: "https://www.sathishdev.in/services/flutter-development",
  },
  openGraph: {
    title: "Flutter App Development Services | Sathish G",
    description:
      "End-to-end Flutter development — custom UI, state management, REST API integration, and app store deployment.",
    url: "https://www.sathishdev.in/services/flutter-development",
  },
};

export default function FlutterDevelopmentService() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Flutter App Development",
              "serviceType": "Cross-Platform Mobile Application Development",
              "description": "High-performance iOS and Android app development using Flutter SDK, Dart, clean state management architectures, and backend API integrations.",
              "provider": {
                "@type": "Person",
                "name": "Sathish G",
                "url": "https://www.sathishdev.in"
              },
              "areaServed": [
                { "@type": "AdministrativeArea", "name": "Coimbatore" },
                { "@type": "AdministrativeArea", "name": "Tamil Nadu" },
                { "@type": "Country", "name": "India" }
              ]
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
                  "name": "Services",
                  "item": "https://www.sathishdev.in/services"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Flutter Development",
                  "item": "https://www.sathishdev.in/services/flutter-development"
                }
              ]
            }
          ])
        }}
      />

      <div className={styles.container}>
        <div className={styles.backLinkWrap}>
          <Link href="/services" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Services</span>
          </Link>
        </div>

        <div className={styles.badge}>SERVICE DETAILS</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>FLUTTER APP DEVELOPMENT</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Build cross-platform mobile apps for iOS and Android using a single Flutter codebase — without compromising on 60 FPS performance, native device features, or beautiful UI design.
        </p>

        <div className={styles.ctaGrid}>
          <Link href="/contact" className={styles.primaryBtn}>
            Request a Free Quote &rarr;
          </Link>
          <Link href="/work" className={styles.secondaryBtn}>
            View Flutter Portfolio
          </Link>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Build with Flutter</h2>
          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Consumer &amp; Marketplace Apps</h3>
              <p className={styles.cardDesc}>
                Food delivery, re-commerce platforms, pet service portals, and ride-hailing networks with real-time location tracking and payment gateways.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Enterprise &amp; SaaS Portals</h3>
              <p className={styles.cardDesc}>
                ERP management, offline SQLite field apps, attendance tracking, and multi-role admin interfaces with robust role access control.
              </p>
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>My Development Process</h2>
          <div className={styles.contentBlock}>
            <p><strong>1. Architecture &amp; Planning:</strong> Defining state management (GetX / Provider), data flow, and API endpoints.</p>
            <p><strong>2. Pixel-Perfect UI:</strong> Translating Figma prototypes into responsive, pixel-perfect Flutter widgets.</p>
            <p><strong>3. Backend &amp; Service Integration:</strong> Connecting Firebase, Node.js REST APIs, payment gateways, and push notifications.</p>
            <p><strong>4. Testing &amp; Store Launch:</strong> Rigorous device testing and publishing directly to Google Play Store &amp; Apple App Store.</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>Why choose Flutter over native iOS/Android?</div>
            <div className={styles.faqAnswer}>
              Flutter allows you to ship to both iOS and Android simultaneously from a single codebase, reducing total development cost and time-to-market by up to 50%.
            </div>
          </div>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>Can Flutter handle offline capabilities?</div>
            <div className={styles.faqAnswer}>
              Yes! I integrate local SQLite databases and Hive key-value stores to enable offline data synchronization when network connectivity is lost.
            </div>
          </div>
          <div className={styles.faqItem}>
            <div className={styles.faqQuestion}>Do you assist with publishing to App Stores?</div>
            <div className={styles.faqAnswer}>
              Absolutely. I manage the entire release pipeline including Google Play Store console setups, Apple Developer Account configurations, app signing, and compliance.
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Start Your Mobile App Project</h2>
          <p className={styles.subtitle}>
            Ready to bring your mobile app concept to life with Flutter? Reach out today for a consultation.
          </p>
          <Link href="/contact" className={styles.primaryBtn}>
            Get in Touch &rarr;
          </Link>
        </section>
      </div>
    </main>
  );
}
