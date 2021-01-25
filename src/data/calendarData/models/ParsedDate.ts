import { getLocalDate } from "common/utils/getLocalDate";

import { IParsedDate } from "../interfaces/IParsedDate";

export class ParsedDate implements IParsedDate {
  date: Date;
  dayOfMonth: number;
  fullMonth: string;
  month: string;
  weekday: string;
  year: number;
  localDate: Date;

  constructor(date: Date) {
    this.date = date;

    this.dayOfMonth = this.date.getDate();

    this.fullMonth = [
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

    this.month = this.fullMonth.slice(0, 3);

    this.weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
      this.date.getDay()
    ];

    this.year = this.date.getFullYear();

    this.localDate = getLocalDate(
      new Date(`${this.fullMonth} ${this.dayOfMonth}, ${this.year}`)
    );
  }
}
