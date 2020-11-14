import React from "react";

import {
  CalendarBlock,
  Content,
  DateBlock,
} from "common/components/calendarBlock";
import { CalendarDay } from "data/calendarData/models";

interface DateDisplayProps {
  day: CalendarDay;
}

// Invidual calendar date render component

export const DateDisplay: React.FC<DateDisplayProps> = React.memo(
  ({ day, ...props }) => (
    <CalendarBlock weekday={day.weekday} {...props}>
      <DateBlock day={day} />
      <Content day={day} />
    </CalendarBlock>
  )
);
