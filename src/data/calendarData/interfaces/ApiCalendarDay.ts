import { Commemoration, Season } from "../interfaces";

export interface ApiCalendarDay {
  date: string;
  date_description: {
    date: string;
    weekday: string;
    month: string;
    month_name: string;
    day: string;
    year: string;
  };
  season: Season;
  fast: {
    fast_day: number;
  };
  commemorations: Commemoration[];
}
