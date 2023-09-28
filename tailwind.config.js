/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      'white': '#ffffff',
      'primary': '#0D6EFD',
      'slate-50': '#F7FAFC',
      zinc: {
        '200': '#dee2e7',
        '300': '#d9d9d9',
        '900': '#1C1C1C',
      },
      gray: {
        '100': '#EFF2F4',
        '400': '#8B96A5',
        '90': '#f7fafc'
      },
      neutral:{
        '600': '#505050',
        '300': '#BDC4CD'
      },
      stone:{
        '300': '#BDBDBD'
      },
      amber:{
        '500': '#FF9017'
      },
      green:{
        '600': '#00B517'
      }
    },
    extend: {
      fontFamily: {
        inter_regular: ['Inter-Regular', 'normal'],
        inter_medium: ['Inter-Medium', 'medium'],
      },
    },
  },
  plugins: [],
}

