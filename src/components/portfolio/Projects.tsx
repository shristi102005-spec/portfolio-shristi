import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight, Github } from "lucide-react";

type Project = {
  title: string;
  desc: string;
  tags: string[];
  gradient: string;
  github?: string;
  live?: string;
  features?: string[];
};

const featured: Project = {
  title: "AI Career Copilot — Full-Stack AI Career Assistant",
  desc:
    "Full-stack AI career assistant for resume optimization, job matching, cover letter generation, and interview preparation.",
  tags: ["Next.js", "FastAPI", "Python", "Google Gemini AI", "Tailwind CSS", "REST APIs"],
  gradient: "from-fuchsia-500/40 via-purple-500/30 to-indigo-500/40",
  github: "https://github.com/shristi102005-spec/AI-Career-Copilot",
  live: "https://ai-career-copilot-black.vercel.app",
  features: [
    "ATS resume analysis",
    "Job-match scoring",
    "AI resume tailoring (preserves original template)",
    "AI cover letter generation",
    "AI interview coach",
    "PDF / DOCX export",
    "Next.js frontend + FastAPI backend",
    "Google Gemini integration",
  ],
};

const projects: Project[] = [
  {
    title: "NeuroNest AI — AI-Powered Document Intelligence",
    desc: "RAG-based document intelligence system supporting semantic document search, context-aware Q&A, MCQ generation, and document summarization.",
    tags: ["Python", "LangChain", "FAISS", "ChromaDB", "Hugging Face", "OpenAI API", "Streamlit"],
    gradient: "from-violet-500/40 via-purple-500/30 to-indigo-500/40",
    github: "https://github.com/shristi102005-spec/NeuroNestAI",
  },
  {
    title: "Synckro — Real-Time Multilingual Translator",
    desc: "Real-time multilingual translation system using speech-to-text, language detection, translation, and text-to-speech with online/offline fallback.",
    tags: ["Python", "Vosk", "Deep Translator", "Argos Translate", "Pyttsx3", "JavaScript"],
    gradient: "from-cyan-400/40 via-blue-500/30 to-indigo-500/40",
  },
  {
    title: "Customer Shopping Behavior Analysis",
    desc: "Analyzed 3,900+ retail transactions through a Python → PostgreSQL → Power BI pipeline to identify customer segmentation, discount behavior, and revenue patterns.",
    tags: ["Python", "PostgreSQL", "Power BI", "EDA"],
    gradient: "from-emerald-400/40 via-teal-500/30 to-cyan-500/40",
  },
];

const additional: Project[] = [
  {
    title: "House Price Prediction",
    desc: "Comparative ML pipeline with hyperparameter tuning and RMSE optimization across regression models.",
    tags: ["Python", "Scikit-learn", "Machine Learning"],
    gradient: "from-orange-400/40 via-pink-500/30 to-rose-500/40",
  },
];

function Links({ p }: { p: Project }) {
  if (!p.github && !p.live) return null;
  return (
    <div className="flex flex-wrap gap-3 mt-5">
      {p.github && (
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold glass-strong hover:bg-white/10 transition"
        >
          <Github className="w-3.5 h-3.5" /> GitHub
        </a>
      )}
      {p.live && (
        <a
          href={p.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-blue)] text-white hover:opacity-95 transition"
        >
          Live Demo <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      )}
    </div>
  );
}

export function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Featured Projects" subtitle="A glimpse into what I've been building lately.">
      <motion.article
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="group relative glass rounded-3xl overflow-hidden mb-8"
      >
        <div className="grid lg:grid-cols-5">
          <div className={`relative min-h-40 lg:min-h-full lg:col-span-2 bg-gradient-to-br ${featured.gradient}`}>
            <div
              className="absolute inset-0 opacity-30"
              style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "20px 20px" }}
            />
            <div className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] px-3 py-1 rounded-full glass-strong">
              Flagship
            </div>
          </div>
          <div className="p-6 sm:p-8 lg:col-span-3">
            <h3 className="text-xl sm:text-2xl font-semibold mb-3">{featured.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{featured.desc}</p>
            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 mt-5 text-sm text-foreground/75">
              {featured.features?.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-[var(--neon-cyan)]">·</span> {f}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-5">
              {featured.tags.map((t) => (
                <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">{t}</span>
              ))}
            </div>
            <Links p={featured} />
          </div>
        </div>
      </motion.article>

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
            <div className={`relative h-40 sm:h-48 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
              <div className="absolute inset-0 opacity-30"
                style={{ backgroundImage: "radial-gradient(circle at 30% 30%, white 1px, transparent 1px)", backgroundSize: "20px 20px" }} />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">{t}</span>
                ))}
              </div>
              <Links p={p} />
            </div>
          </motion.article>
        ))}
      </div>

      <div className="mt-14">
        <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-5 text-center">Additional Projects</div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {additional.map((p) => (
            <div key={p.title} className="glass rounded-2xl p-5">
              <h4 className="font-semibold text-sm mb-1.5">{p.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-muted-foreground">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}