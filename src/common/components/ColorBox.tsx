import React from "react";
import { View } from "react-native";
import { colors } from "styles";

interface Props {
  color: string;
  dimension?: number; // should this be string?
  style?; // need to figure out style types
}

/**
 * Creates a colored box
 */
export const ColorBox: React.FC<Props> = ({
  color,
  dimension,
  style,
  ...props
}) => <View style={[colorBoxStyle({ color, dimension }), style]} {...props} />;

interface StyleArgs {
  color: string;
  dimension: number;
}

const colorBoxStyle = ({ color, dimension }: StyleArgs) => ({
  borderColor: "black",
  borderWidth: 1,
  height: dimension,
  width: dimension,
  backgroundColor: colors[color] || color,
});
