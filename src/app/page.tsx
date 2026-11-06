import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Credentials from "@/components/Credentials";
import Leadership from "@/components/Leadership";
import ContactCta from "@/components/ContactCta";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#E4E2E3] overflow-x-hidden">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Credentials />
      <Leadership />
      <ContactCta />
    </main>
  );
}
