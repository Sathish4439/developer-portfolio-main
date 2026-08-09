import type { Metadata } from "next";
import Link from "next/link";
import styles from "../hire-flutter-developer/page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Freelance Flutter Developer India | Contract & MVP Specialist — Sathish G",
  description:
    "Hire Sathish G, top freelance Flutter developer in India & Coimbatore. Fast 4-8 week MVP app delivery, full source code ownership, Node.js backends, and zero agency overhead. Available for project & contract roles.",
  alternates: {
    canonical: "https://www.sathishdev.in/freelance-flutter-developer",
  },
  openGraph: {
    title: "Freelance Flutter Developer India | Sathish G",
    description:
      "Independent contract Flutter developer available for startups, agencies, and custom mobile applications.",
    url: "https://www.sathishdev.in/freelance-flutter-developer",
  },
};

const faqs = [
  {
    q: "Why hire a freelance Flutter developer over an agency?",
    a: "Hiring a freelance Flutter developer gives you 100% direct contact with the senior engineer coding your product. Agencies charge high administrative markups, delegate work to junior developers, and impose rigid communication protocols. Freelancers deliver higher code ownership, faster iteration, and 40-60% cost savings.",
  },
  {
    q: "What engagement models do you offer for freelance projects?",
    a: "I offer three flexible models: Fixed-Price Project-Based (ideal for defined MVPs with set deliverables), Monthly Retainer/Contract (for ongoing app development and feature expansion), and Hourly Consulting (for code reviews, bug fixes, or architecture audits).",
  },
  {
    q: "Do I get full ownership of the source code?",
    a: "Yes. 100% of the IP, Git repositories, API access credentials, design assets, and cloud environment credentials belong to you upon milestone payment completion. Clean Dart code is handed over cleanly documented.",
  },
  {
    q: "Can you build both the mobile app and the backend infrastructure?",
    a: "Yes! Unlike front-end-only developers, I am a full-stack engineer. I build your cross-platform Flutter app alongside custom Node.js REST microservices, Prisma/PostgreSQL databases, Socket.io real-time servers, and AWS Docker cloud hosting.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery & Scope Definition",
    desc: "We analyze your project goals, technical constraints, target platform features (iOS/Android), and wireframes to map an exact milestone roadmap.",
  },
  {
    step: "02",
    title: "Figma UI to Flutter Code",
    desc: "Translating your design system into responsive 60fps Flutter widgets with pixel-perfect attention to detail and clean component modularity.",
  },
  {
    step: "03",
    title: "Backend API Integration",
    desc: "Connecting state management layers (BLoC / Provider) to custom Node.js APIs, Firebase authentication, payment processors, and real-time sockets.",
  },
  {
    step: "04",
    title: "Testing & Performance Optimization",
    desc: "Rigorous QA testing across multiple physical device sizes, fixing memory leaks, optimizing image caching, and tuning API response times below 100ms.",
  },
  {
    step: "05",
    title: "Store Submission & Launch",
    desc: "Configuring Apple Developer & Google Play Console accounts, managing certificates, uploading release builds, and monitoring store approvals.",
  },
  {
    step: "06",
    title: "Post-Launch Handoff & Support",
    desc: "Handing over repository access, system documentation, environment variables, and offering ongoing post-launch maintenance packages.",
  },
];

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
              "telephone": "+91-7868031207",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Coimbatore",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "priceRange": "$$",
              "knowsAbout": ["Freelance Mobile Apps", "Flutter", "MVP Development", "Node.js", "Firebase", "AWS"]
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

        <div className={styles.badge}>FREELANCE &amp; CONTRACT SPECIALIST</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>FREELANCE FLUTTER DEVELOPER</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Need a dedicated freelance mobile app developer in India to turn your startup vision into a high-performance cross-platform Flutter application? I collaborate directly with startup founders, product managers, and digital agencies worldwide to engineer production-ready iOS &amp; Android apps.
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

        {/* 1. Why Hire a Freelance Flutter Developer? */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Why Hire a Freelance Flutter Developer?</h2>
          <div className={styles.contentBlock}>
            <p>
              Building a mobile product requires speed, technical adaptability, and efficient budget allocation. When you hire an independent <strong>freelance Flutter developer</strong>, you bypass non-technical agency overhead, eliminate miscommunication, and work directly with an engineer who takes personal pride in product execution.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Flutter allows startups to target both Android and iOS platforms simultaneously from a unified Dart codebase. This halves development timelines, cuts initial MVP costs, and ensures feature parity across mobile platforms without compromising on native 60fps performance or device hardware capabilities.
            </p>
          </div>

          <div className={styles.gridTwo} style={{ marginTop: "2rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Direct Senior Collaboration</h3>
              <p className={styles.cardDesc}>
                Speak directly with the software engineer building your app. Get real-time answers, quick architectural advice, and daily Git commits.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Fast 4–8 Week MVP Launches</h3>
              <p className={styles.cardDesc}>
                Engineered for speed to market. Launch a sleek, investor-ready mobile product quickly to validate user demand and secure early traction.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Full Source Code Ownership</h3>
              <p className={styles.cardDesc}>
                100% IP rights and source code ownership. Clean, documented Dart code pushed to your private GitHub or GitLab repository.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Zero Agency Overhead</h3>
              <p className={styles.cardDesc}>
                Pay strictly for engineering hours and project outcomes — not office rent, project managers, or bloated agency margins.
              </p>
            </div>
          </div>
        </section>

        {/* 2. My Engagement Models */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>My Engagement Models</h2>
          <p className={styles.subtitle} style={{ marginBottom: "1.5rem" }}>
            Transparent contract options tailored to your project stage, team structure, and budget scope.
          </p>

          <div className={styles.gridTwo}>
            <div className={styles.card} style={{ border: "1px solid rgba(163, 230, 53, 0.3)" }}>
              <div style={{ color: "#a3e635", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                RECOMMENDED FOR STARTUPS
              </div>
              <h3 className={styles.cardTitle}>1. Fixed-Price MVP Project</h3>
              <p className={styles.cardDesc}>
                Best for early-stage founders with a clear scope or Figma prototype. We define fixed milestones, timelines, and deliverables upfront with clear progress payouts.
              </p>
            </div>

            <div className={styles.card}>
              <div style={{ color: "#a1a1aa", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                FOR GROWING PRODUCTS
              </div>
              <h3 className={styles.cardTitle}>2. Monthly Contract / Retainer</h3>
              <p className={styles.cardDesc}>
                Best for established apps requiring continuous feature iteration, bug fixing, performance tuning, and dedicated full-time or part-time weekly engineering hours.
              </p>
            </div>

            <div className={styles.card}>
              <div style={{ color: "#a1a1aa", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                FOR SPECIFIC NEEDS
              </div>
              <h3 className={styles.cardTitle}>3. Hourly Technical Consulting</h3>
              <p className={styles.cardDesc}>
                Best for code audits, legacy Flutter refactoring, state management redesign (BLoC/Provider migration), third-party API integration, or App Store troubleshooting.
              </p>
            </div>

            <div className={styles.card}>
              <div style={{ color: "#a3e635", fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                ALL MODELS INCLUDE
              </div>
              <h3 className={styles.cardTitle}>Complete Transparency</h3>
              <p className={styles.cardDesc}>
                Daily async video updates, active Slack/WhatsApp communication, weekly progress demos, and clear time-tracking logs.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Full-Stack Capability: Flutter + Node.js + AWS */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Full-Stack Capability: Flutter + Node.js + AWS</h2>
          <div className={styles.contentBlock}>
            <p>
              Most freelance developers only handle front-end mobile widgets, forcing founders to hire a separate backend developer. As a <strong>full-stack Flutter engineer</strong>, I build both ends of your application stack seamlessly:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", marginTop: "1rem", lineHeight: "1.8", color: "#a1a1aa" }}>
              <li><strong style={{ color: "#fff" }}>Mobile Frontend:</strong> Cross-platform Flutter client with pixel-perfect UI widgets, native isolates, and BLoC architecture.</li>
              <li><strong style={{ color: "#fff" }}>Backend REST Microservices:</strong> High-speed Node.js backends built with Express, TypeScript, Prisma ORM, and PostgreSQL.</li>
              <li><strong style={{ color: "#fff" }}>Real-Time &amp; Cloud:</strong> Socket.io real-time streaming, Firebase push notifications, and AWS EC2 Docker deployments with Nginx SSL.</li>
            </ul>
          </div>
        </section>

        {/* 4. Projects I Have Built as a Freelancer */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Projects I Have Built as a Freelancer</h2>
          <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Judah Food Delivery Ecosystem</h3>
              <p className={styles.cardDesc}>
                Multi-app ecosystem featuring real-time Socket.io GPS tracking, restaurant portal, and automated driver dispatching.
              </p>
              <Link href="/work/judah-food-delivery" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600", marginTop: "0.75rem", display: "inline-block" }}>
                Read Case Study &rarr;
              </Link>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Mayiliragu Academy LMS</h3>
              <p className={styles.cardDesc}>
                Enterprise learning management app serving 1,000+ active learners with video streaming, quizzes, and Node.js backend.
              </p>
              <Link href="/work/mayiliragu-academy" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600", marginTop: "0.75rem", display: "inline-block" }}>
                Read Case Study &rarr;
              </Link>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Premium Parts ERP</h3>
              <p className={styles.cardDesc}>
                Offline-first Flutter ERP with SQLite synchronization, geo-fenced attendance, and automated commission calculations.
              </p>
              <Link href="/work/premium-parts" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600", marginTop: "0.75rem", display: "inline-block" }}>
                Read Case Study &rarr;
              </Link>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Akirva Rider Logistics</h3>
              <p className={styles.cardDesc}>
                Background GPS location tracking isolate with adaptive distance filters for delivery partner fleet management.
              </p>
              <Link href="/work/akirva-rider" style={{ color: "#a3e635", fontSize: "0.9rem", fontWeight: "600", marginTop: "0.75rem", display: "inline-block" }}>
                Read Case Study &rarr;
              </Link>
            </div>
          </div>
        </section>

        {/* 5. My Process */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>My 6-Step Development Process</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.25rem", marginTop: "1.5rem" }}>
            {processSteps.map((p) => (
              <div key={p.step} className={styles.card} style={{ padding: "1.5rem" }}>
                <div style={{ color: "#a3e635", fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: "700", marginBottom: "0.5rem" }}>
                  {p.step}
                </div>
                <h3 className={styles.cardTitle} style={{ fontSize: "1.1rem", marginBottom: "0.5rem" }}>
                  {p.title}
                </h3>
                <p className={styles.cardDesc} style={{ fontSize: "0.9rem", lineHeight: "1.6" }}>
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

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

        {/* CTA */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Ready to Build Your Mobile App?</h2>
          <p className={styles.subtitle}>
            Let&apos;s discuss your app concept, technical scope, and project timeline.
          </p>
          <div className={styles.ctaGrid} style={{ marginTop: "1.5rem" }}>
            <Link href="/contact" className={styles.primaryBtn}>
              Start Your Project &rarr;
            </Link>
            <a href="mailto:sathishg.dev@gmail.com" className={styles.secondaryBtn}>
              Email sathishg.dev@gmail.com
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
