/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            heading: "Nohemi",
            bodyContent: "Lora",
         },

         colors: {
            background: "#F5F4FF",
            primary: "#000000",
            primaryShade: "#808080",
            secondary: "#C7F0FF",
            nav: "#DDB8F5"
         },
      },
   },
   plugins: [],
};
