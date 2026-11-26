import Link from "next/link";
import styles from "./Footer.module.css";

const footerNav = {
  Services: [
    { label: "Flutter Mobile Apps", href: "/services/flutter-development" },
    { label: "React & Next.js Web", href: "/services/react-development" },
    { label: "Node.js & Microservices", href: "/nodejs-developer" },
    { label: "Full Stack Engineering", href: "/full-stack-developer" },
    { label: "Custom ERP & Billing", href: "/erp-software-developer-coimbatore" },
    { label: "Windows Desktop Apps", href: "/windows-desktop-app-developer" },
    { label: "Custom Software Dev", href: "/custom-software-development-coimbatore" },
  ],
  "Locations & Hiring": [
    { label: "Freelance Flutter Developer", href: "/freelance-flutter-developer" },
    { label: "Flutter Dev Coimbatore", href: "/flutter-app-development-coimbatore" },
    { label: "Garment ERP Tirupur", href: "/garment-erp-software-tirupur" },
    { label: "App Developer Karur", href: "/app-developer-karur" },
    { label: "Web Dev Coimbatore", href: "/web-developer-coimbatore" },
    { label: "Web Dev Karur", href: "/web-developer-karur" },
  ],
  Work: [
    { label: "VoiceVertick AI Telephony", href: "/work/voice-vertick" },
    { label: "FlatSMS Android Gateway", href: "/work/flatsms-sms-gateway" },
    { label: "MyShop POS & ERP", href: "/work/myshop-pos" },
    { label: "MyShop — Grocery Billing POS (Live Site)", href: "https://myshop.sathishdev.in" },
    { label: "MyShop Instagram (@myshop.billing)", href: "https://www.instagram.com/myshop.billing/" },
    { label: "All Case Studies & Work", href: "/work" },
  ],
  Contact: [
    { label: "WhatsApp Instant Chat", href: "https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20project" },
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
  { label: "WhatsApp", href: "https://wa.me/917868031207?text=Hi%20Sathish,%20I%20would%20like%20to%20discuss%20a%20project" },
  { label: "Instagram", href: "https://www.instagram.com/myshop.billing/" },
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
