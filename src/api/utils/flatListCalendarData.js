import { parseDate } from "common/utils";

/**
 *  Take calendar data and prepare it for a FlatList with
 *     section headers for each season and month.
 *
 *  Outputs an array where each time the month and/or season changes,
 *  a section heading object is inserted. E.g.,
 *    [
 *      {
 *        type: "month", "season", or "both" for which heading is needed,
 *        month,
 *        year,
 *        season
 *      },
 *      dateData,
 *      dateData,
 *      dateData...
 *    ]
 */

export const flatListCalendarData = (calendarData) => {
  let currentSection = {
    type: null,
    month: null,
    year: null,
    season: { name: null },
  };

  return calendarData.reduce((acc, cur) => {
    const { date, season } = cur;

    const { fullMonth: month, year } = parseDate(date);

    if (
      month === currentSection.month &&
      year === currentSection.year &&
      season.name === currentSection.season.name
    ) {
      return [...acc, cur];
    }

    const newSectionType =
      currentSection.month !== month &&
      currentSection.season.name !== season.name
        ? "both"
        : currentSection.month !== month
        ? "month"
        : currentSection.season.name !== season.name
        ? "season"
        : undefined;

    currentSection = { type: newSectionType, month, year, season };

    return [...acc, currentSection, cur];
  }, []);
};
