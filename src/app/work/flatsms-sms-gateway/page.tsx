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
            name: "FlatSMS — Android SMS Gateway SaaS Platform",
            description:
              "Managed cloud SaaS platform and real-time API built with Node.js, Express 5, WebSocket, BullMQ, Prisma ORM, Kotlin Android, and React 19 by Sathish G.",
            author: {
              "@type": "Person",
              name: "Sathish G",
              url: "https://www.sathishdev.in",
            },
            url: "https://www.sathishdev.in/work/flatsms-sms-gateway",
          }),
        }}
      />

      <div className={styles.container}>
        {/* Back Link */}
        <div className={styles.backLinkWrap}>
          <Link href="/work" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Portfolio</span>
          </Link>
        </div>

        {/* Eyebrow Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeDot}></span>
          CASE STUDY — DISTRIBUTED TELEPHONY INFRASTRUCTURE
        </div>

        {/* Hero Title */}
        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>
            FLATSMS <span className={styles.titleAccent}>GATEWAY</span>
          </h1>
        </AnimeReveal>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          An enterprise-grade cloud control plane and real-time WebSocket gateway transforming commodity Android devices with domestic SIM cards into programmable, API-addressable 2-way SMS telecommunication infrastructure.
        </p>

        {/* Project Metadata */}
        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>ROLE</span>
            <span className={styles.metaValue}>Principal Architect &amp; Lead Engineer</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>TIMELINE</span>
            <span className={styles.metaValue}>2026</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>PERFORMANCE</span>
            <span className={styles.metaValue}>&lt;5s Outbound Latency (Sub-Second Ingestion)</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>TECH STACK</span>
            <span className={styles.metaValue}>Node.js 22, Express 5, BullMQ, Kotlin, React 19</span>
          </div>
        </div>

        {/* ==================================================================
            01 — HERO SHOWCASE (Scale 1: Dominant Full-Width Elevated Viewport)
            Screenshot 1: 01_system_overview.png
            ================================================================== */}
        <div className={styles.heroShowcaseWrap}>
          <div className={styles.ambientWrap}>
            <div className={styles.ambientGlow} />
            <div className={styles.browserFrame}>
              <div className={styles.browserBar}>
                <div className={styles.browserControls}>
                  <span className={`${styles.dot} ${styles.dotClose}`}></span>
                  <span className={`${styles.dot} ${styles.dotMin}`}></span>
                  <span className={`${styles.dot} ${styles.dotMax}`}></span>
                </div>
                <div className={styles.browserAddress}>
                  <svg className={styles.lockIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z" />
                  </svg>
                  <span>flatsms.cloud/console/overview</span>
                </div>
                <div className={styles.browserStatus}>
                  <span className={styles.statusPulse}></span>
                  <span>ONLINE</span>
                </div>
              </div>
              <div className={styles.browserViewport}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/projects/flatsms/01_system_overview.png"
                  alt="FlatSMS System Overview — Real-time SMS Gateway Control Plane"
                  className={styles.screenshotImg}
                />
              </div>
            </div>
          </div>
          <div className={styles.heroTagline}>
            <span className={styles.heroCaption}>
              Figure 1.0 — Real-Time Control Plane displaying Android (Xiaomi) device pulse, daily quota tracking (22/100), AES-256 encryption status, and live message dispatch logs.
            </span>
            <span className={styles.heroBadgeSpec}>PRODUCTION READY</span>
          </div>
        </div>

        {/* ==================================================================
            02 — PRODUCT OVERVIEW (Scale 2 & 5: Asymmetric Pairing & Floating Inset)
            Screenshot 2: 02_device_pairing.png
            Screenshot 9: 09_auth_login.png
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>02 — PRODUCT OVERVIEW</span>
            <h2 className={styles.sectionTitle}>
              DEMOCRATIZING ENTERPRISE SMS WITH PHYSICAL CELLULAR BRIDGES
            </h2>
            <p className={styles.sectionLead}>
              Traditional CPaaS vendors (Twilio, MessageBird, Sinch) charge exorbitant rates—often exceeding $0.015 per message segment plus arbitrary carrier pass-through fees and onerous regulatory hurdles like A2P 10DLC registrations. For startups, bootstrapped SaaS products, and local enterprises, transactional SMS costs escalate uncontrollably. FlatSMS circumvents these costs by transforming affordable Android devices with unlimited carrier SMS plans into private, API-driven cellular gateway bridges.
            </p>
          </div>

          <div className={styles.overviewGrid}>
            {/* Primary Screen: Device Pairing Flow (Screenshot 2) */}
            <div className={styles.overviewPrimaryFrame}>
              <div className={styles.browserFrame}>
                <div className={styles.browserBar}>
                  <div className={styles.browserControls}>
                    <span className={`${styles.dot} ${styles.dotClose}`}></span>
                    <span className={`${styles.dot} ${styles.dotMin}`}></span>
                    <span className={`${styles.dot} ${styles.dotMax}`}></span>
                  </div>
                  <div className={styles.browserAddress}>
                    <svg className={styles.lockIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z" />
                    </svg>
                    <span>flatsms.cloud/console/pairing</span>
                  </div>
                  <div className={styles.browserStatus}>
                    <span className={styles.statusPulse}></span>
                    <span>PAIRING</span>
                  </div>
                </div>
                <div className={styles.browserViewport}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/flatsms/02_device_pairing.png"
                    alt="FlatSMS Device Pairing — Dynamic QR Code & 6-character Handshake Token"
                    className={styles.screenshotImg}
                  />
                </div>
              </div>
              <div className={styles.heroTagline}>
                <span className={styles.heroCaption}>
                  Figure 2.1 — Two-Step Pairing Handshake: Dynamic SVG QR code, 10-minute ephemeral pairing token (66D3FR), and local gateway APK download.
                </span>
              </div>
            </div>

            {/* Secondary Floating Screen: Minimalist Login & Perimeter Access (Screenshot 9) */}
            <div>
              <div className={styles.overviewFloatingFrame}>
                <div className={styles.browserFrame}>
                  <div className={styles.browserBar}>
                    <div className={styles.browserControls}>
                      <span className={`${styles.dot} ${styles.dotClose}`}></span>
                      <span className={`${styles.dot} ${styles.dotMin}`}></span>
                      <span className={`${styles.dot} ${styles.dotMax}`}></span>
                    </div>
                    <div className={styles.browserAddress}>
                      <svg className={styles.lockIcon} viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z" />
                      </svg>
                      <span>flatsms.cloud/login</span>
                    </div>
                  </div>
                  <div className={styles.browserViewport}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src="/projects/flatsms/09_auth_login.png"
                      alt="FlatSMS Authentication & Tenant Perimeter Access"
                      className={styles.screenshotImg}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.featureHighlightCard}>
                <div className={styles.featureHighlightTitle}>
                  <span>Multi-Tenant Perimeter Security</span>
                </div>
                <p className={styles.featureHighlightDesc}>
                  Strict cryptographic tenant isolation ensures each organization operates within an independent sandbox with isolated API keys, encrypted message stores, dedicated queues, and device pulse telemetry.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            03 — CORE EXPERIENCE (Scale 4: Offset Wide Narrative & Metric Telemetry)
            Screenshot 3: 03_message_log.png
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>03 — CORE EXPERIENCE</span>
            <h2 className={styles.sectionTitle}>
              HIGH-THROUGHPUT DISPATCH &amp; REAL-TIME AUDIT TRAIL
            </h2>
            <p className={styles.sectionLead}>
              Every message flows through a sub-second lifecycle: HTTP client ingestion &rarr; Redis BullMQ durability buffer &rarr; active WebSocket client push &rarr; native Android <code>SmsManager</code> carrier transmission &rarr; asynchronous delivery report callback. The web console surfaces instantaneous status transitions with zero page refreshes.
            </p>
          </div>

          <div className={styles.wideShowcaseWrap}>
            <div className={styles.browserFrame}>
              <div className={styles.browserBar}>
                <div className={styles.browserControls}>
                  <span className={`${styles.dot} ${styles.dotClose}`}></span>
                  <span className={`${styles.dot} ${styles.dotMin}`}></span>
                  <span className={`${styles.dot} ${styles.dotMax}`}></span>
                </div>
                <div className={styles.browserAddress}>
                  <svg className={styles.lockIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z" />
                  </svg>
                  <span>flatsms.cloud/console/messages</span>
                </div>
                <div className={styles.browserStatus}>
                  <span className={styles.statusPulse}></span>
                  <span>SYNCED</span>
                </div>
              </div>
              <div className={styles.browserViewport}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/projects/flatsms/03_message_log.png"
                  alt="FlatSMS Master Message Log — Outbound & Inbound Audit Trail"
                  className={styles.screenshotImg}
                />
              </div>
            </div>
            <div className={styles.heroTagline}>
              <span className={styles.heroCaption}>
                Figure 3.0 — High-volume message audit trail with multidirectional filters (Inbound/Outbound), category tags (TRANSACTIONAL, OTP), and instant status verification (Sent, Received).
              </span>
              <span className={styles.heroBadgeSpec}>SOCKET STREAM</span>
            </div>

            {/* Performance Telemetry Grid */}
            <div className={styles.telemetryGrid}>
              <div className={styles.telemetryCard}>
                <div className={styles.telemetryMetric}>&lt; 5s</div>
                <div className={styles.telemetryTitle}>Outbound Latency</div>
                <div className={styles.telemetryDesc}>
                  From REST API invocation to cellular carrier tower dispatch via persistent foreground WebSocket daemon.
                </div>
              </div>

              <div className={styles.telemetryCard}>
                <div className={styles.telemetryMetric}>100%</div>
                <div className={styles.telemetryTitle}>Zero-Loss Ingestion</div>
                <div className={styles.telemetryDesc}>
                  BullMQ queue engine on Redis handles automatic retries, exponential backoffs, and dead-letter queues.
                </div>
              </div>

              <div className={styles.telemetryCard}>
                <div className={styles.telemetryMetric}>100/day</div>
                <div className={styles.telemetryTitle}>Quota Protection</div>
                <div className={styles.telemetryDesc}>
                  Built-in rate limiting and organization daily allowance guards prevent SIM overage and carrier throttle.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            04 — PRODUCT DETAILS (Scale 3 & 7: Layered Inventory & Focused Modal)
            Screenshot 4: 04_api_keys.png
            Screenshot 5: 05_api_key_modal.png
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>04 — PRODUCT DETAILS</span>
            <h2 className={styles.sectionTitle}>
              SCOPED REST CREDENTIALS &amp; SECURE MODAL WORKFLOW
            </h2>
            <p className={styles.sectionLead}>
              Security was engineered with zero compromises. API keys use high-entropy generation with SHA-256 cryptographic hashing at rest. Plaintext secret keys are revealed strictly once upon creation inside an isolated, focused modal dialog, while the management console exposes only masked prefix identifiers.
            </p>
          </div>

          <div className={styles.layeredSecurityWrap}>
            {/* Base Layer: Key Inventory (Screenshot 4) */}
            <div className={styles.layeredBaseFrame}>
              <div className={styles.browserFrame}>
                <div className={styles.browserBar}>
                  <div className={styles.browserControls}>
                    <span className={`${styles.dot} ${styles.dotClose}`}></span>
                    <span className={`${styles.dot} ${styles.dotMin}`}></span>
                    <span className={`${styles.dot} ${styles.dotMax}`}></span>
                  </div>
                  <div className={styles.browserAddress}>
                    <svg className={styles.lockIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z" />
                    </svg>
                    <span>flatsms.cloud/console/api-keys</span>
                  </div>
                  <div className={styles.browserStatus}>
                    <span className={styles.statusPulse}></span>
                    <span>ACTIVE</span>
                  </div>
                </div>
                <div className={styles.browserViewport}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/flatsms/04_api_keys.png"
                    alt="FlatSMS API Key Management Dashboard — Scoped Tokens & Revocation States"
                    className={styles.screenshotImg}
                  />
                </div>
              </div>
            </div>

            {/* Foreground Floating Detail: Generate Key Modal (Screenshot 5) */}
            <div className={styles.layeredModalFloating}>
              <div className={styles.browserFrame}>
                <div className={styles.browserBar}>
                  <div className={styles.browserControls}>
                    <span className={`${styles.dot} ${styles.dotClose}`}></span>
                    <span className={`${styles.dot} ${styles.dotMin}`}></span>
                    <span className={`${styles.dot} ${styles.dotMax}`}></span>
                  </div>
                  <div className={styles.browserAddress}>
                    <span>Modal &bull; Generate API Key</span>
                  </div>
                </div>
                <div className={styles.browserViewport}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/flatsms/05_api_key_modal.png"
                    alt="FlatSMS Focused Modal Dialog — New API Key Generation"
                    className={styles.screenshotImg}
                  />
                </div>
              </div>
            </div>

            <div className={styles.calloutBanner}>
              <div className={styles.calloutText}>
                <strong>Cryptographic Hygiene:</strong> Raw keys (<code>fs_live_...</code>) are shown exclusively once. Instant revocation terminates active connections immediately across all microservices.
              </div>
              <span className={styles.calloutBadge}>SHA-256 ENCRYPTED</span>
            </div>
          </div>
        </section>

        {/* ==================================================================
            05 — SYSTEM / DASHBOARD (Scale 6: Expansive Developer Workstation)
            Screenshot 7: 07_api_docs.png
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>05 — SYSTEM / DASHBOARD</span>
            <h2 className={styles.sectionTitle}>
              DEVELOPER-FIRST DOCUMENTATION &amp; MULTI-LANGUAGE ENGINE
            </h2>
            <p className={styles.sectionLead}>
              Adoption is determined by developer ergonomics. FlatSMS provides an interactive, in-app documentation playground featuring live copyable snippets across cURL, Axios, Node.js, PHP, and Python, complete with schema definitions and Bearer authentication guidance.
            </p>
          </div>

          <div className={styles.docsWorkstationWrap}>
            <div className={styles.browserFrame}>
              <div className={styles.browserBar}>
                <div className={styles.browserControls}>
                  <span className={`${styles.dot} ${styles.dotClose}`}></span>
                  <span className={`${styles.dot} ${styles.dotMin}`}></span>
                  <span className={`${styles.dot} ${styles.dotMax}`}></span>
                </div>
                <div className={styles.browserAddress}>
                  <svg className={styles.lockIcon} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z" />
                  </svg>
                  <span>flatsms.cloud/console/docs</span>
                </div>
                <div className={styles.browserStatus}>
                  <span className={styles.statusPulse}></span>
                  <span>REST v1.0</span>
                </div>
              </div>

              {/* Developer Tab Strip Header */}
              <div className={styles.docsTabStrip}>
                <span className={`${styles.docsTab} ${styles.docsTabActive}`}>cURL</span>
                <span className={styles.docsTab}>Axios</span>
                <span className={styles.docsTab}>Node.js</span>
                <span className={styles.docsTab}>PHP</span>
                <span className={styles.docsTab}>Python</span>
              </div>

              <div className={styles.browserViewport}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/projects/flatsms/07_api_docs.png"
                  alt="FlatSMS Interactive Developer Documentation & Multi-Language REST Reference"
                  className={styles.screenshotImg}
                />
              </div>
            </div>

            <div className={styles.specsPillsGrid}>
              <span className={styles.specPill}><span className={styles.specPillDot}></span>POST /api/v1/messages</span>
              <span className={styles.specPill}><span className={styles.specPillDot}></span>POST /api/v1/messages/bulk</span>
              <span className={styles.specPill}><span className={styles.specPillDot}></span>GET /api/v1/messages/:id</span>
              <span className={styles.specPill}><span className={styles.specPillDot}></span>Bearer Token Authentication</span>
              <span className={styles.specPill}><span className={styles.specPillDot}></span>E.164 Phone Number Formatting</span>
            </div>
          </div>
        </section>

        {/* ==================================================================
            06 — RESPONSIVE / MULTI-SCREEN (Scale 8: Symmetrical Dual Studio)
            Screenshot 6: 06_webhooks.png
            Screenshot 8: 08_error_matrix.png
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>06 — RESPONSIVE &amp; MULTI-SUBSYSTEM</span>
            <h2 className={styles.sectionTitle}>
              EVENT PROPAGATION &amp; DETERMINISTIC RELIABILITY MATRIX
            </h2>
            <p className={styles.sectionLead}>
              Two pillars underpin FlatSMS&apos;s production resilience: an HMAC-SHA256 signed webhook delivery pipeline that notifies external systems in real time, and an exhaustive, deterministic HTTP status catalog that eliminates ambiguous integration errors.
            </p>
          </div>

          <div className={styles.dualStudioGrid}>
            {/* Left Studio: Webhook Endpoints & Signature Verifier (Screenshot 6) */}
            <div className={styles.studioColumn}>
              <div className={styles.browserFrame}>
                <div className={styles.browserBar}>
                  <div className={styles.browserControls}>
                    <span className={`${styles.dot} ${styles.dotClose}`}></span>
                    <span className={`${styles.dot} ${styles.dotMin}`}></span>
                    <span className={`${styles.dot} ${styles.dotMax}`}></span>
                  </div>
                  <div className={styles.browserAddress}>
                    <svg className={styles.lockIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z" />
                    </svg>
                    <span>flatsms.cloud/console/webhooks</span>
                  </div>
                </div>
                <div className={styles.browserViewport}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/flatsms/06_webhooks.png"
                    alt="FlatSMS Webhook Management — HMAC-SHA256 Signature Verification Studio"
                    className={styles.screenshotImg}
                  />
                </div>
              </div>
              <div className={styles.studioCaption}>
                <h3 className={styles.studioTitle}>HMAC-SHA256 Webhook Verification</h3>
                <p className={styles.studioDesc}>
                  Configurable callback endpoints signed with secret tokens. Includes an embedded local test listener (<code>/api/v1/webhooks/test-receiver</code>) and cryptographic signature verifier.
                </p>
              </div>
            </div>

            {/* Right Studio: Error Table & Fault Tolerance (Screenshot 8) */}
            <div className={styles.studioColumn}>
              <div className={styles.browserFrame}>
                <div className={styles.browserBar}>
                  <div className={styles.browserControls}>
                    <span className={`${styles.dot} ${styles.dotClose}`}></span>
                    <span className={`${styles.dot} ${styles.dotMin}`}></span>
                    <span className={`${styles.dot} ${styles.dotMax}`}></span>
                  </div>
                  <div className={styles.browserAddress}>
                    <svg className={styles.lockIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z" />
                    </svg>
                    <span>flatsms.cloud/console/docs#errors</span>
                  </div>
                </div>
                <div className={styles.browserViewport}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/flatsms/08_error_matrix.png"
                    alt="FlatSMS Deterministic Error Catalog & HTTP Status Matrix"
                    className={styles.screenshotImg}
                  />
                </div>
              </div>
              <div className={styles.studioCaption}>
                <h3 className={styles.studioTitle}>Deterministic Error Matrix</h3>
                <p className={styles.studioDesc}>
                  Exhaustive HTTP response codes (400, 401, 404, 410, 429, 500) paired with strict machine-readable error enums (<code>VALIDATION_ERROR</code>, <code>RATE_LIMIT_EXCEEDED</code>) and structured JSON payloads.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ==================================================================
            07 — FINAL SHOWCASE (Scale 9: Cinema-Grade Master Viewport)
            Flagship Presentation: 01_system_overview.png
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>07 — FINAL SHOWCASE</span>
            <h2 className={styles.sectionTitle}>
              THE COMPLETE TELECOMMUNICATION CONTROL SUITE
            </h2>
            <p className={styles.sectionLead}>
              FlatSMS synthesizes modern cloud architecture, mobile system daemons, and cryptographic security into a singular, cohesive developer platform. From single OTP verifications to high-volume bulk dispatch pipelines, the entire infrastructure operates with complete autonomy.
            </p>
          </div>

          <div className={styles.masterShowcaseWrap}>
            <div className={styles.masterFrameBorder}>
              <div className={styles.masterFrameInner}>
                <div className={styles.browserBar}>
                  <div className={styles.browserControls}>
                    <span className={`${styles.dot} ${styles.dotClose}`}></span>
                    <span className={`${styles.dot} ${styles.dotMin}`}></span>
                    <span className={`${styles.dot} ${styles.dotMax}`}></span>
                  </div>
                  <div className={styles.browserAddress}>
                    <svg className={styles.lockIcon} viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C9.243 2 7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zm-3 5c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z" />
                    </svg>
                    <span>flatsms.cloud/console/overview</span>
                  </div>
                  <div className={styles.browserStatus}>
                    <span className={styles.statusPulse}></span>
                    <span>100% HEALTH</span>
                  </div>
                </div>
                <div className={styles.browserViewport}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/flatsms/01_system_overview.png"
                    alt="FlatSMS Master Overview Dashboard"
                    className={styles.screenshotImg}
                  />
                </div>
              </div>
            </div>

            {/* Key Performance Indicators */}
            <div className={styles.kpiBar}>
              <div className={styles.kpiItem}>
                <span className={styles.kpiValue}>99.5%</span>
                <span className={styles.kpiLabel}>Dispatch Delivery Rate Across Paired Hardware</span>
              </div>
              <div className={styles.kpiItem}>
                <span className={styles.kpiValue}>$0.00</span>
                <span className={styles.kpiLabel}>CPaaS Per-Segment Platform Markups</span>
              </div>
              <div className={styles.kpiItem}>
                <span className={styles.kpiValue}>AES-256</span>
                <span className={styles.kpiLabel}>Database Payload Encryption at Rest</span>
              </div>
              <div className={styles.kpiItem}>
                <span className={styles.kpiValue}>2-Way</span>
                <span className={styles.kpiLabel}>Real-Time Outbound Send &amp; Inbound Webhook Routing</span>
              </div>
            </div>
          </div>

          {/* Deep Technical Architecture Summary */}
          <div className={styles.archGrid}>
            <div className={styles.archCard}>
              <h3 className={styles.archTitle}>
                <span>Cloud Control Plane</span>
              </h3>
              <p className={styles.archDesc}>
                Node.js ESM &amp; Express 5 backend written in strict TypeScript. Implements Zod payload validations, JWT/API key authentication, and centralized WebSocket gateway streaming.
              </p>
            </div>

            <div className={styles.archCard}>
              <h3 className={styles.archTitle}>
                <span>Native Android Daemon</span>
              </h3>
              <p className={styles.archDesc}>
                Kotlin Android application running an unkillable Foreground Service. Integrates Android <code>SmsManager</code> for dispatch and a system <code>BroadcastReceiver</code> for inbound SMS interception.
              </p>
            </div>

            <div className={styles.archCard}>
              <h3 className={styles.archTitle}>
                <span>Durable Queue Engine</span>
              </h3>
              <p className={styles.archDesc}>
                Redis BullMQ cluster decoupling client HTTP latency from physical cellular radios. Features automatic retry backoffs (2s to 30s) and dead-letter handling.
              </p>
            </div>

            <div className={styles.archCard}>
              <h3 className={styles.archTitle}>
                <span>React 19 Dashboard</span>
              </h3>
              <p className={styles.archDesc}>
                Vite + React 19 + Tailwind CSS 4 web frontend. Real-time device pulse monitoring, QR device pairing, interactive documentation, and webhook signature verification studio.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            CALL TO ACTION SECTION
            ================================================================== */}
        <section className={styles.ctaSection}>
          <h2 className={styles.ctaTitle}>
            BUILDING SCALABLE CLOUD SAAS OR REAL-TIME SYSTEMS?
          </h2>
          <p className={styles.ctaSubtitle}>
            Whether you require high-throughput WebSocket microservices, custom cellular gateways, or modern React/Node.js enterprise architectures, let&apos;s build production-grade software together.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.primaryBtn}>
              <span>Discuss Your Architecture &rarr;</span>
            </Link>
            <Link href="/work" className={styles.secondaryBtn}>
              <span>Explore More Case Studies</span>
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
