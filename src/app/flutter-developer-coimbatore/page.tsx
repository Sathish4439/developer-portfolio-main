import type { Metadata } from "next";
import Link from "next/link";
import styles from "../hire-flutter-developer/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";
import Testimonials from "../../components/Testimonials";

export const metadata: Metadata = {
  title: "Flutter Developer in Coimbatore | Sathish G — Local & Remote",
  description:
    "Hire Sathish G, premier mobile app developer in Coimbatore, Tamil Nadu. Specializing in cross-platform Flutter iOS & Android apps, Node.js REST microservices, and full-stack SaaS solutions. Available to hire local Flutter developer in Coimbatore.",
  alternates: {
    canonical: "https://www.sathishdev.in/flutter-developer-coimbatore",
  },
  openGraph: {
    title: "Flutter Developer in Coimbatore | Sathish G",
    description:
      "Leading mobile app developer based in Coimbatore, Tamil Nadu. Cross-platform Flutter apps, Node.js backends, and cloud infrastructure.",
    url: "https://www.sathishdev.in/flutter-developer-coimbatore",
  },
};

const faqs = [
  {
    q: "Why hire a local Flutter developer in Coimbatore instead of a large agency?",
    a: "Hiring a local freelance Flutter developer in Coimbatore gives you direct access to the engineer building your code. You eliminate middleman account managers, reduce project overhead by up to 60%, enjoy daily progress updates, and benefit from flexible face-to-face or hybrid communication across Tamil Nadu.",
  },
  {
    q: "What mobile app development services do you offer in Coimbatore?",
    a: "I provide end-to-end mobile engineering: cross-platform Flutter iOS & Android app development, custom BLoC/Provider state management, offline-first SQLite database synchronization, real-time Socket.io & Firebase integrations, payment gateway setups (Razorpay, Stripe), and backend Node.js API engineering with AWS deployment.",
  },
  {
    q: "Can we schedule in-person meetings in Coimbatore?",
    a: "Yes! Being based in Coimbatore, Tamil Nadu, I am available for face-to-face project discovery sessions, sprint planning meetings, and hybrid work setups with local startups, manufacturing businesses, and tech firms across Coimbatore, Tirupur, Karur, and Chennai.",
  },
  {
    q: "How long does it take to build a cross-platform Flutter app?",
    a: "A streamlined MVP (Minimum Viable Product) mobile application typically takes 4 to 8 weeks from initial design wireframes to Google Play and Apple App Store release. Complex enterprise applications with custom microservice backends generally range from 8 to 14 weeks.",
  },
  {
    q: "Do you handle App Store and Google Play publishing?",
    a: "Absolutely. I handle full deployment pipelines including developer account configuration, app compliance, push notification certificates, background location permissions, store asset optimization, and post-launch maintenance.",
  },
];

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
              "@type": "FAQPage",
              "mainEntity": faqs.map((f) => ({
                "@type": "Question",
                "name": f.q,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": f.a,
                },
              }))
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
          Based right here in Coimbatore, Tamil Nadu. Providing top-tier Flutter mobile app development, custom iOS &amp; Android solutions, and full-stack software engineering for local startups, industrial enterprises, and global founders looking to hire a dedicated mobile app developer in Coimbatore.
        </p>

        <div className={styles.ctaGrid}>
          <Link href="/contact" className={styles.primaryBtn}>
            Hire Local Developer &rarr;
          </Link>
          <Link href="/services" className={styles.secondaryBtn}>
            Explore Services
          </Link>
        </div>

        {/* 1. Why Work with a Local Coimbatore Developer? */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Work with a Local Coimbatore Developer?</h2>
          <div className={styles.contentBlock}>
            <p>
              Coimbatore is rapidly growing into one of South India&apos;s most dynamic technology hubs. Whether you are an established business digitizing legacy paper workflows or an ambitious founder building the next big mobile startup, having a local <strong>mobile app developer in Coimbatore</strong> gives you a decisive competitive edge.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Working with me means direct access to an experienced full-stack Flutter engineer who understands local commercial ecosystems across Tamil Nadu. Unlike traditional development agencies that charge heavy retainer overheads and delegate coding to junior interns, I personally architect, write, test, and deploy every line of code for your application.
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "2rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Direct Communication &amp; Accountability</h3>
              <p className={styles.cardDesc}>
                No middlemen, account managers, or delayed ticket responses. You get direct access via WhatsApp, Slack, phone calls, or face-to-face meetings in Coimbatore.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Cost-Effective High Performance</h3>
              <p className={styles.cardDesc}>
                Save 50-60% compared to metro agency pricing while getting enterprise-grade Flutter architecture, clean BLoC state management, and sub-100ms API backends.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Timezone Alignment &amp; Speed</h3>
              <p className={styles.cardDesc}>
                Full IST operational hours for local teams, plus seamless overlapping hours for remote clients across North America, Europe, and Southeast Asia.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Full-Stack Mobile + Backend</h3>
              <p className={styles.cardDesc}>
                You don&apos;t need to hire separate mobile, backend, and DevOps engineers. I handle your Flutter app, Node.js REST API, PostgreSQL database, and AWS servers as a single cohesive stack.
              </p>
            </div>
          </div>
        </section>

        {/* 2. Flutter & Full Stack Services in Coimbatore */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Flutter &amp; Full Stack Services in Coimbatore</h2>
          <p className={styles.subtitle} style={{ marginBottom: "1.5rem" }}>
            Comprehensive mobile and web engineering tailored for startups, retail distributors, healthcare providers, and SaaS platforms.
          </p>

          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Cross-Platform Flutter App Dev</h3>
              <p className={styles.cardDesc}>
                Build single-codebase Android and iOS applications with 60fps native performance, custom UI animations, offline SQLite storage, and deep device hardware integration.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Node.js &amp; Microservices Backend</h3>
              <p className={styles.cardDesc}>
                Architect scalable RESTful APIs, real-time WebSocket communication, Prisma ORM database models, and secure JWT authentication systems designed for enterprise load.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>React &amp; Next.js Web Dashboards</h3>
              <p className={styles.cardDesc}>
                Engineered web control panels for admins, vendors, and dispatchers featuring real-time charts, role-based permissions, and SEO-optimized portal pages.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Cloud Infra &amp; DevOps</h3>
              <p className={styles.cardDesc}>
                Deploying production apps on AWS EC2 behind Nginx reverse proxies with SSL termination, Docker container orchestration, and automated CI/CD deployment pipelines.
              </p>
            </div>
          </div>

          <div className={styles.skillsList} style={{ marginTop: "2rem" }}>
            <span className={styles.skillBadge}>Flutter iOS &amp; Android</span>
            <span className={styles.skillBadge}>Dart Language</span>
            <span className={styles.skillBadge}>Node.js &amp; Express</span>
            <span className={styles.skillBadge}>Prisma &amp; PostgreSQL</span>
            <span className={styles.skillBadge}>Socket.io Real-Time</span>
            <span className={styles.skillBadge}>AWS EC2 &amp; Docker</span>
            <span className={styles.skillBadge}>Google Maps API</span>
            <span className={styles.skillBadge}>Firebase Services</span>
          </div>
        </section>

        {/* 3. Projects Built for Tamil Nadu Businesses */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects Built for Tamil Nadu Businesses</h2>
          <div className={styles.contentBlock}>
            <p>
              Having worked with regional engineering teams at Dhigrowth, Elanoxtech, and independent clients across Coimbatore, Chennai, and Karur, I bring hands-on experience solving real business challenges:
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Judah Food Delivery Platform</h3>
              <p className={styles.cardDesc}>
                A complete 3-app ecosystem (Customer, Restaurant Partner, Delivery Rider) built with Flutter, Socket.io real-time GPS tracking, and automated driver dispatching.
              </p>
              <Link href="/work/judah-food-delivery" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600", marginTop: "0.75rem", display: "inline-block" }}>
                Read Case Study &rarr;
              </Link>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Mayiliragu Academy LMS</h3>
              <p className={styles.cardDesc}>
                An enterprise e-learning platform supporting 1,000+ active concurrent students with Flutter mobile client, React admin panel, and high-concurrency Node.js database API.
              </p>
              <Link href="/work/mayiliragu-academy" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600", marginTop: "0.75rem", display: "inline-block" }}>
                Read Case Study &rarr;
              </Link>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Premium Parts ERP System</h3>
              <p className={styles.cardDesc}>
                Custom offline-first mobile ERP for automotive distributors featuring geo-fenced employee attendance, automated payroll, and multi-tier retail commissions.
              </p>
              <Link href="/work/premium-parts" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600", marginTop: "0.75rem", display: "inline-block" }}>
                Read Case Study &rarr;
              </Link>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Nest Pilot Facility Management</h3>
              <p className={styles.cardDesc}>
                Multi-tenant hostel and facility management SaaS application with automated rent tracking, tenant onboarding, and offline-first SQLite synchronization.
              </p>
              <Link href="/work" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600", marginTop: "0.75rem", display: "inline-block" }}>
                View All Work &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* 4. In-Person & Remote Collaboration Options */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>In-Person &amp; Remote Collaboration Options</h2>
          <div className={styles.contentBlock}>
            <p>
              Flexibility is essential when choosing a <strong>freelance Flutter developer in Tamil Nadu</strong>. I offer adaptable engagement models designed to fit your team&apos;s specific workflow:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", marginTop: "1rem", lineHeight: "1.8", color: "#a1a1aa" }}>
              <li><strong style={{ color: "#fff" }}>In-Person Meetings in Coimbatore:</strong> Face-to-face requirement discussions, sprint planning, and architectural reviews across Coimbatore tech corridors (Peelamedu, Saravanampatti, TIDEL Park, Eachanari).</li>
              <li><strong style={{ color: "#fff" }}>Hybrid Engagement:</strong> Weekly in-person touchpoints combined with async daily updates via Slack or GitHub.</li>
              <li><strong style={{ color: "#fff" }}>Fully Remote:</strong> Seamless integration into remote product teams using Jira, GitHub PR reviews, daily standups, and video syncs.</li>
            </ul>
          </div>
        </section>

        {/* 5. What Clients Say */}
        <Testimonials />

        {/* 6. Frequently Asked Questions */}
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

        {/* 7. Book a Free Consultation */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Get a Free Technical Consultation in Coimbatore</h2>
          <p className={styles.subtitle}>
            Have an app idea, need an MVP built, or want to audit an existing codebase? Let&apos;s connect.
          </p>
          <div className={styles.ctaGrid} style={{ marginTop: "1.5rem" }}>
            <Link href="/contact" className={styles.primaryBtn}>
              Contact Sathish G &rarr;
            </Link>
            <a
              href="mailto:sathishg.dev@gmail.com"
              className={styles.secondaryBtn}
            >
              Email Directly
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
