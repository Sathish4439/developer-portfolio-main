"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

const categories = ["All", "Flutter", "Full Stack", "Web Apps", "Cloud & SaaS"];

const projects = [
  {
    id: "virtual-2-live",
    title: "Virtual 2 Live Business HUB",
    category: "Cloud & SaaS",
    year: "2025",
    tags: ["Flutter", "Dart", "AI Automation", "VR 360", "No-Code Builder", "REST APIs"],
    description: "An AI-powered all-in-one platform for shopping, services, VR 360 content, virtual trial rooms, and visual no-code customer journey automation.",
    accent: "#0ea5e9",
    liveUrl: "https://play.google.com/store/apps/details?id=app.virtual2live.com&pcampaignid=web_share",
    metrics: "5,000+ Downloads",
  },
  {
    id: "ovantica",
    title: "Ovantica: Buy & Sell Gadgets",
    category: "Flutter",
    year: "2024",
    tags: ["Flutter", "Dart", "Re-commerce", "API Integration", "Secure Checkout"],
    description: "A secure re-commerce marketplace in India for buying refurbished gadgets and selling second-hand devices, featuring free doorstep pickups and 47-point quality tests.",
    accent: "#f97316",
    liveUrl: "https://play.google.com/store/apps/details?id=pro.network.ovantica&pcampaignid=web_share",
    metrics: "10,000+ Active Users",
  },
  {
    id: "lalassa",
    title: "Lalassa: Veterinary & Pet Care",
    category: "Flutter",
    year: "2025",
    tags: ["Flutter", "Dart", "Maps API", "Service Booking", "Consultation Portal"],
    description: "A comprehensive veterinary and pet services application providing veterinary care booking, pet sitting, travel planning, emergency blood banks, and pet adoption matchmaking.",
    accent: "#ec4899",
    liveUrl: "https://play.google.com/store/apps/details?id=pet.lalassa.app&pcampaignid=web_share",
    metrics: "98% Booking Success",
  },
  {
    id: "inmall",
    title: "INMALL Indian Marketplace",
    category: "Web Apps",
    year: "2024",
    tags: ["Flutter", "Dart", "Multivendor E-com", "Ticketing", "Logistics"],
    description: "A one-stop multivendor marketplace connecting Indian local sellers with customers in Hong Kong for restaurants, groceries, healthcare services, and movie ticketing.",
    accent: "#eab308",
    liveUrl: "https://play.google.com/store/apps/details?id=pro.network.inmall&pcampaignid=web_share",
    metrics: "Cross-Border Logistics",
  },
  {
    id: "clean-culture-vendor",
    title: "Clean Culture Vendor",
    category: "Flutter",
    year: "2024",
    tags: ["Flutter", "Dart", "Operations Tracking", "Inventory Mgmt", "Logistics"],
    description: "A dedicated partner platform for managing product supply, inventory readiness, real-time delivery coordination, and warehouse pickup logistics.",
    accent: "#10b981",
    liveUrl: "https://play.google.com/store/apps/details?id=com.dhigrowth.cleanculture.vendor&pcampaignid=web_share",
    metrics: "B2B Supply Chain",
  },
  {
    id: "judah-fooddelivery",
    title: "Judah Food Delivery",
    category: "Flutter",
    year: "2025",
    tags: ["Flutter", "Dart", "Socket.io", "Google Maps", "Consumer E-com"],
    description: "A customer-facing food ordering and delivery application with real-time tracking, active dispatching, and secure payment processing.",
    accent: "#e11d48",
    liveUrl: "https://play.google.com/store/apps/details?id=com.judah.fooddelivery&pcampaignid=web_share",
    metrics: "Socket.io GPS Tracking",
  },
  {
    id: "judah-restaurant",
    title: "Judah Restaurant Partner",
    category: "Flutter",
    year: "2025",
    tags: ["Flutter", "Socket.io", "Order Management", "Vendor Operations"],
    description: "A partner-facing mobile app enabling restaurant vendors to manage orders, customize menus, monitor earnings, and coordinate with delivery riders.",
    accent: "#f43f5e",
    liveUrl: "https://play.google.com/store/apps/details?id=com.judah.restaurentpartner&pcampaignid=web_share",
    metrics: "Real-time Order Logs",
  },
  {
    id: "mayiliragu-lms",
    title: "Mayiliragu Academy LMS",
    category: "Full Stack",
    year: "2025",
    tags: ["React", "Flutter", "Node.js", "AWS EC2", "Prisma", "PostgreSQL"],
    description: "An enterprise-grade Learning Management System (LMS) scaling to support 1,000+ active concurrent learners. Engineered with a Flutter app, React admin panel, and Node.js backend.",
    accent: "#ff3b3b",
    metrics: "1,000+ Active Learners",
  },
  {
    id: "whatsapp-sender",
    title: "WhatsApp Sender Automation",
    category: "Cloud & SaaS",
    year: "2025",
    tags: ["Flutter", "Node.js", "Express", "Meta Business API", "MongoDB"],
    description: "A developer automation utility and SaaS tool designed for businesses to automate bulk messaging and schedule alerts using Meta's Cloud APIs.",
    accent: "#7c3aed",
    metrics: "Meta Business API",
  },
  {
    id: "akirva-eco",
    title: "akirva Rider Ecosystem",
    category: "Flutter",
    year: "2025",
    tags: ["Flutter", "Dart", "Firebase Firestore", "Node.js", "Maps API"],
    description: "A real-time ride-hailing ecosystem comprising interconnected Flutter apps for passengers and drivers, achieving sub-100ms state synchronization.",
    accent: "#2563eb",
    metrics: "<100ms Sync Latency",
  },
  {
    id: "splendour-park",
    title: "Splendour Park Management",
    category: "Full Stack",
    year: "2024",
    tags: ["Flutter", "SQLite", "Node.js", "Express", "AWS S3", "PDF Gen"],
    description: "An enterprise-level operations and business management software custom-built to handle menswear manufacturing, wholesale billing, and labor tracking.",
    accent: "#16a34a",
    metrics: "Offline-First SQLite",
  },
  {
    id: "rag-chatbot",
    title: "RAG System & Chatbot Dashboard",
    category: "Full Stack",
    year: "2025",
    tags: ["Flutter", "Node.js", "Qdrant", "Groq API", "Playwright", "SSE"],
    description: "A Retrieval-Augmented Generation system with a Flutter UI, Node.js parser, Qdrant vector index, and Groq LLaMA 3.1 streaming responses with instant citations.",
    accent: "#f59e0b",
    metrics: "Qdrant Vector DB",
  },
  {
    id: "nest-pilot",
    title: "Nest Pilot Hostel SaaS",
    category: "Cloud & SaaS",
    year: "2024",
    tags: ["Flutter", "SQLite", "React", "Node.js", "PostgreSQL", "Docker"],
    description: "An offline-first facility management SaaS application designed to digitize rent tracking, automated billing, and maintenance operations.",
    accent: "#0284c7",
    liveUrl: "https://play.google.com/store/apps/details?id=com.nestpilot.dhigrowth&pcampaignid=web_share",
    metrics: "Multi-tenant SaaS",
  },
  {
    id: "premium-parts",
    title: "Premium Parts ERP",
    category: "Full Stack",
    year: "2024",
    tags: ["Flutter", "Node.js", "Prisma", "PostgreSQL", "Google Maps"],
    description: "An ERP application automating payroll, geo-fenced attendance tracking, and multi-tier retail commissions for automotive parts distributors.",
    accent: "#a855f7",
    metrics: "Automated Commissions",
  },
];

