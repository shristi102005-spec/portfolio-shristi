import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "NeuroNest AI — AI-Powered PDF Assistant",
    desc: "RAG chatbot over your documents with semantic PDF search, MCQ generation, and AI-powered summarization.",
    tags: ["Python", "LangChain", "FAISS", "ChromaDB", "Hugging Face", "OpenAI API", "Streamlit"],
    gradient: "from-fuchsia-500/40 via-purple-500/30 to-indigo-500/40",
  },
  {
    title: "Synckro — Wearable Real-Time Translator",
    desc: "Multilingual wearable translator with speech-to-text, language detection, translation + TTS, and broadcast/whisper modes.",
    tags: ["Python", "Vosk", "Deep Translator", "Argos Translate", "JavaScript"],
    gradient: "from-cyan-400/40 via-blue-500/30 to-indigo-500/40",
  },
  {
    title: "Customer Shopping Behavior Analysis",
    desc: "Retail transaction analysis with customer segmentation and a revenue insights dashboard for actionable decisions.",
    tags: ["Python", "PostgreSQL", "Power BI", "EDA"],
    gradient: "from-emerald-400/40 via-teal-500/30 to-cyan-500/40",
  },
  {
    title: "House Price Prediction",
    desc: "Comparative ML pipeline with hyperparameter tuning and RMSE optimization across regression models.",
    tags: ["Python", "Scikit-learn", "Machine Learning"],
    gradient: "from-orange-400/40 via-pink-500/30 to-rose-500/40",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Featured Projects" subtitle="A glimpse into what I've been building lately.">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative glass rounded-3xl overflow-hidden hover:-translate-y-1 transition-all duration-500"
          >
            <div className={`relative h-48 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
              <div className="absolute inset-0 opacity-30"
                style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
              <div className="absolute top-4 right-4 flex gap-2">
                <a className="w-9 h-9 rounded-full glass-strong flex items-center justify-center hover:scale-110 transition" href="#" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a className="w-9 h-9 rounded-full glass-strong flex items-center justify-center hover:scale-110 transition" href="#" aria-label="Live">
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}