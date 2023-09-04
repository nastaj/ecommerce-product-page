/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      black: "hsl(0, 0%, 0%)",
    },
    fontFamily: {
      sans: ['"Kumbh Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        "primary-orange": "hsl(26, 100%, 55%)",
        "primary-pale": "hsl(25, 100%, 94%)",
        "neutral-dark": "hsl(220, 13%, 13%)",
        "neutral-gray-1": "hsl(219, 9%, 45%)",
        "neutral-gray-2": "hsl(220, 14%, 75%)",
        "neutral-gray-3": "hsl(223, 64%, 98%)",
      },
      dropShadow: {
        glow: "0 10px 8px hsla(26, 100%, 55%, 0.5)",
      },
    },
    plugins: [],
  },
};
