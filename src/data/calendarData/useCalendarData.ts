import { useState } from "react";
import { getLocalDate } from "common/utils/getLocalDate";
import { HeaderData, SectionData } from "./interfaces";
import { CalendarDay, ParsedDate } from "./models";
import { sectionizeCalendarData } from "./sectionizeCalendarData";
import { generateCalendarData } from "./utils";

type SectionizedData = (HeaderData | SectionData | CalendarDay)[];

interface Return {
  dataSource: SectionizedData;
  isLoading: boolean;
  getData: () => Promise<void>;
  getDateIndex: (date?: Date) => number;
  getSeasonIndex: (season: string) => number;
}

/**
 * Custom hook for supplying data for the Calendar screen
 * @param startYear Year of Advent One for starting liturgical year
 */
export const useCalendarData = (startYear: number): Return => {
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
          ({ date, season, commemorations }) => {
            const localDate = getLocalDate(new Date(date));
            return new CalendarDay(localDate, season, commemorations);
          }
        );
        const sectionizedData = sectionizeCalendarData(calendarDays);
        setDataSource([...dataSource, ...sectionizedData]);
        setIsLoading(false);
      } catch (error) {
        console.log(`getData error: ${error}`);
      }
    }
  };

  const getDateIndex = (date?: Date) => {
    if (!date) return -1;

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
