import React from "react";
import { View } from "react-native";
import { parseDate } from "library/utils";
import colors from "styles/colors";

const containerStyle = (weekday) => {
  return {
    marginVertical: 5,
    marginHorizontal: 25,
    padding: 6,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor:
      weekday.toLowerCase() === "sun" ? colors.lightGrey : "#ffffff",
  };
};

// Expects DateBlock and Content children

const CalendarBlock = ({ date, children }) => {
  const { weekday } = parseDate(date);
  return <View style={containerStyle(weekday)}>{children}</View>;
};

export default CalendarBlock;
