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
        cream: {
          50: "#FDFCF9",
          100: "#FAF8F5",
          200: "#F5F2EB",
          300: "#EAE5DB",
          400: "#DDD7CD",
          500: "#C8BFB0",
          600: "#9A9080",
          700: "#6B6457",
          800: "#3D3830",
          900: "#1A1815",
        },
        surface: {
          base: "#FAF8F5",
          card: "#FFFFFF",
          subtle: "#F5F2EB",
          border: "#E7E2DA",
          "border-hover": "#D3CCC1",
        },
        charcoal: {
          900: "#171614",
          800: "#272522",
          700: "#3F3D38",
          600: "#5A5751",
          500: "#75726B",
          400: "#969289",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
