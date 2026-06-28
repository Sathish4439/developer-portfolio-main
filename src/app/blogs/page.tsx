"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

interface Article {
  id: number;
  title: string;
  description: string;
  url: string;
  cover_image: string;
  published_at: string;
  reading_time_minutes: number;
  public_reactions_count: number;
  tag_list: string[];
}

const mockArticles: Article[] = [
  {
    id: 1,
    title: "Optimizing Flutter App Performance & Memory Management",
    description: "Learn how to profile memory leaks, optimize state management rebuilds, and decrease frame rendering delays in production-grade Flutter apps.",
    url: "https://dev.to",
    cover_image: "",
    published_at: "2026-05-15T00:00:00Z",
    reading_time_minutes: 8,
    public_reactions_count: 42,
    tag_list: ["flutter", "performance", "dart"],
  },
  {
    id: 2,
    title: "Scaling Express/Node.js Microservices on AWS EC2 & Docker",
    description: "A step-by-step guide to dockerizing your full-stack application and configuring a secure Nginx reverse proxy with SSL certifications on AWS EC2.",
    url: "https://dev.to",
    cover_image: "",
    published_at: "2026-04-20T00:00:00Z",
    reading_time_minutes: 12,
    public_reactions_count: 56,
    tag_list: ["node", "aws", "docker", "devops"],
  },
  {
    id: 3,
    title: "Real-time Synchronization in Ride-Hailing Ecosystems using Firestore",
    description: "How to engineer highly responsive real-time listeners in mobile apps with under 100ms sync latency and handle offline database replication.",
    url: "https://dev.to",
    cover_image: "",
    published_at: "2026-03-10T00:00:00Z",
    reading_time_minutes: 6,
    public_reactions_count: 29,
    tag_list: ["flutter", "firebase", "database"],
  },
];

export default function Blogs() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchBlogs() {
      try {
        const res = await fetch("https://dev.to/api/articles?username=Sathish4439");
        if (!res.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = (await res.json()) as Article[];
        if (data && data.length > 0) {
          setArticles(data);
        } else {
          setArticles(mockArticles);
        }
      } catch (err) {
        setArticles(mockArticles);
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
          <h1 className={`${styles.title} slideInLeft stagger-2`}>BLOGS</h1>
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
          <div className={styles.grid}>
            {articles.map((art, idx) => (
              <a
                key={art.id}
                href={art.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.blogCard} fadeUp stagger-${Math.min(idx + 1, 6)}`}
              >
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
                    {art.public_reactions_count > 0 && (
                      <span className={styles.reactions}>
                        &hearts; {art.public_reactions_count}
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
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
