import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      dark: "#09090B",
      light: "#F7F3F5",
      red: "#B80000",
      gray: "#999999",
    },
  },

  plugins: [require("daisyui"), require("@tailwindcss/forms")],

  daisyui: {
    themes: [
      {
        rcbsoftware: {
          ".btn": {
            border: "none",
          },
        },
      },
    ],
  },
} satisfies Config;
