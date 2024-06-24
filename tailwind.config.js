/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "liniear-greem": "#93CB6F",
        "liniear-greem2": "#73BA5A",
      },
      backgroundImage: {
        "image-banner": "url('/src/assets/banner.jpeg')",
      },
    },
  },
  plugins: [],
};
