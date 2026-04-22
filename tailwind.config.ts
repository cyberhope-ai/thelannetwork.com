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
        // TLN brand placeholder palette — esports roots × modern tech
        // tweak with Rick's visual direction
        tln: {
          black: "#0a0a0f",
          ink: "#13131b",
          panel: "#1a1a26",
          line: "#2a2a3a",
          muted: "#7a7a8e",
          text: "#e6e6ee",
          accent: "#00e1ff",      // electric cyan — esports legacy nod
          accent2: "#a855f7",     // purple — modern tech
          warm: "#fbbf24",        // gold accent for credibility/awards
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
