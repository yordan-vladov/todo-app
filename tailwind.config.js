// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'josefin-sans': ['JosefinSans_400Regular'],
        'josefin-sans-bold': ['JosefinSans_700Bold']
      },
      colors: {
        'very-light-gray': '#fafafa',
        'very-light-grayish-blue': '#e4e5f1',
        'light-grayish-blue': '#d2d3db',
        'dark-grayish-blue': '#9394a5',
        'very-dark-grayish-blue': '#484b6a',
        'gradient-blue': '#57ddff',
        'gradient-purple': '#c058f3'
      }
    },
  },
  plugins: [],
};