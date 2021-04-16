const REM = 20;
const RHYTHM_UNIT = REM * 1.6;

const generalColors = {
  black: "#000000",
  blue: "#4169e1",
  btnBlue: "#2196f3",
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
};

const darkThemeColors = {
  text: "#bfbfbf",
  backgroundPrimary: "#1c1c21",
  backgroundSecondary: "#454545",
};

const lightThemeColors = {
  text: "#333333",
  backgroundPrimary: "#ffffff",
  backgroundSecondary: "#d3d3d3",
};

export const theme = {
  colors: generalColors,
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
    // E.g., "Daily Office"
    sectionTitle: 2.09 * REM,
    // E.g., "Morning Prayer"
    riteTitle: 1.57 * REM,
    // E.g., "In the Morning" (in rite: Family Prayer)
    riteSubtitle: 1.3 * REM,
    // E.g., "The Kyrie", "The Readings"
    paragraphTitle: 1.04 * REM,
    body: REM,
    footer: 0.96 * REM,
    biblicalCitation: 0.87 * REM,
    rubric: 0.85 * REM,
    dateBlock: {
      primary: 16,
      secondary: 12.8,
      season: 9.6,
    },
  },
  // provides line height in ems
  lineHeightEms: {
    body: 13 / 11.5,
    rubric: 10.75 / 9.75,
    dateBlock: 1.2,
  },
  spacing: {
    outerPadding: 22,
    baseHalf: RHYTHM_UNIT * 0.5,
    base: RHYTHM_UNIT,
    basex2: RHYTHM_UNIT * 2,
    basex3: RHYTHM_UNIT * 3,
    basex4: RHYTHM_UNIT * 4,
  },
};

export const darkTheme = {
  ...theme,
  colors: { ...generalColors, ...darkThemeColors },
  mode: "dark",
};
export const lightTheme = {
  ...theme,
  colors: { ...generalColors, ...lightThemeColors },
  mode: "light",
};

export type TTheme = typeof lightTheme;
