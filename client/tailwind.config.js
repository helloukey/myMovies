/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      ...defaultTheme.screens,
    },
    extend: {
      boxShadow: {
        "hero-top-super-small": "0px 15px 17.5px 37.5px rgba(0,0,0,1)",
        "hero-top-small": "0px 30px 35px 75px rgba(0,0,0,1)",
        "hero-top": "0px -10px 100px 100px rgba(0,0,0,1)",
        "hero-right": "-990vw 0px 8vw 1000vw rgba(0,0,0,1)",
      },
      width: {
        "card-x-small": "calc(33.33% - 7.33326px)",
        "card-small": "calc(8.5% - 18px)",
        "card-large": "calc(20% - 14.4px)",
      },
      colors: {
        nav: "#000000",
        background: "#111111",
        card: "#222",
        tabs: "#333",
        "tab-active": "#444",
      },
    },
  },
  plugins: [require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    themes: ["dark"]
  },
};
