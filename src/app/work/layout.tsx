import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Selected Work | Sathish G — Case Studies & App Ecosystems",
  description: "Explore Sathish G's selected case studies, including real-time ride-hailing ecosystems, LMS systems, custom manufacturing ERPs, and vector-database chatbot dashboards.",
};

export default function WorkLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
