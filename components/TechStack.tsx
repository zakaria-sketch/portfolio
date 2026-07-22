"use client";

import { motion } from "framer-motion";
import { techStack } from "@/lib/data";

export default function TechStack() {
  return (
    <section id="stack" className="section-pad border-t border-hair bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-8"
        >
          Tech Stack
        </motion.p>

        <div className="flex flex-wrap gap-3">
          {techStack.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              className="font-mono text-sm px-4 py-2 rounded-lg border border-hair bg-page text-secondary hover:text-primary hover:border-accent transition-colors"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
