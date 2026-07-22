"use client";

import { motion } from "framer-motion";
import { metrics, enterpriseLogos } from "@/lib/data";

export default function WhyWorkWithMe() {
  return (
    <section className="section-pad border-t border-hair">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-8"
        >
          Why Work With Me
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-8 mb-16">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <p className="font-display text-4xl md:text-5xl font-semibold text-primary">
                {m.value}
              </p>
              <p className="mt-2 text-sm text-secondary">{m.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="pt-10 border-t border-hair">
          <p className="text-xs text-secondary mb-6 font-mono uppercase tracking-wider">
            Enterprise experience
          </p>
          <div className="flex flex-wrap gap-x-10 gap-y-4">
            {enterpriseLogos.map((logo) => (
              <span
                key={logo}
                className="font-display text-lg font-medium text-secondary hover:text-primary transition-colors"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
