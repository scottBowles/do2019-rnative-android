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
import { StyleSheet, View } from "react-native";
import { colors } from "styles/colors";
import { Text } from "styles/typography";

interface Props {
  day: CalendarDay;
}

export const DateBlock: React.FC<Props> = ({ day }) => {
  const primaryColor = day.commemorations[0].colors[0];
  const textColor = getTextColor(primaryColor);
  const blockStyle = composeBlockStyle(primaryColor);
  const datePropertiesInOrder = ["weekday", "dayOfMonth", "month", "year"];

  return (
    <View style={blockStyle}>
      {datePropertiesInOrder.map((property, index) => (
        <Text key={index} style={composeTextStyle(property, textColor)}>
          {day[property]}
        </Text>
      ))}
      {!!day.isFastDay && <FastDisplay textColor={textColor} />}
    </View>
  );
};

const FastDisplay: React.FC<{ textColor: string }> = ({ textColor }) => (
  <View style={dateStyles.fastDay}>
    <CrossIcon size={14} color={textColor} />
    <Text style={[dateStyles.dateBlockText, { color: textColor }]}> Fast</Text>
  </View>
);

const dateStyles = StyleSheet.create({
  dateBlock: {
    borderRadius: 4,
    paddingTop: 9,
    paddingBottom: 8,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  dateBlockText: {
    textTransform: "uppercase",
    lineHeight: 14,
    fontSize: 14,
  },
  weekday: {
    fontWeight: "600",
  },
  dayOfMonth: {
    fontSize: 28,
    lineHeight: 28,
    fontWeight: "400",
  },
  fastDay: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 28,
  },
});

const getTextColor = (backgroundColor: string): string =>
  backgroundColor === "white" ? colors.fontGrey : colors.white;

const composeTextStyle = (key: string, textColor: string) => {
  return [dateStyles.dateBlockText, dateStyles[key], { color: textColor }];
};

const composeBlockStyle = (primaryColor: string) => [
  dateStyles.dateBlock,
  {
    backgroundColor: colors[primaryColor],
  },
];
