import { motion } from "framer-motion";
import { Section } from "./Section";
import { ArrowUpRight, Github } from "lucide-react";

const projects = [
  {
    title: "NeuralVision — Real-time Object Detection",
    desc: "End-to-end YOLOv8 pipeline with custom dataset, deployed on edge devices with sub-50ms inference.",
    tags: ["PyTorch", "YOLOv8", "OpenCV", "FastAPI"],
    gradient: "from-fuchsia-500/40 via-purple-500/30 to-indigo-500/40",
  },
  {
    title: "InsightDash — Analytics Platform",
    desc: "Interactive BI dashboard turning 1M+ rows of sales data into actionable forecasts with ML.",
    tags: ["Python", "Power BI", "Prophet", "SQL"],
    gradient: "from-cyan-400/40 via-blue-500/30 to-indigo-500/40",
  },
  {
    title: "SentimentAI — NLP Engine",
    desc: "Fine-tuned transformer for multilingual sentiment analysis, serving 10k+ daily requests.",
    tags: ["BERT", "HuggingFace", "Docker", "AWS"],
    gradient: "from-emerald-400/40 via-teal-500/30 to-cyan-500/40",
  },
  {
    title: "SmartGrid IoT Monitor",
    desc: "Embedded ML model on ESP32 predicting power anomalies in real-time across a microgrid.",
    tags: ["TinyML", "ESP32", "MQTT", "TensorFlow Lite"],
    gradient: "from-orange-400/40 via-pink-500/30 to-rose-500/40",
  },
  {
    title: "MedScan — Diagnostic Assistant",
    desc: "CNN-based medical imaging classifier achieving 96% accuracy on chest X-ray benchmarks.",
    tags: ["Keras", "CNN", "Streamlit", "Kaggle"],
    gradient: "from-violet-500/40 via-fuchsia-500/30 to-pink-500/40",
  },
  {
    title: "EchoBot — Conversational AI",
    desc: "RAG chatbot with vector search over private knowledge bases. Built for enterprise use cases.",
    tags: ["LangChain", "OpenAI", "Pinecone", "Next.js"],
    gradient: "from-sky-400/40 via-cyan-500/30 to-teal-500/40",
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