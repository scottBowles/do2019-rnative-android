import { CalendarDay } from "data/calendarData/models";

import { IApiOfficeData } from "./IApiOfficeData";

export class OfficeData extends CalendarDay {
  data: IApiOfficeData["modules"]["data"];

  constructor(apiOffice: IApiOfficeData) {
    super(apiOffice.calendar_day);
    this.data = apiOffice.modules.data;
  }
}
