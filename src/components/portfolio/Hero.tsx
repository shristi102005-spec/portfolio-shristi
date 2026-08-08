import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowDown, Github, Linkedin, Mail, Sparkles } from "lucide-react";

const roles = [
  "Building AI Systems",
  "Creating Smart Experiences",
  "Exploring Generative AI",
  "Engineering with Data",
];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const current = roles[i];
    const speed = del ? 40 : 90;
    const t = setTimeout(() => {
      if (!del) {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) setTimeout(() => setDel(true), 1400);
      } else {
        const next = current.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((i + 1) % roles.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);
  return (
    <span className="text-gradient">
      {text}
      <span className="ml-1 inline-block w-[3px] h-[1em] -mb-1 bg-[var(--neon-cyan)] animate-pulse" />
    </span>
  );
}

function Particles() {
  const dots = Array.from({ length: 28 });
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((_, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`,
            width: 2 + (i % 4),
            height: 2 + (i % 4),
            background: i % 2 ? "var(--neon-cyan)" : "var(--neon-purple)",
            opacity: 0.6,
          }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 4 + (i % 5), repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  );
}

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg">
      {/* Blobs */}
      <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[var(--neon-purple)] opacity-20 blur-3xl animate-blob" />
      <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-[var(--neon-blue)] opacity-20 blur-3xl animate-blob" style={{ animationDelay: "5s" }} />
      <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-[var(--neon-cyan)] opacity-15 blur-3xl animate-blob" style={{ animationDelay: "10s" }} />
      <Particles />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-8 text-xs text-muted-foreground"
        >
          <Sparkles className="w-3.5 h-3.5 text-[var(--neon-cyan)]" />
          Open to opportunities · 2026
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05]"
        >
          Hi, I'm <span className="text-gradient">Shristi</span>
          <br />
          <span className="text-foreground/90">I build with</span>{" "}
          <Typewriter />
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground leading-relaxed"
        >
          I build practical AI applications and intelligent systems using Python, FastAPI,
          LLMs, RAG, and modern cloud technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] text-white animate-pulse-glow"
          >
            View Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold glass hover:bg-white/5 transition"
          >
            <Mail className="w-4 h-4" /> Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-12 flex items-center justify-center gap-5 text-muted-foreground"
        >
          <a href="https://github.com/shristi102005-spec" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground transition"><Github className="w-5 h-5" /></a>
          <a href="https://www.linkedin.com/in/shristi-483363295" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground transition"><Linkedin className="w-5 h-5" /></a>
          <a href="#contact" aria-label="Email" className="hover:text-foreground transition"><Mail className="w-5 h-5" /></a>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-foreground/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-foreground/40" />
        </motion.div>
      </div>
    </section>
  );
}