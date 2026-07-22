"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Github, Mail, MessageCircle } from "lucide-react";

const fields = [
  { name: "name", label: "Name", type: "text" },
  { name: "email", label: "Email", type: "email" },
  { name: "company", label: "Company", type: "text" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Wire this up to your form backend of choice (Formspree, Resend, etc.)
    setSent(true);
  };

  return (
    <section id="contact" className="section-pad border-t border-hair bg-surface/40">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow mb-4">Contact</p>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-primary tracking-tight mb-8">
            Have a process worth automating?
          </h2>
        </motion.div>

        {sent ? (
          <div className="p-6 rounded-xl border border-accent/40 bg-accent-soft text-primary">
            Message sent. I&apos;ll reply within a day.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              {fields.map((f) => (
                <div key={f.name}>
                  <label className="block text-xs font-mono text-secondary mb-2">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    required={f.name !== "company"}
                    className="w-full px-4 py-3 rounded-lg bg-page border border-hair text-primary text-sm focus:border-accent outline-none transition-colors"
                  />
                </div>
              ))}
            </div>
            <div>
              <label className="block text-xs font-mono text-secondary mb-2">
                Budget
              </label>
              <select className="w-full px-4 py-3 rounded-lg bg-page border border-hair text-primary text-sm focus:border-accent outline-none transition-colors">
                <option>Under $1,000</option>
                <option>$1,000 – $5,000</option>
                <option>$5,000 – $15,000</option>
                <option>$15,000+</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-mono text-secondary mb-2">
                Project Description
              </label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-page border border-hair text-primary text-sm focus:border-accent outline-none transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg bg-accent text-white text-sm font-medium hover:brightness-110 transition-all hover:-translate-y-0.5"
            >
              Submit
            </button>
          </form>
        )}

        <div className="mt-12 pt-8 border-t border-hair flex gap-5">
          <a href="https://www.linkedin.com/in/zakariamoustakim" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-secondary hover:text-accent transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-secondary hover:text-accent transition-colors">
            <Github size={20} />
          </a>
          <a href="mailto:zakariamous97@gmail.com" aria-label="Email" className="text-secondary hover:text-accent transition-colors">
            <Mail size={20} />
          </a>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-secondary hover:text-accent transition-colors">
            <MessageCircle size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
