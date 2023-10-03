/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '1024px',
      md: '1366px',
      lg: '1920px',
      xl: '1440px',
    },
    colors: {
      'white': '#ffffff',
      'primary': '#0D6EFD',
      'slate-50': '#F7FAFC',
      'black': '#00000040',
      zinc: {
        '100': '#EEE',
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
      },
      orange:{
        '100': '#FFF0DF'
      },
      red:{
        '500': '#FA3434'
      },
      teal:{
        '100': '#C6F3F1'
      },
      emerald:{
        '400': '#4CA7A799'
      },
      blue:{
        '900': '#005ADE'
      }
    },
    extend: {
      fontFamily: {
        normal: ['Inter-Regular', 'normal'],
        medium: ['Inter-Medium', 'medium'],
      },
    },
  },
  plugins: [],
}

