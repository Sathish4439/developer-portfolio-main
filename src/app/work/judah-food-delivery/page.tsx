import type { Metadata } from "next";
import Link from "next/link";
import styles from "../mayiliragu-academy/page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Judah Food Delivery — Flutter 3-App Ecosystem Case Study | Sathish G",
  description:
    "Detailed technical case study by Sathish G, premier flutter food delivery app developer india. How I engineered a complete 3-app ecosystem using Flutter, Socket.io real-time GPS tracking, Node.js backend, and Google Maps API.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/judah-food-delivery",
  },
  openGraph: {
    title: "Judah Food Delivery — Flutter 3-App Ecosystem Case Study | Sathish G",
    description:
      "Real-time food delivery 3-app suite built with Flutter, Socket.io, Node.js, and Google Maps API.",
    url: "https://www.sathishdev.in/work/judah-food-delivery",
  },
};

export default function JudahFoodDeliveryCaseStudy() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "Judah Food Delivery Platform — 3-App Flutter Ecosystem",
            "description": "Comprehensive technical case study of a 3-app real-time food delivery platform engineered with Flutter, Socket.io, Node.js, and Google Maps API by Sathish G, a leading flutter food delivery app developer in India.",
            "author": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "url": "https://www.sathishdev.in/work/judah-food-delivery"
          })
        }}
      />

      <div className={styles.container}>
        <div className={styles.backLinkWrap}>
          <Link href="/work" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Work</span>
          </Link>
        </div>

        <div className={styles.badge}>CASE STUDY — MULTI-APP ECOSYSTEM</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>JUDAH FOOD DELIVERY PLATFORM</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Engineering a high-concurrency 3-app mobile ecosystem for food delivery in India. Built with Flutter, real-time Socket.io GPS tracking, custom Node.js microservices, and Google Maps API SDK.
        </p>

        <div className={styles.ctaGrid} style={{ marginBottom: "2rem" }}>
          <a
            href="https://play.google.com/store/apps/details?id=com.judah.fooddelivery&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.primaryBtn}
          >
            View on Google Play &rarr;
          </a>
          <Link href="/contact" className={styles.secondaryBtn}>
            Hire App Developer
          </Link>
        </div>

        <div className={styles.metaGrid}>
          <div>
            <div className={styles.metaLabel}>ROLE</div>
            <div className={styles.metaValue}>Lead Flutter &amp; API Architect</div>
          </div>
          <div>
            <div className={styles.metaLabel}>TIMELINE</div>
            <div className={styles.metaValue}>2025 (Dhigrowth)</div>
          </div>
          <div>
            <div className={styles.metaLabel}>PRIMARY KEYWORD</div>
            <div className={styles.metaValue}>Food Delivery App Developer</div>
          </div>
          <div>
            <div className={styles.metaLabel}>ECOSYSTEM</div>
            <div className={styles.metaValue}>Customer, Vendor &amp; Rider Apps</div>
          </div>
        </div>

        {/* 1. The Challenge */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <div className={styles.contentBlock}>
            <p>
              Food delivery platforms are among the most technically demanding mobile applications to engineer. Unlike traditional e-commerce apps where interactions are asynchronous, food delivery requires instantaneous state synchronization across three distinct user roles simultaneously:
            </p>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", marginTop: "1rem", lineHeight: "1.8", color: "#a1a1aa" }}>
              <li><strong style={{ color: "#fff" }}>The Hungry Customer:</strong> Expects real-time cart validation, instant order placement, live status updates (Order Placed → Accepted → Preparing → Out for Delivery), and smooth 60fps driver tracking on an interactive Google Map.</li>
              <li><strong style={{ color: "#fff" }}>The Restaurant Partner:</strong> Needs instant loud audio alerts for incoming orders in busy kitchen environments, menu item availability toggles, and prep-time estimation controls.</li>
              <li><strong style={{ color: "#fff" }}>The Delivery Rider:</strong> Requires a reliable background location streaming service that continues sending lat/long coordinates even when the mobile screen is locked or network signals flicker.</li>
            </ul>
            <p style={{ marginTop: "1rem" }}>
              Building this requires an experienced <strong>flutter food delivery app developer in India</strong> capable of handling real-time WebSockets, background mobile isolates, and sub-100ms API endpoints under load.
            </p>
          </div>
        </section>

        {/* 2. The Solution I Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution I Built</h2>
          <div className={styles.contentBlock}>
            <p>
              I architected and developed a unified 3-app Flutter mobile ecosystem connected to a centralized Node.js backend:
            </p>

            <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>1. Consumer Ordering App</h3>
                <p className={styles.cardDesc}>
                  Features location auto-detection, restaurant filtering by delivery radius, menu customizations with variant add-ons, Razorpay online payment integration, cash-on-delivery validation, and real-time order status tracking with animated driver markers on Google Maps.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>2. Restaurant Vendor App</h3>
                <p className={styles.cardDesc}>
                  Designed for Android tablet and phone screens in kitchens. Includes auto-accept order flows, kitchen prep timer controls, item stock toggles, order history analytics, and daily payout summaries.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>3. Rider Dispatch App</h3>
                <p className={styles.cardDesc}>
                  Engineered with Flutter background isolates. Broadcasts rider GPS location every 3 seconds to the Socket.io server while conserving battery through adaptive distance filters. Includes trip turn-by-turn navigation links and earnings logs.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>4. Central Microservice API</h3>
                <p className={styles.cardDesc}>
                  High-throughput Node.js microservice handling user authentication, order state machine persistence, distance matrix calculations, payment webhooks, and push notification triggers via Firebase Cloud Messaging.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Technical Architecture */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Technical Architecture</h2>
          <div className={styles.contentBlock}>
            <p>
              To maintain sub-100ms sync speeds between riders, restaurants, and customers, the backend uses an event-driven WebSocket architecture alongside RESTful endpoints:
            </p>

            <div className={styles.skillsList} style={{ marginTop: "1.5rem" }}>
              <span className={styles.skillBadge}>Flutter 3.x / Dart</span>
              <span className={styles.skillBadge}>Socket.io Real-Time</span>
              <span className={styles.skillBadge}>Google Maps SDK</span>
              <span className={styles.skillBadge}>Node.js &amp; Express</span>
              <span className={styles.skillBadge}>Prisma ORM</span>
              <span className={styles.skillBadge}>PostgreSQL Database</span>
              <span className={styles.skillBadge}>Razorpay Gateway</span>
              <span className={styles.skillBadge}>Firebase FCM Push</span>
              <span className={styles.skillBadge}>Background Isolate</span>
            </div>

            <p style={{ marginTop: "1.5rem" }}>
              State management within the mobile apps was implemented using BLoC (Business Logic Component). This separated UI rendering completely from Socket.io event streams, preventing unnecessary widget rebuilds when high-frequency GPS coordinate packages were received.
            </p>
          </div>
        </section>

        {/* 4. Key Features Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Key Features Built</h2>
          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Real-Time GPS Location Streaming</h3>
              <p className={styles.cardDesc}>
                Sub-second position marker interpolation on customer maps using Socket.io lat/long broadcasts and smooth polyline route rendering via Google Maps Directions API.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Automated Rider Dispatch Algorithm</h3>
              <p className={styles.cardDesc}>
                Backend algorithm computing distance radiuses between kitchen coordinates and active riders to automatically route order notifications to the nearest available driver.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Loud Kitchen Audio Alert System</h3>
              <p className={styles.cardDesc}>
                Custom sound channel implementation preventing missed kitchen orders, playing continuous audio alerts until the restaurant staff manually acknowledges the order.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Multi-Payment Gateway Integration</h3>
              <p className={styles.cardDesc}>
                Secure online payment checkout via Razorpay supporting UPI, credit/debit cards, and net banking with automated webhook verification to prevent fraud.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Offline Resiliency &amp; Reconnection</h3>
              <p className={styles.cardDesc}>
                Automated Socket.io ping/pong health checks with exponential backoff reconnects, ensuring zero lost order states when riders pass through weak cellular coverage zones.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Dynamic Menu &amp; Variant Management</h3>
              <p className={styles.cardDesc}>
                Flexible nested menu items allowing users to pick size variants, add-on toppings, spice levels, and special instructions with instant price calculations.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Results & Impact */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Results &amp; Impact</h2>
          <div className={styles.contentBlock}>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", lineHeight: "1.8", color: "#a1a1aa" }}>
              <li><strong style={{ color: "#a3e635" }}>Live Store Publication:</strong> Successfully published customer, restaurant partner, and delivery rider apps to Google Play Store.</li>
              <li><strong style={{ color: "#a3e635" }}>Sub-100ms GPS Synchronization:</strong> Smooth live rider map updates without battery drain issues on driver devices.</li>
              <li><strong style={{ color: "#a3e635" }}>Zero Order Loss Rate:</strong> Resilient socket reconnect mechanisms achieved a 99.9% order delivery fulfillment reliability.</li>
              <li><strong style={{ color: "#a3e635" }}>Production Scaling:</strong> Engineered to handle high meal-time traffic spikes with lightweight Node.js event-loop microservices.</li>
            </ul>
          </div>
        </section>

        {/* 6. What I Learned */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Learned</h2>
          <div className={styles.contentBlock}>
            <p>
              Engineering the Judah Food Delivery platform reinforced critical architectural lessons for real-time mobile apps:
            </p>
            <p style={{ marginTop: "1rem" }}>
              First, mobile background isolates are vital for battery preservation when tracking GPS continuously. Blindly listening to location streams in main UI threads drains battery in hours; distance-filtered native isolates preserve power while keeping maps accurate. Second, real-time WebSocket state machines must always be backed by persistent database fallback polls to guarantee transactional integrity during network handoffs.
            </p>
          </div>
        </section>

        {/* 7. CTA */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Building a Real-Time Food Delivery or On-Demand App?</h2>
          <p className={styles.subtitle}>
            Whether you need a food delivery platform, ride-hailing app, or real-time tracking system built with Flutter and Node.js, let&apos;s collaborate.
          </p>
          <div className={styles.ctaGrid} style={{ marginTop: "1.5rem" }}>
            <Link href="/contact" className={styles.primaryBtn}>
              Discuss Your App Project &rarr;
            </Link>
            <Link href="/services/flutter-development" className={styles.secondaryBtn}>
              Explore Flutter Services
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
