import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display"
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body"
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono"
});

export const metadata: Metadata = {
  title: "Zakaria Moustakim — AI Automation Engineer",
  description:
    "AI Automation Engineer helping businesses automate operations with AI agents, workflow automation, and intelligent systems.",
  metadataBase: new URL("https://zakariamoustakim.com"),
  openGraph: {
    title: "Zakaria Moustakim — AI Automation Engineer",
    description:
      "Helping businesses automate operations using AI agents, workflow automation, and intelligent systems.",
    type: "website"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          // Prevents theme flash: reads saved preference before paint
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var stored = localStorage.getItem('theme');
                  var theme = stored ? stored : 'dark';
                  document.documentElement.classList.toggle('dark', theme === 'dark');
                  document.documentElement.classList.toggle('light', theme === 'light');
                } catch (e) {}
              })();
            `
          }}
        />
      </head>
      <body
        className={`${display.variable} ${body.variable} ${mono.variable} font-body bg-ink text-white dark:bg-ink dark:text-white transition-colors duration-300`}
      >
        {children}
      </body>
    </html>
  );
}
