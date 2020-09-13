import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { menuItems } from "./menuItems";

export default function Menu() {
  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <View style={styles.itemContainer} key={index}>
          {item.icon}
          <Text style={styles.item}>{item.text}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  itemContainer: {
    height: 35,
    width: 100,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  item: {
    fontSize: 21,
  },
});
