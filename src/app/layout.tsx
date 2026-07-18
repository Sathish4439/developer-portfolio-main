import type { Metadata } from "next";
import "./globals.css";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";
import PageTransition from "src/components/PageTransition";
import SmoothScrollProvider from "src/components/SmoothScrollProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sathishdev.in"),
  title: "Flutter Developer in Coimbatore | Sathish G",
  description:
    "Hire Sathish G, a top Flutter Developer and Full Stack Engineer based in Coimbatore, Tamil Nadu. Specializing in cross-platform mobile apps and scalable web platforms.",
  keywords: [
    "Sathish G",
    "Flutter Developer Coimbatore",
    "Flutter Developer in Coimbatore",
    "Web Developer Coimbatore",
    "Hire Flutter Developer",
    "Hire Full Stack Developer",
    "Full Stack Engineer Tamil Nadu",
    "Mobile App Developer Coimbatore",
    "React Developer Coimbatore",
    "Node.js Developer Coimbatore",
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
    title: "Flutter Developer in Coimbatore | Sathish G",
    description: "Hire Sathish G, a top Flutter Developer and Full Stack Engineer based in Coimbatore, Tamil Nadu. Specializing in cross-platform mobile apps and scalable web platforms.",
    url: "https://www.sathishdev.in",
    siteName: "Sathish G Portfolio",
    type: "website",
    images: [
      {
        url: "https://www.sathishdev.in/og-banner.png",
        width: 1200,
        height: 630,
        alt: "Sathish G - Flutter Developer in Coimbatore",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Flutter Developer in Coimbatore | Sathish G",
    description: "Hire Sathish G, a top Flutter Developer and Full Stack Engineer based in Coimbatore, Tamil Nadu. Specializing in cross-platform mobile apps and scalable web platforms.",
    images: ["https://www.sathishdev.in/og-banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Person",
                "@id": "https://www.sathishdev.in/#person",
                "name": "Sathish G",
                "url": "https://www.sathishdev.in",
                "image": "https://www.sathishdev.in/sathish.png",
                "jobTitle": "Full Stack Engineer & Flutter Developer",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Coimbatore",
                  "addressRegion": "Tamil Nadu",
                  "addressCountry": "IN"
                },
                "knowsAbout": [
                  "Flutter Mobile App Development",
                  "React & Next.js Frontend",
                  "Node.js Backend & microservices",
                  "AWS Deployment & DevOps",
                  "Docker Containerization",
                  "PostgreSQL & Prisma ORM"
                ],
                "sameAs": [
                  "https://github.com/Sathish4439",
                  "https://www.linkedin.com/in/sathishgobi/"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Sathish G — Flutter Developer & Full Stack Services",
                "image": "https://www.sathishdev.in/sathish.png",
                "@id": "https://www.sathishdev.in/#localbusiness",
                "url": "https://www.sathishdev.in",
                "telephone": "+91-XXXXXXXXXX",
                "priceRange": "$$",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Coimbatore",
                  "addressRegion": "Tamil Nadu",
                  "addressCountry": "IN"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 11.0168,
                  "longitude": 76.9558
                },
                "founder": {
                  "@id": "https://www.sathishdev.in/#person"
                },
                "areaServed": [
                  {
                    "@type": "AdministrativeArea",
                    "name": "Coimbatore"
                  },
                  {
                    "@type": "AdministrativeArea",
                    "name": "Tamil Nadu"
                  },
                  {
                    "@type": "Country",
                    "name": "India"
                  }
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "Who is the best Flutter developer in Coimbatore?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sathish G is a leading Flutter Developer in Coimbatore, Tamil Nadu, specializing in creating high-performance, cross-platform mobile apps with native capabilities."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Are there Full Stack Engineers available for hire in Tamil Nadu?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, Sathish G provides professional Full Stack engineering services in Tamil Nadu, specializing in React, Next.js, Node.js backends, and AWS deployment infrastructures."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "Does Sathish G accept freelance Flutter projects?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Yes, Sathish G is available for freelance contracts, MVP development, and full-time remote opportunities for businesses globally and locally in India."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": "What mobile app development services are available in Coimbatore?",
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Sathish G offers comprehensive mobile app development services in Coimbatore, including custom UI/UX design, state management integration, database synchronization, API deployment, and App Store publishing."
                    }
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body>
        <SmoothScrollProvider />
        <Navbar />
        <main style={{ flex: 1 }}>
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
