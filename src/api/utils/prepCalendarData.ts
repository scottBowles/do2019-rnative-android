import { isFast, parseDate } from "common/utils";
import { ApiCalendarDay, CalendarDay } from "types";

/**
 *  Take calendar data and prepare it for the RecyclerListView with:
 *  1. Section headers for each season and month, and
 *  2. `type`, `isFastDay`, and a parsed `day` object added to each day
 */

export const prepCalendarData = (calendarData) => {
  const calendarDays = calendarData.map(createCalendarDay);
  const sectionizedData = sectionizeCalendarData(calendarDays);
  return sectionizedData;
};

/**
 * Calendar Day Factory
 * @param param0 incoming ApiCalendarDay
 */

const createCalendarDay = ({
  date,
  season,
  commemorations,
}: ApiCalendarDay): CalendarDay => {
  const d = new Date(date);

  if (d.toString() === "Invalid Date") {
    return;
  }

  const { dayOfMonth, fullMonth, month, weekday, year } = parseDate(d);

  return {
    type: "date",
    day: { date, dayOfMonth, fullMonth, month, weekday, year },
    isFastDay: isFast({ date, season, commemorations }),
    season,
    commemorations,
  };
};

/**
 *  Output an array where each time the month and/or season changes,
 *  a section heading object is inserted. E.g.:
 *    [
 *      {
 *        type: "heading",
 *        sectionType: "month", "season", or "both" for which heading is needed,
 *        month,
 *        year,
 *        season
 *      },
 *      calendarDay,
 *      calendarDay,
 *      calendarDay...
 *    ]
 */
const sectionizeCalendarData = (calendarData) => {
  let currentSection;

  return calendarData.reduce((acc, cur) => {
    const {
      day: { fullMonth: month, year },
      season,
    } = cur;

    if (
      currentSection &&
      month === currentSection.month &&
      year === currentSection.year &&
      season.name === currentSection.season.name
    ) {
      return [...acc, cur];
    }

    const newSectionType =
      !currentSection ||
      (currentSection.month !== month &&
        currentSection.season.name !== season.name)
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
