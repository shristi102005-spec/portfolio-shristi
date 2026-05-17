import { motion } from "framer-motion";
import { Section } from "./Section";
import { Brain, Code2, Database, LineChart, Cpu, Cloud, Sparkles } from "lucide-react";

const groups = [
  { icon: Code2, title: "Programming", items: ["Python", "SQL", "JavaScript"] },
  { icon: Brain, title: "AI / ML", items: ["Scikit-learn", "Pandas", "NumPy", "Hugging Face"] },
  { icon: Sparkles, title: "Generative AI", items: ["LangChain", "RAG", "FAISS", "ChromaDB", "OpenAI API", "Gemini API"] },
  { icon: LineChart, title: "Data Analytics", items: ["Power BI", "PostgreSQL", "EDA", "Dashboards"] },
  { icon: Cloud, title: "Cloud", items: ["GCP", "Vertex AI", "Google Cloud Skills Boost"] },
  { icon: Cpu, title: "Electronics & Hardware", items: ["VLSI", "FPGA", "Embedded Systems"] },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolkit" title="Skills & Stack" subtitle="A modern, end-to-end toolbox for shipping intelligent products.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {groups.map((g, i) => {
          const Icon = g.icon;
          return (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.07 }}
            className="group relative glass rounded-2xl p-6 hover:bg-white/5 transition-all hover:-translate-y-1"
          >
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                 style={{ background: "radial-gradient(circle at top, oklch(0.7 0.25 285 / 0.18), transparent 60%)" }} />
            <div className="relative">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[var(--neon-purple)]/30 to-[var(--neon-cyan)]/30 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-[var(--neon-cyan)]" />
              </div>
              <h3 className="text-lg font-semibold mb-3">{g.title}</h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span key={it} className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
          );
        })}
      </div>
    </Section>
  );
}