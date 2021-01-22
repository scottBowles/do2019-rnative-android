import { IApiCalendarDay } from "../interfaces";

export interface IApiOfficeData {
  calendar_day: IApiCalendarDay;
  modules: {
    data: {
      name: string;
      lines: {
        content: string;
        line_type: string;
        indented: boolean;
      }[];
    }[];
  };
}
