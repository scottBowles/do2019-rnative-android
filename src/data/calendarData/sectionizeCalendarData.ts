import { ISectionData } from "./interfaces";
import { CalendarDay } from "./models";

/**
 * Inserts SectionData objects when month or season changes in an array of CalendarDay objects
 * @param calendarData Array of CalendarDay objects
 * @return Array with SectionData objects added
 */
export const sectionizeCalendarData = (
  calendarData: CalendarDay[]
): (ISectionData | CalendarDay)[] => {
  let currentSection: ISectionData;

  return calendarData.reduce(
    (acc: (ISectionData | CalendarDay)[], cur: CalendarDay) => {
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
