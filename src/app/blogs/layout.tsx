import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Technical Articles & Blogs | Sathish G",
  description: "Read publications by Sathish G covering Flutter performance optimization, Express microservice scaling with Docker, and sub-100ms real-time synchronization pipelines.",
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
