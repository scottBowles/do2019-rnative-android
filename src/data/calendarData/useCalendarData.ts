import { useState } from "react";

import { HeaderData, SectionData } from "./interfaces";
import { CalendarDay, ParsedDate } from "./models";
import { sectionizeCalendarData } from "./sectionizeCalendarData";
import { generateCalendarData } from "./utils";

type SectionizedData = (HeaderData | SectionData | CalendarDay)[];

interface ReturnData {
  dataSource: SectionizedData;
  isLoading: boolean;
  getData: () => Promise<boolean>;
  getDateIndex: (date: Date) => number;
  getSeasonIndex: (season: string) => number;
}

/**
 * Custom hook for supplying data for the Calendar screen
 * @param startYear Year of Advent One for starting liturgical year
 */
export const useCalendarData = (startYear: number): ReturnData => {
  const dataForHeader: HeaderData = { type: "listHeader", startYear };

  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState<SectionizedData>([
    dataForHeader,
  ]);

  const dataGenerator = generateCalendarData(startYear);

  /**
   * Fetches the startYear's data and prepares it and, on subsequent calls,
   * fetches, prepares, and appends the next year's worth of data
   */
  const getData = async () => {
    if (!isLoading) {
      try {
        setIsLoading(true);
        const apiCalendarData = (await dataGenerator.next()).value;
        const calendarDays = apiCalendarData.map(
          ({ date, season, commemorations }) =>
            new CalendarDay(new Date(date), season, commemorations)
        );
        const sectionizedData = sectionizeCalendarData(calendarDays);

        setDataSource([...dataSource, ...sectionizedData]);
        setIsLoading(false);
        return true;
      } catch (error) {
        console.log(`getData error: ${error}`);
      }
    }
    return true;
  };

  const getDateIndex = (date: Date) => {
    const { dayOfMonth, month, year } = new ParsedDate(date);
    const index = dataSource.findIndex(
      (item: HeaderData | SectionData | CalendarDay) =>
        item.type === "date" &&
        item.dayOfMonth === dayOfMonth &&
        item.month === month &&
        item.year === year
    );
    return index;
  };

  const getSeasonIndex = (season: string): number => {
    const index: number = dataSource.findIndex(
      (item: HeaderData | SectionData | CalendarDay) =>
        item.type === "heading" &&
        ["season", "both"].includes(item.sectionType) &&
        item.season.name.toLowerCase() === season.toLowerCase()
    );
    return index;
  };

  return {
    dataSource,
    isLoading,
    getData,
    getDateIndex,
    getSeasonIndex,
  };
};
