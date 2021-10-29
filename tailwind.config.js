module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'hekto-pink': '#fb2e86',
        'hekto-red': '#fb2448',
        'hekto-blue': '#2f1ac4',
        'hekto-off-navy-blue': '#3f509e',
        'hekto-navy-blue': '#151875',
        'hekto-sky-blue': '#f2f4ff',
        'hekto-pantone-purple': '#e0d3f5',
        'hekto-purple': '#7e33e0',
        'hekto-off-purple': '#9f63b5',
        'hekto-off-blue': '#151875',
      },
      fontFamily: {
        'body': 'Josefin Sans',
        'regular': 'Lato'
      },
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
