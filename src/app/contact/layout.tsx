import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get In Touch | Contact Sathish G",
  description: "Discuss project inquiries, freelance contract positions, or full-stack architectural needs directly with Sathish G. Based in Tamil Nadu, India.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
