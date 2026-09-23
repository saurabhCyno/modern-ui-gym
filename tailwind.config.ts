import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        foreground: "#FAFAFA",
        muted: {
          DEFAULT: "#27272A",
          foreground: "#A1A1AA",
        },
        accent: {
          DEFAULT: "#DFE104",
          foreground: "#000000",
        },
        border: "#3F3F46",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
        grotesk: ["var(--font-space-grotesk)", "Space Grotesk", "sans-serif"],
      },
      borderRadius: {
        none: "0px",
        DEFAULT: "0px",
        sm: "2px",
      },
      letterSpacing: {
        tighter: "-0.05em",
        tight: "-0.025em",
        normal: "0em",
        wide: "0.05em",
        wider: "0.1em",
        widest: "0.2em",
      },
      lineHeight: {
        none: "0.85",
        tight: "1.1",
        snug: "1.25",
        normal: "1.5",
      },
      animation: {
        "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
};

export default config;
