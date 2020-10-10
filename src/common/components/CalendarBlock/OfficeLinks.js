import React from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";
import { MoonIcon, SunIcon, SunriseIcon, SunsetIcon } from "assets/icons";
import { Text } from "styles/typography";
import { OutlineBtn } from "common/components";

const OfficeLinks = ({ date }) => (
  <View style={styles.officeLinksContainer}>
    <Link style={styles.link} to={`/morningprayer/${date}`}>
      <OutlineBtn style={styles.outlineBtn}>
        <SunriseIcon />
        <Text style={styles.outlineBtnText}>Morning</Text>
      </OutlineBtn>
    </Link>
    <Link style={styles.link} to={`/middayprayer/${date}`}>
      <OutlineBtn style={styles.outlineBtn}>
        <SunIcon />
        <Text style={styles.outlineBtnText}>Midday</Text>
      </OutlineBtn>
    </Link>
    <Link style={styles.link} to={`/eveningprayer/${date}`}>
      <OutlineBtn style={styles.outlineBtn}>
        <SunsetIcon />
        <Text style={styles.outlineBtnText}>Evening</Text>
      </OutlineBtn>
    </Link>
    <Link style={styles.link} to={`/compline/${date}`}>
      <OutlineBtn style={styles.outlineBtn}>
        <MoonIcon />
        <Text style={styles.outlineBtnText}>Compline</Text>
      </OutlineBtn>
    </Link>
  </View>
);
const styles = StyleSheet.create({
  link: {
    width: "46%",
  },
  officeLinksContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
  outlineBtn: {
    marginVertical: 3,
    flexDirection: "row",
    justifyContent: "center",
  },
  outlineBtnText: {
    fontSize: 12,
    textTransform: "uppercase",
    paddingLeft: 4,
  },
});

export default OfficeLinks;
