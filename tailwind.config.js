/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center: true,
      },
      colors: {
        primary: '#F9F8F8',
        secondary:'#274C5B',
        thirdary: '#7EB693',
        fourthary: '#274C5B',
        fithary: '#D4D4D4',
        sixary: '#EFF6F1',
        sevenary: '#525C60',
        customBlue: 'rgb(39, 76, 91)',
        colortext: 'rgb(82, 92, 96)',
        yellow:"rgb(239, 211, 114)",
        believe: "#f9f8f8",
        btn: "rgb(39, 76, 91)",
        product:"rgb(249, 248, 248)",
        line:"rgb(184, 184, 184)",
        tripleBg:"rgb(241, 248, 244)",
        btnBG:"rgb(236, 236, 236)",
        detailBtn:"rgb(239, 246, 241)",
      }
    },
  },
  plugins: [],
}