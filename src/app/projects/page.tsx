import Projects from "@/components/Projects";
import ContactCta from "@/components/ContactCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Ankit Giri — Senior Full Stack Java Engineer",
  description:
    "Selected project portfolio: enterprise platforms, data reconciliation systems, AWS automation, AI analytics, mobile applications, real-time logistics and e-commerce platforms.",
};

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen bg-white overflow-x-hidden">
      <Projects variant="full" />
      <ContactCta />
    </main>
  );
}
