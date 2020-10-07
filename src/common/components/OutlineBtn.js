import React from "react";
import { StyleSheet, View } from "react-native";
import { colors } from "styles";

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 8,
    borderWidth: 1,
    borderColor: colors.fontGrey,
    borderRadius: 10,
    height: 34,
  },
});

const OutlineBtn = ({ children, style }) => (
  <View style={[styles.itemContainer, style]}>{children}</View>
);

export default OutlineBtn;
