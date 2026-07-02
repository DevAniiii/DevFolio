"use client";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Project";
import TechStack from "@/components/technologies/techstack";
import About from "@/components/technologies/LogoLoop";
import Hero from "@/section/Hero";
import Contact from "@/components/footer/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Hero />
      <Experience />
      <TechStack />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
