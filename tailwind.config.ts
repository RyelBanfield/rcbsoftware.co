import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {},

  plugins: [require("daisyui")],

  daisyui: {
    themes: [
      {
        rcbsoftware: {
          "base-100": "#09090B",
          "base-content": "#F7F3F5",
          primary: "#F7F3F5",
          secondary: "#B80000",
        },
      },
    ],
  },
} satisfies Config;
