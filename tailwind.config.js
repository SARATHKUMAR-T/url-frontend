/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  

  theme: {
    extend: {

   
      colors: {
        text1: "#e1f0fe",
        background: "#000305",
        primary: "#0606c1",
        secondary: "#000000",
        accent: "#6306c1",
      },
      fontFamily:{
        nunito:['Nunito','sans-serif']
      }
    },
  },
  plugins: [],
};
