import { motion } from "framer-motion";
import { Section } from "./Section";

const stats = [
  { v: "5", l: "Featured Projects" },
  { v: "5", l: "Certifications" },
  { v: "2023–2027", l: "B.Tech (Final Year)" },
  { v: "AI/ML", l: "Specialization" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About" title="Engineer. Analyst. Builder.">
      <div className="grid md:grid-cols-5 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-2"
        >
          <div className="relative aspect-square rounded-3xl glass overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--neon-purple)]/30 via-transparent to-[var(--neon-cyan)]/30" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-9xl font-bold text-gradient">S</div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-[var(--neon-purple)] opacity-30 blur-3xl" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="md:col-span-3 space-y-6"
        >
          <p className="text-lg leading-relaxed text-foreground/80">
            I'm a final-year B.Tech Electronics Engineering student at MJPRU, Bareilly,
            specializing in{" "}
            <span className="text-foreground font-semibold">Artificial Intelligence & Machine Learning</span>.
            I build practical AI applications, RAG systems, LLM-powered tools, and
            data-driven solutions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My work spans Python and FastAPI backends, LangChain and vector databases,
            Google Gemini integrations, GCP / Vertex AI, and data analytics — from
            prototyping and evaluation through to shipping usable products.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
            {stats.map((s) => (
              <div key={s.l} className="glass rounded-2xl p-4 text-center">
                <div className="text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}