import { isFast, parseDate } from "common/utils";

/**
 *  Take calendar data and prepare it for a FlatList with section headers
 *  for each season and month and a parsed day object added to each day
 *
 *  Takes each calendar day and adds the following properties:
 *  {
 *    day: { dayOfMonth, fullMonth, month, weekday, year },
 *    isFastDay: Boolean,
 *    type: "date" -- for RecylerListView,
 *  }
 *
 *  Outputs an array where each time the month and/or season changes,
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

export const prepFlatListCalendarData = (calendarData) => {
  /**
   *  To each calendar day, add:
   *  {
   *    day: { dayOfMonth, fullMonth, month, weekday, year },
   *    isFastDay: Boolean,
   *    type: "date" -- for RecylerListView,
   *  }
   */
  const calendarWithAddedProps = calendarData.map((calendarDay) =>
    Object.assign({}, calendarDay, {
      day: parseDate(calendarDay.date),
      isFastDay: isFast(calendarDay),
      type: "date",
    })
  );

  /**
   *  To calendarData, add section heading objects whenever the
   *  month and/or season changes.
   */

  let currentSection = {
    type: "heading",
    sectionType: null,
    month: null,
    year: null,
    season: { name: null },
  };

  return calendarWithAddedProps.reduce((acc, cur) => {
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
