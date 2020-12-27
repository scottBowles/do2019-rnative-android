/**
 *
 * IN THIS FILE
 * styles
 * menuItems
 * Menu (maps menuItem => Link)(export default)
 *
 */

import { CalendarIcon, ClockIcon, CogIcon, CrossIcon } from "assets/icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import { Text } from "styles/typography";

import { OutlineBtn } from "./OutlineBtn";

export const Menu: React.FC = () => {
  const menuItems = [
    {
      icon: <ClockIcon size={12} color="black" style={styles.icons} />,
      text: "Now",
      route: "/office",
    },
    {
      icon: <CalendarIcon size={12} color="black" style={styles.icons} />,
      text: "Calendar",
      route: "/calendar",
    },
    {
      icon: <CogIcon size={12} color="black" style={styles.icons} />,
      text: "Settings",
      route: "/settings",
    },
    {
      icon: <CrossIcon size={12} color="black" style={styles.icons} />,
      text: "About",
      route: "/about",
    },
  ];

  return (
    <View style={styles.menuContainer}>
      {menuItems.map((item, index) => (
        <Link
          to={item.route}
          underlayColor="#f0f4f7"
          style={styles.linkItem}
          key={index}
        >
          <OutlineBtn style={styles.outlineBtn}>
            <View style={styles.btnContent}>
              {item.icon}
              <Text style={styles.textContainer}>
                <Text style={styles.firstLetter}>{item.text[0]}</Text>
                <Text style={styles.text}>{item.text.slice(1)}</Text>
              </Text>
            </View>
          </OutlineBtn>
        </Link>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  linkItem: {
    borderRadius: 11,
  },
  outlineBtn: {
    flexDirection: "row",
    padding: 6.6,
    margin: 3.3,
  },
  btnContent: {
    flexDirection: "row",
    alignItems: "center",
    height: 16,
  },
  textContainer: {
    alignItems: "baseline",
    top: 3,
  },
  icons: {
    marginRight: 2,
  },
  firstLetter: {
    fontSize: 16,
    letterSpacing: 0.66,
    textTransform: "uppercase",
  },
  text: {
    fontSize: 11,
    textTransform: "uppercase",
    textAlignVertical: "center",
  },
});
