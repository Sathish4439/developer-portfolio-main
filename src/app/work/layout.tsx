import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Portfolio | Sathish G — Mobile Apps, Web Platforms, ERP & SaaS · 15+ Projects",
  description: "Explore Sathish G's software portfolio: 15+ production projects across Flutter iOS & Android apps, React/Next.js web platforms, custom ERP systems, and high-concurrency microservices.",
  alternates: {
    canonical: "https://www.sathishdev.in/work",
  },
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
