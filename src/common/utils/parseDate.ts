interface ParsedDate {
  dayOfMonth: number;
  fullMonth: string;
  month: string;
  weekday: string;
  year: number;
}

interface Error {
  error: string;
}

/**
 * Parse date properties
 * @param dateStr - date to be parsed
 */
export const parseDate = (dateStr: string | number): ParsedDate | Error => {
  const date = new Date(dateStr);
  if (date.toString() === "Invalid Date") return { error: "Invalid Date" };

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

  return { dayOfMonth, fullMonth, month, weekday, year };
};
