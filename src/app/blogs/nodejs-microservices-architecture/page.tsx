import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Building Scalable Node.js Microservices with Express & Prisma | Sathish G",
  description:
    "Architectural blueprint for decomposing monolithic applications into scalable Node.js microservices using Express, Prisma ORM, PostgreSQL, and Redis caching.",
  alternates: {
    canonical: "https://www.sathishdev.in/blogs/nodejs-microservices-architecture",
  },
  openGraph: {
    title: "Building Scalable Node.js Microservices | Sathish G",
    description: "Node.js microservices architecture guide — Prisma ORM, PostgreSQL, Redis, and Express API routing.",
    url: "https://www.sathishdev.in/blogs/nodejs-microservices-architecture",
  },
};

export default function NodeJsMicroservicesBlog() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Building Scalable Node.js Microservices with Express & Prisma",
            "description": "Architectural guide for building scalable Node.js microservices with Prisma ORM.",
            "author": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "publisher": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "datePublished": "2026-08-01",
            "url": "https://www.sathishdev.in/blogs/nodejs-microservices-architecture"
          })
        }}
      />

      <div className={styles.container}>
        <div className={styles.backLinkWrap}>
          <Link href="/blogs" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Blogs</span>
          </Link>
        </div>

        <div className={styles.badge}>BACKEND ARCHITECTURE</div>
        <h1 className={styles.title}>BUILDING SCALABLE NODE.JS MICROSERVICES WITH EXPRESS &amp; PRISMA</h1>

        <div className={styles.metaRow}>
          <span>Published: Aug 2026</span>
          <span>•</span>
          <span>9 min read</span>
          <span>•</span>
          <span>By Sathish G</span>
        </div>

        <article className={styles.articleBody}>
          <p>
            As software applications expand, monolithic backends often suffer from tight coupling, slow build cycles, and database connection bottlenecks. Breaking backend functionality into modular Node.js microservices improves team agility and system resilience.
          </p>

          <h2>1. Domain-Driven Service Decomposition</h2>
          <p>
            Rather than splitting services arbitrarily by technical layer, split services by business domain boundaries:
          </p>
          <p>
            - <strong>Auth Service:</strong> JWT issuance, OAuth integration, and user session management.
          </p>
          <p>
            - <strong>Catalog Service:</strong> Product listings, inventory state, and category filtering powered by Redis read caches.
          </p>
          <p>
            - <strong>Payment &amp; Order Service:</strong> Webhook listeners, Stripe/Razorpay payouts, and transaction logging.
          </p>

          <h2>2. Type-Safe Database Queries with Prisma ORM</h2>
          <p>
            Using Prisma ORM ensures compile-time type safety across your Express endpoints. Here is a pattern for querying PostgreSQL cleanly with relations:
          </p>
          <pre>{`import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function getUserOrders(userId: string) {
  return await prisma.order.findMany({
    where: { userId },
    include: { items: true },
    orderBy: { createdAt: 'desc' },
  });
}`}</pre>

          <h2>3. Inter-Service Communication &amp; Resilience</h2>
          <p>
            For synchronous requests between microservices, use lightweight HTTP client instances with exponential backoff retries. For asynchronous event-driven updates (such as order confirmation emails), publish events via RabbitMQ or Redis Pub/Sub channels.
          </p>
        </article>
      </div>
    </main>
  );
}
