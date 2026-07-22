"use client";

import { motion } from "framer-motion";
import { timeline } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-pad border-t border-hair">
      <div className="mx-auto max-w-6xl px-6 grid md:grid-cols-[0.9fr_1.1fr] gap-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4">About</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight">
            From testing systems to teaching them.
          </h2>
          <p className="mt-5 text-secondary leading-relaxed">
            I spent five years in software QA and test engineering, verifying
            that complex systems — automotive diagnostics, security platforms
            — actually work the way they&apos;re supposed to. That habit of
            questioning every assumption is exactly what makes an automation
            trustworthy in production, not just impressive in a demo.
          </p>
          <p className="mt-4 text-secondary leading-relaxed">
            Today I build AI agents and workflow automations for businesses:
            voice receptionists, lead-gen pipelines, and internal tools that
            replace hours of manual work with something that just runs. I
            care less about the AI trend and more about the hours it gives
            back to the person running the business.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative pl-6"
        >
          <div className="absolute left-[7px] top-1 bottom-1 w-px bg-hair" />
          <ul className="space-y-8">
            {timeline.map((item, i) => (
              <li key={i} className="relative">
                <span className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-page border-2 border-accent" />
                <p className="font-mono text-xs text-accent">{item.year}</p>
                <p className="mt-1 text-primary font-medium">{item.role}</p>
                <p className="text-sm text-secondary">{item.org}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
