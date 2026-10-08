import type { Metadata } from "next";
import Link from "next/link";
import styles from "../app-developer-karur/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";
import Testimonials from "../../components/Testimonials";

export const metadata: Metadata = {
  title: "Hire Flutter Developer in Coimbatore | Sathish G — 8+ Apps Shipped",
  description:
    "Looking to hire a senior Flutter developer in Coimbatore? Hire Sathish G for cross-platform iOS & Android mobile apps, clean BLoC architecture, and Node.js APIs.",
  alternates: {
    canonical: "https://www.sathishdev.in/hire-flutter-developer-coimbatore",
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Coimbatore",
    "geo.position": "11.0168;76.9558",
    "ICBM": "11.0168, 76.9558",
  },
  openGraph: {
    title: "Hire Flutter Developer in Coimbatore | Sathish G",
    description:
      "Hire dedicated Flutter engineer Sathish G in Coimbatore. 8+ production apps shipped across food delivery, ride-hailing, e-learning, and ERPs.",
    url: "https://www.sathishdev.in/hire-flutter-developer-coimbatore",
    type: "website",
    images: [
      {
        url: "https://www.sathishdev.in/sathish.png",
        width: 800,
        height: 800,
        alt: "Hire Sathish G — Flutter Developer Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Flutter Developer in Coimbatore | Sathish G",
    description:
      "Direct hire senior Flutter developer in Coimbatore for iOS and Android mobile engineering.",
    images: ["https://www.sathishdev.in/sathish.png"],
  },
};

const faqs = [
  {
    q: "How much does it cost to hire a Flutter developer in Coimbatore?",
    a: "Hiring directly with me saves 50–60% over traditional agencies. Fixed-price MVP mobile applications typically range between ₹35,000 and ₹65,000. Full-scale commercial ecosystems range from ₹70,000 to ₹1,40,000. Monthly dedicated retainers are also available with flexible sprint terms.",
  },
  {
    q: "What engagement models do you offer for hiring?",
    a: "I offer three flexible models: 1) Fixed-Price Milestone Contracts for well-defined MVPs and feature releases, 2) Dedicated Monthly Retainers for continuous product development and sprint execution, and 3) Hourly/Advisory Consulting for code audits and technical roadmaps.",
  },
  {
    q: "Do you develop for both Android and iOS from a single codebase?",
    a: "Yes. Google Flutter compiles to native ARM binary code for both Apple iOS and Android with 60fps performance, shared business logic, and platform-adaptive native UI components.",
  },
  {
    q: "What is your typical project delivery timeline?",
    a: "A focused MVP mobile app typically delivers in 3 to 5 weeks from architecture kickoff to test APK release. Complex multi-role platforms (customer, partner, and admin portal) take 8 to 12 weeks with weekly test builds.",
  },
];

export default function HireFlutterDeveloperCoimbatore() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Hire Flutter Developer Coimbatore — Sathish G",
              "image": "https://www.sathishdev.in/sathish.png",
              "url": "https://www.sathishdev.in/hire-flutter-developer-coimbatore",
              "telephone": "+91-7868031207",
              "priceRange": "$$",
              "description":
                "Directly hire Sathish G, senior Flutter app developer based in Coimbatore. 8+ shipped apps, cross-platform iOS & Android development, BLoC state management, and Node.js backend integration.",
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
                "Hire Flutter Developer Coimbatore",
                "Flutter iOS & Android Development",
                "Cross-Platform Mobile App Engineering",
                "BLoC & Provider State Management",
                "Node.js Backend & REST APIs",
                "Socket.io Real-Time Tracking",
                "Firebase & Cloud Push Notifications",
                "App Store & Google Play Publishing",
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
                  "name": "Hire Flutter Developer Coimbatore",
                  "item": "https://www.sathishdev.in/hire-flutter-developer-coimbatore",
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

        <div className={styles.badge}>HIRE FLUTTER ENGINEER &bull; COIMBATORE</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>
            HIRE A DEDICATED FLUTTER APP DEVELOPER IN COIMBATORE — SATHISH G
          </h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Looking to hire an experienced Flutter developer in Coimbatore? Partner directly with Sathish G — 8+ commercial Flutter apps shipped to Google Play and the App Store, enterprise BLoC state architecture, and full-stack backend capability.
        </p>

        {/* Hiring Highlights Banner */}
        <div className={styles.trustBox}>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🚀</span>
            <span><strong>8+ Production Apps:</strong> Real commercial deployments including live multi-app food delivery ecosystems, ride-hailing services, LMS platforms, and retail POS.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>🤝</span>
            <span><strong>Direct Senior Partnership:</strong> No middlemen or junior pass-offs. You collaborate one-on-one with the engineer architecting and writing your codebase.</span>
          </div>
          <div className={styles.trustItem}>
            <span className={styles.trustIcon}>📍</span>
            <span><strong>Local &amp; Remote Ready:</strong> Available for in-person sprint planning in Coimbatore or asynchronous global collaboration across US, EU, and APAC timezones.</span>
          </div>
        </div>

        <div className={styles.ctaGrid}>
          <a
            href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20am%20looking%20to%20hire%20a%20Flutter%20developer%20in%20Coimbatore%20for%20my%20project."
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
            Hire Sathish G &rarr;
          </Link>
        </div>

        {/* 1. Engagement Models */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Flexible Hiring &amp; Engagement Models</h2>
          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Fixed-Price Milestone Project</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>Clear Scope &amp; Budget</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Ideal for startups and companies with defined wireframes or feature specs. We establish clear milestone deliverables and payment schedules. Shipped with complete documentation.
              </p>
            </div>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>Dedicated Monthly Retainer</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>Continuous Engineering</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Ideal for established products needing an embedded senior engineer for continuous sprint execution, Play Store updates, backend maintenance, and new feature rollouts.
              </p>
            </div>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>App Audit &amp; Refactoring</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>Speed &amp; Stability Fix</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Have an existing Flutter app with stuttering jank, state management bugs, or memory leaks? I audit your codebase and refactor it into clean BLoC architecture.
              </p>
            </div>
            <div className={styles.card} style={{ borderTop: "3px solid #a3e635" }}>
              <div style={{ color: "#a3e635", fontSize: "0.85rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.05em" }}>End-to-End Product Lead</div>
              <h3 className={styles.cardTitle} style={{ marginTop: "0.4rem" }}>App + Backend + Cloud</h3>
              <p className={styles.cardDesc} style={{ marginTop: "0.5rem" }}>
                Don&apos;t hire 3 different contractors. I handle the Flutter client app, the Node.js API, PostgreSQL database, and AWS server deployment as a single cohesive unit.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Flutter Apps Shipped (Proof) */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Real Production Flutter Apps Shipped</h2>
          <div className={styles.contentBlock}>
            <p>
              Tested in the wild with real paying users across e-commerce, mobility, education, and retail:
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Judah Food Delivery</h3>
              <p className={styles.cardDesc}>
                Multi-app ecosystem (Customer, Partner, Rider) featuring live GPS tracking with Socket.io, automated dispatch, Razorpay payments, and push notifications.
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
                1,000+ active student e-learning app with interactive video players, offline test caching, secure DRM content protection, and Razorpay subscription billing.
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
                Cross-platform mobile and desktop retail cashier system with Drift SQLite offline database, instant barcode lookup, and ESC/POS thermal printing.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/myshop-pos" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Case Study &rarr;
                </Link>
              </div>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>akirva &amp; Velocy Mobility Apps</h3>
              <p className={styles.cardDesc}>
                Real-time ride-hailing and rider fleet apps featuring live Google Maps routing, driver proximity matching, fare estimates, and emergency SOS alerts.
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <Link href="/work/akirva-rider" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600" }}>
                  Case Study &rarr;
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Client Testimonials */}
        <Testimonials />

        {/* 4. FAQs */}
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

        {/* 5. Consultation CTA */}
        <section className={styles.section}>
          <div className={styles.consultationCard}>
            <h2 className={styles.consultationTitle}>Hire an Experienced Flutter Developer Today</h2>
            <p className={styles.consultationDesc}>
              Let&apos;s build or scale your mobile application. Connect directly with Sathish G on WhatsApp or book an initial discovery call.
            </p>
            <div className={styles.ctaGrid} style={{ justifyContent: "center", marginBottom: 0 }}>
              <a
                href="https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20hire%20you%20as%20a%20Flutter%20developer%20for%20my%20project."
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
                Submit Project Details &rarr;
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
