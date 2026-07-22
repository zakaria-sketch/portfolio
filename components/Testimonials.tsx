"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { testimonial } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section-pad border-t border-hair bg-surface/40">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className="text-accent fill-accent" />
            ))}
          </div>
          <p className="font-display text-xl md:text-2xl text-primary leading-relaxed">
            &ldquo;{testimonial.quote}&rdquo;
          </p>
          <p className="mt-6 text-sm text-secondary">
            <span className="text-primary font-medium">{testimonial.name}</span>
            {" · "}
            {testimonial.company}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
