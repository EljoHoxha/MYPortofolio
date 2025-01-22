/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        destructive: "red",
        primary: "",
        black: {
          100: "#121212",
          200: "#1e1e1f",
          300: "#383838",
          400: "#2b2b2c",
          "nav-bg": "hsla(240, 1%, 17%, 0.75)",
          "nav-light": "hsla(0, 1%, 17%, 0.25)",
        },
        white: {
          100: "hsl(0, 0%, 100%)",
          200: "hsl(0, 0%, 98%)",
        },
        primary: {
          100: "hsl(45, 100%, 72%)",
        },
        gray: {
          light: "hsl(0, 0%, 84%)",
          700: "hsla(0, 0%, 84%, 0.7)",
        },
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
        "yellow-gradient":
          "linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))",
        "gradiet-onyx":
          "linear-gradient( to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50% )",
        "gradient-jet":
          "linear-gradient( to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100% ), hsl(240, 2%, 13%)",
      },
      borderRadius: {
        "4xl": "30px",
      },
      boxShadow: {
        custom: "0 16px 40px hsla(0, 0%, 0%, 0.25)",
      },
    },
  },
  plugins: [],
};
