import Link from "next/link";
import styles from "./Footer.module.css";

const footerNav = {
  Services: [
    { label: "Flutter Dev", href: "/services" },
    { label: "Full Stack", href: "/services" },
    { label: "Node.js Backend", href: "/services" },
    { label: "AWS & DevOps", href: "/services" },
  ],
  Work: [
    { label: "Portfolio", href: "/work" },
    { label: "Projects", href: "/work" },
  ],
  Contact: [
    { label: "Email Me", href: "mailto:sathishg.dev@gmail.com" },
    { label: "LinkedIn", href: "https://linkedin.com/in/sathish-g-dev" },
    { label: "GitHub", href: "https://github.com/Sathish4439" },
    { label: "LeetCode", href: "https://leetcode.com/Sathish4439" },
  ],
};

const socials = [
  { label: "GitHub", href: "https://github.com/Sathish4439" },
  { label: "LinkedIn", href: "https://linkedin.com/in/sathish-g-dev" },
  { label: "Hashnode", href: "https://hashnode.com/@Sathish4439" },
  { label: "LeetCode", href: "https://leetcode.com/Sathish4439" },
  { label: "Email", href: "mailto:sathishg.dev@gmail.com" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      {/* Glow blob */}
      <div className={styles.glow} />

      <div className={styles.inner}>
        {/* Grid: brand + nav columns */}
        <div className={styles.grid}>
          {/* Brand column */}
          <div className={styles.brand}>
            <div className={styles.logo}>SATHISH.DEV</div>
            <p className={styles.tagline}>
              Building high-performance Flutter apps &amp; scalable full-stack systems.
              Clean code. Real results.
            </p>
            <div className={styles.socials}>
              {socials.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={styles.socialLink}
                >
                  {label[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(footerNav).map(([title, links]) => (
            <div key={title} className={styles.col}>
              <h4 className={styles.colTitle}>{title}</h4>
              <ul className={styles.colLinks}>
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      className={styles.colLink}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Watermark */}
        <div className={styles.watermark}>PORTFOLIO</div>

        {/* Bottom bar */}
        {/* <div className={styles.bottom}>
          <span className={styles.copy}>© {year} Sathish G. All rights reserved.</span>
          <span className={styles.copy}>Built with Next.js &amp; ♥</span>
        </div> */}
      </div>
    </footer>
  );
}
