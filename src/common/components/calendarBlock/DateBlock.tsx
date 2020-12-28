/**
 *
 * IN THIS FILE
 *
 * COMPONENTS
 *   DateBlock (export)
 *   FastDisplay
 *
 * STYLES
 *   dateStyles
 *   getTextColor         Ensure contrast
 *   composeTextStyle     Based on textColor, per above
 *   composeBlockStyle    Based on primaryColor for the day
 *
 */

import { CrossIcon } from "assets/icons";
import { CalendarDay } from "data/calendarData/models";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { colors } from "styles/colors";
import { fonts } from "styles/fonts";
import { Text } from "styles/typography";

interface Props {
  day: CalendarDay;
}

export const DateBlock: React.FC<Props> = ({ day }) => {
  const primaryColor = day.commemorations[0].colors[0];
  const textColor = primaryColor === "white" ? colors.fontGrey : colors.white;

  return (
    <DateBlockContainer primaryColor={primaryColor}>
      <DateTextContainer>
        <Weekday textColor={textColor}>{day.weekday.slice(0, 3)}</Weekday>
      </DateTextContainer>
      <DateTextContainer large>
        <DayOfMonth textColor={textColor}>{day.dayOfMonth}</DayOfMonth>
      </DateTextContainer>
      <DateTextContainer>
        <DateText textColor={textColor}>{day.month}</DateText>
      </DateTextContainer>
      <DateTextContainer>
        <DateText textColor={textColor}>{day.year}</DateText>
      </DateTextContainer>
      {!!day.isFastDay && <FastDisplay textColor={textColor} />}
    </DateBlockContainer>
  );
};

const FastDisplay: React.FC<{ textColor: string }> = ({ textColor }) => (
  <FastDisplayContainer>
    <CrossIcon size={18} color={textColor} />
    <FastText textColor={textColor}>Fast</FastText>
  </FastDisplayContainer>
);

const FastDisplayContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`;

const FastText = styled(Text)`
  color: ${(props) => props.textColor};
  text-transform: uppercase;
  font-size: 16px;
  font-family: ${fonts.primary.bold};
  top: 3px;
  margin-left: 4px;
`;

const DateText = styled(Text)`
  color: ${(props) => props.textColor};
  text-transform: uppercase;
  font-size: 16px;
  bottom: 5px;
  font-family: ${fonts.primary.semibold};
`;

const Weekday = styled(DateText)`
  font-family: ${fonts.primary.bold};
`;

const DayOfMonth = styled(DateText)`
  font-family: ${fonts.primary.semibold};
  font-size: 32px;
  bottom: 8px;
`;

const DateTextContainer = styled.View`
  height: ${(props) => (props.large ? "35.2px" : "17.6px")};
`;

const DateBlockContainer = styled.View`
  background-color: ${(props) => colors[props.primaryColor]};
  border-radius: 4px;
  padding-top: 9px;
  padding-bottom: 8px;
  align-items: center;
  border-color: black;
  border-width: 1px;
`;
