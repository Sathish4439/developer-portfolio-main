import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hire Sathish G — Flutter, Web & ERP Developer | WhatsApp · Email · Coimbatore",
  description: "Hire Sathish G directly for Flutter apps, React/Next.js web platforms, and custom ERP systems. Direct communication via WhatsApp (+91 78680 31207) or email. Fast response.",
  alternates: {
    canonical: "https://www.sathishdev.in/contact",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
