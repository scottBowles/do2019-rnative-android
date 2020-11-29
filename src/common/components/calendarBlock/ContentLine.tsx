import React from "react";
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import { ExternalLinkIcon } from "assets/icons";
import { ColorBox } from "common/components";
import { Text } from "styles/typography";

interface ContentLineProps {
  type?: "primary" | "secondary" | "season";
  data: {
    colors: string[];
    name: string;
    links?: string[];
  };
  style?: {};
}

export const ContentLine: React.FC<ContentLineProps> = ({
  type = "primary",
  data: { colors, name, links },
  style: incomingStyle,
  ...props
}) => {
  /**
   * For colorBoxes, words, and links to all wrap together in React Native,
   * the following is necessary. Each word is split into its own Text element.
   */
  const colorBoxes = colors.map((color, index) => (
    <ColorBox key={index} color={color} style={getColorBoxStyle(type)} />
  ));

  const words = name.split(" ").map((word, index, arr) => (
    <Text key={word + index} style={getTextStyle(type)}>
      {index !== arr.length - 1 ? word + " " : word}
    </Text>
  ));

  const linksDisplay = links
    ? links.map((link, index) => (
        <Text key={link + index}>
          {" "}
          <ExternalLinkIcon
            size={9}
            color="black"
            onPress={() => WebBrowser.openBrowserAsync(link)}
          />
        </Text>
      ))
    : [];

  return (
    <View
      style={[
        styles.contentLine,
        type !== "season" && { marginVertical: 4 },
        { ...incomingStyle },
      ]}
      {...props}
    >
      {[...colorBoxes, ...words, ...linksDisplay]}
    </View>
  );
};

const getColorBoxStyle = (
  type: ContentLineProps["type"]
): StyleProp<ViewStyle> => {
  const colorBoxTypeStyle =
    type === "secondary"
      ? styles.colorBoxSecondary
      : type === "season"
      ? styles.colorBoxSeason
      : styles.colorBoxPrimary;
  return [styles.colorBox, colorBoxTypeStyle];
};

const getTextStyle = (type: ContentLineProps["type"]): StyleProp<TextStyle> => {
  return type === "secondary"
    ? styles.textSecondary
    : type === "season"
    ? styles.textSeason
    : styles.textPrimary;
};

interface Styles {
  contentLine: StyleProp<ViewStyle>;
  colorBox: StyleProp<ViewStyle>;
  colorBoxPrimary: StyleProp<ViewStyle>;
  colorBoxSecondary: StyleProp<ViewStyle>;
  colorBoxSeason: StyleProp<ViewStyle>;
  textPrimary: StyleProp<TextStyle>;
  textSecondary: StyleProp<TextStyle>;
  textSeason: StyleProp<TextStyle>;
}

const styles: Styles = StyleSheet.create({
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
});
