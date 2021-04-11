/*
 * This page provides styling for text components used throughout the app.
 * The native Text element is modified with global text styles and exported as 'Text'.
 * All other text components modify that Text element.
 */

import { withLink } from "common/components/HOCs/withLink";
import React from "react";
import { Text as NativeText, TextProps, TextStyle, View } from "react-native";
import { StyledComponent } from "styled-components";
import styled from "styled-components/native";

import { theme } from "./theme";
import { withTextUtilityProps } from "./withTextUtilityProps";

type TStyledComponent = StyledComponent<any, any, object, never>;

type TTextStyledComponent = StyledComponent<
  typeof NativeText,
  any,
  object,
  never
>;

interface IType extends React.CSSProperties {
  fontSize: number;
  lineHeightEms?: number;
  letterSpacingRatio?: number;
}

interface ILink {
  link: string;
  children: React.ReactNode;
}

/**
 * Due to a React Native bug:
 * To avoid cutting off the top of the Adobe Caslon Pro font, it is necessary
 * to add top padding under a certain line height. E.g., for 16px font, line-height
 * plus padding-top must add to at least 24 to avoid clipping.
 *
 * In order to accommodate this added top padding, a negative bottom margin is used,
 * so material beneath the item in question is pulled back up by the same value,
 * keeping the intended line-height functionally intact.
 *
 * The exact necessary numbers vary at different sizes, but the below equation
 * avoids clipping at all sizes tested:
 *
 * offset = 1.5 * fontSize - lineHeight
 *
 * To accommodate this quirk, padding-top and margin-bottom are used for this purpose,
 * while margin-top and padding-bottom are used for any additional spacing. Where these
 * components are used, it is best to apply further spacing with a wrapper element to
 * avoid unexplained math and behavior.
 *
 * This is a React Native bug others have reported.
 */

/**
 * Sets base styles for all Text components
 */
const Text = styled(NativeText)`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  color: ${({ theme }) => theme.colors.text};
  include-font-padding: false;
  text-align-vertical: center;
`;

function withAddedStyles(
  Component: React.FC<TextProps>,
  addedStyles: TextStyle
): React.FC<TextProps> {
  return ({ style, ...props }) => (
    <Component style={[addedStyles, style]} {...props} />
  );
}

/**
 * Returns a base type component. Essentially accounts for not being able to use ems
 * as a unit and implements the fix for font quirks (see explanation above). Also allows
 * additional js-style (camelCased) styles for when that is more convenient.
 */
function type({
  fontSize,
  lineHeightEms = 1,
  letterSpacingRatio = 0,
  ...additionalUserStyles
}: IType) {
  const lineHeight = fontSize * lineHeightEms;

  const Base = styled(Text)`
    font-size: ${fontSize}px;
    line-height: ${lineHeight}px;
    padding-top: ${1.5 * fontSize - lineHeight}px;
    margin-bottom: -${Math.abs(1.5 * fontSize - lineHeight)}px;
    letter-spacing: ${fontSize * letterSpacingRatio}px;
  `;

  return withAddedStyles(Base, additionalUserStyles as TextStyle);
}

/**
 * Extends the above type function, adding general heading styles
 */
function heading({
  fontSize,
  lineHeightEms = 1,
  letterSpacingRatio = 0,
  ...additionalUserStyles
}: IType) {
  const lineHeight = fontSize * lineHeightEms;

  const TypeBase = type({
    fontSize,
    lineHeightEms,
    letterSpacingRatio,
  });

  const HeadingBase = styled(TypeBase)`
    font-variant: small-caps;
    text-transform: lowercase;
    text-align: center;
    margin-top: ${lineHeight}px;
    padding-bottom: ${lineHeight}px;
  `;

  return withAddedStyles(HeadingBase, additionalUserStyles as TextStyle);
}

const SectionTitle = heading({
  fontSize: theme.fontSize.sectionTitle,
  letterSpacingRatio: 0.2,
});

const RiteTitle = heading({
  fontSize: theme.fontSize.riteTitle,
  letterSpacingRatio: 0.2,
});

const RiteSubtitle = heading({
  fontSize: theme.fontSize.riteSubtitle,
  letterSpacingRatio: 0.1,
});

const ParagraphTitle = heading({
  fontSize: theme.fontSize.paragraphTitle,
  letterSpacingRatio: 0.1,
});

const FooterTitle = heading({
  fontSize: theme.fontSize.footer,
  letterSpacingRatio: 0.1,
});

const Citation = heading({
  fontSize: theme.fontSize.biblicalCitation,
  letterSpacingRatio: 0.05,
  marginTop: 0,
  paddingBottom: 0,
  alignSelf: "flex-end",
});

