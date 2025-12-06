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
        white: "#fff",
        gray: "#aeb4a6",
        green: "#94de1d",
        dark: "#2B474B",
      },
      fontFamily: {
        sans: ["montserrat-g", "sans-serif"],
      },
      spacing: {
        index: "calc(1vw + 1vh)",
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease forwards",
        slideInLeft: "slideInLeft 0.3s ease forwards",
        slideInRight: "slideInRight 0.3s ease forwards",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(50px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

