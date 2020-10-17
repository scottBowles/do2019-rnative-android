import { withIsFastDay } from "./withIsFastDay";
import { withParsedDate } from "./withParsedDate";

/**
 *  Take calendar data and prepare it for a SectionList with
 *     section headers for each season and month.
 *
 *  Outputs an array where each element is an object with shape:
 *    {
 *      sectionData: {
 *        type: "month", "season", or "both" for which heading is needed,
 *        month,
 *        year,
 *        season
 *      },
 *      data: Array of dates in section
 *    }
 */

export const sectionizeCalendarData = (calendarData) => {
  const calendarWithAddedProps = withIsFastDay(withParsedDate(calendarData));

  return calendarWithAddedProps.reduce((acc, cur) => {
    const {
      date,
      day: { fullMonth: month, year },
      season,
    } = cur;

    if (acc.length === 0)
      return [
        { sectionData: { type: "both", month, year, season }, data: [cur] },
      ];

    const currentSection = acc[acc.length - 1].sectionData;

    const newSectionType =
      currentSection.month !== month &&
      currentSection.season.name !== season.name
        ? "both"
        : currentSection.month !== month
        ? "month"
        : currentSection.season.name !== season.name
        ? "season"
        : undefined;

    if (newSectionType) {
      acc.push({
        sectionData: { type: newSectionType, month, year, season },
        data: [cur],
      });
    } else {
      acc[acc.length - 1].data.push(cur);
    }

    return acc;
  }, []);
};
