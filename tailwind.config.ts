import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "fare-play": "url('/img/city.png'), url('/img/clouds.png') ",
        clouds: "url('/img/clouds.png')",
        city: "url('/img/city.png')",
      },
      fontFamily: {
        gohu: ["var(--font-gohu)"],
        pixeboy: ["var(--font-pixeboy)"],
      },
      backgroundPosition: {
        "top-center": "top center",
      },
    },
  },
  plugins: [],
};
export default config;
