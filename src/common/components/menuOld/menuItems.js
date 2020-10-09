import React from "react";
import { StyleSheet } from "react-native";
import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

// IF THIS ENDS UP BEING USED, ICONS SHOULD BE MOVED TO assets/icons AND
//   IMPORTED FROM THERE

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
    icon: <Feather name="settings" size={17} color="black" />,
    text: "Office Settings",
  },
  {
    icon: <MaterialIcons name="settings-brightness" size={24} color="black" />,
    text: "Visual Settings",
  },
  {
    icon: (
      <FontAwesome5 name="cross" size={17} color="black" style={styles.icons} />
    ),
    text: "About",
  },
];

const styles = StyleSheet.create({
  icons: {
    width: 15,
    marginRight: 10,
  },
});
