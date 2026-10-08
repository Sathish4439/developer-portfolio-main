import Link from "next/link";
import styles from "./Footer.module.css";

const footerNav = {
  Services: [
    { label: "Flutter Dev", href: "/services/flutter-development" },
    { label: "React Web Dev", href: "/services/react-development" },
    { label: "Node.js Backend", href: "/services/nodejs-development" },
    { label: "Full Stack & Cloud", href: "/services/full-stack-development" },
    { label: "ERP Software Dev", href: "/erp-software-developer-coimbatore" },
    { label: "Windows Desktop Apps", href: "/windows-desktop-app-developer" },
    { label: "Custom Software Dev", href: "/custom-software-development-coimbatore" },
  ],
  "Locations & Hiring": [
    { label: "Web Dev Coimbatore", href: "/web-developer-coimbatore" },
    { label: "Web Dev Karur", href: "/web-developer-karur" },
    { label: "Hire Flutter Coimbatore", href: "/hire-flutter-developer-coimbatore" },
    { label: "Flutter Dev Coimbatore", href: "/flutter-developer-coimbatore" },
    { label: "App Developer Karur", href: "/app-developer-karur" },
    { label: "ERP Dev Coimbatore", href: "/erp-software-developer-coimbatore" },
    { label: "Hire Flutter Dev", href: "/hire-flutter-developer" },
    { label: "Full Stack Developer", href: "/full-stack-developer" },
  ],
  Work: [
    { label: "Portfolio", href: "/work" },
    { label: "Projects", href: "/work" },
  ],
  Contact: [
    { label: "Email Me", href: "mailto:sathishg.dev@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/sathishgobi/" },
    { label: "GitHub", href: "https://github.com/Sathish4439" },
    { label: "Google Play Store", href: "https://play.google.com/store/apps/dev?id=6517030172709793171&hl=en_IN" },
    { label: "LeetCode", href: "https://leetcode.com/Sathish4439" },
  ],
};

const socials = [
  { label: "GitHub", href: "https://github.com/Sathish4439" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sathishgobi/" },
  { label: "PlayStore", href: "https://play.google.com/store/apps/dev?id=6517030172709793171&hl=en_IN" },
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
        <div className={styles.bottom}>
          <span className={styles.copy}>© {year} Sathish G. All rights reserved.</span>
          <span className={styles.copy}>Built with Next.js &amp; ♥</span>
        </div>
      </div>
    </footer>
  );
}
