/**
 *  Take calendar data and prepare it for the RecyclerListView with section headers
 *  for each season and month, and a parsed day object, isFastDay, and type added to
 *  each day
 */

import { isFast, parseDate } from "common/utils";

export const prepCalendarData = (calendarData) => {
  const calendarDaysWithAddedProps = addPropertiesToCalendarDays(calendarData);
  const sectionizedData = sectionizeCalendarData(calendarDaysWithAddedProps);
  return sectionizedData;
};

/**
 *  To each calendar day, add:
 *  {
 *    day: { dayOfMonth, fullMonth, month, weekday, year },
 *    isFastDay: Boolean,
 *    type: "date" -- for RecylerListView,
 *  }
 */
const addPropertiesToCalendarDays = (calendarData) =>
  calendarData.map((calendarDay) =>
    Object.assign({}, calendarDay, {
      day: parseDate(calendarDay.date),
      isFastDay: isFast(calendarDay),
      type: "date",
    })
  );

/**
 *  Output an array where each time the month and/or season changes,
 *  a section heading object is inserted. E.g.:
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
const sectionizeCalendarData = (calendarData) => {
  let currentSection = {
    type: "heading",
    sectionType: null,
    month: null,
    year: null,
    season: { name: null },
  };

  return calendarData.reduce((acc, cur) => {
    const {
      date,
      day: { fullMonth: month, year },
      season,
    } = cur;

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

    currentSection = {
      type: "heading",
      sectionType: newSectionType,
      month,
      year,
      season,
    };

    return [...acc, currentSection, cur];
  }, []);
};
