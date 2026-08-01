"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/services", label: "Services" },
  { href: "/blogs", label: "Blogs" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        {/* Logo */}
        <Link href="/" className={`${styles.logo} fadeIn stagger-1`}>
          SATHISH.DEV
        </Link>

        {/* Desktop links */}
        <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
          {/* Availability Status */}
          <div className={styles.availabilityStatus}>
            <span className={styles.pulseDot} />
            <span className={styles.availabilityText}>Available for Hire</span>
          </div>

          <ul className={styles.links}>
            {navLinks.map(({ href, label }, idx) => (
              <li key={href} className={`fadeIn stagger-${idx + 1}`}>
                <Link
                  href={href}
                  className={`${styles.link} ${pathname === href ? styles.active : ""}`}
                >
                  {label
                }</Link>
              </li>
            ))}
          </ul>

          {/* Resume Download CTA */}
          <a
            href="/Sathish_G_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
          >
            Resume
          </a>

          {/* Social Links */}
          <div className={styles.socialIcons}>
            <a
              href="https://github.com/Sathish4439"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="GitHub Profile"
            >
              <i className="devicon-github-original" />
            </a>
            <a
              href="https://www.linkedin.com/in/sathishgobi/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              aria-label="LinkedIn Profile"
            >
              <i className="devicon-linkedin-plain" />
            </a>
          </div>
        </div>

        {/* Hamburger button (mobile) */}
        <button
          className={styles.hamburger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={`${styles.bar} ${open ? styles.barTop : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barMid : ""}`} />
          <span className={`${styles.bar} ${open ? styles.barBot : ""}`} />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}>
        <ul className={styles.drawerLinks}>
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`${styles.drawerLink} ${pathname === href ? styles.active : ""}`}
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          {/* Mobile Resume Link */}
          <li style={{ marginTop: "1.5rem" }}>
            <a
              href="/Sathish_G_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.drawerResumeBtn}
              onClick={() => setOpen(false)}
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
