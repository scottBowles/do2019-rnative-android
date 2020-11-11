import React from "react";
import { View } from "react-native";
import { colors } from "styles";

// Expects DateBlock and Content children

export const CalendarBlock = ({ weekday, children, ...props }) => {
  return (
    <View style={containerStyle(weekday)} {...props}>
      {children}
    </View>
  );
};

const containerStyle = (weekday: string) => {
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
