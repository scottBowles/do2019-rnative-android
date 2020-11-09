import { parseDate } from "./parseDate";

interface dateData {
  date: number | string;
  season: { name: string };
  commemorations: { rank: { name: string } }[];
}

/**
 * Determines whether a date is a fast day
 */

export const isFast = ({
  date,
  season,
  commemorations: [{ rank }],
}: dateData): boolean => {
  const d = new Date(date);
  const { weekday } = parseDate(d);

  if (weekday === "Sun") return false;

  if (season.name === "Lent") return true;

  if (rank.name === "EMBER_DAY" || rank.name === "ROGATION_DAY") return true;

  if (season.name === "Eastertide" || season.name === "Christmastide") {
    return false;
  }

  if (weekday === "Fri") return true;

  return false;
};
