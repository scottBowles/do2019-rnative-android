import { isFast } from "common/utils";
import { ParsedDate } from "./";

export class CalendarDay extends ParsedDate {
  constructor(
    public date: Date,
    public season: { name: string; colors: string[] },
    public commemorations: {
      name: string;
      rank: { name: string; formatted_name: string; precedence: number };
      colors: string[];
      links: string[];
      collects: {
        collect: string;
        alternate_collect?: string | null;
        vigil_collect?: string | null;
      };
    }[]
  ) {
    super(date);
  }
  type: "date" = "date";
  isFastDay: boolean = isFast(this);
}
