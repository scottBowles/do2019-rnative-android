import React from "react";
import { StyleSheet, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

import { parseDate } from "../../utils";
import { Text } from "../../styles/typography";
import colors from "../../styles/colors";

const dateStyles = StyleSheet.create({
  dateBlock: {
    borderRadius: 4,
    paddingTop: 11,
    paddingBottom: 11,
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
  },
  dateBlockText: {
    textTransform: "uppercase",
    lineHeight: 18,
    fontSize: 17,
    fontWeight: "600",
  },
  weekday: {
    fontWeight: "700",
    fontSize: 17,
    lineHeight: 17,
    lineHeight: 18,
  },
  dayOfMonth: {
    fontSize: 34,
    lineHeight: 37,
    fontWeight: "400",
  },
  fastDay: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 28,
  },
  fastText: {
    textTransform: "uppercase",
    fontSize: 17,
  },
});

const getTextColor = (backgroundColor) =>
  backgroundColor === "white" ? colors.fontGrey : colors.white;

const composeBlockStyle = (primaryColor) =>
  StyleSheet.compose(dateStyles.dateBlock, {
    backgroundColor: colors[primaryColor],
  });

const composeTextStyle = (key, textColor) => {
  return [dateStyles.dateBlockText, dateStyles[key], { color: textColor }];
};

const Fast = ({ textColor }) => (
  <View style={dateStyles.fastDay}>
    <FontAwesome5
      name="cross"
      size={18}
      color={textColor}
      style={{ bottom: 1 }}
    />
    <Text style={[dateStyles.fastText, { color: textColor }]}> Fast</Text>
  </View>
);
// officeData: {
//     date,
//     commemorations: [
//       {
//         colors: [primaryColor],
//       },
//     ],
//   },
const DateBlock = ({
  dateData: { isFastDay, weekday },
  date,
  primaryColor,
}) => {
  const { year, month, dayOfMonth } = parseDate(date);
  const textColor = getTextColor(primaryColor);
  const blockStyle = composeBlockStyle(primaryColor);
  const dateProperties = { weekday, dayOfMonth, month, year };

  return (
    <View style={blockStyle}>
      {Object.keys(dateProperties).map((property, index) => (
        <Text key={index} style={composeTextStyle(property, textColor)}>
          {dateProperties[property]}
        </Text>
      ))}
      {!!isFastDay && <Fast textColor={textColor} />}
    </View>
  );
};

export default DateBlock;
