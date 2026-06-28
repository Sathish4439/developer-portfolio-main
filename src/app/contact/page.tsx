"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import styles from "./page.module.css";

const socialLinks = [
  { name: "GitHub", handle: "@Sathish4439", url: "https://github.com/Sathish4439" },
  { name: "LinkedIn", handle: "Sathish Gobi", url: "https://www.linkedin.com/in/sathishgobi/" },
  { name: "Hashnode", handle: "@sathish4439", url: "https://hashnode.com/@sathish4439" },
  { name: "LeetCode", handle: "aravindsathish0885", url: "https://leetcode.com/u/aravindsathish0885/" },
];

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      setFormState({ name: "", email: "", subject: "", message: "" });
    }, 1200);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className={styles.wrapper}>
      {/* ─────────── HERO ─────────── */}
      <section className={styles.heroSection}>
        <div className={styles.backLinkWrap}>
          <Link href="/" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Home</span>
          </Link>
        </div>

        <div className={styles.titleArea}>
          <div className={styles.badge}>GET IN TOUCH</div>
          <h1 className={styles.title}>CONTACT</h1>
          <div className={styles.titleLine} />
        </div>
      </section>

      {/* ─────────── CONTENT SECTION ─────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contactGrid}>
          {/* Direct & Social Details */}
          <div className={styles.infoCol}>
            <div className={styles.infoBlock}>
              <h3 className={styles.blockTitle}>Direct Contact</h3>
              <div className={styles.detailsList}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Email</span>
                  <a href="mailto:sathishg.dev@gmail.com" className={styles.detailVal}>
                    sathishg.dev@gmail.com
                  </a>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Phone</span>
                  <a href="tel:+917868031207" className={styles.detailVal}>
                    +91 78680 31207
                  </a>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Location</span>
                  <span className={styles.detailVal}>Tamil Nadu, India</span>
                </div>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <h3 className={styles.blockTitle}>Find Me Online</h3>
              <div className={styles.socialsGrid}>
                {socialLinks.map((soc) => (
                  <a
                    key={soc.name}
                    href={soc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialCard}
                  >
                    <span className={styles.socialName}>{soc.name}</span>
                    <span className={styles.socialHandle}>{soc.handle}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className={styles.formCol}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Send A Message</h3>
              <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.inputGroup}>
                  <label htmlFor="name" className={styles.label}>Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Sathish G"
                    value={formState.name}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="email" className={styles.label}>Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="email@example.com"
                    value={formState.email}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="subject" className={styles.label}>Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    placeholder="Project Inquiry"
                    value={formState.subject}
                    onChange={handleChange}
                    className={styles.input}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label htmlFor="message" className={styles.label}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    value={formState.message}
                    onChange={handleChange}
                    className={styles.textarea}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={styles.submitBtn}
                >
                  {status === "idle" && "Send Message"}
                  {status === "sending" && "Sending..."}
                  {status === "success" && "Message Sent!"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
