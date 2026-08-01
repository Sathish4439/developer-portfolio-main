import type { Metadata } from "next";
import Link from "next/link";
import styles from "../flutter-vs-react-native/page.module.css";
import AnimeReveal from "../../../components/AnimeReveal";

export const metadata: Metadata = {
  title: "How I Built a 3-App Food Delivery Ecosystem with Flutter & Socket.io | Sathish G",
  description:
    "An architectural breakdown of building a real-time food ordering network: consumer ordering app, restaurant vendor manager, and rider GPS tracker built with Flutter and Node.js.",
  alternates: {
    canonical: "https://www.sathishdev.in/blogs/how-i-built-a-food-delivery-app",
  },
  openGraph: {
    title: "Building a Food Delivery Platform with Flutter & Socket.io | Sathish G",
    description:
      "Real-time food delivery app architecture: state machines, WebSockets, map tracking, and node server setup.",
    url: "https://www.sathishdev.in/blogs/how-i-built-a-food-delivery-app",
  },
};

export default function FoodDeliveryAppBlog() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "How I Built a 3-App Food Delivery Ecosystem with Flutter & Socket.io",
            "description": "Architectural breakdown of engineering Judah Food Delivery ecosystem.",
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
            "url": "https://www.sathishdev.in/blogs/how-i-built-a-food-delivery-app"
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
          <h1 className={styles.title}>HOW I BUILT A 3-APP FOOD DELIVERY ECOSYSTEM WITH FLUTTER &amp; SOCKET.IO</h1>
        </AnimeReveal>

        <div className={styles.meta}>
          <span>Published August 2026</span>
          <span>&bull;</span>
          <span>9 min read</span>
          <span>&bull;</span>
          <span>By Sathish G</span>
        </div>

        <article className={styles.articleBody}>
          <p>
            Building a food delivery app is far more complex than standard e-commerce because it requires continuous multi-party real-time coordination. In this post, I detail the architecture behind the <strong>Judah Food Delivery platform</strong>.
          </p>

          <h2>1. Ecosystem Breakdown</h2>
          <p>
            The system comprises 3 distinct mobile apps working simultaneously:
          </p>
          <ul>
            <li><strong>Customer App:</strong> Menu browsing, cart, Razorpay payment processing, and live rider map tracking.</li>
            <li><strong>Restaurant Partner App:</strong> Kitchen order accept/reject workflow and live sound alerts.</li>
            <li><strong>Rider App:</strong> Dispatch acceptance, background GPS streaming, and turn-by-turn navigation.</li>
          </ul>

          <h2>2. Real-Time Tracking via Socket.io</h2>
          <p>
            To achieve live map marker movements on the consumer screen without exhausting battery life or server memory, riders stream location updates over low-latency WebSocket channels managed by Socket.io. When a rider moves 10 meters, coordinates transmit to Node.js and broadcast directly to the customer listening to that specific <code>order_id</code> channel.
          </p>

          <h2>3. Handling Edge Cases &amp; Reconnections</h2>
          <p>
            Mobile networks fluctuate constantly during deliveries. We implemented exponential backoff reconnection strategies in Flutter and server-side message acknowledgment (ACK) callbacks to prevent lost order status changes.
          </p>
        </article>

        <div className={styles.tags}>
          <span className={styles.tagPill}>#flutter</span>
          <span className={styles.tagPill}>#socketio</span>
          <span className={styles.tagPill}>#nodejs</span>
          <span className={styles.tagPill}>#case-study</span>
        </div>
      </div>
    </main>
  );
}
