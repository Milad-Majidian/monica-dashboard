import { light } from "@mui/material/styles/createPalette";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#9373ee",
        primaryLight: "#F2EEFD",
        secondary: "#19bfd3",
        bgPrimary: "#f7f7f8",
        bgSecondary: "#FCFCFD",
        textPrimary: "#1a2448",
        textSecondary: "#747474",
        borderPrimary: "#EFEFEF",
        borderSecondary: "#EFEFEF",
      },
    },
  },
  plugins: [],
};
export default config;
