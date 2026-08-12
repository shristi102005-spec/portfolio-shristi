import { motion } from "framer-motion";
import { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative py-28 px-6 scroll-mt-28">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center"
        >
          {eyebrow && (
            <div className="inline-block text-xs uppercase tracking-[0.3em] text-[var(--neon-cyan)] mb-4">
              {eyebrow}
            </div>
          )}
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}