import { theme } from "styles/theme";
console.log({ theme });

export const getValidColor = (color: string) => {
  // Check if color name is in colors
  if (theme.colors[color]) return theme.colors[color];
  // Check if color is a hex value in colors
  if (Object.values(theme.colors).includes(color)) return color;
  // Else return a loud color so it can be fixed
  return "#39ff14";
};
