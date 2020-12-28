import { CrossIcon } from "assets/icons";
import { CalendarDay } from "data/calendarData/models";
import React from "react";
import { Text as NativeText, View } from "react-native";
import styled from "styled-components/native";

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

import { colors } from "styles/colors";
import { fonts } from "styles/fonts";
import { Text } from "styles/typography";

interface Props {
  day: CalendarDay;
}

export const Settings: React.FC<Props> = ({ day }) => {
  const primaryColor = "white";
  const textColor = primaryColor === "white" ? colors.fontGrey : colors.white;

  return (
    <View style={{ flexDirection: "row" }}>
      <DateBlockContainer primaryColor={primaryColor} style={{ width: "100%" }}>
        <View
          style={{
            height: 17.6,
          }}
        >
          <Weekday textColor={textColor}>Sun</Weekday>
        </View>
        <View
          style={{
            height: 35.2,
          }}
        >
          <DayOfMonth textColor={textColor}>27</DayOfMonth>
        </View>
        <View
          style={{
            height: 17.6,
          }}
        >
          <DateText textColor={textColor}>Dec</DateText>
        </View>
        <View
          style={{
            height: 17.6,
          }}
        >
          <DateText textColor={textColor}>2020</DateText>
        </View>
        {/* {!!day.isFastDay && <FastDisplay textColor={textColor} />} */}
      </DateBlockContainer>
      <DateBlockContainer primaryColor={primaryColor} style={{ width: "50%" }}>
        <Weekday2 textColor={textColor}>Sun</Weekday2>
        <DayOfMonth2 textColor={textColor}>27</DayOfMonth2>
        <DateText2 textColor={textColor}>Dec</DateText2>
        <DateText2 textColor={textColor}>2020</DateText2>
        {/* {!!day.isFastDay && <FastDisplay textColor={textColor} />} */}
      </DateBlockContainer>
    </View>
  );
};

const FastDisplay: React.FC<{ textColor: string }> = ({ textColor }) => (
  <FastDisplayContainer>
    <CrossIcon size={14} color={textColor} />
    <DateText textColor={textColor}> Fast</DateText>
  </FastDisplayContainer>
);

const FastDisplayContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`;

const DateText = styled(Text)`
  color: ${(props) => props.textColor};
  text-transform: uppercase;
  font-size: 16px;
  bottom: 5px;
`;

const Weekday = styled(DateText)`
  font-family: ${fonts.primary.bold};
`;

const DayOfMonth = styled(DateText)`
  font-size: 32px;
  bottom: 10px;
`;

const DateText2 = styled(Text)`
  font-family: "serif";
  color: ${(props) => props.textColor};
  text-transform: uppercase;
  font-size: 16px;
  line-height: 16px;
  border-color: blue;
  border-width: 1px;
`;

const Weekday2 = styled(DateText2)`
  font-family: ${fonts.primary.bold};
  border-color: red;
  border-width: 1px;
  font-weight: bold;
`;

const DayOfMonth2 = styled(DateText2)`
  font-size: 32px;
  line-height: 32px;
  border-color: green;
  border-width: 1px;
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

export const Settings2: React.FC = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={{ width: "50%" }}>
        <Text
          style={{
            fontSize: 32,
            textAlignVertical: "top",
            borderColor: "red",
            borderWidth: 1,
          }}
        >
          Text Line yj
        </Text>
        <Text
          style={{
            fontSize: 32,
            textAlignVertical: "top",
            borderColor: "red",
            borderWidth: 1,
          }}
        >
          Text Line yj
        </Text>
      </View>
      <View style={{ width: "50%" }}>
        <NativeText
          style={{
            fontFamily: "serif",
            fontSize: 32,
            textAlignVertical: "center",
            borderColor: "red",
            borderWidth: 1,
          }}
        >
          Text Line yj
        </NativeText>
        <NativeText
          style={{
            fontSize: 32,
            textAlignVertical: "center",
            borderColor: "red",
            borderWidth: 1,
          }}
        >
          Text Line yj
        </NativeText>
      </View>
    </View>
  );
};
