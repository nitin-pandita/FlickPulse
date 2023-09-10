/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        ex: { max: "399px" }, // Custom breakpoint for max-width: 399px
      },
      colors: {
        primary: "#2f7fc5",
      },
      fontWeight: {
        "extra-light": 100,
        "extra-bold": 800,
      },
    },
  },
  plugins: [],
};
