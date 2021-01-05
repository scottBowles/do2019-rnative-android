import { ICommemoration, ISeason } from "../interfaces";

export interface IApiCalendarDay {
  date: string;
  date_description: {
    date: string;
    weekday: string;
    month: string;
    month_name: string;
    day: string;
    year: string;
  };
  season: ISeason;
  fast: {
    fast_day: number;
    fast_day_description: string;
    fast_day_reason: never[];
  };
  commemorations: ICommemoration[];
}
