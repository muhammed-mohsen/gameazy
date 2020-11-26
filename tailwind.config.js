module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: { primary: "#f26723" },
        gray: {
          primary: "#f3f3f3",
        },
        green: {
          primary: "#75af2c",
        },
      },
      spacing: {
        xxlg: "27rem",
        xlg: "25rem",
        md: "1.62rem",
      },
      screens: {
        xsm: "400px",
      },
      fontFamily: {
        cairo: ["Cairo"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
