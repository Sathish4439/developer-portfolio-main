"use client";

import Link from "next/link";
import { useState, FormEvent } from "react";
import styles from "./page.module.css";
import AnimeReveal from "../../components/AnimeReveal";

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
    role: "Recruiter",
    projectType: "Flutter",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      });

      const data = await response.json().catch(() => ({}));

      if (response.ok && data.success) {
        setStatus("success");
        setFormState({
          name: "",
          email: "",
          role: "Recruiter",
          projectType: "Flutter",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Failed to send email. Please email sathishg.dev@gmail.com directly.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network connection error. Please email sathishg.dev@gmail.com directly.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
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
          <div className={`${styles.badge} fadeIn stagger-1`}>GET IN TOUCH</div>
          <AnimeReveal direction="fade" duration={800}>
            <h1 className={styles.title}>Contact Sathish G — Hire Flutter &amp; Full Stack Engineer</h1>
          </AnimeReveal>
          <div className={`${styles.titleLine} slideInLeft stagger-2`} />
        </div>
      </section>

      {/* ─────────── CONTENT SECTION ─────────── */}
      <section className={styles.contentSection}>
        <div className={styles.contactGrid}>
          {/* Direct & Social Details */}
          <AnimeReveal direction="fade" duration={800}>
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
                    <span className={styles.detailVal}>Coimbatore, Tamil Nadu, India</span>
                  </div>
                </div>
              </div>

              {/* Trust & Guarantee Box */}
              <div className={styles.infoBlock} style={{ background: "rgba(163, 230, 53, 0.03)", border: "1px solid rgba(163, 230, 53, 0.2)", borderRadius: "12px", padding: "1.25rem" }}>
                <p style={{ color: "#a3e635", fontWeight: "700", marginBottom: "0.5rem" }}>⚡ Response Guarantee</p>
                <p style={{ color: "#d4d4d8", fontSize: "0.92rem", lineHeight: "1.5", marginBottom: "0.75rem" }}>
                  I respond to all recruiter inquiries and project briefs within 24 hours.
                </p>
                <p style={{ color: "#71717a", fontSize: "0.85rem" }}>
                  🔒 Direct to Sathish G — no assistants, no middleman agencies.
                </p>
              </div>

              <div className={styles.infoBlock}>
                <h3 className={styles.blockTitle}>Find Me Online</h3>
                <AnimeReveal stagger={80} direction="fade" delay={200}>
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
                        <span className={styles.socialName}>{soc.handle}</span>
                      </a>
                    ))}
                  </div>
                </AnimeReveal>
              </div>
            </div>
          </AnimeReveal>

          {/* Form */}
          <AnimeReveal direction="fade" duration={900}>
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
                    <label htmlFor="role" className={styles.label}>I am a:</label>
                    <select
                      id="role"
                      name="role"
                      value={formState.role}
                      onChange={handleChange}
                      className={styles.input}
                      style={{ background: "#000", color: "#fff" }}
                    >
                      <option value="Recruiter">Recruiter / Hiring Manager</option>
                      <option value="Founder">Founder / Business Owner</option>
                      <option value="Agency">Agency Partner</option>
                      <option value="Individual">Individual Client</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <label htmlFor="projectType" className={styles.label}>Project Type:</label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formState.projectType}
                      onChange={handleChange}
                      className={styles.input}
                      style={{ background: "#000", color: "#fff" }}
                    >
                      <option value="Flutter">Flutter Mobile App</option>
                      <option value="FullStack">Full Stack Web App (React / Next.js)</option>
                      <option value="Backend">Node.js Backend / REST API</option>
                      <option value="MVP">MVP Rapid Prototype</option>
                      <option value="Other">Consulting / Other</option>
                    </select>
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
                      rows={4}
                      placeholder="Tell me about your project or role requirements..."
                      value={formState.message}
                      onChange={handleChange}
                      className={styles.textarea}
                    />
                  </div>

                  {status === "error" && (
                    <div style={{ color: "#ef4444", fontSize: "0.9rem", marginBottom: "1rem", lineHeight: "1.4" }}>
                      ⚠️ {errorMsg}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className={styles.submitBtn}
                  >
                    {status === "idle" && "Send Message"}
                    {status === "sending" && "Sending..."}
                    {status === "success" && "Message Sent!"}
                    {status === "error" && "Try Again"}
                  </button>
                </form>
              </div>
            </div>
          </AnimeReveal>
        </div>
      </section>
    </main>
  );
}
