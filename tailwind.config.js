module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        primary: "#0099FF",
      },
    },
  },
  variants: {
    textColor: ["responsive", "hover", "focus", "group-hover"],
    opacity: ["responsive", "hover", "focus", "active", "group-hover"],
  },
  plugins: [],
};
