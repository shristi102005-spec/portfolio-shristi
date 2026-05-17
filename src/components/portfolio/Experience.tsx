import { motion } from "framer-motion";
import { Section } from "./Section";
import { Briefcase } from "lucide-react";

const items = [
  {
    role: "AI/ML Engineering Intern",
    org: "Innovate Labs",
    period: "2025 — Present",
    desc: "Building production ML pipelines for predictive maintenance. Shipped models that reduced downtime by 32%.",
  },
  {
    role: "Data Analyst Intern",
    org: "DataPulse Analytics",
    period: "2024",
    desc: "Designed dashboards used by 50+ stakeholders. Automated weekly reporting saving 20 hours/week.",
  },
  {
    role: "Research Assistant — AI Lab",
    org: "University Research Group",
    period: "2024",
    desc: "Co-authored research on edge ML for embedded systems. Presented at internal symposium.",
  },
  {
    role: "Freelance Developer",
    org: "Independent",
    period: "2023 — Present",
    desc: "Delivered end-to-end ML & analytics solutions for early-stage startups and SMEs.",
  },
];

export function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Experience">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
        {items.map((it, i) => (
          <motion.div
            key={it.role}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative mb-10 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"} pl-12 md:pl-0`}
          >
            <div className="absolute left-2 md:left-auto md:right-[-9px] top-4 w-4 h-4 rounded-full bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-cyan)] animate-pulse-glow"
              style={i % 2 !== 0 ? { left: -9, right: "auto" } : undefined} />
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 text-xs text-[var(--neon-cyan)] uppercase tracking-wider mb-2">
                <Briefcase className="w-3.5 h-3.5" /> {it.period}
              </div>
              <h3 className="text-lg font-semibold">{it.role}</h3>
              <div className="text-sm text-muted-foreground mb-3">{it.org}</div>
              <p className="text-sm text-foreground/70 leading-relaxed">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}