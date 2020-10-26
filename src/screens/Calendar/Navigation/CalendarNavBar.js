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
  const ICON_COLOR = colors.black;
  const navItems = menuItems({ jumpToDate, jumpToTop });

  return (
    <View style={styles.container}>
      {navItems.map(({ Icon, text, onPress, modal }, index) => (
        <TouchableHighlight onPress={onPress} style={styles.btn} key={index}>
          <View style={styles.btnContent}>
            <Icon size={ICON_SIZE} color={ICON_COLOR} style={styles.icons} />
            <Text style={styles.item}>{toTitleCase(text)}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const menuItems = ({ jumpToDate, jumpToTop }) => [
  {
    Icon: CalendarDayIcon,
    text: "Today",
    onPress: () => {
      const today = new Date();
      jumpToDate(today);
    },
    modal: undefined,
  },
  {
    Icon: CalendarIcon,
    text: "Jump to Date",
    onPress: () => console.log("clicked"),
    modal: undefined,
  },
  {
    Icon: ChurchIcon,
    text: "Jump to Season",
    onPress: () => console.log("clicked"),
    modal: undefined,
  },
  {
    Icon: ToTopIcon,
    text: "Jump to Top",
    onPress: jumpToTop,
    modal: undefined,
  },
];

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
    textAlign: "center",
  },
});
