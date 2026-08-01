import type { Metadata } from "next";
import Link from "next/link";
import styles from "../flutter-vs-react-native/page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "Flutter Performance Optimization Guide | Sathish G",
  description:
    "Learn how to profile memory leaks, prevent unnecessary widget rebuilds, optimize image assets, and achieve smooth 60 FPS rendering in Flutter production apps.",
  alternates: {
    canonical: "https://www.sathishdev.in/blogs/flutter-performance-optimization",
  },
  openGraph: {
    title: "Flutter Performance Optimization Guide | Sathish G",
    description:
      "Actionable techniques for memory management, widget tree optimization, and smooth frame rendering in Flutter.",
    url: "https://www.sathishdev.in/blogs/flutter-performance-optimization",
  },
};

export default function FlutterPerformanceBlog() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Flutter Performance Optimization: The Complete Guide",
            "description": "Comprehensive guide to profiling memory, widget rebuilds, and frame rates in Flutter.",
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
            "url": "https://www.sathishdev.in/blogs/flutter-performance-optimization"
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

        <div className={styles.badge}>TECHNICAL ARTICLE</div>

        <AnimeReveal direction="fade" duration={800}>
          <h1 className={styles.title}>FLUTTER PERFORMANCE OPTIMIZATION: THE COMPLETE GUIDE</h1>
        </AnimeReveal>

        <div className={styles.meta}>
          <span>Published August 2026</span>
          <span>&bull;</span>
          <span>8 min read</span>
          <span>&bull;</span>
          <span>By Sathish G</span>
        </div>

        <article className={styles.articleBody}>
          <p>
            While Flutter provides 60 FPS performance out of the box, poorly structured state management, deep widget nesting, or unoptimized image caching can introduce UI jank and memory spikes. Here are practical strategies I use in production to keep Flutter apps buttery smooth.
          </p>

          <h2>1. Minimize Widget Rebuild Scope</h2>
          <p>
            The most common cause of frame drops is calling <code>setState()</code> high up in the widget hierarchy, forcing unnecessary rebuilds of child widgets. Always isolate stateful logic using targeted state managers like <code>Obx()</code> in GetX, <code>Selector</code> in Provider, or <code>const</code> constructors for static widgets.
          </p>

          <h2>2. Use const Constructors</h2>
          <p>
            Prefixing static widgets with the <code>const</code> keyword tells Dart to reuse existing instances in memory rather than creating new objects during build cycles. This dramatically reduces garbage collection workload.
          </p>

          <h2>3. Image Caching &amp; Resizing</h2>
          <p>
            Rendering high-resolution raw images in a small list view causes massive memory overhead. Use <code>cached_network_image</code> with explicit <code>memCacheWidth</code> and <code>memCacheHeight</code> bounds so images scale down in memory before rendering.
          </p>

          <h2>4. Profile with Flutter DevTools</h2>
          <p>
            Never guess performance bottlenecks. Use the <strong>Flutter Performance Profiler</strong> in DevTools to inspect frame rendering timelines (Raster vs UI thread latency) and locate slow build callbacks.
          </p>
        </article>

        <div className={styles.tags}>
          <span className={styles.tagPill}>#flutter</span>
          <span className={styles.tagPill}>#performance</span>
          <span className={styles.tagPill}>#dart</span>
          <span className={styles.tagPill}>#devtools</span>
        </div>
      </div>
    </main>
  );
}
