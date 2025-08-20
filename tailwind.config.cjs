/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './pages/**/*.{ts,tsx,astro}',
        './components/**/*.{ts,tsx,astro}',
        './src/**/*.{js,ts,tsx,astro}',
    ],
    plugins: [require('@tailwindcss/typography')],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        },
    },
};
