import React from "react";
import { StyleSheet, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { ExternalLinkIcon } from "assets/icons";
import { Text } from "styles/typography";
import { ColorBox } from "common/components";

/**
 *
 * IN THIS FILE
 *
 * COMPONENTS
 *   Content (export default)
 *   ContentLine
 *   SeasonBox
 *
 * Styles
 *
 */

const Content = ({ season, commemorations, withSeasonBox }) => (
  <View style={{ paddingHorizontal: 14 }}>
    {commemorations.map((commemoration, index) => (
      <ContentLine
        key={index}
        type={index === 0 ? "primary" : "secondary"}
        data={commemoration}
      />
    ))}
    {season && <SeasonBox season={season} />}
  </View>
);

const ContentLine = ({ type, data: { colors, name, links } }) => {
  const typeCapitalized = type[0].toUpperCase() + type.slice(1);

  return (
    <View style={[styles.contentLine, type !== "season" && { marginTop: 8 }]}>
      {colors.map((color, index) => (
        <ColorBox
          key={index}
          color={color}
          style={[styles.colorBox, styles[`colorBox${typeCapitalized}`]]}
        />
      ))}
      <Text style={styles[`text${typeCapitalized}`]}>
        {name}
        {links &&
          links.map((link, index) => (
            <Text key={index}>
              {" "}
              <ExternalLinkIcon
                size={9}
                color="black"
                onPress={() => WebBrowser.openBrowserAsync(link)}
              />
            </Text>
          ))}
      </Text>
    </View>
  );
};

const SeasonBox = ({ season }) => (
  <View style={styles.seasonBlock}>
    <ContentLine type="season" data={season} />
  </View>
);

const styles = StyleSheet.create({
  contentLine: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingBottom: 4,
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
    marginTop: 4,
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
