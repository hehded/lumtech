import type { Config } from "tailwindcss";
import { Oxanium } from "next/font/google";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        greeny: "#A6EB53",
        "light-black": "#131315",
        graytext: "#9F9F9F",
        rose: "#E33E5B",
        indigo: "#7560FF",
        lime: "#A6EB53",
        amber: "#F6DB4F",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    // Add the font file to the `fontFamily` configuration
    fontFamily: {
      Oxanium: ["Oxanium", "sans-serif"],
    },
    // Add the font file path to the `fontFace` configuration
    fontFace: {
      Oxanium: {
        file: "/fonts/Oxanium-VariableFont_wght.ttf",
        fontDisplay: "swap",
      },
    },
  },
  plugins: [],
};

export default config;
