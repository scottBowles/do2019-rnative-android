import { getLocalDate } from "common/utils/getLocalDate";
import {
  ApiCalendarDay,
  Commemoration,
  IParsedDate,
  Season,
} from "../interfaces";

export class CalendarDay implements IParsedDate {
  localDate: Date;
  dayOfMonth: number;
  fullMonth: string;
  month: string;
  weekday: string;
  year: number;
  season: Season;
  isFastDay: boolean;
  commemorations: Commemoration[];

  constructor(apiDay: ApiCalendarDay) {
    const {
      date_description: { day, month_name, weekday, year },
      season,
      fast: fast_day,
      commemorations,
    } = apiDay;
    this.dayOfMonth = +day;
    this.fullMonth = month_name;
    this.month = month_name.slice(0, 3);
    this.weekday = weekday;
    this.year = +year;
    this.localDate = getLocalDate(
      new Date(`${this.fullMonth} ${this.dayOfMonth}, ${this.year}`)
    );
    this.season = season;
    this.isFastDay = !!fast_day;
    this.commemorations = commemorations;
  }

  type: "date" = "date";
}
