import React from "react";
import { StyleSheet, View } from "react-native";
import DateBlock from "./DateBlock";
import Content from "./Content";
import { parseDate } from "../../utils";
import colors from "../../styles/colors";

const containerStyle = (weekday) => {
  return {
    margin: 5,
    padding: 6,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor:
      weekday.toLowerCase() === "sun" ? colors.lightGrey : "#ffffff",
  };
};

const CalendarBlock = ({ date, children }) => {
  const { weekday } = parseDate(date);
  return <View style={containerStyle(weekday)}>{children}</View>;
};

export default CalendarBlock;
