import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import { FontAwesome5 } from "@expo/vector-icons";
import { Text } from "../../styles/typography";

const styles = StyleSheet.create({
  contentLine: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  colorBox: {
    marginRight: 5,
    borderColor: "black",
    borderWidth: 1,
  },
  colorBoxPrimary: {
    marginTop: 5,
    height: 9,
    width: 9,
  },
  colorBoxSecondary: {
    marginTop: 4,
    height: 8,
    width: 8,
  },
  colorBoxSeason: {
    marginTop: 3,
    height: 6,
    width: 6,
  },
  textPrimary: {
    fontSize: 14.25,
  },
  textSecondary: {
    fontSize: 11,
    lineHeight: 16,
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

const composeColorBoxStyle = (boxColor, typeCapitalized) => [
  styles.colorBox,
  styles[`colorBox${typeCapitalized}`],
  { backgroundColor: boxColor },
];

const ColorBox = ({ color, typeCapitalized }) => (
  <View style={composeColorBoxStyle(color, typeCapitalized)} />
);

const ContentLine = ({ type, data: { colors, name, links } }) => {
  const typeCapitalized = type[0].toUpperCase() + type.slice(1);

  return (
    <View style={[styles.contentLine, type !== "season" && { marginTop: 8 }]}>
      {colors.map((color, index) => (
        <ColorBox key={index} color={color} typeCapitalized={typeCapitalized} />
      ))}
      <Text style={styles[`text${typeCapitalized}`]}>
        {name}
        {links &&
          links.map((link, index) => (
            <Text key={index}>
              {" "}
              <FontAwesome5
                name="external-link-alt"
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

const ContentBlock = ({ season, commemorations, withSeasonBox }) => (
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

export default ContentBlock;
