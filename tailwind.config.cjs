/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        biltong: "#3d0000",
        "captain-blue": "#03506f",
        "deepest-water": "#476072",
        "fog-of-war": "#0c2233",
        infinity: "#222831",
        "super-silver": "#eeeeee",
        "vampire-bite": "#c70039",
      },
      fontFamily: {
        "berkshire-wash": ["Berkshire Swash", "cursive"],
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
