import Link from "next/link";
import styles from "./Testimonials.module.css";
import AnimeReveal from "./AnimeReveal";

const testimonials = [
  {
    quote:
      "Sathish engineered our cross-platform Flutter application and Node.js backend infrastructure seamlessly. His attention to sub-100ms API speeds and zero-crash mobile UI made a huge impact on our platform stability.",
    name: "Engineering Team",
    role: "Product & Tech Lead",
    company: "Dhigrowth",
    initial: "D",
    caseStudyHref: "/work/judah-food-delivery",
    caseStudyName: "Judah Food Delivery",
  },
  {
    quote:
      "Extremely reliable developer with deep expertise in Prisma ORM, AWS EC2 deployments, and Docker containers. Sathish delivered our full-stack enterprise web portal on time with exceptional code quality.",
    name: "Management Team",
    role: "Software Director",
    company: "Elanoxtech",
    initial: "E",
    caseStudyHref: "/work/virtual-2-live",
    caseStudyName: "Virtual 2 Live",
  },
  {
    quote:
      "Working with Sathish on Mayiliragu Academy LMS was fantastic. He handled everything from mobile app state management with BLoC to high-concurrency database queries effortlessly.",
    name: "Client Partner",
    role: "Founder & Product Owner",
    company: "Mayiliragu Academy",
    initial: "M",
    caseStudyHref: "/work/mayiliragu-academy",
    caseStudyName: "Mayiliragu Academy LMS",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.titleArea}>
        <span className={styles.badge}>VERIFIED WORK &amp; RECOMMENDATIONS</span>
        <h2 className={styles.sectionTitle}>Client &amp; Partner Feedback</h2>
      </div>

      <AnimeReveal stagger={100} direction="fade" delay={150}>
        <div className={styles.grid}>
          {testimonials.map((t) => (
            <div key={t.company} className={styles.card}>
              <p className={styles.quote}>&ldquo;{t.quote}&rdquo;</p>
              <div>
                <div className={styles.authorRow}>
                  <div className={styles.avatar}>{t.initial}</div>
                  <div>
                    <div className={styles.name}>{t.name}</div>
                    <div className={styles.roleCompany}>
                      {t.role} • {t.company}
                    </div>
                  </div>
                </div>
                {t.caseStudyHref && (
                  <Link href={t.caseStudyHref} className={styles.caseStudyLink}>
                    View Case Study: {t.caseStudyName} &rarr;
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </AnimeReveal>
    </section>
  );
}

