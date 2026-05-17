import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award, GraduationCap } from "lucide-react";

const certs = [
  { name: "Google Data Analytics Professional", issuer: "Coursera · Google" },
  { name: "Machine Learning Specialization", issuer: "DeepLearning.AI · Stanford" },
  { name: "TensorFlow Developer Certificate", issuer: "Google" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
  { name: "Microsoft Power BI Data Analyst", issuer: "Microsoft" },
];

const edu = [
  {
    school: "B.Tech in Electronics Engineering (AI & ML)",
    place: "Indian Institute of Technology",
    period: "2022 — 2026",
    detail: "Specialization in Artificial Intelligence & Machine Learning. CGPA 3.9 / 4.0.",
  },
  {
    school: "Higher Secondary — Science (PCM)",
    place: "Delhi Public School",
    period: "2020 — 2022",
    detail: "Graduated with distinction. School topper in Mathematics.",
  },
];

export function Credentials() {
  return (
    <Section id="credentials" eyebrow="Education & Certifications" title="Credentials">
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-5 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            <GraduationCap className="w-4 h-4 text-[var(--neon-cyan)]" /> Education
          </div>
          <div className="space-y-4">
            {edu.map((e, i) => (
              <motion.div
                key={e.school}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-5"
              >
                <h4 className="font-semibold">{e.school}</h4>
                <div className="text-sm text-muted-foreground">{e.place} · {e.period}</div>
                <p className="text-sm text-foreground/70 mt-2">{e.detail}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-5 text-sm uppercase tracking-[0.25em] text-muted-foreground">
            <Award className="w-4 h-4 text-[var(--neon-cyan)]" /> Certifications
          </div>
          <div className="space-y-3">
            {certs.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-xl p-4 flex items-center justify-between gap-4 hover:bg-white/5 transition"
              >
                <div>
                  <div className="font-medium text-sm">{c.name}</div>
                  <div className="text-xs text-muted-foreground">{c.issuer}</div>
                </div>
                <Award className="w-4 h-4 text-[var(--neon-cyan)] shrink-0" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}