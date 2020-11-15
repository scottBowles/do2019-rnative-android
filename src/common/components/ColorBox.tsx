import React from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { colors } from "styles/colors";

interface Props {
  color: string;
  dimension?: number; // should this be string?
  style?: StyleProp<ViewStyle>; // need to figure out style types
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
  dimension?: number;
}

const colorBoxStyle = ({ color, dimension }: StyleArgs) => ({
  borderColor: "black",
  borderWidth: 1,
  height: dimension,
  width: dimension,
  backgroundColor: colors[color] || color,
});
