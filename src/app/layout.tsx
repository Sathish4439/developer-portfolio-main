import type { Metadata } from "next";
import "./globals.css";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import PageTransition from "src/components/PageTransition";
import SmoothScrollProvider from "src/components/SmoothScrollProvider";
import MobileStickyBar from "src/components/MobileStickyBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sathishdev.in"),
  title: "Sathish G — Flutter & Node.js Developer | Coimbatore, India",
  description:
    "Hire Sathish G — Flutter, Node.js and React full-stack developer in Coimbatore, India. Mobile apps, REST APIs, and scalable web solutions for startups.",
  authors: [{ name: "Sathish G" }],
  alternates: {
    canonical: "https://www.sathishdev.in/",
  },
  openGraph: {
    title: "Sathish G — Flutter & Node.js Developer | Coimbatore, India",
    description:
      "Hire Sathish G — Flutter, Node.js and React full-stack developer in Coimbatore, India. Mobile apps, REST APIs, and scalable web solutions for startups.",
    url: "https://www.sathishdev.in",
    siteName: "Sathish G",
    type: "website",
    images: [
      {
        url: "https://www.sathishdev.in/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Sathish G — Flutter & Node.js Developer in Coimbatore, India",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathish G — Flutter & Node.js Developer | Coimbatore, India",
    description:
      "Hire Sathish G — Flutter, Node.js and React full-stack developer in Coimbatore, India. Mobile apps, REST APIs, and scalable web solutions for startups.",
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
                  },
                  {
                    "@type": "City",
                    "name": "Tiruppur"
                  },
                  {
                    "@type": "City",
                    "name": "Erode"
                  },
                  {
                    "@type": "City",
                    "name": "Salem"
                  },
                  {
                    "@type": "City",
                    "name": "Pollachi"
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
                  "https://www.instagram.com/sathishdev_in/",
                  "https://play.google.com/store/apps/dev?id=6517030172709793171&hl=en_IN",
                  "https://leetcode.com/u/aravindsathish0885/",
                  "https://dev.to/5119__sathishg_d4ba94816",
                  "https://hashnode.com/@sathish4439"
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
                    "@type": "City",
                    "name": "Tiruppur",
                    "sameAs": "https://en.wikipedia.org/wiki/Tiruppur"
                  },
                  {
                    "@type": "City",
                    "name": "Erode",
                    "sameAs": "https://en.wikipedia.org/wiki/Erode"
                  },
                  {
                    "@type": "City",
                    "name": "Salem",
                    "sameAs": "https://en.wikipedia.org/wiki/Salem,_Tamil_Nadu"
                  },
                  {
                    "@type": "City",
                    "name": "Pollachi",
                    "sameAs": "https://en.wikipedia.org/wiki/Pollachi"
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
