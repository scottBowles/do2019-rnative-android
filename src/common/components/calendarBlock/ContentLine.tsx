import { ExternalLinkIcon } from "assets/icons";
import { ColorBox } from "common/components";
import * as WebBrowser from "expo-web-browser";
import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { DateBlockText, Text } from "styles/typography";

interface ContentLineProps<
  T extends "primary" | "secondary" | "season" | undefined
> {
  type?: T;
  data: {
    colors: string[];
    name: string;
    links?: T extends "primary" | "secondary" ? string[] : undefined;
    rank?: T extends "primary" | "secondary"
      ? { precedence: number }
      : undefined;
  };
  style?: object;
}

export const ContentLine: React.FC<
  ContentLineProps<"primary" | "secondary" | "season">
> = ({
  type = "primary",
  data: { colors, name, links, rank },
  style: incomingStyle,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  /**
   * For colorBoxes, words, and links to all wrap together in React Native,
   * the following is necessary. Each word is split into its own Text element.
   */
  const colorBoxes = colors.map((color, index) => (
    <StyledColorBox
      key={index}
      color={color}
      dimension={type === "primary" ? 11 : type === "secondary" ? 9 : 7}
    />
  ));

  const words = name.split(" ").map((word, index, arr) => (
    <DateBlockText
      key={word + index}
      variant={type}
      precedence={rank?.precedence}
    >
      {index !== arr.length - 1 ? word + " " : word}
    </DateBlockText>
  ));

  const linksDisplay = links
    ? links.map((link, index) => (
        <Text key={link + index} style={{ paddingLeft: 5 }}>
          <ExternalLinkIcon
            size={9}
            color={theme.colors.text}
            onPress={() => WebBrowser.openBrowserAsync(link)}
          />
        </Text>
      ))
    : [];

  return (
    <Container {...props}>
      {[...colorBoxes, ...words, ...linksDisplay]}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 4px 0 6px;
`;

const StyledColorBox = styled(ColorBox)`
  margin-right: 5px;
`;
