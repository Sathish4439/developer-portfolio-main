"use client";

import Link from "next/link";
import styles from "./MobileStickyBar.module.css";

export default function MobileStickyBar() {
  return (
    <div className={styles.bar}>
      <a href="tel:+919000000000" className={styles.callBtn}>
        <span>📞</span> Call
      </a>
      <Link href="/contact" className={styles.hireBtn}>
        Hire Me &rarr;
      </Link>
    </div>
  );
}
