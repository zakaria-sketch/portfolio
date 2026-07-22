"use client";

import { ArrowUp } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-hair py-8">
      <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-secondary">
          © {new Date().getFullYear()} Zakaria Moustakim. All rights reserved.
        </p>
        <a
          href="#top"
          className="flex items-center gap-1.5 text-xs text-secondary hover:text-accent transition-colors"
        >
          Back to top <ArrowUp size={13} />
        </a>
      </div>
    </footer>
  );
}
