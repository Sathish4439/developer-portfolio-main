"use client";

import Link from "next/link";
import styles from "./MobileStickyBar.module.css";

const WHATSAPP_URL =
  "https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20project";

export default function MobileStickyBar() {
  return (
    <>
      {/* Desktop Floating WhatsApp Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.desktopWhatsApp}
        aria-label="Chat with Sathish G on WhatsApp"
      >
        <span className={styles.waIcon}>💬</span>
        <span className={styles.waText}>Chat on WhatsApp</span>
      </a>

      {/* Mobile Sticky Bar */}
      <div className={styles.bar}>
        <a href="tel:+917868031207" className={styles.callBtn} aria-label="Call Sathish G">
          <span>📞</span> Call
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.waBtn}
          aria-label="WhatsApp Sathish G"
        >
          <span>💬</span> WhatsApp
        </a>
        <Link href="/contact" className={styles.hireBtn} aria-label="Hire Sathish G">
          Hire Me &rarr;
        </Link>
      </div>
    </>
  );
}

