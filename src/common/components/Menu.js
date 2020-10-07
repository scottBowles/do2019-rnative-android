import React from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

import { Text } from "styles/typography";
import { colors } from "styles";
import { CalendarIcon, ClockIcon, CogIcon, CrossIcon } from "assets/icons";
import { OutlineBtn } from "common/components";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
  outlineBtn: {
    flexDirection: "row",
  },
  linkItem: {
    borderRadius: 10,
  },
  item: {
    fontSize: 11,
    textTransform: "uppercase",
  },
  firstLetter: {
    fontSize: 15,
    textTransform: "uppercase",
  },
  icons: {
    marginRight: 4,
  },
});

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

export default function Menu() {
  return (
    <View style={styles.container}>
      {menuItems.map((item, index) => (
        <Link
          to={item.route}
          underlayColor="#f0f4f7"
          style={styles.linkItem}
          key={index}
        >
          <OutlineBtn style={styles.outlineBtn}>
            {item.icon}
            <Text>
              <Text style={styles.firstLetter}>{item.text[0]}</Text>
              <Text style={styles.item}>{item.text.slice(1)}</Text>
            </Text>
          </OutlineBtn>
        </Link>
      ))}
    </View>
  );
}
