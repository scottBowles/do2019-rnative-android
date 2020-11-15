import { ParsedDate } from "data/calendarData/models";

/**
 * Parse date properties
 * @param date - Date object to be parsed
 */
export const parseDate = (date: Date): ParsedDate => {
  const weekdayIndex = date.getUTCDay();
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    weekdayIndex
  ];

  const monthIndex = date.getUTCMonth();
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

  const dayOfMonth = date.getUTCDate();
  const month = fullMonth.slice(0, 3);
  const year = date.getUTCFullYear();

  return { date, dayOfMonth, fullMonth, month, weekday, year };
};
