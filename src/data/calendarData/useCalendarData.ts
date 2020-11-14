import { useEffect, useState } from "react";
import { prepCalendarData } from "./prepCalendarData";
import { ApiCalendarDay, SectionData } from "./interfaces";
import { CalendarDay } from "./models";

interface ReturnData {
  dataSource: (SectionData | CalendarDay)[];
  isLoading: boolean;
  getData: () => void;
}

export const useCalendarData = (startYear: number | string): ReturnData => {
  const [isLoading, setIsLoading] = useState(false);
  const [nextYear, setNextYear] = useState(+startYear);
  const [dataSource, setDataSource] = useState<(SectionData | CalendarDay)[]>(
    []
  );

  useEffect(() => getData(), []);

  /**
   * Fetches the startYear's data and prepares it and, on subsequent calls,
   * fetches, prepares, and appends the next year's worth of data
   */
  const getData = () => {
    if (!isLoading) {
      setIsLoading(true);
      fetch(
        `https://data.dailyoffice2019.com/api/v1/calendar/${nextYear}?format=json`
      )
        .then((res) => res.json())
        .then((data: ApiCalendarDay[]) => {
          const preppedData = prepCalendarData(data);
          setNextYear(nextYear + 1);
          setDataSource([...dataSource, ...preppedData]);
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    }
  };

  return { dataSource, isLoading, getData };
};
