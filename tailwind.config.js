/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors:{
        'black-500': '#282c34',
        'white-yellow': '#FFFF99',
        'yellow': '#FFFF00',
        'yellow-200': '#FDE047',
        'white-gray': '#F5F6FC',
      },
      backgroundImage: {
        'image': 'url(images/bg.jpg)',
      }
    },
  },
  plugins: [],
}

