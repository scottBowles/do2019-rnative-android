import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { colors } from "styles/colors";

interface Props {
  children: React.ReactNode;
  style: StyleProp<ViewStyle>;
}

export const OutlineBtn: React.FC<Props> = ({ children, style, ...props }) => (
  <View style={[styles.itemContainer, style]} {...props}>
    {children}
  </View>
);

const styles = StyleSheet.create({
  itemContainer: {
    borderColor: colors.fontGrey,
    borderWidth: 1,
    borderRadius: 11,
  },
});
