"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const links = [
  { href: "#work", label: "Work" },
  { href: "#solutions", label: "Solutions" },
  { href: "#stack", label: "Stack" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const stored = (localStorage.getItem("theme") as "dark" | "light") || "dark";
    setTheme(stored);
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
    document.documentElement.classList.toggle("light", next === "light");
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-page/80 backdrop-blur-md border-b border-hair" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight text-primary">
          Zakaria<span className="text-accent">.</span>Moustakim
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark and light theme"
            className="relative w-11 h-6 rounded-full bg-surface-2 border border-hair flex items-center px-0.5 transition-colors"
          >
            <span
              className={`absolute w-5 h-5 rounded-full bg-accent flex items-center justify-center transition-transform duration-300 ${
                theme === "dark" ? "translate-x-0" : "translate-x-5"
              }`}
            >
              {theme === "dark" ? (
                <Moon size={11} className="text-white" />
              ) : (
                <Sun size={11} className="text-white" />
              )}
            </span>
          </button>

          <button
            className="md:hidden text-primary"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden bg-page border-b border-hair px-6 pb-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
