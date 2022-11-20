/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        biltong: "#3d0000",
        "black-wash": "#0b0c11",
        "blue-genie": "#6763fd",
        "captain-blue": "#03506f",
        "clear-chill": "#1d90f4",
        "deepest-water": "#476072",
        downpour: "#9c9da2",
        "fog-of-war": "#0c2233",
        infinity: "#222831",
        "light-shotoku-purple": "#b84ef1",
        "navy-blazer": "#262d3a",
        "olympic-blue": "#5195ea",
        "rurikon-blue": "#1b2a4a",
        "scuff-blue": "#0449e9",
        "space-explorer": "#1a429c",
        "super-silver": "#eeeeee",
        "vampire-bite": "#c70039",
        "white-edgar": "#ededee",
      },
      fontFamily: {
        "berkshire-wash": ["Berkshire Swash", "cursive"],
        inter: ["Inter", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
