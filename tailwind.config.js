module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'xs': "420px",
      'md': '640px',
      'xl': '1024px',
      '2xl': '1280px', 
      '3xl': '1366px', 
    },
    colors: { 
      bgg : '#FBFEFF',
      piink: "#F33E86",
      yelloww: "#FFCC00",
      bluue: "#00CDFF",
      darkBluue: "#143151"
    },
    fontFamily: {
      'sans': ['Laila'],
      'serif': ['Zen Antique']
     }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
