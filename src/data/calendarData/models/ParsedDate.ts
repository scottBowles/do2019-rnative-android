export class ParsedDate {
  constructor(public date: Date) {}

  dayOfMonth: number = this.date.getUTCDate();

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
  ][this.date.getUTCMonth()];

  month: string = this.fullMonth.slice(0, 3);

  weekday: string = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][
    this.date.getUTCDay()
  ];

  year: number = this.date.getUTCFullYear();
}
