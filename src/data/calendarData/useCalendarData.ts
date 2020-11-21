import { useState } from "react";
import { DataProvider } from "recyclerlistview";
import { ApiCalendarDay, HeaderData, SectionData } from "./interfaces";
import { CalendarDay, ParsedDate } from "./models";
import { sectionizeCalendarData } from "./sectionizeCalendarData";

const createDataProvider = (data: (HeaderData | SectionData | CalendarDay)[]) =>
  new DataProvider((r1, r2) => {
    return r1 !== r2;
  }).cloneWithRows(data);

interface ReturnData {
  dataProvider: DataProvider;
  isLoading: boolean;
  getData: () => Promise<boolean>;
  getDateIndex: (date: Date) => number;
  getSeasonIndex: (season: string) => number;
}

/**
 *
 * @param startYear Year of Advent One for starting liturgical year
 * @param prepData Function to prep
 */
export const useCalendarData = (startYear: number): ReturnData => {
  const dataForHeader: HeaderData = { type: "listHeader", startYear };
  const [isLoading, setIsLoading] = useState(false);
  const [nextYear, setNextYear] = useState(+startYear);
  const [dataSource, setDataSource] = useState<
    (HeaderData | SectionData | CalendarDay)[]
  >([dataForHeader]);
  const [dataProvider, setDataProvider] = useState(createDataProvider([]));

  const fetchCalendarData = async (year: number): Promise<ApiCalendarDay[]> => {
    const res = await fetch(
      `https://data.dailyoffice2019.com/api/v1/calendar/${year}`
    );
    const data = await res.json();
    return data;
  };

  /**
   * Fetches the startYear's data and prepares it and, on subsequent calls,
   * fetches, prepares, and appends the next year's worth of data
   */
  const getData = async () => {
    if (!isLoading) {
      try {
        setIsLoading(true);
        const apiCalendarData = await fetchCalendarData(nextYear);
        const calendarDays = apiCalendarData.map(
          ({ date, season, commemorations }) =>
            new CalendarDay(new Date(date), season, commemorations)
        );
        const sectionizedData = sectionizeCalendarData(calendarDays);

        setDataSource([...dataSource, ...sectionizedData]);
        setDataProvider(createDataProvider(dataSource));
        setNextYear(nextYear + 1);
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
    console.log(
      `getDateIndex index: ${index}; dpLength: ${dataProvider.getSize()}`
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

  return { dataProvider, isLoading, getData, getDateIndex, getSeasonIndex };
};
