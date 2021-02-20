module.exports = {
  darkMode: "class",
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0099FF",
        dark: {
          text: {
            primary: "#c9d1d9",
          },
          bg: {
            primary: "#0f1218",
            header: "#161c21",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      textColor: ["responsive", "hover", "focus", "group-hover", "active"],
      opacity: ["responsive", "hover", "focus", "active", "group-hover"],
    },
  },
  plugins: [],
};
