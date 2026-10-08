import type { Metadata } from "next";
import Link from "next/link";
import styles from "../app-developer-karur/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";
import Testimonials from "../../components/Testimonials";

export const metadata: Metadata = {
  title: "Flutter App Development in Coimbatore | Sathish G — iOS & Android",
  description:
    "Leading Flutter app development services in Coimbatore by Sathish G. High-performance cross-platform iOS & Android mobile apps, custom UI, and Node.js APIs.",
  alternates: {
    canonical: "https://www.sathishdev.in/flutter-app-development-coimbatore",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore",
    "geo.position": "11.0168;76.9558",
    "ICBM": "11.0168, 76.9558",
  },
  openGraph: {
    title: "Flutter App Development in Coimbatore | Sathish G",
    description:
      "Cross-platform iOS and Android mobile app development in Coimbatore. Production-proven Flutter engineering by Sathish G.",
    url: "https://www.sathishdev.in/flutter-app-development-coimbatore",
    type: "website",
    images: [
      {
        url: "https://www.sathishdev.in/sathish.png",
        width: 800,
        height: 800,
        alt: "Sathish G — Flutter App Development in Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flutter App Development in Coimbatore | Sathish G",
    description:
      "High-performance cross-platform Flutter app engineering in Coimbatore for startups and businesses.",
    images: ["https://www.sathishdev.in/sathish.png"],
  },
};

const faqs = [
  {
    q: "Why choose Flutter for mobile app development in Coimbatore?",
    a: "Flutter allows you to build high-performance mobile apps for both iOS and Android from a single codebase. This cuts your development budget and timeline nearly in half compared to building separate native apps, while retaining 60fps native performance, consistent branding, and easier long-term maintenance.",
  },
  {
    q: "How long does it take to develop a Flutter app from scratch?",
    a: "A focused commercial MVP typically ships within 4 to 6 weeks. Complex multi-user platforms (such as on-demand delivery apps with real-time tracking or e-learning platforms) typically take 8 to 12 weeks including design, backend integration, testing, and store submission.",
  },
  {
    q: "Can Flutter apps operate offline without internet?",
    a: "Yes. I architect offline-first mobile apps using embedded local databases (SQLite, Drift, Hive). Users can continue filling forms, billing orders, or viewing cached lessons without network connectivity. Data synchronizes automatically once the internet reconnects.",
  },
  {
    q: "Do you handle the entire Google Play and Apple App Store submission process?",
    a: "Yes. I manage the complete store deployment process: app bundle signing, compliance review checks, privacy policy declarations, screenshot generation, and post-launch update releases.",
  },
];

export default function FlutterAppDevelopmentCoimbatore() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Sathish G — Flutter App Development Coimbatore",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/flutter-app-development-coimbatore",
              "telephone": "+91-7868031207",
              "priceRange": "$$",
              "description":
                "Professional Flutter mobile application development services in Coimbatore, Tamil Nadu. Engineering high-performance iOS and Android applications, custom UI animations, and Node.js microservices.",
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Coimbatore",
                  "sameAs": "https://en.wikipedia.org/wiki/Coimbatore",
                },
                {
                  "@type": "AdministrativeArea",
                  "name": "Tamil Nadu",
                  "sameAs": "https://en.wikipedia.org/wiki/Tamil_Nadu",
                },
              ],
              "knowsAbout": [
                "Flutter App Development Coimbatore",
                "iOS and Android Mobile App Engineering",
                "BLoC State Management Architecture",
                "Offline-First SQLite Synchronization",
                "Real-Time Socket.io GPS Tracking",
                "Node.js Backend & REST APIs",
                "Payment Gateway Integration",
                "Google Play & Apple App Store Publishing",
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN",
              },
              "sameAs": [
                "https://github.com/Sathish4439",
                "https://www.linkedin.com/in/sathishgobi/",
                "https://play.google.com/store/apps/dev?id=6517030172709793171&hl=en_IN",
              ],
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a,
                },
              })),
            },
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.sathishdev.in",
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Flutter App Development Coimbatore",
                  "item": "https://www.sathishdev.in/flutter-app-development-coimbatore",
                },
              ],
            },
          ]),
        }}
      />

      <div className={styles.container}>
        <div className={styles.backLinkWrap}>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Home</span>
          </Link>
        </div>

        <div className={styles.badge}>FLUTTER APP SERVICES &bull; COIMBATORE</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>
            FLUTTER APP DEVELOPMENT IN COIMBATORE — IOS &amp; ANDROID MOBILE ENGINEERING
          </h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Engineering beautiful, high-performance Flutter mobile applications for Coimbatore startups, manufacturers, and enterprises. Clean BLoC architecture, offline-first reliability, and seamless cloud integrations with direct engineer accountability.
        </p>

        {/* Advantage Banner */}
        <div className={styles.trustBox}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>⚡</span>
            <span><strong>Native 60fps Performance:</strong> Fluid animations and compiled native code that feels completely natural on both iOS and Android.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📱</span>
            <span><strong>Unified Single Codebase:</strong> Ship to both Apple App Store and Google Play simultaneously, slashing maintenance costs by half.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📍</span>
            <span><strong>Coimbatore On-Site Support:</strong> Direct face-to-face requirement discussions and milestone demos in Coimbatore, Tirupur, and Erode.</span>
          </div>
        </div>

        <div className={styles.ctaGrid}>
          <a
            href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20am%20interested%20in%20Flutter%20app%20development%20services%20in%20Coimbatore."
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappHeroBtn}
          >
            <span>💬</span> WhatsApp: +91 78680 31207
          </a>
          <a href="tel:+917868031207" className={styles.callHeroBtn}>
            <span>📞</span> Call Direct
          </a>
          <Link href="/contact" className={styles.secondaryBtn}>
            Get Free App Estimate &rarr;
          </Link>
        </div>

        {/* 1. Full Spectrum Flutter Services */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Comprehensive Flutter Development Services</h2>
          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Custom Mobile App Engineering</h3>
              <p className={styles.cardDesc}>
                End-to-end design and coding of custom iOS and Android apps with rich animations, responsive layouts, dark/light themes, and native system integrations.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>BLoC &amp; Provider Clean Architecture</h3>
              <p className={styles.cardDesc}>
                Maintainable state management isolating presentation from business logic, ensuring your app can scale to hundreds of thousands of users without regressions.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Offline-First Local Storage</h3>
              <p className={styles.cardDesc}>
                Robust embedded databases (SQLite/Drift) providing flawless operation during factory floor or travel network dropouts, with automated background synchronization.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>App Store &amp; Play Store Deployment</h3>
              <p className={styles.cardDesc}>
                Complete publishing management including certificate signing, privacy manifests, Google Play compliance checks, App Store Review guidelines, and continuous updates.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Real Production Projects */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Real Apps Shipped in Coimbatore &amp; Beyond</h2>
          <div className={styles.contentBlock}>
            <p>
              I don&apos;t just build mock prototypes. Here are live, battle-tested Flutter applications operating with real customers:
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Judah Food Delivery</h3>
              <p className={styles.cardDesc}>
                A complete 3-app ecosystem with real-time Socket.io GPS driver tracking, automated dispatching, Razorpay payments, and live kitchen order alerts.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/judah-food-delivery" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Mayiliragu Academy LMS</h3>
              <p className={styles.cardDesc}>
                E-learning platform supporting 1,000+ active students with interactive video playback, offline quiz caching, and automated course completion certificates.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/mayiliragu-academy" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>MyShop POS &amp; Inventory</h3>
              <p className={styles.cardDesc}>
                Cross-platform retail billing cashier tool with local SQLite database, barcode scanning, thermal ESC/POS printing, and real-time cloud analytics.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/myshop-pos" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Premium Parts ERP Mobile</h3>
              <p className={styles.cardDesc}>
                Industrial mobile app featuring geo-fenced employee clock-in, inventory scanning, distributor sales order generation, and commission tracking.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/premium-parts" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Case Study &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Technology Badges */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Flutter Engineering Stack</h2>
          <div className={styles.skillsList} style={{ marginTop: "1rem" }}>
            <span className={styles.skillBadge}>Flutter 3.x &amp; Dart</span>
            <span className={styles.skillBadge}>BLoC State Architecture</span>
            <span className={styles.skillBadge}>SQLite &amp; Drift Offline DB</span>
            <span className={styles.skillBadge}>Google Maps SDK &amp; GPS</span>
            <span className={styles.skillBadge}>Firebase Cloud Messaging</span>
            <span className={styles.skillBadge}>Socket.io WebSockets</span>
            <span className={styles.skillBadge}>Node.js REST Microservices</span>
            <span className={styles.skillBadge}>Razorpay &amp; Stripe Gateways</span>
            <span className={styles.skillBadge}>CI/CD Fastlane Pipelines</span>
          </div>
        </section>

        {/* 4. Client Testimonials */}
        <Testimonials />

        {/* 5. FAQs */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginTop: "1.5rem" }}>
            {faqs.map((f, i) => (
              <div key={i} className={styles.card} style={{ padding: "1.5rem" }}>
                <h3 className={styles.cardTitle} style={{ fontSize: "1.1rem", color: "#a3e635", marginBottom: "0.5rem" }}>
                  {f.q}
                </h3>
                <p className={styles.cardDesc} style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
                  {f.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* 6. Consultation CTA */}
        <section className={styles.section}>
          <div className={styles.consultationCard}>
            <h2 className={styles.consultationTitle}>Ready to Build Your Flutter App in Coimbatore?</h2>
            <p className={styles.consultationDesc}>
              Let&apos;s turn your mobile app concept into a fast, revenue-generating reality. Reach out today for an architectural roadmap and transparent cost estimate.
            </p>
            <div className={styles.ctaGrid} style={{ justifyContent: "center", marginBottom: 0 }}>
              <a
                href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20Flutter%20app%20development%20project%20in%20Coimbatore."
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappHeroBtn}
              >
                <span>💬</span> WhatsApp: +91 78680 31207
              </a>
              <a href="tel:+917868031207" className={styles.callHeroBtn}>
                <span>📞</span> Call +91 78680 31207
              </a>
              <Link href="/contact" className={styles.secondaryBtn}>
                Get Free Consultation &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
