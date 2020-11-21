import { CalendarDay } from "./models";
import { SectionData } from "./interfaces";

/**
 * Inserts SectionData objects when month or season changes in an array of CalendarDay objects
 * @param calendarData Array of CalendarDay objects
 * @return Array with SectionData objects added
 */
export const sectionizeCalendarData = (
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
