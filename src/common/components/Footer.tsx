import { ExternalLinks } from "assets/ExternalLinks";
import { BibleIcon, CalendarDarkIcon } from "assets/icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { H3, HR, PLink, Text } from "styles/typography";

import { AnglicanHousePublishers } from "./AnglicanHousePublishers";
import { OutlineBtn } from "./OutlineBtn";

export const Footer: React.FC = () => (
  <>
    <HR />
    <H3>RESOURCES</H3>
    <View style={styles.buttonsContainer}>
      <OutlineBtn style={styles.outlineBtn}>
        <BibleIcon size={12} style={styles.icon} />
        <Text>
          <Text style={styles.firstLetter}>P</Text>
          <Text style={styles.item}>salter</Text>
        </Text>
      </OutlineBtn>
      <OutlineBtn style={styles.outlineBtn}>
        <CalendarDarkIcon style={styles.icon} />
        <Text>
          <Text style={styles.firstLetter}>C</Text>
          <Text style={styles.item}>alendar (ical file)</Text>
        </Text>
      </OutlineBtn>
    </View>
    <H3>Find us on the web</H3>
    <PLink link={ExternalLinks.DO2019}>https://www.dailyoffice2019.com/</PLink>
    <AnglicanHousePublishers />
  </>
);

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 15,
    width: "100%",
  },
  outlineBtn: {
    flexDirection: "row",
    paddingVertical: 6,
    marginHorizontal: 3,
  },
  icon: {
    marginRight: 4,
  },
  item: {
    fontSize: 11,
    textTransform: "uppercase",
  },
  firstLetter: {
    fontSize: 15,
    textTransform: "uppercase",
  },
});
