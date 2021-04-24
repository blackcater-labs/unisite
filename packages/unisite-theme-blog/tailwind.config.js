const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [
    "./node_modules/@unisite/theme-blog/src/**/*.{js,jsx,ts,tsx,css,less}",
    "./components/**/*.{js,jsx,ts,tsx,css,less}",
    "./pages/**/*.{js,jsx,ts,tsx,css,less}",
    "./src/**/*.{js,jsx,ts,tsx,css,less}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: { "true-gray": colors.trueGray },
      maxHeight: {
        "(screen-12)": "calc(100vh - 3rem)",
        "(screen-16)": "calc(100vh - 4rem)",
        "(screen-20)": "calc(100vh - 5rem)",
        "(screen-24)": "calc(100vh - 6rem)",
        "(screen-28)": "calc(100vh - 7rem)",
        "(screen-32)": "calc(100vh - 8rem)",
        "(screen-36)": "calc(100vh - 9rem)",
        "(screen-40)": "calc(100vh - 10rem)",
        "(screen-44)": "calc(100vh - 11rem)",
        "(screen-48)": "calc(100vh - 12rem)",
        "(screen-52)": "calc(100vh - 13rem)",
        "(screen-56)": "calc(100vh - 14rem)",
        "(screen-60)": "calc(100vh - 15rem)",
        "(screen-64)": "calc(100vh - 16rem)",
        "(screen-72)": "calc(100vh - 18rem)",
        "(screen-80)": "calc(100vh - 20rem)",
        "(screen-96)": "calc(100vh - 24rem)",
      },
      fontFamily: {
        sans: [
          // '"WenKai"',
          ...defaultTheme.fontFamily.sans,
        ],
        serif: [
          // '"WenKai"',
          ...defaultTheme.fontFamily.serif,
        ],
        mono: [
          '"JetBrains Mono"',
          '"Cascadia Mono"',
          '"FiraCode Mono"',
          ...defaultTheme.fontFamily.mono,
        ],
      },
      animation: {
        "bounce-l": "bounce-l 1s infinite",
        "bounce-r": "bounce-r 1s infinite",
      },
      keyframes: {
        "bounce-l": {
          "0%, 100%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateX(-25%)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
        "bounce-r": {
          "0%, 100%": {
            transform: "none",
            animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
          },
          "50%": {
            transform: "translateX(25%)",
            animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/ui"), require("@tailwindcss/aspect-ratio")],
};
