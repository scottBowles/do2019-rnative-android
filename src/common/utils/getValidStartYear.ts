import { getLiturgicalYear } from "./getLiturgicalYear";

/**
 * Validate calendar start year -- if invalid, return current liturgical year
 * @param year - year to be validated
 * @return valid year
 */
export const getValidStartYear = (year: number | string): number => {
  const yearInt = +year;

  if (!Number.isNaN(yearInt) && 0 < yearInt && yearInt < 10000) {
    return yearInt;
  }

  const currentLiturgicalYear = getLiturgicalYear(new Date());
  return currentLiturgicalYear;
};
