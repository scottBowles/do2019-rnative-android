/**
 * Validate calendar start year -- if invalid, return current liturgical year
 * @param year - year to be validated
 * @return valid year
 */

export const getValidStartYear = (year: number | string): number => {
  // Validate calendar start year
  // If invalid, return current liturgical year
  const currentYear = new Date().getFullYear();
  // TODO: use to get current liturgical year's start year, for default start year

  const yearInt = typeof year === "number" ? year : parseInt(year);

  const startYear =
    !Number.isNaN(yearInt) && 0 < yearInt && yearInt < 10000
      ? yearInt
      : currentYear;

  return startYear;
};
