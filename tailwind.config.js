/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Liệt kê các tệp cần quét
  ],
  daisyui: {
    themes: ["light", "dark", "winter"],
  },
  plugins: [require("daisyui"), require("tailwind-scrollbar")],
  variants: {
    scrollbar: ["rounded"],
  },
};
