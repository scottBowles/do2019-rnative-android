import { ExternalLinkIcon } from "assets/icons";
import { ColorBox } from "common/components";
import * as WebBrowser from "expo-web-browser";
import React from "react";
import styled, { css } from "styled-components/native";
import { Text } from "styles/typography";

interface ContentLineProps {
  type?: "primary" | "secondary" | "season";
  data: {
    colors: string[];
    name: string;
    links?: string[];
  };
  style?: object;
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
    <StyledColorBox key={index} color={color} type={type} />
  ));

  const words = name.split(" ").map((word, index, arr) => (
    <StyledText key={word + index} type={type}>
      {index !== arr.length - 1 ? word + " " : word}
    </StyledText>
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
    <Container {...props}>
      {[...colorBoxes, ...words, ...linksDisplay]}
    </Container>
  );
};

interface IContainerProps {
  seasonLine?: boolean;
}
const Container = styled.View<IContainerProps>`
  flex-direction: row;
  align-items: flex-start;
  padding-bottom: 4px;
  flex-wrap: wrap;
  margin: ${(props) => (props.seasonLine ? "4px 0" : "0")};
`;

interface ITyped {
  type: string;
}
const StyledColorBox = styled(ColorBox)<ITyped>`
  margin-right: 5px;
  ${(props) =>
    props.type === "primary" &&
    css`
      margin-top: 5px;
      height: 11px;
      width: 11px;
    `}
  ${(props) =>
    props.type === "secondary" &&
    css`
      margin-top: 5px;
      height: 9px;
      width: 9px;
    `}
${(props) =>
    props.type === "season" &&
    css`
      margin-top: 3px;
      height: 7px;
      width: 7px;
    `}
`;

const StyledText = styled(Text)<ITyped>`
  ${(props) =>
    props.type === "primary" &&
    css`
      font-size: 16px;
      letter-spacing: -0.5px;
    `}
  ${(props) =>
    props.type === "secondary" &&
    css`
      font-size: 13px;
      line-height: 19px;
      letter-spacing: -0.5px;
    `}
${(props) =>
    props.type === "season" &&
    css`
      font-size: 9px;
    `}
`;
