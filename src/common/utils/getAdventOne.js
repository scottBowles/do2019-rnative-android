/** Find the first day of Advent for a given year */
export function getAdventOne(year) {
  const christmasEve = new Date(year, 11, 24, 0, 0, 0, 0).getTime();
  const ONE_DAY_IN_MILLISECONDS = 24 * 60 * 60 * 1000;

  /* Starting three weeks before Christmas Eve, go back a day at a time to the first Sunday */
  let d = new Date(christmasEve - 3 * 7 * ONE_DAY_IN_MILLISECONDS);

  while (d.getDay() != 0) {
    d = new Date(d.getTime() - ONE_DAY_IN_MILLISECONDS);
  }

  return d;
}
