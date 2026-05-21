import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Palette: all reference CSS variables, so they update per theme */
        p: {
          bg:      "var(--bg)",
          surface: "var(--surface)",
          card:    "var(--card)",
          border:  "var(--border)",
          text:    "var(--text)",
          muted:   "var(--muted)",
          sub:     "var(--sub)",
          accent:  "var(--accent)",
          teal:    "var(--teal)",
          shine:   "var(--shine)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "fade-in":  "fadeIn 0.6s ease-out forwards",
        "fade-up":  "fadeUp 0.7s ease-out forwards",
        "blink":    "blink 1s step-end infinite",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
