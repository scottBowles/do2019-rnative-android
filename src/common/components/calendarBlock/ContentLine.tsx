import { ExternalLinkIcon } from "assets/icons";
import { ColorBox } from "common/components";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import styled, { css } from "styled-components/native";
import { Text } from "styles/typography";

interface ContentLineProps<T extends "primary" | "secondary" | "season"> {
  type?: T;
  data: {
    colors: string[];
    name: string;
    links: T extends "primary" | "secondary" ? string[] : undefined;
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
    <StyledText key={word + index} type={type} precedence={rank?.precedence}>
      {index !== arr.length - 1 ? word + " " : word}
    </StyledText>
  ));

  const linksDisplay = links
    ? links.map((link, index) => (
        <Text key={link + index} style={{ paddingLeft: 5 }}>
          <ExternalLinkIcon
            size={9}
            color="black"
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

/**
 * Padding and negative margin present to account for Adobe Caslon Pro's
 * significant bottom padding, which throws off alignment
 */
const StyledText = styled(Text)<{ type: string; precedence?: number }>`
  ${(props) =>
    props.type === "primary" &&
    css`
      font-family: ${props.precedence! < 4
        ? props.theme.fonts.primary.bold
        : props.theme.fonts.primary.regular};
      font-size: 16px;
      padding-top: 8px;
      margin-bottom: -16px;
      letter-spacing: -0.5px;
    `}
  ${(props) =>
    props.type === "secondary" &&
    css`
      font-size: 12.8px;
      padding-top: 6.4px;
      margin-bottom: -9.6px;
      letter-spacing: -0.5px;
    `}
${(props) =>
    props.type === "season" &&
    css`
      font-size: 9.6px;
    `}
`;
