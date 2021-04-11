/**
 *
 * IN THIS FILE
 *
 * COMPONENTS
 *   DateBlock (export)
 *   FastDisplay
 *
 */

import { CrossIcon } from "assets/icons";
import { CalendarDay } from "data/calendarData/models";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";

import {
  DateBlockContainer,
  DateText,
  DayOfMonth,
  FastDisplayContainer,
  FastText,
  TextWrapper,
  Weekday,
} from "./DateBlock.styled";

interface Props {
  day: CalendarDay;
}

export const DateBlock: React.FC<Props> = ({ day }) => {
  const theme = useContext(ThemeContext);

  const primaryColor = day.commemorations[0].colors[0];
  const textColor =
    primaryColor === "white" ? theme.colors.fontGrey : theme.colors.white;

  return (
    <DateBlockContainer primaryColor={primaryColor}>
      <TextWrapper>
        <Weekday textColor={textColor}>{day.weekday.slice(0, 3)}</Weekday>
      </TextWrapper>
      <TextWrapper large>
        <DayOfMonth textColor={textColor}>{day.dayOfMonth}</DayOfMonth>
      </TextWrapper>
      <TextWrapper>
        <DateText textColor={textColor}>{day.month}</DateText>
      </TextWrapper>
      <TextWrapper>
        <DateText textColor={textColor}>{day.year}</DateText>
      </TextWrapper>
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
