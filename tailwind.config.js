/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/hero-pattern.png')",
      }),
      backgroundPosition: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scrollBehavior: {
        smooth: 'smooth',
      },
         // Add custom colors
         colors: {
          "Org_them": "#1e40af",
          "brand-primary": "#1D4ED8", // Custom blue
          "brand-secondary": "#F59E0B", // Custom amber
          "brand-accent": "#10B981", // Custom green
          "brand-dark": "#111827", // Custom dark
          "brand-light": "#F3F4F6", // Custom light
        },
    },
    screens: {
      'xs': '340px',

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
      
      // Add Custom Screen
      'custom_lg': '1180px',
      'custom_v-md': '500px',
      'custom_Img_Siz': '900px',
      'customSize0' : '670px',
       'customSize1' : '700px',
       'customSize2' : '1050px',
       'customSize3' : '1130px',
       'customSize4' : '1200px',
       'customSize5' : '1290px',
       'customSize5.5' : '1390px',
       'customSize6' : '1430px'





    },
 

  },
  plugins: [],
};
