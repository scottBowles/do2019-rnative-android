import { getAdventOne } from "./getAdventOne";

export function getLiturgicalYear(date) {
  d = new Date(date);
  const year = d.getFullYear();
  const adventOne = getAdventOne(year);

  return d.getTime() < adventOne.getTime() ? year - 1 : year;
}
