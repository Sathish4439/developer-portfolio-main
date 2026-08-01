import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Deploying Node.js Apps on AWS EC2 with Docker & Nginx | Sathish G",
  description:
    "Step-by-step production guide for containerizing Node.js microservices with Docker, configuring Nginx reverse proxying, and deploying onto AWS EC2 with free SSL certificates.",
  alternates: {
    canonical: "https://www.sathishdev.in/blogs/devops-aws-docker-guide",
  },
  openGraph: {
    title: "Deploying Node.js Apps on AWS EC2 with Docker & Nginx | Sathish G",
    description: "Production guide for Dockerized Node.js deployment on AWS EC2 with Nginx & Certbot.",
    url: "https://www.sathishdev.in/blogs/devops-aws-docker-guide",
  },
};

export default function DevOpsAwsDockerGuideBlog() {
  return (
    <main className={`${styles.wrapper} fadeIn`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Deploying Node.js Apps on AWS EC2 with Docker & Nginx",
            "description": "A practical guide to containerizing and deploying Node.js apps on AWS EC2.",
            "author": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "publisher": {
              "@type": "Person",
              "name": "Sathish G",
              "url": "https://www.sathishdev.in"
            },
            "datePublished": "2026-08-01",
            "url": "https://www.sathishdev.in/blogs/devops-aws-docker-guide"
          })
        }}
      />

      <div className={styles.container}>
        <div className={styles.backLinkWrap}>
          <Link href="/blogs" className={styles.backLink}>
            <span className={styles.backIcon}>&larr;</span>
            <span className={styles.backText}>Back to Blogs</span>
          </Link>
        </div>

        <div className={styles.badge}>DEVOPS &amp; CLOUD</div>
        <h1 className={styles.title}>DEPLOYING NODE.JS APPS ON AWS EC2 WITH DOCKER &amp; NGINX</h1>

        <div className={styles.metaRow}>
          <span>Published: Aug 2026</span>
          <span>•</span>
          <span>8 min read</span>
          <span>•</span>
          <span>By Sathish G</span>
        </div>

        <article className={styles.articleBody}>
          <p>
            Deploying a Node.js REST API to production requires more than just running <code>node index.js</code>. For enterprise reliability, you need container isolation using Docker, reverse proxying with Nginx, process supervision, and automated SSL termination via Let&apos;s Encrypt.
          </p>

          <h2>1. Multi-Stage Dockerfile Strategy</h2>
          <p>
            To keep production Docker images minimal, use multi-stage builds. Separating your build layer from runtime dependencies reduces final image sizes by up to 75%:
          </p>
          <pre>{`# Build stage
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
RUN npm ci --only=production
EXPOSE 3000
CMD ["node", "dist/index.js"]`}</pre>

          <h2>2. Configuring Nginx Reverse Proxy</h2>
          <p>
            Nginx handles TLS termination, protects your internal Node.js port 3000, and enables request rate limiting. Here is a battle-tested server block configuration:
          </p>
          <pre>{`server {
    server_name api.yourdomain.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}`}</pre>

          <h2>3. Automated SSL &amp; EC2 Deployment</h2>
          <p>
            Once your Docker container is running on AWS EC2, run <code>sudo certbot --nginx -d api.yourdomain.com</code> to automatically request and install an SSL certificate. This setup ensures zero downtime and automated SSL renewals.
          </p>
        </article>
      </div>
    </main>
  );
}
