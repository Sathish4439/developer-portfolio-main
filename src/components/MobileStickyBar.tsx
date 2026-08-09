"use client";

import Link from "next/link";
import styles from "./MobileStickyBar.module.css";

export default function MobileStickyBar() {
  return (
    <div className={styles.bar}>
      <a href="tel:+917868031207" className={styles.callBtn} aria-label="Call Sathish G">
        <span>📞</span> Call
      </a>
      <Link href="/contact" className={styles.hireBtn} aria-label="Hire Sathish G">
        Hire Me &rarr;
      </Link>
    </div>
  );
}
