module.exports = {
  purge: ['./src/**/*.html', './src/**/*.js', './src/**/*.vue', './src/**/*.css'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#1E213A',
          960: '#100E1D',
        },
        yellow: {
          350: '#FFEC65',
        },
        gray: {
          350: '#E7E7EB',
          650: '#6E707A',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
