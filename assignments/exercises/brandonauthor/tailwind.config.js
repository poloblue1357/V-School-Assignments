// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
    
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

const plugin = require('tailwindcss/plugin')
/** @type {import('tailwindcss').Config} */
export default {
  darkMode:'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    container: {
      center: true,
    },
    margin: {
      0: "0px",
      0.5: "2.5px",
      1: "5px",
      2: "10px",
      4: "20px"
    },
    screens: {
      sm: "480px", 
      md: "768px",
      lg: "976px", 
      xl: "1440px"
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    extend: {
      colors: {
        tDark: "#38353B",
        tYellow: "#E0EC06",
        tBlue: "#3C7A9A",
        tBeige: "#998B88",
        tOlive: "#9C9333",
        t11: "#0f0f0f"
      }
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio")
  ]
}

