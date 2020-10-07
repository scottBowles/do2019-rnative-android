const getValidStartYear = (year) => {
  const currentYear = new Date().getFullYear();
  // TODO: use to get current liturgical year's start year, for default start year

  const yearInt = parseInt(year);
  const startYear =
    !Number.isNaN(yearInt) && 0 < yearInt && yearInt < 10000
      ? yearInt
      : currentYear;

  return startYear;
};

export default getValidStartYear;
