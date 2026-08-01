import Link from "next/link";
import styles from "./RelatedItems.module.css";

export interface RelatedItem {
  title: string;
  description?: string;
  href: string;
}

interface RelatedItemsProps {
  title?: string;
  items: RelatedItem[];
}

export default function RelatedItems({
  title = "Related Case Studies & Services",
  items,
}: RelatedItemsProps) {
  if (!items || items.length === 0) return null;

  return (
    <section className={styles.section}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.grid}>
        {items.map((item) => (
          <Link key={item.href} href={item.href} className={styles.card}>
            <div>
              <h4 className={styles.itemTitle}>{item.title}</h4>
              {item.description && <p className={styles.itemDesc}>{item.description}</p>}
            </div>
            <span className={styles.arrow}>Read More &rarr;</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
