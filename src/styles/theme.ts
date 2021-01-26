const REM = 16;
const TYPE_SCALE = 1.125;
const RHYTHM_UNIT = REM * 1.6;

export const theme = {
  colors: {
    black: "#000000",
    blue: "#4169e1",
    fontGray: "#333333",
    fontGrey: "#333333",
    green: "#077339",
    gray: "#808080",
    grey: "#808080",
    lightBlue: "#428bca",
    lightGray: "#d3d3d3",
    lightGrey: "#d3d3d3",
    linkBlue: "#8c8cfa",
    purple: "#64147d",
    red: "#c21c13",
    rose: "#ffc0cb",
    white: "#ffffff",
    veryLightGray: "#bfc4c8",
    veryLightGrey: "#bfc4c8",
    "lenten array": "#fce8e9",
  },
  fonts: {
    primary: {
      bold: "ACaslonPro-Bold",
      boldItalic: "ACaslonPro-BoldItalic",
      italic: "ACaslonPro-Italic",
      regular: "ACaslonPro-Regular",
      semibold: "ACaslonPro-Semibold",
      semiboldItalic: "ACaslonPro-SemiboldItalic",
    },
  },
  fontSize: {
    xxxs: REM / TYPE_SCALE ** 4,
    xxs: REM / TYPE_SCALE ** 3,
    xs: REM / TYPE_SCALE ** 2,
    sm: REM / TYPE_SCALE,
    base: REM,
    lg: REM * TYPE_SCALE,
    xl: REM * TYPE_SCALE ** 2,
    xxl: REM * TYPE_SCALE ** 3,
    xxxl: REM * TYPE_SCALE ** 4,
  },
  spacing: {
    baseHalf: RHYTHM_UNIT * 0.5,
    base: RHYTHM_UNIT,
    basex2: RHYTHM_UNIT * 2,
    basex3: RHYTHM_UNIT * 3,
    basex4: RHYTHM_UNIT * 4,
  },
};

export type TTheme = typeof theme;
