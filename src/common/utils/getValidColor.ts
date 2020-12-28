import { colors } from "styles/colors";

export const getValidColor = (color: string) => {
  // Check if color name is in colors
  if (colors[color]) return colors[color];
  // Check if color is a hex value in colors
  if (Object.values(colors).includes(color)) return color;
  // Else return a loud color so it can be fixed
  return "#39ff14";
};
