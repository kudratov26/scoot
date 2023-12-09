/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {},
    container: {
      center: true,
      screens: {
        DEFAULT: "1110px",
      },
    },
    colors: {
      gray: {
        DEFAULT: "#939CAA",
        title: "#495567",
      },
      orange: {
        DEFAULT: "#FCB72B",
      },
      light: {
        DEFAULT: "#FFF4DF",
      },
      snow: {
        DEFAULT: "#F2F5F9",
      }
    },
    fontFamily: {
      lexendDeca: "lexendDeca",
      spaceMono: "spaceMono"
    },
    backImages: {
      heroImg: "url('/mock_images/hero-img.png')",
      aboutImg: "url('/mock_images/about-img.png')",
      headerImg: "url('/mock_images/header-img.png')",
    }
  },
  plugins: [],
}

