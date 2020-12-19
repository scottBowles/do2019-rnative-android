/*
 * This page provides styling for text components used throughout the app.
 * The native Text element is modified with global text styles and exported as 'Text'.
 * All other text components modify that Text element.
 */

import { withLink } from "common/components/HOCs/withLink";
import React from "react";
import { Text as NativeText, View } from "react-native";
import { StyledComponent } from "styled-components";
import styled from "styled-components/native";

import { colors } from "./colors";

type TTextStyledComponent = StyledComponent<
  typeof NativeText,
  any,
  object,
  never
>;

interface ILink {
  link: string;
  children: React.ReactNode;
}

export const Text = styled(NativeText)`
  color: ${colors.fontGrey};
  font-family: serif;
`;

export const Caption = styled(Text)`
  font-size: 13px;
  padding-top: 12px;
  align-self: flex-end;
`;

export const H1 = styled(Text)`
  font-size: 20px;
  line-height: 20px;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`;

export const H2 = styled(Text)`
  font-size: 16.3px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  text-align: center;
`;

export const H3 = styled(Text)`
  font-size: 16px;
  line-height: 22.4px;
  font-weight: 600;
  letter-spacing: 1.6px;
  text-transform: uppercase;
  text-align: center;
  padding-top: 36px;
`;

export const H4 = styled(Text)`
  font-size: 14.4px;
  line-height: 16px;
  font-weight: 600;
  letter-spacing: 1.6px;
  font-style: italic;
`;

export const H5 = styled(Text)`
  font-size: 13px;
  font-weight: 300;
  text-transform: uppercase;
  font-family: serif;
`;

export const P = styled(Text)`
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
  letter-spacing: 0.3px;
  padding-top: 12px;
`;

export const SmallItalics = styled(P)`
  font-size: 12.8px;
  font-style: italic;
`;

export const People = styled(Text)`
  font-size: 14px;
  line-height: 24px;
  font-weight: 700;
`;

export const Rubric = styled(Text)`
  font-size: 10.75px;
  font-weight: 300;
  font-style: italic;
  margin-vertical: 10px;
`;

export const ChapterNumber = styled(Text)`
  font-size: 24px;
  line-height: 25.6px;
  font-weight: 300;
  letter-spacing: 1px;
`;

export const VerseNumber = styled(Text)`
  font-size: 9.6px;
  line-height: 25.6px;
  font-weight: 300;
  letter-spacing: 1px;
`;

export const HR = styled(View)`
  border-bottom-color: #aaa;
  border-bottom-width: 1px;
  width: 100%;
`;

/**
 * Adds generic link styles to the given component
 * @param base Base styled component to add link styles to
 */
const addLinkStylesTo = (base: TTextStyledComponent) => styled(base)`
  color: ${colors.linkBlue};
  text-decoration-line: underline;
`;

/**
 * Creates a component that turns content into an external link to the link given
 * to the `link` prop
 * @param base Base styled component to turn into an external link. User is responsible
 * for using appropriate styles for a link.
 */
const createStyledLink = (base: TTextStyledComponent) => ({
  link,
  children,
  ...props
}: ILink) => {
  const C = withLink(base);
  return (
    <C link={link} {...props}>
      {children}
    </C>
  );
};

const PWithLinkStyles = addLinkStylesTo(P);
export const PLink = createStyledLink(PWithLinkStyles);

const SmallItalicsWithLinkStyles = addLinkStylesTo(SmallItalics);
export const SmallItalicsLink = createStyledLink(SmallItalicsWithLinkStyles);
