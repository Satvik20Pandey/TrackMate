/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./!(build|dist|.*)/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        slategray: {
          "100": "#667d89",
          "200": "#6c767f",
        },
        mediumseagreen: {
          "100": "#12c48b",
          "200": "#17b171",
          "300": "#00ab73",
        },
        white: "#fff",
        aliceblue: {
          "100": "#ecf9fe",
          "200": "#e3ecf1",
          "300": "#e4e9ee",
        },
        darkslategray: {
          "100": "#324c5b",
          "200": "#344554",
        },
        lightgray: "#c6ced6",
        gainsboro: "#e6e6e6",
        lightslategray: "rgba(128, 138, 147, 0.25)",
        hotpink: {
          "100": "#f964a0",
          "200": "#f963a0",
        },
        goldenrod: "#ffbf53",
        tomato: {
          "100": "#ff5154",
          "200": "#f6534b",
        },
        salmon: "#fb6666",
        black: "#000",
        gold: "#fccd01",
        skyblue: "#1eadcf",
        orange: "#feb100",
        darkgray: "#93a1aa",
      },
      spacing: {},
      fontFamily: {
        "open-sans": "'Open Sans'",
        inter: "Inter",
      },
      borderRadius: {
        "11xl": "30px",
        "6xs": "7px",
        "8xs": "5px",
        "21xl": "40px",
        "mini-5": "14.5px",
        sm: "14px",
        "xs-7": "11.7px",
      },
    },
    fontSize: {
      sm: "14px",
      base: "16px",
      xl: "20px",
      mid: "17px",
      "19xl": "38px",
      "4xl": "23px",
      "11xl": "30px",
      "10xl": "29px",
      "mini-4": "14.4px",
      xs: "12px",
      "13xl": "32px",
      lgi: "19px",
      "7xl": "26px",
      "2xs": "11px",
      "3xs-4": "9.4px",
      "4xs-9": "8.9px",
      "7xs-2": "5.2px",
      "8xs-4": "4.4px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
