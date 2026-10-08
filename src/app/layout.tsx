import type { Metadata } from "next";
import "./globals.css";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import PageTransition from "src/components/PageTransition";
import SmoothScrollProvider from "src/components/SmoothScrollProvider";
import MobileStickyBar from "src/components/MobileStickyBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sathishdev.in"),
  title: "Sathish G | Web, Flutter & Software Developer — 15+ Apps Shipped · Coimbatore, India",
  description:
    "Hire Sathish G — expert Flutter mobile, React/Next.js web, Node.js backend & ERP software developer. 15+ production apps. Serving startups and businesses in Coimbatore, Karur, India & worldwide.",
  keywords: [
    "Sathish G",
    "Web Developer Coimbatore",
    "Flutter Developer Coimbatore",
    "Software Developer Coimbatore",
    "ERP Software Developer Coimbatore",
    "Custom Software Development Coimbatore",
    "Windows Desktop App Developer",
    "Mobile App Developer Coimbatore",
    "React Developer Coimbatore",
    "Next.js Developer Coimbatore",
    "Node.js Developer Coimbatore",
    "Hire Flutter Developer Coimbatore",
    "App Developer Karur",
    "Web Developer Karur",
    "Software Developer Karur",
    "Flutter Developer Karur",
    "Hire Full Stack Developer",
    "Full Stack Engineer Tamil Nadu",
    "AWS DevOps Coimbatore",
    "Freelance Developer India",
    "Freelance Flutter Developer",
    "Freelance Web Developer Coimbatore",
  ],
  authors: [{ name: "Sathish G" }],
  alternates: {
    canonical: "https://www.sathishdev.in",
  },
  openGraph: {
    title: "Sathish G | Web, Flutter & Software Developer — 15+ Apps Shipped · Coimbatore, India",
    description:
      "Hire Sathish G — expert Flutter mobile, React/Next.js web, Node.js backend & ERP software developer. 15+ production apps. Serving startups and businesses in Coimbatore, Karur, India & worldwide.",
    url: "https://www.sathishdev.in",
    siteName: "Sathish G Portfolio",
    type: "website",
    images: [
      {
        url: "https://www.sathishdev.in/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Sathish G - Web, Flutter & Software Developer in Coimbatore & Karur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathish G | Web, Flutter & Software Developer — 15+ Apps Shipped · Coimbatore, India",
    description:
      "Hire Sathish G — expert Flutter mobile, React/Next.js web, Node.js backend & ERP software developer. 15+ production apps. Serving startups and businesses in Coimbatore, Karur, India & worldwide.",
    images: ["https://www.sathishdev.in/og-banner.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
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
                  "https://www.linkedin.com/in/sathishgobi/",
                  "https://play.google.com/store/apps/dev?id=6517030172709793171&hl=en_IN"
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
