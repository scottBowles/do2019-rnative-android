import { getAdventOne } from "./getAdventOne";

/**
 * Find the liturgical year in which a given date falls
 * @param {Date | string | number} date - takes anything new Date() can turn into a Date object
 * @return {number} the year of Advent one
 */

export function getLiturgicalYear(date) {
  const d = new Date(date);
  const year = d.getFullYear();
  const adventOne = getAdventOne(year);

  return d.getTime() < adventOne.getTime() ? year - 1 : year;
}
