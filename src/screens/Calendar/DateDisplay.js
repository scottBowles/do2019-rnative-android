import React from "react";

import {
  CalendarBlock,
  Content,
  DateBlock,
} from "common/components/calendarBlock";

// Invidual calendar date render component

const DateDisplay = React.memo(
  ({ commemorations, date, isFastDay, primaryColor, ...props }) => (
    <CalendarBlock date={date} {...props}>
      <DateBlock
        date={date}
        isFastDay={isFastDay}
        primaryColor={primaryColor}
      />
      <Content commemorations={commemorations} date={date} />
    </CalendarBlock>
  )
);

export default DateDisplay;
