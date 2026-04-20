import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#050505",
        "ink-soft": "#0D1117",
        graphite: "#111827",
        ocean: "#1EA7FF",
        "ocean-deep": "#0B84F3",
        muted: "#9CA3AF",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Arial", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      boxShadow: {
        "blue-line": "0 0 0 1px rgba(30,167,255,0.25)",
      },
    },
  },
  plugins: [],
};

export default config;
