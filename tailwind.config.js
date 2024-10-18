/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        rotate3d: {
          '0%': { transform: 'rotate(45deg)' },
          '25%': { transform: 'rotate(90deg) ' },
          '50%': { transform: 'rotate(180deg) ' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        'spin-3d': 'rotate3d 8s linear infinite',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

