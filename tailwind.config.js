const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{html,js}'],
  content: [],
  theme: {
    colors: {
      ...colors,
    },
  },
};
