import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "FlatSMS — Android SMS Gateway SaaS Case Study | Sathish G",
  description:
    "Technical case study of FlatSMS by Sathish G, SaaS developer India. How I built a real-time API and Android SMS gateway with Node.js WebSocket, BullMQ queue, and Prisma ORM.",
  alternates: {
    canonical: "https://www.sathishdev.in/work/flatsms-sms-gateway",
  },
  openGraph: {
    title: "FlatSMS — Android SMS Gateway SaaS Case Study | Sathish G",
    description:
      "A managed cloud SaaS platform and real-time API transforming Android devices into SMS gateways.",
    url: "https://www.sathishdev.in/work/flatsms-sms-gateway",
  },
};

export default function FlatSmsCaseStudy() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            "name": "FlatSMS — Android SMS Gateway SaaS Platform",
            "description": "Managed cloud SaaS platform and real-time API built with Node.js, Express 5, WebSocket, BullMQ, Prisma ORM, Kotlin Android, and React 19 by Sathish G.",
            "author": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "url": "https://www.sathishdev.in/work/flatsms-sms-gateway"
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

        <div className={styles.badge} style={{ backgroundColor: "#E8A33D", color: "#000" }}>
          CASE STUDY — CLOUD &amp; SAAS
        </div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>FLATSMS — ANDROID SMS GATEWAY SAAS</h1>
        </AnimeReveal>

        <p className={styles.subtitle}>
          A managed cloud SaaS platform that transforms any Android smartphone with an active SIM card into an API-addressable 2-way SMS gateway. Designed and built by an experienced SaaS developer India and specialized Node.js WebSocket developer.
        </p>

        <div className={styles.metaGrid} style={{ borderColor: "rgba(232, 163, 61, 0.25)", background: "rgba(232, 163, 61, 0.02)" }}>
          <div>
            <div className={styles.metaLabel} style={{ color: "#E8A33D" }}>ROLE</div>
            <div className={styles.metaValue}>Solo Full-Stack Developer &amp; Architect</div>
          </div>
          <div>
            <div className={styles.metaLabel} style={{ color: "#E8A33D" }}>TIMELINE</div>
            <div className={styles.metaValue}>2025</div>
          </div>
          <div>
            <div className={styles.metaLabel} style={{ color: "#E8A33D" }}>METRIC</div>
            <div className={styles.metaValue}>Real-Time WebSocket Gateway</div>
          </div>
          <div>
            <div className={styles.metaLabel} style={{ color: "#E8A33D" }}>STACK</div>
            <div className={styles.metaValue}>Node.js, React 19, Kotlin, PostgreSQL</div>
          </div>
        </div>

        {/* 1. The Challenge */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ color: "#E8A33D" }}>The Challenge</h2>
          <div className={styles.contentBlock}>
            <p>
              Developers, indie hackers, and small SaaS or e-commerce businesses often face exorbitant costs when using traditional CPaaS providers (such as Twilio). High per-segment message pricing, carrier surcharges, and complex regulations like A2P 10DLC registration make it extremely difficult to send transactional SMS alerts or OTPs economically.
            </p>
            <p style={{ marginTop: "1rem" }}>
              To solve this, FlatSMS allows users to use their own physical SIM cards for SMS transmission. However, engineering this required solving hard technical challenges: establishing a low-latency bidirectional bridge between cloud servers and mobile devices, maintaining a reliable BullMQ queue for high-throughput message processing, persisting operations through Prisma ORM safely, preventing the Android OS from killing background connections, and ensuring robust end-to-end security.
            </p>
          </div>
        </section>

        {/* 2. The Solution I Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ color: "#E8A33D" }}>The Solution I Built</h2>
          <div className={styles.contentBlock}>
            <p>
              As the lead SMS gateway developer, I designed and developed a robust 3-tier hardware-software ecosystem:
            </p>

            <div className={styles.gridTwo} style={{ marginTop: "1.5rem" }}>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>1. Cloud Control Plane &amp; REST API</h3>
                <p className={styles.cardDesc}>
                  A secure backend written in Node.js (Express 5 &amp; TypeScript strict mode) featuring JWT/API key authorization, automatic rate limiting, and an active WebSocket gateway. All user database interactions are modeled cleanly using PostgreSQL and Prisma ORM.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>2. Native Gateway App (Android Kotlin)</h3>
                <p className={styles.cardDesc}>
                  A native Kotlin application running a persistent Foreground Service that manages an active WebSocket connection. It uses the native Android SMS API (`SmsManager`) to dispatch messages and a `BroadcastReceiver` to intercept and route incoming texts back to the server.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>3. Web Control Panel (React 19)</h3>
                <p className={styles.cardDesc}>
                  A responsive dashboard built with Vite + React 19 + Tailwind CSS 4. Developers can pair devices in one-click using dynamic QR codes, track device stats (battery, signal, pulse), manage API keys, and configure webhooks with HMAC-SHA256 signature verification.
                </p>
              </div>
              <div className={styles.card}>
                <h3 className={styles.cardTitle}>4. Durable Infrastructure</h3>
                <p className={styles.cardDesc}>
                  Powered by Redis + BullMQ queueing engine to guarantee message delivery, database encryption at rest (AES-256-GCM), and containerized deployments using Docker Compose to ensure local replication matches production environments.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Technical Architecture */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ color: "#E8A33D" }}>Technical Architecture &amp; Stack</h2>
          <div className={styles.contentBlock}>
            <p>
              The platform utilizes a decoupled microservices architecture optimized for real-time delivery and high queue durability:
            </p>

            <div className={styles.skillsList} style={{ marginTop: "1.5rem" }}>
              <span className={styles.skillBadge} style={{ background: "rgba(232, 163, 61, 0.1)", border: "1px solid rgba(232, 163, 61, 0.3)", color: "#E8A33D" }}>Node.js / Express 5</span>
              <span className={styles.skillBadge} style={{ background: "rgba(232, 163, 61, 0.1)", border: "1px solid rgba(232, 163, 61, 0.3)", color: "#E8A33D" }}>TypeScript Strict</span>
              <span className={styles.skillBadge} style={{ background: "rgba(232, 163, 61, 0.1)", border: "1px solid rgba(232, 163, 61, 0.3)", color: "#E8A33D" }}>WebSocket (ws)</span>
              <span className={styles.skillBadge} style={{ background: "rgba(232, 163, 61, 0.1)", border: "1px solid rgba(232, 163, 61, 0.3)", color: "#E8A33D" }}>BullMQ + Redis</span>
              <span className={styles.skillBadge} style={{ background: "rgba(232, 163, 61, 0.1)", border: "1px solid rgba(232, 163, 61, 0.3)", color: "#E8A33D" }}>Prisma ORM 6.x</span>
              <span className={styles.skillBadge} style={{ background: "rgba(232, 163, 61, 0.1)", border: "1px solid rgba(232, 163, 61, 0.3)", color: "#E8A33D" }}>PostgreSQL</span>
              <span className={styles.skillBadge} style={{ background: "rgba(232, 163, 61, 0.1)", border: "1px solid rgba(232, 163, 61, 0.3)", color: "#E8A33D" }}>Kotlin Android</span>
              <span className={styles.skillBadge} style={{ background: "rgba(232, 163, 61, 0.1)", border: "1px solid rgba(232, 163, 61, 0.3)", color: "#E8A33D" }}>React 19 + Vite</span>
              <span className={styles.skillBadge} style={{ background: "rgba(232, 163, 61, 0.1)", border: "1px solid rgba(232, 163, 61, 0.3)", color: "#E8A33D" }}>AES-256-GCM Encryption</span>
              <span className={styles.skillBadge} style={{ background: "rgba(232, 163, 61, 0.1)", border: "1px solid rgba(232, 163, 61, 0.3)", color: "#E8A33D" }}>Zod Validation</span>
            </div>

            <p style={{ marginTop: "1.5rem" }}>
              To ensure messages are dispatched in sub-second latency, we utilize a real-time API connection via WebSockets. When a client initiates a request, it is parsed, encrypted, and pushed to BullMQ. The queue worker pops the job and triggers a WebSocket payload straight to the target device. This design decouples HTTP client request lifetimes from actual hardware cellular transmissions.
            </p>
          </div>
        </section>

        {/* 4. Key Features Built */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ color: "#E8A33D" }}>Key Features Built</h2>
          <div className={styles.gridTwo}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Real-Time Device Pulse Monitor</h3>
              <p className={styles.cardDesc}>
                A micro-animated UI indicator displaying device status (Online/Stale/Offline) based on active 30s WebSocket pings. Automatically slows down or stops based on missing heartbeats.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Durable SMS Queue Engine</h3>
              <p className={styles.cardDesc}>
                Built using Redis and BullMQ, handling automatic retries, backoffs (2s to 30s), and dead-letter queues to guarantee no message is dropped if a device momentarily loses signal.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>QR Code Device Pairing</h3>
              <p className={styles.cardDesc}>
                Instant pairing handshake utilizing secure, short-lived (10-minute) tokens encoded in SVG QR codes, with a 6-character manual entry fallback for convenience.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>HMAC-Signed Webhooks</h3>
              <p className={styles.cardDesc}>
                Fires instant HTTP POST payloads on incoming messages or delivery updates, protected with SHA-256 hashes for clients to verify sender authenticity before processing data.
              </p>
            </div>
          </div>
        </section>

        {/* 5. Results & Impact */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ color: "#E8A33D" }}>Results &amp; Impact</h2>
          <div className={styles.contentBlock}>
            <ul style={{ listStyle: "disc", paddingLeft: "1.5rem", lineHeight: "1.8", color: "#a1a1aa" }}>
              <li><strong style={{ color: "#e8a33d" }}>&lt;5s Outbound Latency:</strong> Messages are reliably sent from client API to mobile device and carrier dispatch within five seconds under normal online conditions.</li>
              <li><strong style={{ color: "#e8a33d" }}>Zero Message Loss:</strong> Redis persistence layers protect queued jobs against server restarts or network interruptions.</li>
              <li><strong style={{ color: "#e8a33d" }}>99.5% Success Rate:</strong> High delivery reliability achieved across paired Android hardware with dynamic reconnect and fallback strategies.</li>
            </ul>
          </div>
        </section>

        {/* 6. What I Learned */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ color: "#E8A33D" }}>What I Learned</h2>
          <div className={styles.contentBlock}>
            <p>
              Developing FlatSMS highlighted the complexity of maintaining steady hardware connections from a cloud environment. Designing a custom reconnection mechanism on top of standard WebSocket protocols with exponential backoffs is critical to prevent API degradation during carrier drops. Furthermore, handling aggressive battery optimizations on MIUI and Samsung devices requires proper Android Foreground Service configuration and thorough guides for end-users to whitelist the application.
            </p>
          </div>
        </section>

        {/* 7. CTA */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle} style={{ color: "#E8A33D" }}>Building a SaaS Platform or Real-Time API?</h2>
          <p className={styles.subtitle}>
            Let&apos;s collaborate to design and develop your custom SaaS architecture, real-time messaging pipeline, or custom API integration.
          </p>
          <div className={styles.ctaGrid} style={{ marginTop: "1.5rem" }}>
            <Link href="/contact" className={styles.primaryBtn} style={{ backgroundColor: "#E8A33D", color: "#000" }}>
              Discuss Your SaaS Project &rarr;
            </Link>
            <Link href="/work" className={styles.secondaryBtn}>
              Explore More Case Studies
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
