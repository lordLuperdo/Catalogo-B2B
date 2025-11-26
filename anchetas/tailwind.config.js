/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './components/**/*.{vue,js}',  
      './layouts/**/*.vue',          
      './pages/**/*.vue',            
      './plugins/**/*.{js,ts}',      
      './nuxt.config.{js,ts}', 
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ['Poppins', 'sans-serif'],
          Pincoya: ['CHRISTMAS COMEBACK', 'sans-serif'], 
          a: ['Fixture', 'sans-serif'],
        },
        fontSize: {
          'fixed': '24px', 
        },
        colors: {
          'color-principal': '#2b0008', 
          'color-secundario': '#f15f5e', 
        },
      },
    },
    plugins: [],
  }