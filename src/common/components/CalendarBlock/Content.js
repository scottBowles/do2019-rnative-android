import React from "react";
import { StyleSheet, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { ExternalLinkIcon } from "assets/icons";
import { Text } from "styles/typography";
import { ColorBox } from "common/components";
import { OfficeLinks } from "common/components/calendarBlock";

/**
 *
 * IN THIS FILE
 *
 * COMPONENTS
 *   Content (export default)
 *   ContentLine
 *   SeasonBox
 *   [OfficeLinks is in its own file]
 *
 * Styles
 *
 */

const Content = ({ commemorations, date, season }) => {
  // if season => SeasonBox will be rendered
  // if date => OfficeLinks will be rendered
  return (
    <View style={styles.container}>
      <View style={styles.commemorationContainer}>
        {commemorations.map((commemoration, index) => (
          <ContentLine
            key={index}
            type={index === 0 ? "primary" : "secondary"}
            data={commemoration}
          />
        ))}
      </View>
      {season && <SeasonBox season={season} />}
      {date && <OfficeLinks date={date} />}
    </View>
  );
};

const ContentLine = ({ type, data: { colors, name, links } }) => {
  const typeCapitalized = type[0].toUpperCase() + type.slice(1);

  /**
   *
   * For colorBoxes, words, and links to all wrap together in React Native,
   *   the below is necessary. Each word is split into its own Text element.
   *
   */

  const colorBoxes = colors.map((color, index) => (
    <ColorBox
      key={index}
      color={color}
      style={[styles.colorBox, styles[`colorBox${typeCapitalized}`]]}
    />
  ));

  const words = name.split(" ").map((word, index, arr) => (
    <Text key={word + index} style={styles[`text${typeCapitalized}`]}>
      {index !== arr.length - 1 ? word + " " : word}
    </Text>
  ));

  const linksDisplay =
    links &&
    links.map((link, index) => (
      <Text key={link + index}>
        {" "}
        <ExternalLinkIcon
          size={9}
          color="black"
          onPress={() => WebBrowser.openBrowserAsync(link)}
        />
      </Text>
    ));

  return (
    <View
      style={[styles.contentLine, type !== "season" && { marginVertical: 4 }]}
    >
      {[...colorBoxes, ...words, ...linksDisplay]}
    </View>
  );
};

const SeasonBox = ({ season }) => (
  <View style={styles.seasonBlock}>
    <ContentLine type="season" data={season} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
  },
  commemorationContainer: {
    paddingTop: 4,
    paddingBottom: 8,
  },
  contentLine: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingBottom: 4,
    flexWrap: "wrap",
  },
  colorBox: {
    marginRight: 5,
  },
  colorBoxPrimary: {
    marginTop: 5,
    height: 11,
    width: 11,
  },
  colorBoxSecondary: {
    marginTop: 5,
    height: 9,
    width: 9,
  },
  colorBoxSeason: {
    marginTop: 3,
    height: 7,
    width: 7,
  },
  textPrimary: {
    fontSize: 16,
    letterSpacing: -0.5,
  },
  textSecondary: {
    fontSize: 13,
    lineHeight: 19,
    letterSpacing: -0.5,
  },
  textSeason: {
    fontSize: 9,
  },
  seasonBlock: {
    backgroundColor: "#ffffff",
    borderColor: "black",
    borderWidth: 1,
    alignSelf: "flex-end",
    justifyContent: "flex-start",
    paddingHorizontal: 4,
    paddingTop: 4,
    paddingBottom: 5,
    marginTop: 12,
    marginBottom: 8,
  },
});

export default Content;
