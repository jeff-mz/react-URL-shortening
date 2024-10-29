/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "hsl(180, 66%, 49%)",
        gray: "hsl(0, 0%, 75%)",
        red: " hsl(0, 87%, 67%)",
        dark_blue: "hsl(255, 11%, 22%)",
        violet: {
          dark: "hsl(257, 27%, 26%)",
          very_dark: "hsl(260, 8%, 14%)",
          grayish: "hsl(257, 7%, 63%)",
        },
      },
    },
  },
  plugins: [],
};
