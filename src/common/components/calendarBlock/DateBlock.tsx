import { CrossIcon } from "assets/icons";
import { CalendarDay } from "data/calendarData/models";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { Text } from "styles/typography";

interface Props {
  day: CalendarDay;
}

export const DateBlock: React.FC<Props> = ({ day }) => {
  const theme = useContext(ThemeContext);

  const primaryColor = day.commemorations[0].colors[0];
  const textColor =
    primaryColor === "white" ? theme.colors.fontGrey : theme.colors.white;

  return (
    <DateBlockContainer color={primaryColor}>
      <DateText color={textColor} bold>
        {day.weekday.slice(0, 3)}
      </DateText>
      <DateText color={textColor} semibold large>
        {day.dayOfMonth}
      </DateText>
      <DateText color={textColor} semibold>
        {day.month}
      </DateText>
      <DateText color={textColor} semibold>
        {day.year}
      </DateText>
      {!!day.isFastDay && <FastDisplay textColor={textColor} />}
    </DateBlockContainer>
  );
};

const FastDisplay: React.FC<{ textColor: string }> = ({ textColor }) => (
  <FastDisplayContainer>
    <CrossIcon size={18} color={textColor} />
    <DateText color={textColor} bold ml={4}>
      Fast
    </DateText>
  </FastDisplayContainer>
);

/* ******* STYLES ******* */

const DateBlockContainer = styled.View<{ color: string }>`
  background-color: ${(props) => props.theme.colors[props.color]};
  border-radius: 4px;
  padding-top: 9px;
  padding-bottom: 8px;
  align-items: center;
  border-color: black;
  border-width: 1px;
`;

const DateText = styled(Text)<{ large?: boolean }>`
  text-transform: uppercase;
  font-size: ${({ large }) => (large ? "32px" : "16px")};
  line-height: ${({ large }) => (large ? "35.2px" : "17.6px")};
`;

const FastDisplayContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`;
