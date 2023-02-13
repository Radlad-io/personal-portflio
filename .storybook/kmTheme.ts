import { create } from "@storybook/theming";

export default create({
  base: "dark",

  // colorPrimary: "white",
  colorSecondary: "hsla(0, 73%, 64%, 1)",

  // UI
  appBg: "black",
  appContentBg: "white",
  appBorderColor: "white",
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",

  // Text colors
  textColor: "white",
  textInverseColor: "black",

  // Toolbar default and active colors
  barTextColor: "silver",
  barSelectedColor: "black",
  barBg: "#f3f3f3",

  // Form colors
  inputBg: "white",
  inputBorder: "#dedede",
  inputTextColor: "black",
  inputBorderRadius: 4,

  brandTitle: "KM | Portfolio Storybook",
  brandUrl: "https://storybook.kevinmerinsky.com",
  brandImage: "http://localhost:6006/images/storybook-logo.png",
  brandTarget: "_self",
});
