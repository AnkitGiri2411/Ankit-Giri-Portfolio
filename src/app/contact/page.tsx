import Contact from "@/components/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Ankit Giri",
  description: "Get in touch with Ankit Giri for freelance projects, design collaborations, or development opportunities.",
};

export default function ContactPage() {
  return (
    <main className="relative min-h-screen bg-palette-grey overflow-hidden">
      <Contact />
    </main>
  );
}