export default function Work() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <main className={`${styles.wrapper} fadeIn`}>
      {/* ─────────── HERO ─────────── */}
      <section className={styles.heroSection}>
        <div className={`${styles.backLinkWrap} fadeIn stagger-1`}>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Home</span>
          </Link>
        </div>

        <div className={styles.titleArea}>
          <div className={`${styles.badge} fadeIn stagger-1`}>SELECTED PROJECTS</div>
          <AnimeReveal direction="fade" duration={800}>
            <h1 className={styles.title}>WORK</h1>
          </AnimeReveal>
          <div className={`${styles.titleLine} slideInLeft stagger-2`} />
        </div>
      </section>

      {/* ─────────── FILTER BAR ─────────── */}
      <section className={styles.filtersSection}>
        <AnimeReveal direction="fade" duration={600}>
          <div className={styles.filtersList}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterBtnActive : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimeReveal>
      </section>

      {/* ─────────── PROJECTS GRID ─────────── */}
      <section className={styles.gridSection}>
        <AnimeReveal key={activeCategory} stagger={80} direction="fade" delay={100}>
          <div className={styles.projectsGrid}>
            {filteredProjects.map((proj) => (
              <article
                key={proj.id}
                className={styles.projectCard}
                style={{
                  borderColor: `${proj.accent}15`,
                }}
              >
                {/* Colored Accent Top Border */}
                <div
                  className={styles.accentBorder}
                  style={{ backgroundColor: proj.accent }}
                />

                <div className={styles.cardHeader}>
                  <div className={styles.clientYear}>
                    <span className={styles.client}>Sathish G</span>
                    <span className={styles.year}>{proj.year}</span>
                  </div>
                  {proj.metrics && (
                    <span
                      className={styles.metricsBadge}
                      style={{
                        backgroundColor: `${proj.accent}15`,
                        color: proj.accent,
                        border: `1px solid ${proj.accent}30`
                      }}
                    >
                      {proj.metrics}
                    </span>
                  )}
                </div>

                <h3 className={styles.projectTitle}>{proj.title}</h3>
                <p className={styles.projectDesc}>{proj.description}</p>

                {proj.liveUrl && (
                   <a
                     href={proj.liveUrl}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={styles.playStoreLink}
                     style={{
                       borderColor: `${proj.accent}40`,
                       color: proj.accent,
                     }}
                   >
                     Play Store &rarr;
                   </a>
                 )}

                <div className={styles.tagsList}>
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className={styles.tagPill}
                      style={{
                        borderColor: `${proj.accent}30`,
                        color: proj.accent,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Faint Glow on Hover */}
                <div
                  className={styles.hoverGlow}
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${proj.accent}08 0%, transparent 70%)`,
                  }}
                />
              </article>
            ))}
          </div>
        </AnimeReveal>
      </section>

      {/* ─────────── CTA SECTION ─────────── */}
      <section className={styles.ctaSection}>
        <AnimeReveal direction="fade" duration={1000}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaGlow1} />
            <div className={styles.ctaGlow2} />
            <h2 className={styles.ctaTitle}>LET&apos;S WORK TOGETHER</h2>
            <p className={styles.ctaText}>Got a project in mind? Let&apos;s make it real.</p>
            <Link href="/contact" className={styles.ctaBtn}>Say Hello &rarr;</Link>
          </div>
        </AnimeReveal>
      </section>
    </main>
  );
}
