module.exports = {
  mode: "jit",
  purge: [
    './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,scss,sass,css}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
