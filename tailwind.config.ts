import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-bg-dark': '#1A1B1E',
        'custom-card-dark': '#27282A',
        'custom-border-light': '#F5F6F8',
        'custom-orange': '#FC6A53',
        'custom-purple': '#AF64F3',
        'custom-text-light': '#EAEAEA',
        'custom-text-dark': '#1A1B1E',
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)'],
      },
    },
  },
  plugins: [],
};
export default config; 