import { parseDate } from "./parseDate";

interface dateData {
  weekday: string;
  season: { name: string };
  commemorations: { rank: { name: string } }[];
}

/**
 * Determines whether a date is a fast day
 */

export const isFast = ({
  weekday,
  season,
  commemorations: [{ rank }],
}: dateData): boolean => {
  if (weekday === "Sun") return false;

  if (season.name === "Lent") return true;

  if (rank.name === "EMBER_DAY" || rank.name === "ROGATION_DAY") return true;

  if (season.name === "Eastertide" || season.name === "Christmastide") {
    return false;
  }

  if (weekday === "Fri") return true;

  return false;
};
