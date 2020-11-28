import { getLocalDate } from "common/utils/getLocalDate";
import { IParsedDate } from "../interfaces/IParsedDate";

export class ParsedDate implements IParsedDate {
  constructor(public date: Date) {}

  dayOfMonth: number = this.date.getDate();

  fullMonth: string = [
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
  ][this.date.getMonth()];

  month: string = this.fullMonth.slice(0, 3);

  weekday: string = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    this.date.getDay()
  ];

  year: number = this.date.getFullYear();

  localDate: Date = getLocalDate(
    new Date(`${this.fullMonth} ${this.dayOfMonth}, ${this.year}`)
  );
}
