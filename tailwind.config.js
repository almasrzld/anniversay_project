/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        anton: ["Anton", "Anton Placeholder", "sans-serif"],
        francois: ["Francois One", "Francois One Placeholder", "sans-serif"],
        serif: ["Playfair Display", "Georgia", "serif"],
      },
      container: {
        center: true,
        padding: "2rem",
      },
    },
  },
  plugins: [],
};
