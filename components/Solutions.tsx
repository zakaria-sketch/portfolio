"use client";

import { motion } from "framer-motion";
import { solutions } from "@/lib/data";

export default function Solutions() {
  return (
    <section id="solutions" className="section-pad border-t border-hair bg-surface/40">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-12"
        >
          <p className="eyebrow mb-4">My Solutions</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            Automation built around what your business actually needs.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {solutions.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="group p-6 rounded-xl border border-hair bg-page hover:border-accent hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-mono text-xs text-accent">{s.tag}</span>
              <h3 className="mt-3 font-display text-lg font-semibold text-primary">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-secondary leading-relaxed">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
