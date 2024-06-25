/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#96ae00',
        secondary: '#F9B572',
        third: '#f2f2f6',
        fourth: '#2c2a6d',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0px)' },
        },
        fadeOut: {},
        visible: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s cubic-bezier(0, 0.71, 0.2, 1.01)',
        visible: 'visible 1.5s cubic-bezier(0, 0.71, 0.2, 1.01)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
