/*
 * This page provides styling for text components used throughout the app.
 * The native Text element is modified with global text styles and exported as 'Text'.
 * All other text components modify that Text element.
 */

import { withLink } from "common/components/HOCs/withLink";
import React, { ReactNode } from "react";
import { Text as NativeText, View } from "react-native";
import { StyledComponent } from "styled-components";
import styled from "styled-components/native";

import { colors } from "./colors";
import { fonts } from "./fonts";

type TStyledComponent = StyledComponent<any, any, object, never>;

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

interface ITextProps {
  bold?: boolean;
  boldItalic?: boolean;
  italic?: boolean;
  semibold?: boolean;
  semiboldItalic?: boolean;
  size?: number;
  color?: string;
  children?: ReactNode;
}

// To avoid cutting off the type of the Adobe Caslon Pro font, it is necessary
// to add top padding under a certain line height. E.g., for 16px font, line-height
// plus padding-top must add to at least 24.
export const Text = styled(NativeText)<ITextProps>`
  font-family: ${(props) =>
    props.bold
      ? fonts.primary.bold
      : props.boldItalic
      ? fonts.primary.boldItalic
      : props.italic
      ? fonts.primary.italic
      : props.semibold
      ? fonts.primary.semibold
      : props.semiboldItalic
      ? fonts.primary.semiboldItalic
      : fonts.primary.regular};
  font-size: ${(props) => props.size || 16}px;
  color: ${(props) => props.color || colors.fontGrey};
`;

export const Caption = styled(Text)`
  font-size: 13px;
  padding-top: 12px;
  align-self: flex-end;
`;

const HeadingBase = styled(Text)`
  font-family: ${fonts.primary.semibold};
  letter-spacing: 1.6px;
  text-align: center;
  margin: 3.2px;
  margin-bottom: 3.2px;
`;

export const H1 = styled(HeadingBase)`
  font-size: 20.8px;
  line-height: 24px;
  text-transform: uppercase;
  padding-top: 32px;
`;

export const H2 = styled(HeadingBase)`
  font-size: 16px;
  text-transform: uppercase;
`;

export const Title = styled(Text)`
  text-transform: uppercase;
  font-family: ${fonts.primary.semibold};
  font-size: 16px;
  letter-spacing: 1.6px;
`;

export const MainSettingName = styled(Text)`
  text-transform: uppercase;
  font-family: ${fonts.primary.semibold};
  letter-spacing: 1.6px;
  font-size: 24px;
  margin: 32px 32px 8px;
  text-align: center;
`;

export const H3 = styled(HeadingBase)`
  padding-top: 30px;
  margin-bottom: 5px;
  font-size: 16px;
  line-height: 22.4px;
  text-transform: uppercase;
`;

export const H4 = styled(HeadingBase)`
  margin-top: 0;
  padding-top: 0;
  font-size: 14.4px;
  line-height: 16px;
`;

export const H5 = styled(Text)`
  text-align: right;
  font-size: 14.4px;
  margin: 10px 0;
`;

export const P = styled(Text)`
  font-size: ${(props) => props.size || 16}px;
  line-height: 25.6px;
  margin: 10px 0;
`;

export const SmallItalics = styled(P)`
  font-family: ${fonts.primary.italic};
  font-size: 12.8px;
`;

export const People = styled(Text)`
  font-size: 14px;
  line-height: 24px;
  font-family: ${fonts.primary.semibold};
`;

export const Rubric = styled(Text)`
  font-size: 10.75px;
  font-family: ${fonts.primary.italic};
  /* margin-vertical: 10px; */
`;

export const ChapterNumber = styled(Text)`
  font-size: 24px;
  line-height: 25.6px;
  letter-spacing: 1px;
`;

export const VerseNumber = styled(Text)`
  font-size: 9.6px;
  line-height: 25.6px;
  letter-spacing: 1px;
`;

export const HR = styled(View)`
  border-bottom-color: #aaa;
  border-bottom-width: 1px;
  width: 100%;
`;

/**
 * Adds generic link styles to the given component
 * @param Base Base styled component to add link styles to
 */
const addLinkStylesTo = (Base: TTextStyledComponent) => styled(
  Base
)<ITextProps>`
  color: ${colors.linkBlue};
  text-decoration-line: underline;
`;

/**
 * Creates a component that turns content into an external link to the link given
 * to the `link` prop
 * @param base Base styled component to turn into an external link. User is responsible
 * for using appropriate styles for a link.
 */
export const createStyledLink = (base: TStyledComponent) => ({
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

export const PWithLinkStyles = addLinkStylesTo(P);
export const PLink = createStyledLink(PWithLinkStyles);

export const SmallItalicsWithLinkStyles = addLinkStylesTo(SmallItalics);
export const SmallItalicsLink = createStyledLink(SmallItalicsWithLinkStyles);
