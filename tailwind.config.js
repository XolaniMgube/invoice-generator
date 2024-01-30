/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      "red": "#FF0000",
      "darkGrey": "#1b222c",
      "blueGrey": "#131924",
      "green": "#27c643",
      "orange": "#FF9900",
      "white": "#fff",
      "sideBarText": "#6f7173",
      "lightGrey": "#8d8d8d",
      "active": "#24c5b0",
      "loginWhite": "rgb(244, 244, 244)",
      "normalGrey": "rgb(103, 103, 103)",
      "yellow": "#fcbb21",
      "lighterGrey": "#f2f2f2",
      "borderBlue": "00dfc4",
      "placeholderText": "rgba(255,255,255,0.25)",
      "cream": "#fcfcf7",
      "iconBlue": "#00D7FF",
      "cardLightRed": "#ffebf0",
      "cardLightYellow": "#fff0d3",
      "cardLightGreen": "#c9fbe2",
      "logoBlueThree": "#0096FF",
      "labelGrey": "#616161",
      "delete": "#e3274f",
      "edit": "#cf960e",
      "materialHeader": "#eaeaea"
    },
    extend: {
      backgroundImage: {
        'main-gradient': 'linear-gradient(0deg, rgba(255, 255, 255, 1) 100%, rgba(230, 0, 0, 1) 100%)',
        'simple-gradient': 'linear-gradient(white, rgb(103, 103, 103, 0.2) )'
      }
    },
  },
  plugins: [],
}

