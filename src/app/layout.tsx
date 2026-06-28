import type { Metadata } from "next";
import "./globals.css";
import Navbar from "src/components/Navbar";
import Footer from "src/components/Footer";

export const metadata: Metadata = {
  title: "Sathish G — Full Stack Engineer & Flutter Developer",
  description:
    "Sathish G — Full Stack Engineer & Flutter Developer. Architecting high-performance Flutter mobile apps and scalable React/Node.js web applications deployed on AWS.",
  keywords: [
    "Sathish G",
    "Flutter Developer",
    "Full Stack Engineer",
    "Mobile App Developer",
    "Tamil Nadu",
    "Coimbatore",
    "React Developer",
    "Node.js Backend",
    "AWS DevOps",
    "Freelance Developer India",
  ],
  authors: [{ name: "Sathish G" }],
  openGraph: {
    title: "Sathish G — Full Stack Engineer & Flutter Developer",
    description: "Architecting high-performance Flutter mobile apps and scalable React/Node.js web applications deployed on AWS.",
    url: "https://sathish.qzz.io",
    siteName: "Sathish G Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sathish G — Full Stack Engineer & Flutter Developer",
    description: "Architecting high-performance Flutter mobile apps and scalable React/Node.js web applications deployed on AWS.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
