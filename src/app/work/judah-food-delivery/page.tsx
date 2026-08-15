import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Judah Food Delivery App — Flutter 4-App Ecosystem Case Study | Sathish G",
  description:
    "Technical case study of Judah Food Delivery App by Sathish G, premier flutter food delivery app developer in India. Features 4-app ecosystem and Socket.io GPS.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/judah-food-delivery",
  },
  openGraph: {
    title: "Judah Food Delivery App — Flutter 4-App Ecosystem Case Study | Sathish G",
    description:
      "A real-time Judah Food Delivery app suite comprising 3 Flutter applications and a Node.js API backend.",
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
            "name": "Judah Food Delivery — Real-Time 4-App Flutter Ecosystem",
            "description": "Comprehensive technical case study of the Judah Food Delivery app suite engineered with a Customer App, Restaurant App, Admin Web App, and Node.js backend API using Socket.io and Prisma.",
            "author": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "url": "https://www.sathishdev.in/work/judah-food-delivery",
            "sameAs": [
              "https://play.google.com/store/apps/details?id=com.judah.fooddelivery"
            ],
            "keywords": [
              "judah food delivery",
              "judah app",
              "judah food delivery india",
              "flutter food delivery app developer india",
              "Socket.io food delivery",
              "real-time GPS delivery",
              "razorpay flutter integration",
              "food delivery app developer",
              "Node.js food delivery backend"
            ]
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
          <h1 className={styles.title}>JUDAH FOOD DELIVERY APP</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          Engineering a high-concurrency 4-component software ecosystem for food delivery in India. Built with Flutter, real-time Socket.io GPS tracking, custom Node.js microservices, and Google Maps API SDK.
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
            <div className={styles.metaValue}>4 Distinct Code Repositories</div>
          </div>
        </div>

        {/* 1. The Challenge */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Challenge</h2>
          <div className={styles.contentBlock}>
            <p>
              Food delivery platforms are among the most technically demanding mobile applications to engineer. Unlike traditional e-commerce apps where interactions are asynchronous, the Judah Food Delivery app requires instantaneous state synchronization across multiple distinct user roles simultaneously.
            </p>
            <p style={{ marginTop: "1rem" }}>
              Customers expect real-time cart validation, instant order placement, live status updates, and smooth driver tracking on an interactive Google Map. Restaurant vendors need instant loud audio alerts for incoming orders in busy kitchen environments, menu item availability toggles, and prep-time estimation controls. Delivery riders require a reliable background location streaming service that continues sending coordinates even when the mobile screen is locked or network signals flicker. Building this requires an experienced flutter food delivery app developer in India capable of handling real-time WebSockets, background mobile isolates, and sub-100ms API endpoints under load.
            </p>
          </div>
        </section>

        {/* 2. The Solution I Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>The Solution I Built</h2>
          <div className={styles.contentBlock}>
            <p>
              To address these requirements, I designed and developed a unified 4-app software ecosystem connecting clients, vendors, and admins:
            </p>

            <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>1. Consumer Ordering App</h3>
                <p className={styles.cardDesc}>
                  A customer-facing Flutter mobile application (v4.0.0+77) featuring location auto-detection, restaurant filtering by delivery radius, menu customizations, Razorpay online payment integration, and real-time order status tracking with animated driver markers on Google Maps. Uses Riverpod for state management.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>2. Restaurant Vendor App</h3>
                <p className={styles.cardDesc}>
                  Designed for Android tablet and phone screens in kitchens (v4.2.5+82). Includes auto-accept order flows, kitchen prep timer controls, item stock toggles, order history analytics, and loud sound alert channels to prevent kitchen staff from missing new orders.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>3. Admin Web Portal</h3>
                <p className={styles.cardDesc}>
                  A web-based admin control panel built with Flutter Web (v1.0.0+13) allowing managers to monitor paired active driver heartbeats, manage database API keys, track order volumes via charts, and handle bulk item CSV imports using a custom file picker.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>4. Central Backend API</h3>
                <p className={styles.cardDesc}>
                  A high-throughput Node.js Express 5 API using Prisma 6.19.x and PostgreSQL. Implements Socket.io 4.8.1 with a Redis adapter for horizontal cluster scaling, AWS S3/SES/SNS for notifications, Razorpay webhooks, and Winston structured logging.
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
              <span className={styles.skillBadge}>Riverpod State</span>
              <span className={styles.skillBadge}>Google Maps SDK</span>
              <span className={styles.skillBadge}>Socket.io Client</span>
              <span className={styles.skillBadge}>Socket.io Redis Adapter</span>
              <span className={styles.skillBadge}>Redis / ioredis</span>
              <span className={styles.skillBadge}>Node.js / Express 5</span>
              <span className={styles.skillBadge}>Prisma 6.19.x</span>
              <span className={styles.skillBadge}>PostgreSQL Database</span>
              <span className={styles.skillBadge}>Razorpay Gateway</span>
              <span className={styles.skillBadge}>Firebase Auth &amp; FCM</span>
              <span className={styles.skillBadge}>AWS S3 / SES / SNS</span>
              <span className={styles.skillBadge}>Winston Logger</span>
              <span className={styles.skillBadge}>node-cron</span>
              <span className={styles.skillBadge}>Helmet &amp; Joi</span>
            </div>

            <p style={{ marginTop: "1.5rem" }}>
              The Judah app leverages Riverpod for local state management in the mobile applications. This separates UI rendering completely from Socket.io event streams, preventing unnecessary widget rebuilds when high-frequency GPS coordinate packages are received.
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
              <li><strong style={{ color: "#4CAF50" }}>Live on Google Play Store:</strong> The consumer application has been published successfully and is accessible to users.</li>
              <li><strong style={{ color: "#4CAF50" }}>Sub-100ms GPS Sync:</strong> Active Socket.io communication delivers smooth driver marker movement on consumer screens.</li>
              <li><strong style={{ color: "#4CAF50" }}>3 Flutter Apps + 1 Backend:</strong> Complete separation of concerns, providing dedicated interfaces for customers, kitchens, and coordinators.</li>
              <li><strong style={{ color: "#4CAF50" }}>99.9% Zero Order Loss:</strong> Reconnection queues and state validation handshakes ensure orders remain transactionally secure.</li>
            </ul>
          </div>
        </section>

        {/* 6. What I Learned */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>What I Learned</h2>
          <div className={styles.contentBlock}>
            <p>
              Developing the Judah Food Delivery app taught me how to manage real-time state streams at scale. By using Riverpod instead of older frameworks, I could easily filter and handle high-frequency driver coordinates. Setting up a Socket.io Redis adapter allowed the Node.js API to run horizontally across servers without splitting client namespaces, and using AWS SES/SNS ensured that transactional alerts reach users instantly even when offline.
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
