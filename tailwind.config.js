/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      titlefont: ['"JMH Beda"', "sans-serif"],
      textfont: ["Ubuntu-Regular", "sans-serif"],
    },

    colors: {
      Background: "#000000",
      SemiBackground: "#212121",
      Primary: "#bc0707",
      Secondary: "#ffffff",
      FontDark: "#272727",
      FontMid: "#8f8f8f",
      FontLight: "#f0f0f0",
      Label: "#c7c7c7",
    },

    extend: {
      height: {
        "70vh": "70vh",
      },
      gridTemplateColumns: {
        main: "1fr 1.1fr 1.5fr 1.1fr 1.5fr 1fr",
      },
      gridTemplateRows: {
        main: "20vh 20vh 15vh",
      },
      fontSize: {
        relativa: [
          "1.3vw",
          {
            lineHeight: "1.5em",
          },
        ],
        relativatitle: [
          "5vw",
          {
            lineHeight: "1.5em",
          },
        ],
      },
    },
  },
  plugins: [],
};
