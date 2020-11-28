import { DataProvider } from "recyclerlistview";
import { ApiCalendarDay, HeaderData, SectionData } from "./interfaces";
import { CalendarDay } from "./models";

/**
 * Fetch calendar data from the api
 * @param year Year to pass to the fetch url
 */
const fetchCalendarData = async (year: number): Promise<ApiCalendarDay[]> => {
  const res = await fetch(
    `https://data.dailyoffice2019.com/api/v1/calendar/${year}`
  );
  const data: ApiCalendarDay[] = await res.json();
  return data;
};

type CalGenReturn = AsyncGenerator<ApiCalendarDay[], ApiCalendarDay[], number>;

/**
 * Generator function to fetch subsequent years' data starting with startYear
 * @param startYear - First year to fetch data for
 */
export async function* generateCalendarData(startYear: number): CalGenReturn {
  let year = startYear;
  while (0 < year && year < 10000) {
    const data: ApiCalendarDay[] = await fetchCalendarData(year);
    const newStartYear: number = yield data;
    year = newStartYear || year + 1;
  }
  throw new RangeError("Invalid year: Year must be between 0 and 9999");
}

/**
 * Required provider for RecyclerListView. See, e.g.:
 * https://github.com/Flipkart/recyclerlistview/tree/master/docs/guides/samplecode
 * @param data Data for RecyclerListView
 */
export const createDataProvider = (
  data: (HeaderData | SectionData | CalendarDay)[]
) =>
  new DataProvider((r1, r2) => {
    return r1 !== r2;
  }).cloneWithRows(data);
