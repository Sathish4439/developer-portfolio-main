import type { Metadata } from "next";
import "./globals.css";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import PageTransition from "src/components/PageTransition";
import SmoothScrollProvider from "src/components/SmoothScrollProvider";
import MobileStickyBar from "src/components/MobileStickyBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sathishdev.in"),
  title: "Sathish G | Flutter & Mobile App Developer — Coimbatore & Karur",
  description:
    "Hire Sathish G — premier Flutter developer, mobile app engineer & full stack architect serving Coimbatore, Karur, and Tamil Nadu. 15+ shipped apps, custom web & cloud systems.",
  keywords: [
    "Sathish G",
    "Flutter Developer Coimbatore",
    "Flutter Developer in Coimbatore",
    "Mobile App Developer Coimbatore",
    "Software Developer Coimbatore",
    "Web Developer Coimbatore",
    "Hire Flutter Developer Coimbatore",
    "App Developer Karur",
    "Mobile App Developer Karur",
    "Software Developer Karur",
    "Flutter Developer Karur",
    "Web Developer Karur",
    "Hire App Developer Karur",
    "Hire Flutter Developer",
    "Hire Full Stack Developer",
    "Full Stack Engineer Tamil Nadu",
    "React Developer Coimbatore",
    "Node.js Developer Coimbatore",
    "AWS DevOps Coimbatore",
    "Freelance Developer India",
    "Freelance Flutter Developer",
    "Freelance Web Developer Coimbatore",
    "Freelance App Developer Tamil Nadu",
  ],
  authors: [{ name: "Sathish G" }],
  alternates: {
    canonical: "https://www.sathishdev.in",
  },
  openGraph: {
    title: "Sathish G | Flutter & Mobile App Developer — Coimbatore & Karur",
    description:
      "Full Stack Engineer & Mobile Systems Architect specializing in Flutter cross-platform apps, Node.js microservices, and cloud systems across Coimbatore, Karur, and Tamil Nadu.",
    url: "https://www.sathishdev.in",
    siteName: "Sathish G Portfolio",
    type: "website",
    images: [
      {
        url: "https://www.sathishdev.in/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Sathish G - Flutter & Mobile App Developer in Coimbatore & Karur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathish G | Flutter & Mobile App Developer — Coimbatore & Karur",
    description:
      "Full Stack Engineer & Mobile Systems Architect specializing in Flutter cross-platform apps, Node.js microservices, and cloud systems across Coimbatore, Karur, and Tamil Nadu.",
    images: ["https://www.sathishdev.in/og-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "@id": "https://www.sathishdev.in/#website",
                "name": "Sathish G — Flutter & Full Stack Developer Portfolio",
                "url": "https://www.sathishdev.in",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": {
                    "@type": "EntryPoint",
                    "urlTemplate": "https://www.sathishdev.in/work?q={search_term_string}"
                  },
                  "query-input": "required name=search_term_string"
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://www.sathishdev.in/#person",
                "name": "Sathish G",
                "url": "https://www.sathishdev.in",
                "image": "https://www.sathishdev.in/sathish.png",
                "jobTitle": "Full Stack Engineer & Mobile Systems Architect",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Coimbatore",
                  "addressRegion": "Tamil Nadu",
                  "addressCountry": "IN"
                },
                "workLocation": [
                  {
                    "@type": "City",
                    "name": "Coimbatore"
                  },
                  {
                    "@type": "City",
                    "name": "Karur"
                  }
                ],
                "knowsAbout": [
                  "Flutter Mobile App Development",
                  "Cross-Platform iOS & Android Apps",
                  "React & Next.js Frontend",
                  "Node.js Backend & Microservices",
                  "AWS Deployment & DevOps",
                  "Docker Containerization",
                  "PostgreSQL & Prisma ORM",
                  "Offline-First SQLite Architecture"
                ],
                "sameAs": [
                  "https://github.com/Sathish4439",
                  "https://www.linkedin.com/in/sathishgobi/"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "ProfessionalService",
                "@id": "https://www.sathishdev.in/#service",
                "name": "Sathish G — Mobile App & Software Development",
                "image": "https://www.sathishdev.in/sathish.png",
                "url": "https://www.sathishdev.in",
                "telephone": "+91-7868031207",
                "priceRange": "$$",
                "provider": {
                  "@id": "https://www.sathishdev.in/#person"
                },
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Coimbatore",
                  "addressRegion": "Tamil Nadu",
                  "addressCountry": "IN"
                },
                "areaServed": [
                  {
                    "@type": "City",
                    "name": "Coimbatore",
                    "sameAs": "https://en.wikipedia.org/wiki/Coimbatore"
                  },
                  {
                    "@type": "City",
                    "name": "Karur",
                    "sameAs": "https://en.wikipedia.org/wiki/Karur"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Tamil Nadu",
                    "sameAs": "https://en.wikipedia.org/wiki/Tamil_Nadu"
                  },
                  {
                    "@type": "Country",
                    "name": "India",
                    "sameAs": "https://en.wikipedia.org/wiki/India"
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <SmoothScrollProvider />
        <Navbar />
        <div style={{ flex: 1 }}>
          <PageTransition>{children}</PageTransition>
        </div>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
