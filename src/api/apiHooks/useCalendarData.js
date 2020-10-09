import { useEffect, useState } from "react";
import { sectionizeCalendarData } from "api";

export default useCalendarData = (startYear) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [nextYear, setNextYear] = useState(startYear);

  useEffect(() => getData(), []);

  const getData = () => {
    if (!isLoading) {
      setIsLoading(true);
      fetch(
        `https://data.dailyoffice2019.com/api/v1/calendar/${nextYear}?format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          const sectionizedData = sectionizeCalendarData(data);
          setNextYear(nextYear + 1);
          setDataSource([...dataSource, ...sectionizedData]);
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    }
  };

  return { dataSource, isLoading, getData };
};
