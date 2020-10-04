import { dummyCalendarData } from "./dummyCalendarData";

export const sectionizedCalData = dummyCalendarData.reduce((acc, cur) => {
  const {
    date,
    season: { name: seasonName },
  } = cur;

  const month = date.split("-")[1];

  if (acc.length === 0)
    return [
      { section: { type: "both", month, season: seasonName }, data: [cur] },
    ];

  const currentSection = acc[acc.length - 1].section;

  const newSectionType =
    currentSection.month !== month && currentSection.season !== seasonName
      ? "both"
      : currentSection.month !== month
      ? "month"
      : currentSection.season !== seasonName
      ? "season"
      : undefined;

  if (newSectionType) {
    acc.push({
      section: { type: newSectionType, month, season: seasonName },
      data: [cur],
    });
  } else {
    acc[acc.length - 1].data.push(cur);
  }

  return acc;
}, []);
