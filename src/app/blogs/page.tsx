"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

interface Article {
  id: number | string;
  title: string;
  description: string;
  url: string;
  cover_image?: string;
  published_at: string;
  reading_time_minutes: number;
  public_reactions_count?: number;
  tag_list: string[];
  isInternal?: boolean;
}

const staticArticles: Article[] = [
  {
    id: "flutter-vs-react-native",
    title: "Flutter vs React Native in 2025: An Honest Comparison",
    description: "A practical, developer-driven comparison of Flutter vs React Native in 2025 covering rendering performance, state management, ecosystem maturity, and time-to-market.",
    url: "/blogs/flutter-vs-react-native",
    published_at: "2026-08-01T00:00:00Z",
    reading_time_minutes: 7,
    tag_list: ["flutter", "reactnative", "architecture"],
    isInternal: true,
  },
  {
    id: "flutter-performance-optimization",
    title: "Flutter Performance Optimization: The Complete Guide",
    description: "Learn how to profile memory leaks, optimize state management rebuilds, and decrease frame rendering delays in production-grade Flutter apps.",
    url: "/blogs/flutter-performance-optimization",
    published_at: "2026-08-01T00:00:00Z",
    reading_time_minutes: 8,
    tag_list: ["flutter", "performance", "dart"],
    isInternal: true,
  },
  {
    id: "how-i-built-a-food-delivery-app",
    title: "How I Built a 3-App Food Delivery Ecosystem with Flutter & Socket.io",
    description: "An architectural breakdown of engineering Judah Food Delivery: customer app, vendor portal, and live rider tracking powered by Flutter and Node.js.",
    url: "/blogs/how-i-built-a-food-delivery-app",
    published_at: "2026-08-01T00:00:00Z",
    reading_time_minutes: 9,
    tag_list: ["flutter", "socketio", "nodejs"],
    isInternal: true,
  },
  {
    id: "devops-aws-docker-guide",
    title: "Deploying Node.js Apps on AWS EC2 with Docker & Nginx",
    description: "Production guide for containerizing Node.js microservices with Docker, configuring Nginx reverse proxying, and deploying onto AWS EC2 with free SSL.",
    url: "/blogs/devops-aws-docker-guide",
    published_at: "2026-08-01T00:00:00Z",
    reading_time_minutes: 8,
    tag_list: ["devops", "aws", "docker"],
    isInternal: true,
  },
  {
    id: "flutter-state-management-bloc-provider",
    title: "Flutter State Management: BLoC vs Provider",
    description: "An architectural guide comparing BLoC and Provider in production Flutter applications. Learn when to use event-driven reactive state vs pragmatic dependency injection.",
    url: "/blogs/flutter-state-management-bloc-provider",
    published_at: "2026-08-01T00:00:00Z",
    reading_time_minutes: 7,
    tag_list: ["flutter", "bloc", "provider"],
    isInternal: true,
  },
  {
    id: "nodejs-microservices-architecture",
    title: "Building Scalable Node.js Microservices with Express & Prisma",
    description: "Architectural blueprint for decomposing monolithic applications into scalable Node.js microservices using Express, Prisma ORM, PostgreSQL, and Redis caching.",
    url: "/blogs/nodejs-microservices-architecture",
    published_at: "2026-08-01T00:00:00Z",
    reading_time_minutes: 9,
    tag_list: ["nodejs", "microservices", "prisma"],
    isInternal: true,
  },
];

export default function Blogs() {
  const [articles, setArticles] = useState<Article[]>(staticArticles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("https://dev.to/api/articles?username=5119__sathishg_d4ba94816");
        if (res.ok) {
          const data = (await res.json()) as Article[];
          if (data && data.length > 0) {
            setArticles([...staticArticles, ...data]);
          }
        }
      } catch (err) {
        // Fallback to static articles
      } finally {
        setLoading(false);
      }
    }
    fetchBlogs();
  }, []);

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

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
          <div className={`${styles.badge} fadeIn stagger-1`}>TECHNICAL ARTICLES</div>
          <AnimeReveal direction="fade" duration={800}>
            <h1 className={styles.title}>BLOGS</h1>
          </AnimeReveal>
          <div className={`${styles.titleLine} slideInLeft stagger-2`} />
        </div>
      </section>

      {/* ─────────── BLOGS GRID ─────────── */}
      <section className={styles.gridSection}>
        {loading ? (
          <div className={styles.loaderArea}>
            <div className={styles.spinner}></div>
            <p className={styles.loaderText}>Fetching technical publications...</p>
          </div>
        ) : (
          <AnimeReveal stagger={80} direction="fade" delay={150}>
            <div className={styles.grid}>
              {articles.map((art) => {
                const CardContent = (
                  <>
                    {art.cover_image && (
                      <div className={styles.cardCover}>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={art.cover_image} alt={art.title} className={styles.coverImg} />
                      </div>
                    )}
                    <div className={styles.cardContent}>
                      <div className={styles.cardMeta}>
                        <span>{formatDate(art.published_at)}</span>
                        <span className={styles.metaDivider}>&bull;</span>
                        <span>{art.reading_time_minutes} min read</span>
                      </div>

                      <h3 className={styles.blogTitle}>{art.title}</h3>
                      <p className={styles.blogDesc}>{art.description}</p>

                      <div className={styles.cardFooter}>
                        <div className={styles.tags}>
                          {art.tag_list.slice(0, 3).map((tag) => (
                            <span key={tag} className={styles.tagPill}>
                              #{tag}
                            </span>
                          ))}
                        </div>
                        {art.public_reactions_count !== undefined && art.public_reactions_count > 0 && (
                          <span className={styles.reactions}>
                            &hearts; {art.public_reactions_count}
                          </span>
                        )}
                      </div>
                    </div>
                  </>
                );

                return art.isInternal ? (
                  <Link key={art.id} href={art.url} className={styles.blogCard}>
                    {CardContent}
                  </Link>
                ) : (
                  <a
                    key={art.id}
                    href={art.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.blogCard}
                  >
                    {CardContent}
                  </a>
                );
              })}
            </div>
          </AnimeReveal>
        )}
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
