import { getAdventOne } from "./getAdventOne";

/**
 * Find the liturgical year in which a given date falls
 * @param date - takes anything new Date() can turn into a Date object
 * @return the year of Advent one in which the given date falls
 */

export function getLiturgicalYear(date: Date | string | number): number {
  const d = new Date(date);
  const year = d.getFullYear();
  const adventOne = getAdventOne(year);

  return d.getTime() < adventOne.getTime() ? year - 1 : year;
}
