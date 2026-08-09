import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Sathish G — Flutter Developer for Project Inquiry | Coimbatore",
  description: "Discuss project proposals, freelance contracts, or technical architectures directly with Sathish G, a top-rated Flutter and Full Stack Developer based in Coimbatore, Tamil Nadu.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
