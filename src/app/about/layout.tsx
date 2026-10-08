import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sathish G | Full-Stack Developer — Flutter, React, Node.js & ERP · 2+ Years",
  description: "Learn about Sathish G — Full-stack developer with 2+ years experience building Flutter mobile apps, React/Next.js web platforms, Node.js APIs & custom ERP software. 15+ apps shipped. Available to hire worldwide.",
  alternates: {
    canonical: "https://www.sathishdev.in/about",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
