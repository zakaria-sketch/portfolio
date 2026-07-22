"use client";

import { motion } from "framer-motion";
import { process } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="section-pad border-t border-hair">
      <div className="mx-auto max-w-6xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-10"
        >
          Process
        </motion.p>

        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0">
          {process.map((step, i) => (
            <div key={step} className="flex md:flex-1 items-center gap-4 md:gap-0">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="md:flex-1 md:text-center"
              >
                <p className="font-display text-base md:text-lg font-medium text-primary">
                  {step}
                </p>
              </motion.div>
              {i < process.length - 1 && (
                <span className="hidden md:block text-accent/50 mx-2">→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
