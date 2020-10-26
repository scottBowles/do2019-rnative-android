import React from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";

import { toTitleCase } from "common/utils";
import { colors } from "styles";
import { Text } from "styles/typography";
import {
  CalendarDayIcon,
  CalendarIcon,
  ChurchIcon,
  ToTopIcon,
} from "assets/icons";

export const CalendarNavBar = ({ jumpToDate, jumpToTop }) => {
  const ICON_SIZE = 23;

  const menuItems = [
    {
      icon: (
        <CalendarDayIcon size={ICON_SIZE} color="black" style={styles.icons} />
      ),
      text: "Today",
      onPress: () => {
        const today = new Date();
        jumpToDate(today);
      },
    },
    {
      icon: (
        <CalendarIcon size={ICON_SIZE} color="black" style={styles.icons} />
      ),
      text: "Jump to Date",
      onPress: () => console.log("clicked"),
    },
    {
      icon: <ChurchIcon size={ICON_SIZE} color="black" style={styles.icons} />,
      text: "Jump to Season",
      onPress: () => console.log("clicked"),
    },
    {
      icon: <ToTopIcon size={ICON_SIZE} color="black" style={styles.icons} />,
      text: "Jump to Top",
      onPress: jumpToTop,
    },
  ];

  return (
    <View style={styles.container}>
      {menuItems.map((menuItem, index) => (
        <TouchableHighlight
          onPress={menuItem.onPress}
          style={styles.btn}
          key={index}
        >
          <View style={styles.btnContent}>
            {menuItem.icon}
            <Text style={styles.item}>{toTitleCase(menuItem.text)}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: colors.black,
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 100,
  },
  btn: {
    flex: 1,
  },
  btnContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGrey,
  },
  item: {
    fontSize: 17,
    textTransform: "capitalize",
    textAlign: "center",
  },
});
