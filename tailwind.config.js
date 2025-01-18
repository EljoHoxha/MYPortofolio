/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        black: {
          100: "#121212",
          200: "#1e1e1f",
          300: "#383838",
          400: "#2b2b2c",
        },
        white: {
          100: "hsl(0, 0%, 100%)",
        },
        primary: "#FF6363",
      },
      fontFamily: {
        body: ["Nunito"],
      },
      spacing: {
        7.5: "30px",
        15: "60px",
      },
      backgroundImage: {
        "gradient-dark":
          "linear-gradient(to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0%, 19%) 97%)",
      },
      borderRadius: {
        "4xl": "30px",
      },
    },
  },
  plugins: [],
};
