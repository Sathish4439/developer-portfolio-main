import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "VoiceVertick AI — Autonomous Voice Telephony & Lead Qualification Platform Case Study | Sathish G",
  description:
    "Technical case study of VoiceVertick AI by Sathish G, Full-Stack & Voice AI Systems Engineer. Architected an ultra-low latency (<800ms) bidirectional telephony engine with Node.js WebSockets, Twilio Media Streams, Sarvam Indic STT, Cartesia Sonic TTS, and continuous learning CRM.",
  keywords: [
    "Voice AI Developer India",
    "Twilio Media Streams WebSocket",
    "Sarvam AI Tamil Voice Agent",
    "Cartesia Sonic Low Latency TTS",
    "Autonomous Telephony Platform",
    "Voice AI Lead Qualification",
    "Full Stack Voice Engineer",
    "Sathish G Portfolio"
  ],
  alternates: {
    canonical: "https://www.sathishdev.in/work/voice-vertick",
  },
  openGraph: {
    title: "VoiceVertick AI — Autonomous Voice Telephony & Lead Qualification Platform",
    description:
      "Production-grade voice-AI agent platform with sub-second turnaround, multi-language Indic fluency (Tamil, Tanglish, Hindi, English), and automated lead scoring.",
    url: "https://www.sathishdev.in/work/voice-vertick",
    images: [
      {
        url: "https://www.sathishdev.in/projects/voicevertick/08_call_intelligence_hub.png",
        width: 1920,
        height: 1080,
        alt: "VoiceVertick AI Platform Dashboard",
      },
    ],
  },
};

