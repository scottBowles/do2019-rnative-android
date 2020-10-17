import React from "react";
import { StyleSheet, View } from "react-native";
import { CrossIcon } from "assets/icons";
import { parseDate } from "common/utils";
import { Text } from "styles/typography";
import { colors } from "styles";

/**
 *
 * IN THIS FILE
 *
 * COMPONENTS
 *   DateBlock (export default)
 *   FastDisplay
 *
 * STYLES
 *   dateStyles
 *   getTextColor         Ensure contrast
 *   composeTextStyle     Based on textColor, per above
 *   composeBlockStyle    Based on primaryColor for the day
 *
 */

const DateBlock = ({ isFastDay, day, primaryColor }) => {
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
      {!!isFastDay && <FastDisplay textColor={textColor} />}
    </View>
  );
};

const FastDisplay = ({ textColor }) => (
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

const getTextColor = (backgroundColor) =>
  backgroundColor === "white" ? colors.fontGrey : colors.white;

const composeTextStyle = (key, textColor) => {
  return [dateStyles.dateBlockText, dateStyles[key], { color: textColor }];
};

const composeBlockStyle = (primaryColor) =>
  StyleSheet.compose(dateStyles.dateBlock, {
    backgroundColor: colors[primaryColor],
  });

export default DateBlock;
