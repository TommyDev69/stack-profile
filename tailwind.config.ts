import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens:{
      sm: "4680px",
      md:"768px",
      lg: "976px",
      xl: "1440px" 
   },
    extend: {
      backgroundImage: {
        'blueBlack': 'linear-gradient(239deg, rgba(1,0,36,1) 41%, rgba(7,5,62,1) 52%, rgba(1,0,36,1) 64%)',
      },
      fontFamily:{
        writing: "Montserrat, Work Sans, serif",
      }
    },
  },
  plugins: [],
} satisfies Config;