export default function VoiceVertickCaseStudy() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "VoiceVertick AI",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Cloud, Web",
            description:
              "Autonomous voice-AI telephony platform and real-time CRM with bidirectional WebSocket audio streaming, Indic language models, and automated lead scorecards.",
            author: {
              "@type": "Person",
              name: "Sathish G",
              url: "https://www.sathishdev.in",
            },
            url: "https://www.sathishdev.in/work/voice-vertick",
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
          FLAGSHIP PROJECT — AUTONOMOUS VOICE AI &amp; TELEPHONY PLATFORM
        </div>

        {/* Hero Title */}
        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>
            VOICEVERTICK <span className={styles.titleAccent}>AI</span>
          </h1>
        </AnimeReveal>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          An enterprise-grade, ultra-low latency (&lt;800ms) autonomous voice-AI telephony platform engineered for real-time customer conversations in regional &amp; Indic languages (Tamil, Tanglish, Hindi, Indian English). Features live bidirectional WebSocket streaming, continuous self-learning objection handling, instant lead qualification (HOT/WARM/COLD), and immutable per-second ledger billing.
        </p>

        {/* Project Metadata */}
        <div className={styles.metaGrid}>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>ROLE</span>
            <span className={styles.metaValue}>Founding Full-Stack &amp; Voice Systems Architect</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>STATUS</span>
            <span className={styles.metaValue} style={{ color: '#10B981' }}>Active Development / 2026 Flagship</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>LATENCY TARGET</span>
            <span className={styles.metaValue}>&lt;800ms End-to-End Turn Latency</span>
          </div>
          <div className={styles.metaItem}>
            <span className={styles.metaLabel}>CORE TECH STACK</span>
            <span className={styles.metaValue}>Twilio Streams, Sarvam AI, Cartesia, GPT-4o-mini, Node.js, Prisma, PostgreSQL</span>
          </div>
        </div>

        {/* ==================================================================
            01 — HERO SHOWCASE: CALL INTELLIGENCE HUB
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
                  <span>console.voicevertick.ai/intelligence/call-hub</span>
                </div>
                <div className={styles.browserStatus}>
                  <span className={styles.statusPulse}></span>
                  <span>LIVE CALL ENGINE</span>
                </div>
              </div>
              <div className={styles.browserViewport}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/projects/voicevertick/08_call_intelligence_hub.png"
                  alt="VoiceVertick Call Intelligence Hub — Live Telephony Logs and AI Qualification Analysis"
                  className={styles.screenshotImg}
                />
              </div>
            </div>
          </div>
          <div className={styles.heroTagline}>
            <span className={styles.heroCaption}>
              Figure 1.0 — Call Intelligence Hub: Real-time call telemetry displaying 90% call success rate, ₹9.80 avg cost, dual-channel audio duration tracking, and automated AI Qualification score (88/100).
            </span>
            <span className={styles.heroBadgeSpec}>PRODUCTION VERIFIED</span>
          </div>
        </div>

        {/* ==================================================================
            02 — THE BUSINESS PROBLEM & MARKET OPPORTUNITY
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>01 — MARKET CONTEXT &amp; BUSINESS IMPACT</span>
          </div>
          <h2 className={styles.sectionHeading}>Why Traditional Tele-Calling Fails Modern Businesses</h2>
          <p className={styles.leadText}>
            Every growing business in India loses high-value customers every day to missed calls, delayed follow-ups, and regional language barriers. Human call centers suffer from 40%+ annual staff churn, expensive seat costs, and zero availability outside 9 AM – 7 PM. Global voice AI platforms fail because they are priced in expensive USD ($0.15–$0.30/min) and sound synthetic on noisy Indian 8kHz PSTN mobile networks.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.statCard}>
              <div className={styles.statBig}>&lt;60s</div>
              <div className={styles.statLabel}>Speed-to-Lead Follow-up (vs. 4-6 hrs industry avg)</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statBig}>72%</div>
              <div className={styles.statLabel}>Cost Reduction vs. In-house Tele-caller Salaries</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statBig}>24 / 7</div>
              <div className={styles.statLabel}>Zero Missed Inbound Calls After Business Hours</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statBig}>₹7.00</div>
              <div className={styles.statLabel}>Flat Per-Minute Billing in INR with Full COGS Transparency</div>
            </div>
          </div>

          <div className={styles.featuresGrid}>
            <div className={styles.featureBox}>
              <span className={styles.featureIcon}>⚡</span>
              <h3 className={styles.featureTitle}>Instant Speed-to-Lead</h3>
              <p className={styles.featureDesc}>
                When a lead submits a Facebook, Google, or website form, VoiceVertick automatically initiates a compliant outbound verification call within 45 seconds, qualifying buying intent before interest cools.
              </p>
            </div>
            <div className={styles.featureBox}>
              <span className={styles.featureIcon}>🗣️</span>
              <h3 className={styles.featureTitle}>Native Tamil &amp; Tanglish Fluency</h3>
              <p className={styles.featureDesc}>
                Unlike Western models that stumble on Indian accents, VoiceVertick leverages Sarvam AI Indic STT and specialized phonetic prompts to converse naturally in pure Tamil, Hindi, and code-mixed Tanglish.
              </p>
            </div>
            <div className={styles.featureBox}>
              <span className={styles.featureIcon}>🎯</span>
              <h3 className={styles.featureTitle}>Automated HOT / WARM / COLD Scoring</h3>
              <p className={styles.featureDesc}>
                During and after every call, the background intelligence worker extracts caller budget, timeline, and objections, auto-tagging the lead and pushing enriched data directly into CRMs and WhatsApp.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            03 — AGENT STUDIO & TRIAD PIPELINE
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>02 — ARCHITECTURE &amp; PIPELINE ORCHESTRATION</span>
          </div>
          <h2 className={styles.sectionHeading}>The Voice Pipeline Triad: Ears, Brain &amp; Mouth</h2>
          <p className={styles.leadText}>
            Achieving conversational latency below 800 milliseconds over PSTN telephony requires replacing traditional HTTP request-response turn-taking with a continuous bidirectional streaming WebSocket loop.
          </p>

          <div className={styles.browserFrame} style={{ marginBottom: "2rem" }}>
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
                <span>console.voicevertick.ai/deploy/agent-studio</span>
              </div>
              <div className={styles.browserStatus}>
                <span className={styles.statusPulse}></span>
                <span>TRIAD PIPELINE</span>
              </div>
            </div>
            <div className={styles.browserViewport}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/voicevertick/16_agent_studio_light.png"
                alt="VoiceVertick Agent Studio Pipeline Configuration"
                className={styles.screenshotImg}
              />
            </div>
          </div>

          <div className={styles.specTableWrap}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>Pipeline Component</th>
                  <th>Engine / Provider</th>
                  <th>Protocol &amp; Optimization</th>
                  <th>Measured Turnaround</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Ears (Streaming STT)</strong></td>
                  <td>Sarvam Sarasvithri / Deepgram Nova-2</td>
                  <td>Bidirectional WebSocket, 8kHz mu-law chunking, sub-200ms VAD endpointing</td>
                  <td>140ms – 190ms</td>
                </tr>
                <tr>
                  <td><strong>Brain (LLM Reasoning)</strong></td>
                  <td>OpenAI GPT-4o-mini / Groq LLaMA 3.3</td>
                  <td>Token streaming via SSE, dynamic RAG injection, JSON tool calling</td>
                  <td>220ms – 320ms</td>
                </tr>
                <tr>
                  <td><strong>Mouth (Ultra-Fast TTS)</strong></td>
                  <td>Cartesia Sonic / ElevenLabs Turbo</td>
                  <td>Chunked PCM-to-mu-law audio transcoding, immediate audio buffer playback</td>
                  <td>120ms – 180ms</td>
                </tr>
                <tr>
                  <td><strong>Interruption Handling</strong></td>
                  <td>Custom Barge-In Controller</td>
                  <td>Local energy thresholding, instant buffer purge via Twilio clear packet</td>
                  <td>&lt;60ms cancellation</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* ==================================================================
            04 — CONTINUOUS LEARNING ENGINE & INTELLIGENT EVOLUTION
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>03 — INNOVATION HIGHLIGHT</span>
          </div>
          <h2 className={styles.sectionHeading}>Autonomous Continuous Learning Engine</h2>
          <p className={styles.leadText}>
            Unlike static prompt systems where voice bots make the same conversational errors repeatedly, VoiceVertick implements a post-call pattern extraction engine. It analyzes caller hesitation, objections, and confusion points, automatically synthesizing negative constraints and objection tips that improve the agent on every subsequent call.
          </p>

          <div className={styles.browserFrame} style={{ marginBottom: "2rem" }}>
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
                <span>console.voicevertick.ai/deploy/continuous-learning</span>
              </div>
              <div className={styles.browserStatus}>
                <span className={styles.statusPulse}></span>
                <span>SELF-EVOLVING MEMORY</span>
              </div>
            </div>
            <div className={styles.browserViewport}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/projects/voicevertick/06_continuous_learning.png"
                alt="VoiceVertick Continuous Learning Interface"
                className={styles.screenshotImg}
              />
            </div>
          </div>

          <div className={styles.calloutCard}>
            <h3 className={styles.calloutTitle}>Automated Conflict Resolution &amp; Transcript Evidence</h3>
            <p className={styles.calloutText}>
              Every generated constraint includes the exact caller transcript snippet (e.g., in Tamil: <em>&quot;வணக்கம்! எப்படி இருக்கிறீர்கள்? உங்கள் தேவைகள் பற்றி மேலும் பேசலாம்.&quot;</em>), a calculated confidence score (85%–90%), reinforcement counters, and conflict detection alerts that prevent contradictory prompt instructions.
            </p>
          </div>
        </section>

        {/* ==================================================================
            05 — LEAD CRM & POST-CALL INTELLIGENCE
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>04 — WORKSPACE INTELLIGENCE</span>
          </div>
          <h2 className={styles.sectionHeading}>Built-In Lead CRM &amp; Live In-Browser Simulator</h2>
          <p className={styles.leadText}>
            VoiceVertick bridges telephony and sales operations by bundling a complete Lead CRM with audio playback, along with an in-browser WebRTC call simulator allowing business owners to rehearse call flows before dialing live customers.
          </p>

          <div className={styles.dualGrid}>
            <div>
              <div className={styles.browserFrame}>
                <div className={styles.browserBar}>
                  <div className={styles.browserControls}>
                    <span className={`${styles.dot} ${styles.dotClose}`}></span>
                    <span className={`${styles.dot} ${styles.dotMin}`}></span>
                    <span className={`${styles.dot} ${styles.dotMax}`}></span>
                  </div>
                  <div className={styles.browserAddress}>
                    <span>/intelligence/lead-crm</span>
                  </div>
                </div>
                <div className={styles.browserViewport}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/voicevertick/09_lead_crm.png"
                    alt="VoiceVertick Lead CRM"
                    className={styles.screenshotImg}
                  />
                </div>
              </div>
              <p style={{ marginTop: '0.75rem', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                Figure 4.1 — Full Lead CRM: Real-time lead segmentation (HOT/WARM/COLD), sentiment score, intent extraction, and direct call recording playback.
              </p>
            </div>

            <div>
              <div className={styles.browserFrame}>
                <div className={styles.browserBar}>
                  <div className={styles.browserControls}>
                    <span className={`${styles.dot} ${styles.dotClose}`}></span>
                    <span className={`${styles.dot} ${styles.dotMin}`}></span>
                    <span className={`${styles.dot} ${styles.dotMax}`}></span>
                  </div>
                  <div className={styles.browserAddress}>
                    <span>/deploy/call-simulator</span>
                  </div>
                </div>
                <div className={styles.browserViewport}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/voicevertick/02_call_simulator.png"
                    alt="VoiceVertick In-Browser Call Simulator"
                    className={styles.screenshotImg}
                  />
                </div>
              </div>
              <p style={{ marginTop: '0.75rem', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                Figure 4.2 — In-Browser Simulator: Live microphone streaming with real-time waveform visualization and instant debug transcript inspection.
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            06 — FINANCIAL LEDGER & COGS TRANSPARENCY
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>05 — FINANCIAL ARCHITECTURE &amp; BILLING</span>
          </div>
          <h2 className={styles.sectionHeading}>Immutable Double-Entry Ledger &amp; Itemized COGS</h2>
          <p className={styles.leadText}>
            Voice telecommunication billing cannot afford drift or estimation errors. VoiceVertick features an immutable double-entry ledger that tracks call duration to the exact second, deducts funds from an INR prepaid wallet via Razorpay, and itemizes every penny of third-party API consumption.
          </p>

          <div className={styles.dualGrid}>
            <div>
              <div className={styles.browserFrame}>
                <div className={styles.browserBar}>
                  <div className={styles.browserControls}>
                    <span className={`${styles.dot} ${styles.dotClose}`}></span>
                    <span className={`${styles.dot} ${styles.dotMin}`}></span>
                    <span className={`${styles.dot} ${styles.dotMax}`}></span>
                  </div>
                  <div className={styles.browserAddress}>
                    <span>/management/wallet-ledger</span>
                  </div>
                </div>
                <div className={styles.browserViewport}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/voicevertick/13_immutable_ledger.png"
                    alt="VoiceVertick Immutable Financial Ledger"
                    className={styles.screenshotImg}
                  />
                </div>
              </div>
              <p style={{ marginTop: '0.75rem', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                Figure 5.1 — Prepaid Wallet &amp; Ledger: Instant UPI/Razorpay recharges, per-second audit transaction records (-₹31.27, -₹6.77), and balance forecast.
              </p>
            </div>

            <div>
              <div className={styles.browserFrame}>
                <div className={styles.browserBar}>
                  <div className={styles.browserControls}>
                    <span className={`${styles.dot} ${styles.dotClose}`}></span>
                    <span className={`${styles.dot} ${styles.dotMin}`}></span>
                    <span className={`${styles.dot} ${styles.dotMax}`}></span>
                  </div>
                  <div className={styles.browserAddress}>
                    <span>/intelligence/voice-analytics</span>
                  </div>
                </div>
                <div className={styles.browserViewport}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/projects/voicevertick/12_voice_cogs_breakdown.png"
                    alt="VoiceVertick Itemized COGS Breakdown"
                    className={styles.screenshotImg}
                  />
                </div>
              </div>
              <p style={{ marginTop: '0.75rem', fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>
                Figure 5.2 — Itemized COGS Transparency: Real-time per-minute outlay across Twilio (₹1.25), Deepgram (₹0.36), Cartesia (₹0.50), and OpenAI (₹0.40).
              </p>
            </div>
          </div>
        </section>

        {/* ==================================================================
            07 — COMPETITIVE COMPARISON & HIRING POSITIONING
            ================================================================== */}
        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <span className={styles.sectionNumber}>06 — COMPETITIVE EDGE &amp; ENGINEERING LEADERSHIP</span>
          </div>
          <h2 className={styles.sectionHeading}>Why VoiceVertick Outperforms Global Rivals in India</h2>
          
          <div className={styles.specTableWrap}>
            <table className={styles.specTable}>
              <thead>
                <tr>
                  <th>Dimension</th>
                  <th>VoiceVertick AI</th>
                  <th>Vapi / Retell AI</th>
                  <th>Bolna / Ringg AI</th>
                  <th>Enterprise Suites (Yellow.ai)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Pricing Model</strong></td>
                  <td><span style={{ color: '#10B981', fontWeight: 600 }}>₹7.00/min flat INR prepaid wallet</span></td>
                  <td>$0.15–$0.30/min USD + pass-through</td>
                  <td>₹5.50–₹7.00/min</td>
                  <td>₹18–₹28/min + Annual Lock-in</td>
                </tr>
                <tr>
                  <td><strong>Indic Language Quality</strong></td>
                  <td><span style={{ color: '#10B981', fontWeight: 600 }}>Native Tamil, Tanglish, Hindi, Telugu</span></td>
                  <td>Primarily English; weak Tanglish</td>
                  <td>Strong Hindi / Indic focus</td>
                  <td>Good, but rigid enterprise IVR</td>
                </tr>
                <tr>
                  <td><strong>Turnaround Latency</strong></td>
                  <td><span style={{ color: '#10B981', fontWeight: 600 }}>&lt;800ms streaming audio loop</span></td>
                  <td>600ms – 1100ms</td>
                  <td>800ms – 1200ms</td>
                  <td>1500ms – 2500ms</td>
                </tr>
                <tr>
                  <td><strong>Self-Learning Engine</strong></td>
                  <td><span style={{ color: '#10B981', fontWeight: 600 }}>Autonomous continuous prompt evolution</span></td>
                  <td>Manual prompt editing only</td>
                  <td>Manual rule tuning</td>
                  <td>Requires professional services</td>
                </tr>
                <tr>
                  <td><strong>Setup &amp; Onboarding</strong></td>
                  <td><span style={{ color: '#10B981', fontWeight: 600 }}>30-minute self-serve visual studio</span></td>
                  <td>Developer-first API / SDK only</td>
                  <td>Developer-first API</td>
                  <td>3–6 months enterprise deployment</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={styles.calloutCard} style={{ marginTop: '3rem' }}>
            <h3 className={styles.calloutTitle}>What This Proves to Tech Recruiters &amp; Enterprise Clients</h3>
            <p className={styles.calloutText}>
              Building VoiceVertick proves end-to-end full-stack mastery across the most demanding disciplines in modern software engineering:
              <br /><br />
              <strong>1. Real-Time Telephony Systems:</strong> Low-level binary audio manipulation (mu-law, PCM transcoding, 8kHz sampling), WebSocket streaming concurrency, and Twilio Media Streams integration.
              <br />
              <strong>2. AI Agent Engineering:</strong> Fine-tuned streaming pipelines combining Sarvam AI, Deepgram, OpenAI GPT-4o-mini, and Cartesia, with sub-second interruption cancellation.
              <br />
              <strong>3. High-Security SaaS Infrastructure:</strong> Multi-tenant database isolation, double-entry financial ledger accounting with Razorpay, DLT telecom compliance, and enterprise RBAC.
              <br />
              <strong>4. Design &amp; Frontend Craftsmanship:</strong> Ultra-responsive, glassmorphic dashboards built with modern React 19, TypeScript, and dark-mode design systems.
            </p>
          </div>
        </section>

        {/* CTA Footer Box */}
        <div className={styles.ctaBox}>
          <h2 className={styles.ctaTitle}>Looking to Build a Production Voice AI Solution?</h2>
          <p className={styles.ctaText}>
            Whether you need a custom voice agent for your business, an architect to build low-latency streaming pipelines, or a senior full-stack engineer for your team — let&apos;s build something extraordinary.
          </p>
          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.primaryBtn}>
              Discuss Your Project &rarr;
            </Link>
            <Link href="/services/full-stack-development" className={styles.secondaryBtn}>
              Explore Full-Stack Services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
