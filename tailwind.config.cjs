/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{ts,tsx,astro}",
    "./components/**/*.{ts,tsx,astro}",

    // Or if using `src` directory:
    "./src/**/*.{ts,tsx,astro}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          700: "hsla(240deg 4.48%, 15%)",
          800: "hsla(240deg 4.48%, 6%)",
          900: "hsla(240deg 4.48%, 3%)",
          full: "hsla(240deg 4.48%, 0%)",
        },

        gray1: "hsl(240deg 4.48%, 8.5%)",
        gray2: "hsl(240deg 4.48%, 11.0%)",
        gray3: "hsl(240deg 4.48%, 13.6%)",
        gray4: "hsl(240deg 4.48%, 15.8%)",
        gray5: "hsl(240deg 4.48%, 17.9%)",
        gray6: "hsl(240deg 4.48%, 20.5%)",
        gray7: "hsl(240deg 4.48%, 24.3%)",
        gray8: "hsl(240deg 4.48%, 31.2%)",
        gray9: "hsl(240deg 4.48%, 43.9%)",
        gray10: "hsl(240deg 4.48%, 49.4%)",
        gray11: "hsl(240deg 4.48%, 62.8%)",
        gray12: "hsl(240deg 4.48%, 93.0%)",
      },

      boxShadow: {
        'md': '0 4px 10px 0px rgb(69 69 69 / 0.1), 0 4px 10px 0px rgb(69 69 69 / 0.1)',
      },
    },
  },
  plugins: [],
};
