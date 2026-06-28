import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sathish G | Full Stack Engineer & Flutter Developer",
  description: "Learn more about Sathish G's 2+ years of experience, professional journey, skill set, stats, and background in building high-performance cross-platform applications.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
