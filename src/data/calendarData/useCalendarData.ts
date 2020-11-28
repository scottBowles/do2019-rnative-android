import { MutableRefObject, useState } from "react";
import { ApiCalendarDay, HeaderData, SectionData } from "./interfaces";
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
 * @param isMountedRef Ref indicating whether component is mounted, to abort async processes after unmounting
 */
export const useCalendarData = (
  startYear: number,
  isMountedRef: MutableRefObject<boolean | null>
): Return => {
  const dataForHeader: HeaderData = { type: "listHeader", startYear };

  const [dataGenerator] = useState(generateCalendarData(startYear));
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState<SectionizedData>([
    dataForHeader,
  ]);

  /**
   * Fetches the startYear's data and prepares it and, on subsequent calls,
   * fetches, prepares, and appends the next year's worth of data
   */
  const getData = async () => {
    if (!isLoading) {
      try {
        setIsLoading(true);
        const apiCalendarData: ApiCalendarDay[] = (await dataGenerator.next())
          .value;
        if (isMountedRef.current) {
          const calendarDays = apiCalendarData.map(
            (calendarDay) => new CalendarDay(calendarDay)
          );
          const sectionizedData = sectionizeCalendarData(calendarDays);
          setDataSource([...dataSource, ...sectionizedData]);
          setIsLoading(false);
        }
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
    console.log({ index });
    return index;
  };

  const getSeasonIndex = (seasonName: string): number => {
    const index: number = dataSource.findIndex(
      (item: HeaderData | SectionData | CalendarDay) =>
        item.type === "heading" &&
        ["season", "both"].includes(item.sectionType) &&
        item.season.name.toLowerCase() === seasonName.toLowerCase()
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
