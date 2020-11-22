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
    alignItems: "center",
    padding: 8,
    borderColor: colors.fontGrey,
    borderRadius: 10,
    borderWidth: 1,
  },
});
