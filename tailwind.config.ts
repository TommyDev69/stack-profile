import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm: "468px",
      md:"768px",
      lg: "976px",
      xl: "1440px" 
   },
    extend: {
      backgroundImage: {
        'blueBlack': 'linear-gradient(298deg, rgba(100,46,125,1) 29%, rgba(101,119,255,1) 49%, rgba(100,46,125,1) 70%)',
        //  'blueBlack': "blue"
      },
      fontFamily:{
        writing: "Montserrat, Work Sans, serif",
      }
    },
  },
  plugins: [],
} satisfies Config;
