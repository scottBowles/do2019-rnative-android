import { ParsedDate } from "data/calendarData/models";
import { getLocalDate } from "./getLocalDate";

/**
 * Parse date properties
 * @param date - Date object to be parsed
 */
export const parseDate = (date: Date): ParsedDate => {
  const weekdayIndex = date.getDay();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    weekdayIndex
  ];

  const monthIndex = date.getMonth();
  const fullMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ][monthIndex];

  const dayOfMonth = date.getDate();
  const month = fullMonth.slice(0, 3);
  const year = date.getFullYear();
  const localDate = getLocalDate(
    new Date(`${fullMonth} ${dayOfMonth}, ${year}`)
  );

  return { date, dayOfMonth, fullMonth, month, weekday, year, localDate };
};
