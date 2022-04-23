module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily : {
      'sans' : ['Inter'],
      'display' : ['Inter'],
      'body' : ['Inter']
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
