/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(0, 0%, 100%)", // Background color for bg-background
        border: "hsl(214, 32%, 91%)",   // For border-border
        foreground: "hsl(222.2, 84%, 4.9%)"
      },
    },
  },
  plugins: [],
}
