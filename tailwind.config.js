/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    screens: {
      sm: '540px',
      md: '720px',
      lg: '960px',
      xl: '1140px',
      '2xl': '1320px',
    },
    extend: {
      container: {

        center: true,

        screens: {
          sm: '540px',
          md: '720px',
          lg: '960px',
          xl: '1140px',
          '2xl': '1320px',
        },
      }, padding: {
        '90': '90px',
      },

      colors: {
        primary: '#FF4655',
        secondary: '#212121',
        primaryBg: '#121212',
        secondaryBg: '#191919',
        lightGray: '#DDDDDD',
        white: '#FFFFFF',
        dimGray: '#666666'
      },
      fontFamily: {
        'Oswald': ['Oswald', 'sans-serif'],
        'Barlow-Condensed': ['Barlow Condensed', 'sans-serif']
      },
      animation: {
        'stickyNav': 'stickyNav 1s linear',
      },
      keyframes: {
        stickyNav: {
          '0%': { top: '-100px' },
          '100%': { top: '0' }
        }
      }
      ,
      backgroundImage: {
        'bannerImg': "url('./src/assets/banner.webp')",
      }
    }

  },
  plugins: [],
}

