import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { CursorGlow } from "@/components/portfolio/CursorGlow";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Credentials } from "@/components/portfolio/Credentials";
import { Contact } from "@/components/portfolio/Contact";
import { VoiceAgent } from "@/components/portfolio/VoiceAgent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shristi — AI/ML Engineer & Data Analyst" },
      { name: "description", content: "Portfolio of Shristi — AI/ML Engineer, Data Analyst, and Electronics Engineering student building intelligent, production-grade systems." },
      { property: "og:title", content: "Shristi — AI/ML Engineer & Data Analyst" },
      { property: "og:description", content: "Premium portfolio showcasing AI/ML projects, data analytics work, and engineering credentials." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative">
      <CursorGlow />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Credentials />
        <Contact />
      </main>
      <VoiceAgent />
    </div>
  );
}
