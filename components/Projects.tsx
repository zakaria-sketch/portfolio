"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="work" className="section-pad border-t border-hair">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-12"
        >
          <p className="eyebrow mb-4">Featured Projects</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            Five systems, built end to end.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className={`group block p-7 rounded-xl border border-hair bg-surface hover:border-accent transition-all duration-300 hover:-translate-y-1 ${
                i === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl font-semibold text-primary">
                  {p.title}
                </h3>
                <ArrowUpRight
                  size={20}
                  className="shrink-0 text-secondary group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>
              <p className="mt-3 text-sm text-secondary leading-relaxed">
                {p.description}
              </p>
              <p className="mt-3 font-mono text-xs text-accent">{p.impact}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-surface-2 text-secondary"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
