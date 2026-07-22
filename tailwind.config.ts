import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0B",
        surface: "#131316",
        border: {
          DEFAULT: "#232326",
          light: "#E5E5E7"
        },
        paper: "#FFFFFF",
        paperSurface: "#F7F7F8",
        accent: {
          DEFAULT: "#4F7EFF",
          soft: "#4F7EFF1A",
          glow: "#4F7EFF33"
        },
        muted: {
          DEFAULT: "#9A9AA2",
          light: "#6B6B76"
        }
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      backgroundImage: {
        "grid-dark": "linear-gradient(#232326 1px, transparent 1px), linear-gradient(90deg, #232326 1px, transparent 1px)",
        "grid-light": "linear-gradient(#E5E5E7 1px, transparent 1px), linear-gradient(90deg, #E5E5E7 1px, transparent 1px)"
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: "-200" }
        },
        floaty: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        dash: "dash 6s linear infinite",
        floaty: "floaty 6s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
