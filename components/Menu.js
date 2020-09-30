import React from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import { Text } from "../styles/typography";
import colors from "../styles/colors";
import {
  Feather,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 8,
  },
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
    icon: <Feather name="clock" size={12} color="black" style={styles.icons} />,
    text: "Now",
    route: "/office",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="calendar-month-outline"
        size={12}
        color="black"
        style={styles.icons}
      />
    ),
    text: "Calendar",
    route: "/",
  },
  {
    icon: (
      <FontAwesome name="cog" size={12} color="black" style={styles.icons} />
    ),
    text: "Settings",
    route: "/settings",
  },
  {
    icon: (
      <FontAwesome5 name="cross" size={12} color="black" style={styles.icons} />
    ),
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
          <View style={styles.itemContainer}>
            {item.icon}
            <Text>
              <Text style={styles.firstLetter}>{item.text[0]}</Text>
              <Text style={styles.item}>{item.text.slice(1)}</Text>
            </Text>
          </View>
        </Link>
      ))}
    </View>
  );
}
