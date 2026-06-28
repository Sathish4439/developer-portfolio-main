"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./page.module.css";

const categories = ["All", "Flutter", "Full Stack", "Web Apps", "Cloud & SaaS"];

const projects = [
  {
    id: "mayiliragu-lms",
    title: "Mayiliragu Academy LMS",
    category: "Full Stack",
    year: "2025",
    tags: ["React", "Flutter", "Node.js", "AWS EC2", "Prisma", "PostgreSQL"],
    description: "An enterprise-grade Learning Management System (LMS) scaling to support 1,000+ active concurrent learners. Engineered with a Flutter app, React admin panel, and Node.js backend.",
    accent: "#ff3b3b",
  },
  {
    id: "whatsapp-sender",
    title: "WhatsApp Sender Automation",
    category: "Cloud & SaaS",
    year: "2025",
    tags: ["Flutter", "Node.js", "Express", "Meta Business API", "MongoDB"],
    description: "A developer automation utility and SaaS tool designed for businesses to automate bulk messaging and schedule alerts using Meta's Cloud APIs.",
    accent: "#7c3aed",
  },
  {
    id: "akirva-eco",
    title: "akirva Rider Ecosystem",
    category: "Flutter",
    year: "2025",
    tags: ["Flutter", "Dart", "Firebase Firestore", "Node.js", "Maps API"],
    description: "A real-time ride-hailing ecosystem comprising interconnected Flutter apps for passengers and drivers, achieving sub-100ms state synchronization.",
    accent: "#2563eb",
  },
  {
    id: "splendour-park",
    title: "Splendour Park Management",
    category: "Full Stack",
    year: "2024",
    tags: ["Flutter", "SQLite", "Node.js", "Express", "AWS S3", "PDF Gen"],
    description: "An enterprise-level operations and business management software custom-built to handle menswear manufacturing, wholesale billing, and labor tracking.",
    accent: "#16a34a",
  },
  {
    id: "rag-chatbot",
    title: "RAG System & Chatbot Dashboard",
    category: "Full Stack",
    year: "2025",
    tags: ["Flutter", "Node.js", "Qdrant", "Groq API", "Playwright", "SSE"],
    description: "A Retrieval-Augmented Generation system with a Flutter UI, Node.js parser, Qdrant vector index, and Groq LLaMA 3.1 streaming responses with instant citations.",
    accent: "#f59e0b",
  },
  {
    id: "nest-pilot",
    title: "Nest Pilot Hostel SaaS",
    category: "Cloud & SaaS",
    year: "2024",
    tags: ["Flutter", "SQLite", "React", "Node.js", "PostgreSQL", "Docker"],
    description: "An offline-first facility management SaaS application designed to digitize rent tracking, automated billing, and maintenance operations.",
    accent: "#0284c7",
  },
  {
    id: "premium-parts",
    title: "Premium Parts ERP",
    category: "Full Stack",
    year: "2024",
    tags: ["Flutter", "Node.js", "Prisma", "PostgreSQL", "Google Maps"],
    description: "An ERP application automating payroll, geo-fenced attendance tracking, and multi-tier retail commissions for automotive parts distributors.",
    accent: "#a855f7",
  },
  {
    id: "judah-restaurant",
    title: "Judah Restaurant Ecosystem",
    category: "Flutter",
    year: "2025",
    tags: ["Flutter", "Socket.io", "Node.js", "Prisma", "PostgreSQL", "AWS EC2"],
    description: "A complete food delivery infrastructure powering three distinct applications (Consumer, Delivery Agent, Vendor) with real-time order dispatching.",
    accent: "#e11d48",
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
          <h1 className={`${styles.title} slideInLeft stagger-2`}>WORK</h1>
          <div className={`${styles.titleLine} slideInLeft stagger-2`} />
        </div>
      </section>

      {/* ─────────── FILTER BAR ─────────── */}
      <section className={`${styles.filtersSection} fadeUp stagger-2`}>
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
      </section>

      {/* ─────────── PROJECTS GRID ─────────── */}
      <section className={styles.gridSection}>
        <div className={styles.projectsGrid}>
          {filteredProjects.map((proj, idx) => (
            <article
              key={proj.id}
              className={`${styles.projectCard} fadeUp stagger-${Math.min(idx + 1, 8)}`}
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
              </div>

              <h3 className={styles.projectTitle}>{proj.title}</h3>
              <p className={styles.projectDesc}>{proj.description}</p>

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
      </section>

      {/* ─────────── CTA SECTION ─────────── */}
      <section className={`${styles.ctaSection} fadeUp stagger-3`}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaGlow1} />
          <div className={styles.ctaGlow2} />
          <h2 className={styles.ctaTitle}>LET&apos;S WORK TOGETHER</h2>
          <p className={styles.ctaText}>Got a project in mind? Let&apos;s make it real.</p>
          <Link href="/contact" className={styles.ctaBtn}>Say Hello &rarr;</Link>
        </div>
      </section>
    </main>
  );
}
