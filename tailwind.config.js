/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montheavy: ["MontHeavy", "sans-serif"],
        cannet: ["CannetAgency", "sans-serif"],
        goblin: ["GlitchGoblin", "sans-serif"],
      },
      boxShadow: {
        inner: "inset rgba(38, 255, 73, 0.1) 0px 0px 30px -12px",
      },
    },
  },
  plugins: [require("daisyui")],
};
