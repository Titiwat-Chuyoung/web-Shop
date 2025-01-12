module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
      boxShadow: {
        'inset-top': 'inset 0px 5px 0px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
