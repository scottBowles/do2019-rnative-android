import {
  CalendarBlock,
  Content,
  DateBlock,
} from "common/components/calendarBlock";
import { CalendarDay } from "data/calendarData/models";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";

interface DateDisplayProps {
  day: CalendarDay;
}

// Invidual calendar date render component

export const DateDisplay: React.FC<DateDisplayProps> = React.memo(
  ({ day, ...props }) => (
    <Container>
      <CalendarBlock weekday={day.weekday} {...props}>
        <DateBlock day={day} />
        <Content day={day} showOfficeLinks />
      </CalendarBlock>
    </Container>
  )
);

const Container = styled(View)`
  padding-left: ${({ theme }) => theme.spacing.outerPadding}px;
  padding-right: ${({ theme }) => theme.spacing.outerPadding}px;
`;
