import { motion } from "framer-motion";
import { Section } from "./Section";
import { Award, GraduationCap } from "lucide-react";

const certs = [
  { name: "Generative AI Studio (Vertex AI)", issuer: "Google Cloud" },
  { name: "Introduction to Generative AI", issuer: "Google Cloud" },
  { name: "Introduction to Machine Learning", issuer: "Kaggle" },
  { name: "AWS Artificial Intelligence Practitioner Learning Plan", issuer: "Completed learning plan (not a certification)" },
  { name: "VLSI for Beginners: Verilog, FPGA & VLSI CAD", issuer: "NIELIT" },
];

const edu = [
  {
    school: "B.Tech — Electronics Engineering",
    place: "MJPRU, Bareilly · Specialization: AI & Machine Learning",
    period: "2023 — 2027",
    detail: "Final-year student with a core focus on AI/ML, Generative AI, and data analytics.",
  },
  {
    school: "Diploma in Proficiency in German Language",
    place: "MJPRU, Bareilly",
    period: "Completed",
    detail: "Foreign language proficiency diploma.",
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