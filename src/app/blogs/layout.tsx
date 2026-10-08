import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dev Blog | Sathish G — Flutter, Node.js, AWS & ERP Engineering Insights",
  description: "In-depth technical articles and engineering guides by Sathish G covering Flutter optimization, Node.js microservices, Docker DevOps, and custom ERP systems.",
  alternates: {
    canonical: "https://www.sathishdev.in/blogs",
  },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
