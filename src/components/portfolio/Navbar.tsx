import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className={`mx-auto max-w-6xl px-6 ${scrolled ? "glass-strong" : ""} rounded-2xl flex items-center justify-between`}>
        <a href="#hero" className="flex items-center gap-2 py-2">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[var(--neon-cyan)] to-[var(--neon-purple)] animate-pulse-glow" />
          <span className="font-semibold tracking-tight">Shristi</span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium bg-foreground text-background hover:opacity-90 transition"
        >
          Let's talk
        </a>
        <button onClick={() => setOpen(!open)} className="md:hidden p-2 text-foreground" aria-label="menu">
          <div className="space-y-1.5">
            <span className="block w-5 h-px bg-foreground" />
            <span className="block w-5 h-px bg-foreground" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden glass-strong mx-6 mt-2 rounded-2xl p-4 flex flex-col gap-3">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground hover:text-foreground">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </motion.nav>
  );
}