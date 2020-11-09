import React from "react";
import { View } from "react-native";
import { colors } from "styles";

export const ColorBox = ({ color, dimension, style, ...props }) => (
  <View style={[colorBoxStyle({ color, dimension }), style]} {...props} />
);

const colorBoxStyle = ({ color, dimension }) => ({
  borderColor: "black",
  borderWidth: 1,
  height: dimension,
  width: dimension,
  backgroundColor: colors[color] || color,
});
