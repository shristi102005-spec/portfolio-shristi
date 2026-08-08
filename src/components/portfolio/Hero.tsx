import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg"
    >
      {/* Restrained gradient — single soft glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[var(--neon-purple)] opacity-[0.12] blur-3xl pointer-events-none" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-24">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-medium uppercase tracking-[0.25em] text-muted-foreground mb-8"
        >
          Electronics Engineering • AI & ML
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1]"
        >
          Hi, I'm <span className="text-gradient">Shristi</span>.
        </motion.h1>

        {/* Second headline */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground/85 tracking-tight leading-tight"
        >
          I build practical AI systems.
        </motion.h2>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.28 }}
          className="mt-7 mx-auto max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          Electronics Engineering student specializing in AI & ML, building
          practical AI applications with Python, FastAPI, LLMs, RAG, and modern
          cloud technologies.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold bg-foreground text-background transition hover:opacity-90"
          >
            View My Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold glass hover:bg-white/5 transition"
          >
            <Mail className="w-4 h-4" /> Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Minimal scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-foreground/15 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-foreground/30" />
        </motion.div>
      </div>
    </section>
  );
}
