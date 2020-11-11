import { isFast, parseDate } from "common/utils";
import { ParsedDate } from "models/ParsedDate";

export class CalendarDay {
  constructor(
    public date: string,

    public season: {
      name: string;
      colors: string[];
    },

    public commemorations: {
      name: string;
      rank: {
        name: string;
        formatted_name: string;
        precedence: number;
      };
      colors: string[];
      links: string[];
      collects: {
        collect: string;
        alternate_collect?: string;
        vigil_collect?: string;
      };
    }[]
  ) {}

  day: ParsedDate = parseDate(new Date(this.date));

  isFastDay: boolean = isFast(this);
}
