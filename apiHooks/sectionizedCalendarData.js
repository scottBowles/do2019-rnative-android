import { dummyCalendarData } from "./dummyData/dummyCalendarData";
import { parseDate } from "../utils";

export const sectionizedCalData = dummyCalendarData.reduce((acc, cur) => {
  const { date, season } = cur;

  const { fullMonth: month, year } = parseDate(date);

  if (acc.length === 0)
    return [{ section: { type: "both", month, year, season }, data: [cur] }];

  const currentSection = acc[acc.length - 1].section;
  const {
    month: currentSectionMonth,
    year: currentSectionYear,
    season: currentSectionSeason,
  } = currentSection;

  const newSectionType =
    currentSection.month !== month && currentSection.season.name !== season.name
      ? "both"
      : currentSection.month !== month
      ? "month"
      : currentSection.season.name !== season.name
      ? "season"
      : undefined;

  if (newSectionType) {
    acc.push({
      section: { type: newSectionType, month, year, season },
      data: [cur],
    });
  } else {
    acc[acc.length - 1].data.push(cur);
  }

  return acc;
}, []);
