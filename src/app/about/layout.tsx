import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sathish G — Full Stack & Flutter Engineer | Coimbatore",
  description:
    "Background, tech stack, and shipped projects of Sathish G, a full stack and mobile engineer specializing in Flutter, Node.js, PostgreSQL, and AWS.",
  alternates: {
    canonical: "https://www.sathishdev.in/about",
  },
  openGraph: {
    title: "About Sathish G — Full Stack & Flutter Engineer | Coimbatore",
    description:
      "Background, tech stack, and shipped projects of Sathish G, a full stack and mobile engineer specializing in Flutter, Node.js, PostgreSQL, and AWS.",
    url: "https://www.sathishdev.in/about",
    siteName: "Sathish G",
    type: "profile",
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
