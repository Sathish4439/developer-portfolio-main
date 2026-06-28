import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Sathish G | Flutter Developer in Coimbatore, Tamil Nadu",
  description: "Read the professional journey, core technical skillset, and stats of Sathish G, a senior Flutter app developer and Full Stack engineer based in Coimbatore, Tamil Nadu.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
