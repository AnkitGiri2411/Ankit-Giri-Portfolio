import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Credentials from "@/components/Credentials";
import Leadership from "@/components/Leadership";
import ContactCta from "@/components/ContactCta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Ankit Giri — Senior Full Stack Java Engineer",
  description:
    "Senior Full Stack Java Engineer with 6+ years of experience in Java, Spring Boot, microservices, REST APIs, Angular, React, AWS and cloud application development.",
};

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-palette-grey overflow-x-hidden">
      <About />
      <Experience />
      <Skills />
      <Credentials />
      <Leadership />
      <ContactCta />
    </main>
  );
}
