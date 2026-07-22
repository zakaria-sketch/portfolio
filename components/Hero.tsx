"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import WorkflowBackground from "./WorkflowBackground";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 pointer-events-none">
        <WorkflowBackground />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="eyebrow mb-5">Hi, I&apos;m</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-primary leading-[1.05]">
            Zakaria Moustakim
          </h1>
          <p className="mt-4 text-lg md:text-xl text-secondary font-medium">
            AI Automation Engineer
          </p>
          <p className="mt-5 max-w-lg text-secondary leading-relaxed">
            Helping businesses automate operations using AI agents, workflow
            automation, and intelligent systems — built to run in production,
            not just in a demo.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="px-5 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:brightness-110 transition-all hover:-translate-y-0.5"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-5 py-3 rounded-lg border border-hair text-primary text-sm font-medium hover:border-accent transition-colors hover:-translate-y-0.5"
            >
              Let&apos;s Build Together
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
          className="relative mx-auto"
        >
          <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden border border-hair shadow-[0_0_60px_-15px_var(--accent-glow)]">
            <Image
              src="/images/zakaria.jpeg"
              alt="Portrait of Zakaria Moustakim"
              fill
              sizes="(max-width: 768px) 224px, 288px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
