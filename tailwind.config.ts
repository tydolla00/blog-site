// import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shadcn/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        worksans: "Work Sans, sans-serif",
      },
      colors: {
        purpleGrad: "#662d8c",
        pinkGrad: "#ed1e79",
        blueGrad: "#00aeef",
        redGrad: "#ed1c24",
        lightblueGrad: "#d2ffff",
        whiteGrad: "#0694c6",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      "lofi",
      {
        mytheme: {
          primary: "#38bdf8",
          secondary: "#f0abfc",
          accent: "#e7e5e4",
          neutral: "#272626",
          "base-100": "#000000",
          info: "#0000ff",
          success: "#008000",
          warning: "#ffff00",
          error: "#ff0000",
        },
      },
    ],
    darkTheme: "mytheme",
  },
  plugins: [
    `prettier-plugin-tailwindcss`,
    require("daisyui"),
    require("tailwindcss-animate"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
