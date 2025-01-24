/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    container: false,
  },
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"DM Sans"', ...defaultTheme.fontFamily.sans],
        'serif': ['"Baskerville Win95BT"', ...defaultTheme.fontFamily.serif]
      },
      screens: { '3xl': '1441px' },
      colors: {
        "orange": "#F89A32",
        "gray": "#91877D",
        "lightGray": "#f0f0f0",
        "skin": "#dcd1c6",
        // "black": "#414041",
        "brown": "#5f482e",
        "lightBrown": "#8c7e73"
      },
    },
  },
  plugins: [],
})

