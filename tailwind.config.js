/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./scripts/**/*.{html,js}", '*.{html,js}'],
  theme: {
    colors : {
      darkgreen : '#289500',
      lightgrey : '#808080',
      darkgrey : '#272727',
      aqua : '#54B0C6',
      red : '#E04343',
      lightgreen : '#54C673',
      orange : '#FA7706',
      green : '#77FA06',
      blue : '#45B7FF',
      offwhite : '#FAFAFA',
      black : '#000000'
    },
    screens : {
      'xs' : '376px',
      
      'sm': '422px',
      'max': {'max': '500px'},

      'md': '630px',
    },
    extend: {
      screens : {
        'xs' : '376px',
        
        'sm': '422px',
        'max': {'max': '500px'},

        'md': '630px',
      },
      fontFamily : {
        helvatica  : ['Helvatica Neue', 'sans-serif']
      }
    },
  },
  plugins: [],
}
