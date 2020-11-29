import { DataProvider } from "recyclerlistview";
import { getLiturgicalYear, getLocalDate } from "common/utils";
import { ApiCalendarDay, HeaderData, SectionData } from "./interfaces";
import { CalendarDay } from "./models";

/**
 * Get start values for calendar based on year and date in route
 * @param year Calendar year requested
 * @param date Starting date requested (optional)
 */
export const getStartValues = (year?: string, date?: string) => {
  let startDate: Date | undefined;
  let startYear: number;

  if (date && year) {
    // If a start date is requested, make sure it plays nice with the local timezone and render its year
    const utcStartDate = new Date(date);
    startDate = getLocalDate(utcStartDate);
    startYear = getLiturgicalYear(startDate);
  } else if (year) {
    // If only a year is requested, render that year from the top (with no date to jump to)
    startYear = +year;
  } else {
    // Otherwise, render the current liturgical year and provide the current date to jump to
    startDate = new Date();
    startYear = getLiturgicalYear(startDate);
  }
  return { startYear, startDate };
};

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
