import React from "react";
import { StyleSheet } from "react-native";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const styles = StyleSheet.create({
  icons: {
    width: 15,
    marginRight: 10,
  },
});

export const menuItems = [
  {
    icon: <Feather name="clock" size={17} color="black" style={styles.icons} />,
    text: "Now",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="calendar-month-outline"
        size={17}
        color="black"
        style={styles.icons}
      />
    ),
    text: "Calendar",
  },
  {
    icon: (
      <FontAwesome name="cog" size={17} color="black" style={styles.icons} />
    ),
    text: "Settings",
  },
  {
    icon: (
      <FontAwesome5 name="cross" size={17} color="black" style={styles.icons} />
    ),
    text: "About",
  },
];
