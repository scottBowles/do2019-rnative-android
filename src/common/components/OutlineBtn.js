import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "styles";

const OutlineBtn = ({ children, style }) => (
  <View style={[styles.itemContainer, style]}>{children}</View>
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

export default OutlineBtn;