const Body = type({
  fontSize: theme.fontSize.body,
  lineHeightEms: theme.lineHeightEms.body,
});

const Congregation = styled(Body)`
  font-family: ${({ theme }) => theme.fonts.primary.semibold};
`;

const Rubric = type({
  fontSize: theme.fontSize.rubric,
  lineHeightEms: theme.lineHeightEms.rubric,
  fontFamily: theme.fonts.primary.italic,
  marginTop: theme.fontSize.rubric,
  paddingBottom: theme.fontSize.rubric,
});

const BtnText = styled(Body)`
  line-height: ${({ theme }) => theme.fontSize.body * 2}px;
`;

export const HR = styled(View)`
  border-bottom-color: #aaa;
  border-bottom-width: 1px;
  width: 100%;
`;

const Title = type({
  fontSize: theme.fontSize.paragraphTitle,
  lineHeightEms: 1.6,
  letterSpacingRatio: 0.1,
  fontFamily: theme.fonts.primary.semibold,
  textTransform: "uppercase",
  textAlign: "center",
});

const AdvancedSettingName = type({
  fontSize: theme.fontSize.paragraphTitle,
  lineHeightEms: 1.3,
  letterSpacingRatio: 0.1,
  fontFamily: theme.fonts.primary.semibold,
  textTransform: "uppercase",
  textAlign: "center",
  paddingBottom: 10,
});

const MainSettingName = styled(SectionTitle)`
  /* margin-top: 32px; */
  /* margin-bottom: 8px; */
  /* line-height: ${({ theme }) => theme.spacing.basex2}px; // NEW */
`;

const SmallItalics = styled(Body)`
  font-family: ${({ theme }) => theme.fonts.primary.italic};
  font-size: ${({ theme }) => theme.fontSize.rubric}px;
`;

/**
 * Adds generic link styles to the given component
 * @param Base Base styled component to add link styles to
 */
const addLinkStylesTo = (Base: TTextStyledComponent | FC<TextProps>) => styled(
  Base
)`
  color: ${({ theme }) => theme.colors.linkBlue};
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

export const BodyWithLinkStyles = addLinkStylesTo(Body);
const BodyLink = createStyledLink(BodyWithLinkStyles);

export const SmallItalicsWithLinkStyles = addLinkStylesTo(SmallItalics);
const SmallItalicsLink = createStyledLink(SmallItalicsWithLinkStyles);

// Add Text Utilities to each exported Text component then export with original name
const TextWithUtils = withTextUtilityProps(Text);
const SectionTitleWithUtils = withTextUtilityProps(SectionTitle);
const RiteTitleWithUtils = withTextUtilityProps(RiteTitle);
const RiteSubtitleWithUtils = withTextUtilityProps(RiteSubtitle);
const ParagraphTitleWithUtils = withTextUtilityProps(ParagraphTitle);
const FooterTitleWithUtils = withTextUtilityProps(FooterTitle);
const CitationWithUtils = withTextUtilityProps(Citation);
const BodyWithUtils = withTextUtilityProps(Body);
const CongregationWithUtils = withTextUtilityProps(Congregation);
const RubricWithUtils = withTextUtilityProps(Rubric);
const TitleWithUtils = withTextUtilityProps(Title);
const MainSettingNameWithUtils = withTextUtilityProps(MainSettingName);
const SmallItalicsWithUtils = withTextUtilityProps(SmallItalics);
const BtnTextWithUtils = withTextUtilityProps(BtnText);
const BodyLinkWithUtils = withTextUtilityProps(BodyLink);
const SmallItalicsLinkWithUtils = withTextUtilityProps(SmallItalicsLink);
const AdvancedSettingNameWithUtils = withTextUtilityProps(AdvancedSettingName);

export {
  TextWithUtils as Text,
  SectionTitleWithUtils as SectionTitle,
  RiteTitleWithUtils as RiteTitle,
  RiteSubtitleWithUtils as RiteSubtitle,
  ParagraphTitleWithUtils as ParagraphTitle,
  FooterTitleWithUtils as FooterTitle,
  CitationWithUtils as Citation,
  BodyWithUtils as Body,
  CongregationWithUtils as Congregation,
  RubricWithUtils as Rubric,
  TitleWithUtils as Title,
  MainSettingNameWithUtils as MainSettingName,
  SmallItalicsWithUtils as SmallItalics,
  BtnTextWithUtils as BtnText,
  BodyLinkWithUtils as BodyLink,
  SmallItalicsLinkWithUtils as SmallItalicsLink,
  AdvancedSettingNameWithUtils as AdvancedSettingName,
};
