import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      colors: {
        tln: {
          // Actual TLN brand from the shield logos
          red:    "#DC2626",   // primary brand red — shield TLN letters
          sky:    "#5DADE2",   // shield blue background
          steel:  "#6B7280",   // shield border / metallic grey
          black:  "#0a0a0f",   // page background
          ink:    "#13131b",   // panel surface
          panel:  "#1a1a26",   // card surface
          line:   "#2a2a3a",   // borders
          muted:  "#7a7a8e",   // secondary text
          text:   "#e6e6ee",   // primary text
          // Heritage orange — used ONLY in /history, /esports legacy refs
          orange: "#F97316",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
