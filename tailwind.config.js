/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      'lg': {'max': '1440px'},
      // => @media (min-width: 375px) { ... }

      'mobile': {'max':'375px'},
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      colors: {
        'primary': {
          100: 'hsl(252, 100%, 67%)',
          200: 'hsl(241, 81%, 54%)',
        },
        'white': 'hsl(0, 0%, 100%)',
        'violetblue': {
          100: 'hsl(256, 72%, 46%, 1)',
          200: 'hsl(241, 72%, 46%, 0)',
        },
        'lightred': {
          100: 'hsl(0, 100%, 67%, 0.1)',
          200: 'hsl(0, 100%, 60%)',
        },
        'orangeyellow': {
          100: 'hsl(39, 100%, 56%, 0.1)',
          200: 'hsl(39, 100%, 56%)',
        },
        'greenteal': {
          100: 'hsl(166, 100%, 37%, 0.1)',
          200: 'hsl(166, 100%, 37%)',
        },
        'cobaltblue': {
          100: 'hsl(234, 85%, 45%, 0.1)',
          200: 'hsl(234, 85%, 45%)',
        },

        
      },
      fontFamily: {
        hanken: ['Hanken Grotesk'],
      },
    },
  },
  plugins: [],
}

