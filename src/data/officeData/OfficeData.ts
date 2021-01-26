import { CalendarDay } from "data/calendarData/models";

import { IApiOfficeData } from "./IApiOfficeData";

export class OfficeData extends CalendarDay {
  modules: IApiOfficeData["modules"];

  constructor(apiOffice: IApiOfficeData) {
    super(apiOffice.calendar_day);
    this.modules = apiOffice.modules;
  }
}
