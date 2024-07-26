/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // color: {
      //   foreground: 'rgb(var(--foreground-rgb) / var(--tw-bg-opacity))',
      //   'background-start': 'rgb(var(--background-start-rgb) / var(--tw-bg-opacity))',
      //   'background-end': 'rgb(var(--background-end-rgb) / var(--tw-bg-opacity))',
      // },
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      backgroundImage: {
        'custom-gradient': 'radial-gradient(ellipse 80% 80% at 50% -10%, rgba(0, 200, 255, .4), hsla(0, 0%, 100%, 0))',
      },
    },
  },
  plugins: [],
};
