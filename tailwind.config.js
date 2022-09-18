/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#191C73',
          800: '#2B2E8B',
          700: '#4447AC',
          600: '#6267CE',
          500: '#878CF0',
          400: '#A5A9F6',
          300: '#B8BCFA',
          200: '#D1D3FD',
          100: '#E8E9FE'
        },
        secondary: {
          900: '#661330',
          800: '#7C2038',
          700: '#9A3244',
          600: '#B84953',
          500: '#D66565',
          400: '#E6938B',
          300: '#F2B3A5',
          200: '#FAD3C5',
          100: '#FCEBE2'
        },
        success: {
          100: '#DAFBD4',
          200: '#B0F7AC',
          300: '#7EE882',
          500: '#2BB54B',
          900: '#085638'
        },
        warning: {
          500: '#FFBA3A',
          600: '#DB962A',
          900: '#7A430B'
        },
        info: {
          500: '#6FBAFC',
          600: '#5192D8'
        }, 
        bg: {
          100: '#E7E2F2',
          200: '#F6F2F8'
        },
        danger: {
          100: "#FFE2DA",
          200: "#FFBFB5",
          300: "#FF9490",
          400: "#FF757C",
          500: "#FF4762",
          600: "#DB335C",
          700: "#B72355",
          800: "#93164C",
          900: "#7A0D46"
        }
      },
      fontFamily: {
        overpass: ["Overpass", 'sans-serif'],
        sans: ['Source\\ Sans\\ Pro', 'sans-serif']

      }
    },
  },
  plugins: [],
}
