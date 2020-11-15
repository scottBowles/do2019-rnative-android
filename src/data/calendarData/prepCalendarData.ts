import { CalendarDay } from "./models";
import { ApiCalendarDay, SectionData } from "./interfaces";

/**
 * Take calendar data and prepare it for the RecyclerListView with:
 * 1. Section headers for each season and month, and
 * 2. `type`, `isFastDay`, and ParsedDate properties added to each day with the CalendarDay class
 */
export const prepCalendarData = (
  calendarData: ApiCalendarDay[]
): (SectionData | CalendarDay)[] => {
  const calendarDays = calendarData.map(
    ({ date, season, commemorations }) =>
      new CalendarDay(new Date(date), season, commemorations)
  );
  const sectionizedData = sectionizeCalendarData(calendarDays);
  return sectionizedData;
};

/**
 * Inserts SectionData objects when month or season changes in an array of CalendarDay objects
 * @param calendarData Array of CalendarDay objects
 * @return Array with SectionData objects added
 */
const sectionizeCalendarData = (
  calendarData: CalendarDay[]
): (SectionData | CalendarDay)[] => {
  let currentSection: SectionData;

  return calendarData.reduce(
    (acc: (SectionData | CalendarDay)[], cur: CalendarDay) => {
      const { fullMonth: month, year, season } = cur;

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
          : "season";

      currentSection = {
        type: "heading",
        sectionType: newSectionType,
        month,
        year,
        season,
      };

      return [...acc, currentSection, cur];
    },
    []
  );
};
