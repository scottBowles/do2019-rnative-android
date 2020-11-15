import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { colors } from "styles/colors";

interface Props {
  weekday: string;
  children: React.ReactNode;
}

// Expects DateBlock and Content children

export const CalendarBlock: React.FC<Props> = ({
  weekday,
  children,
  ...props
}) => (
  <View style={containerStyle(weekday)} {...props}>
    {children}
  </View>
);

const containerStyle = (weekday: string): StyleProp<ViewStyle> => {
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
