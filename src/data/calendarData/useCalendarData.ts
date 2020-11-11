import { useEffect, useState } from "react";
import { prepCalendarData } from "data/utils";

interface ReturnData {
  dataSource: any;
  isLoading: boolean;
  getData: () => void;
}

export const useCalendarData = (startYear: number | string): ReturnData => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [nextYear, setNextYear] = useState(+startYear);

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
        .then((data) => {
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
