import { useEffect, useState } from "react";
import { ApiCalendarDay, HeaderData, SectionData } from "./interfaces";
import { CalendarDay } from "./models";

interface ReturnData {
  dataSource: (HeaderData | SectionData | CalendarDay)[];
  isLoading: boolean;
  getData: () => Promise<void>;
}

/**
 *
 * @param startYear Year of Advent One for starting liturgical year
 * @param prepData Function to prep
 */
export const useCalendarData = (
  startYear: number,
  prepData?: (
    incomingData: CalendarDay[],
    currentData: (HeaderData | SectionData | CalendarDay)[],
    startYear: number
  ) => (HeaderData | SectionData | CalendarDay)[]
): ReturnData => {
  const [isLoading, setIsLoading] = useState(false);
  const [nextYear, setNextYear] = useState(+startYear);
  const [dataSource, setDataSource] = useState<
    (HeaderData | SectionData | CalendarDay)[]
  >([]);

  /**
   * Fetches the startYear's data, prepares it, and sets to dataSource
   *
   * Note: IIFE pattern necessary because the function passed to useEffect must return
   * either void or a clean-up function (not a Promise as addNextYearData returns)
   */
  useEffect(() => {
    (async () => getData())();
  }, []);

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
      setIsLoading(true);
      const apiCalendarData = await fetchCalendarData(nextYear);
      const normalizedData = apiCalendarData.map(
        ({ date, season, commemorations }) =>
          new CalendarDay(new Date(date), season, commemorations)
      );
      const preppedData = prepData
        ? prepData(normalizedData, dataSource, startYear)
        : normalizedData;
      setDataSource([...dataSource, ...preppedData]);
      setNextYear(nextYear + 1);
      setIsLoading(false);
    }
    return;
  };

  return { dataSource, isLoading, getData };
};
