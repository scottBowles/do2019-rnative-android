import { parseDate } from "common/utils";

export const withParsedDate = (calendarData) =>
  calendarData.map((calendarDay) => {
    const { dayOfMonth, fullMonth, month, weekday, year } = parseDate(
      calendarDay.date
    );
    calendarDay.day = { dayOfMonth, fullMonth, month, weekday, year };
    return calendarDay;
  });
