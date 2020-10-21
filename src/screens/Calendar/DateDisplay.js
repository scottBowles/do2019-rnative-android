import React from "react";

import {
  CalendarBlock,
  Content,
  DateBlock,
} from "common/components/calendarBlock";

// Invidual calendar date render component

export const DateDisplay = React.memo(
  ({ commemorations, date, day, isFastDay, primaryColor, ...props }) => (
    <CalendarBlock weekday={day.weekday} {...props}>
      <DateBlock day={day} isFastDay={isFastDay} primaryColor={primaryColor} />
      <Content commemorations={commemorations} date={date} />
    </CalendarBlock>
  )
);
