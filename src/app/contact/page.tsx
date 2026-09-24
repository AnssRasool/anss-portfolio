import { ContactView } from "@/components/ContactView";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Anss Rasool",
  description: "Get in touch with Anss Rasool - Full-Stack Developer.",
};

export default function ContactPage() {
  return <ContactView />;
}
