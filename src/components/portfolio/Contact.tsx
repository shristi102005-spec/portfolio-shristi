import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section id="contact" eyebrow="Let's Connect" title="Build something extraordinary." subtitle="Open to internships, collaborations, and full-time AI/ML roles starting 2026.">
      <div className="grid md:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 glass rounded-3xl p-7 flex flex-col justify-between"
        >
          <div>
            <h3 className="text-xl font-semibold mb-3">Reach out</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              I reply within 24 hours. Whether it's a project idea, opportunity, or just a hello — drop a line.
            </p>
          </div>
          <div className="space-y-3">
            <a href="mailto:shristi102005@gmail.com" className="flex items-center gap-3 text-sm hover:text-[var(--neon-cyan)] transition">
              <span className="w-9 h-9 rounded-lg glass-strong flex items-center justify-center"><Mail className="w-4 h-4" /></span>
              shristi102005@gmail.com
            </a>
            <a href="https://www.linkedin.com/in/shristi-483363295/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-[var(--neon-cyan)] transition">
              <span className="w-9 h-9 rounded-lg glass-strong flex items-center justify-center"><Linkedin className="w-4 h-4" /></span>
              linkedin.com/in/shristi-483363295
            </a>
            <a href="https://github.com/shristi102005-spec" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-[var(--neon-cyan)] transition">
              <span className="w-9 h-9 rounded-lg glass-strong flex items-center justify-center"><Github className="w-4 h-4" /></span>
              github.com/shristi102005-spec
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={(e) => { e.preventDefault(); setSent(true); }}
          className="md:col-span-3 glass rounded-3xl p-7 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[var(--neon-cyan)] transition text-sm" />
            <input required type="email" placeholder="Email" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[var(--neon-cyan)] transition text-sm" />
          </div>
          <input placeholder="Subject" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[var(--neon-cyan)] transition text-sm" />
          <textarea required rows={5} placeholder="Tell me about your project..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 outline-none focus:border-[var(--neon-cyan)] transition text-sm resize-none" />
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] text-white hover:opacity-95 transition animate-pulse-glow"
          >
            {sent ? "Message sent ✓" : (<>Send message <Send className="w-4 h-4" /></>)}
          </button>
        </motion.form>
      </div>

      <div className="mt-20 pt-8 border-t border-white/5 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Shristi · Crafted with care · AI/ML Engineer
      </div>
    </Section>
  );
}