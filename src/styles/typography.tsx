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

import { theme } from "./theme";
import { withTextUtilityProps } from "./withTextUtilityProps";

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

// To avoid cutting off the type of the Adobe Caslon Pro font, it is necessary
// to add top padding under a certain line height. E.g., for 16px font, line-height
// plus padding-top must add to at least 24.
const Text = styled(NativeText)`
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  padding-top: 6px;
  margin-bottom: -6px;
  /* border: 1px red solid; */
`;

const heading = ({ fontSize, letterSpacingRatio = 0 }) =>
  styled(Text)`
    font-family: ${(props) => props.theme.fonts.primary.regular};
    font-variant: small-caps;
    text-transform: lowercase;
    text-align: center;
    font-size: ${fontSize}px;
    line-height: ${fontSize}px;
    margin-top: ${fontSize}px;
    padding-bottom: ${fontSize}px;
    letter-spacing: ${fontSize * letterSpacingRatio}px;
    include-font-padding: false;
    text-align-vertical: center;
  `;

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

const ParagraphTitleBase = heading({
  fontSize: theme.fontSize.paragraphTitle,
  letterSpacingRatio: 0.1,
});

const ParagraphTitle = styled(ParagraphTitleBase)`
  padding-bottom: 10px;
  /* border: 1px solid blue; */
`;

const FooterTitle = heading({
  fontSize: theme.fontSize.footer,
  letterSpacingRatio: 0.1,
});

const CitationBase = heading({
  fontSize: theme.fontSize.biblicalCitation,
  letterSpacingRatio: 0.05,
});

const Citation = styled(CitationBase)`
  margin-top: 0px;
  padding-bottom: 0px;
  align-self: flex-end;
`;

const Body = styled(Text)`
  font-size: ${({ theme }) => theme.fontSize.body}px;
  line-height: ${({ theme }) => (theme.fontSize.body * 13) / 11.5}px;
  /* border: 1px solid green; */
`;

const Congregation = styled(Body)`
  font-family: ${({ theme }) => theme.fonts.primary.semibold};
`;

const Rubric = styled(Text)`
  font-family: ${({ theme }) => theme.fonts.primary.italic};
  font-size: ${({ theme }) => theme.fontSize.rubric}px;
  line-height: ${({ theme }) => (theme.fontSize.rubric * 10.75) / 9.75}px;
  padding-top: ${({ theme }) => theme.fontSize.rubric}px;
  margin-bottom: ${({ theme }) => theme.fontSize.rubric}px;
  /* border: 1px solid red; */
`;

// const SectionTitleBase = Heading(theme.fontSize.sectionTitle);
// export const SectionTitle = styled(SectionTitleBase)`
//   letter-spacing: ${({ theme }) => theme.fontSize.sectionTitle * 0.2}px;
// `;

// const RiteTitleBase = Heading(theme.fontSize.riteTitle);
// export const RiteTitle = styled(RiteTitleBase)`
//   letter-spacing: ${({ theme }) => theme.fontSize.riteTitle * 0.2}px;
// `;

// const RiteSubtitleBase = Heading(theme.fontSize.riteSubtitle);
// export const RiteSubtitle = styled(RiteSubtitleBase)`
//   font-size: ${({ theme }) => theme.fontSize.riteSubtitle}px;
//   letter-spacing: ${({ theme }) => theme.fontSize.riteSubtitle * 0.1}px;
//   padding-top: ${({ theme }) => theme.fontSize.riteSubtitle}px;
//   padding-bottom: ${({ theme }) => theme.fontSize.riteSubtitle}px;
// `;

// const ParagraphTitleBase = heading({ fontSize: theme.fontSize.paragraphTitle });
// export const ParagraphTitle = styled(ParagraphTitleBase)`
//   font-size: ${({ theme }) => theme.fontSize.paragraphTitle}px;
//   letter-spacing: ${({ theme }) => theme.fontSize.paragraphTitle * 0.1}px;
//   padding-top: ${({ theme }) => theme.fontSize.paragraphTitle}px;
//   margin-bottom: ${({ theme }) => theme.fontSize.paragraphTitle}px;
//   border: 1px solid red;
//   /* margin-bottom: 0px; */
//   line-height: ${({ theme }) => theme.fontSize.paragraphTitle}px;
// `;

// const FooterTitleBase = Heading(theme.fontSize.footer);
// export const FooterTitle = styled(FooterTitleBase)`
//   ${({ theme }) => `
//     font-size: ${theme.fontSize.footer}px;
//     letter-spacing: ${theme.fontSize.footer * 0.1}px;
//     padding-top: ${theme.fontSize.footer}px;
//     padding-bottom: ${theme.fontSize.footer}px;
//   `}
// `;

// const CitationBase = Heading(theme.fontSize.biblicalCitation);
// export const Citation = styled(CitationBase)`
//   font-size: ${({ theme }) => theme.fontSize.biblicalCitation}px;
//   letter-spacing: ${({ theme }) => theme.fontSize.biblicalCitation * 0.05}px;
//   /* padding-top: ${({ theme }) => theme.fontSize.biblicalCitation}px;
//   padding-bottom: ${({ theme }) => theme.fontSize.biblicalCitation}px; */
//   align-self: flex-end;
// `;

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

// export const Caption = styled(Text)`
//   font-size: ${({ theme }) => theme.fontSize.biblicalCitation}px;
//   align-self: flex-end;
// `;

// export const H1 = styled(HeadingBase)`
//   font-size: ${({ theme }) => theme.fontSize.sectionTitle}px;
//   line-height: 24px;
//   text-transform: uppercase;
//   /* padding-top: 32px; */
//   padding-top: ${({ theme }) => theme.spacing.base}px;
// `;

// export const H2 = styled(HeadingBase)`
//   font-size: ${({ theme }) => theme.fontSize.base}px;
//   text-transform: uppercase;
// `;

// export const Title = styled(Text)`
//   text-transform: uppercase;
//   font-family: ${({ theme }) => theme.fonts.primary.semibold};
//   font-size: ${({ theme }) => theme.fontSize.base}px;
//   letter-spacing: 1.6px;
// `;

// export const MainSettingName = styled(Text)`
//   text-transform: uppercase;
//   font-family: ${({ theme }) => theme.fonts.primary.semibold};
//   letter-spacing: 1.6px;
//   font-size: ${({ theme }) => theme.fontSize.xxxl}px;
//   margin-top: 32px;
//   /* margin-bottom: 8px; */
//   line-height: ${({ theme }) => theme.spacing.basex2}px; // NEW
//   text-align: center;
// `;

// export const H3 = styled(HeadingBase)`
//   padding-top: ${({ theme }) => theme.spacing.base}px;
//   /* margin-bottom: 5px; */
//   font-size: ${({ theme }) => theme.fontSize.base}px;
//   line-height: ${({ theme }) => theme.spacing.base}px;
//   text-transform: uppercase;
// `;

// // H4 is currently not used anywhere.
// // I'm assuming it shows up somewhere in the Office?
// export const H4 = styled(HeadingBase)`
//   margin-top: 0;
//   padding-top: 0;
//   font-size: ${({ theme }) => theme.fontSize.sm}px;
//   /* line-height: 16px; */
// `;

// // H5 likely won't be used. Was used for the caption/citation.
// export const H5 = styled(Text)`
//   text-align: right;
//   font-size: ${({ theme }) => theme.fontSize.sm}px;
//   /* margin: 10px 0; */
// `;

// export const P = styled(Text)`
//   font-size: ${(props) => props.size || props.theme.fontSize.base}px;
//   line-height: ${({ theme }) => theme.spacing.base}px;
//   margin-top: ${({ theme }) => theme.spacing.baseHalf}px;
//   /* margin-bottom: 10px; */
// `;

// // export const Congregation = styled(P)`
// //   font-family: ${({ theme }) => theme.fonts.primary.bold};
// // `;

// export const SmallItalics = styled(P)`
//   font-family: ${({ theme }) => theme.fonts.primary.italic};
//   font-size: ${({ theme }) => theme.fontSize.xs}px;
// `;

// export const People = styled(Text)`
//   font-family: ${({ theme }) => theme.fonts.primary.semibold};
//   font-size: ${({ theme }) => theme.fontSize.sm}px;
//   line-height: ${({ theme }) => theme.spacing.base}px;
// `;

// // export const Rubric = styled(Text)`
// //   font-family: ${({ theme }) => theme.fonts.primary.italic};
// //   font-size: ${({ theme }) => theme.fontSize.xs}px;
// //   /* margin-vertical: 10px; */
// // `;

// export const ChapterNumber = styled(Text)`
//   font-size: ${({ theme }) => theme.fontSize.xxxl}px;
//   line-height: ${({ theme }) => theme.spacing.base}px;
//   letter-spacing: 1px;
// `;

// export const VerseNumber = styled(Text)`
//   font-size: ${({ theme }) => theme.fontSize.xxxs}px;
//   line-height: ${({ theme }) => theme.spacing.base}px;
//   letter-spacing: 1px;
// `;

export const HR = styled(View)`
  border-bottom-color: #aaa;
  border-bottom-width: 1px;
  width: 100%;
`;

const Title = styled(Text)`
  text-transform: uppercase;
  font-family: ${({ theme }) => theme.fonts.primary.semibold};
  font-size: ${({ theme }) => theme.fontSize.paragraphTitle}px;
  letter-spacing: 1.6px;
`;

const MainSettingName = styled(SectionTitle)`
  margin-top: 32px;
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
const addLinkStylesTo = (Base: TTextStyledComponent) => styled(Base)`
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

// export const PWithLinkStyles = addLinkStylesTo(P);
// export const PLink = createStyledLink(PWithLinkStyles);

export const BodyWithLinkStyles = addLinkStylesTo(Body);
const BodyLink = createStyledLink(BodyWithLinkStyles);

export const SmallItalicsWithLinkStyles = addLinkStylesTo(SmallItalics);
const SmallItalicsLink = createStyledLink(SmallItalicsWithLinkStyles);

// Add Text Utilities to each exported Text component then export with original name
const TextWithUtils = withTextUtilityProps(Text);
const SectionTitleWithUtils = withTextUtilityProps(SectionTitle);
const RiteTitleWithUtils = withTextUtilityProps(RiteTitle);
const RiteSubtitleWithUtils = withTextUtilityProps(RiteSubtitle);
const ParagraphTitleBaseWithUtils = withTextUtilityProps(ParagraphTitleBase);
const ParagraphTitleWithUtils = withTextUtilityProps(ParagraphTitle);
const FooterTitleWithUtils = withTextUtilityProps(FooterTitle);
const CitationWithUtils = withTextUtilityProps(Citation);
const BodyWithUtils = withTextUtilityProps(Body);
const CongregationWithUtils = withTextUtilityProps(Congregation);
const RubricWithUtils = withTextUtilityProps(Rubric);
const TitleWithUtils = withTextUtilityProps(Title);
const MainSettingNameWithUtils = withTextUtilityProps(MainSettingName);
const SmallItalicsWithUtils = withTextUtilityProps(SmallItalics);
const BodyLinkWithUtils = withTextUtilityProps(BodyLink);
const SmallItalicsLinkWithUtils = withTextUtilityProps(SmallItalicsLink);

export {
  TextWithUtils as Text,
  SectionTitleWithUtils as SectionTitle,
  RiteTitleWithUtils as RiteTitle,
  RiteSubtitleWithUtils as RiteSubtitle,
  ParagraphTitleBaseWithUtils as ParagraphTitleBase,
  ParagraphTitleWithUtils as ParagraphTitle,
  FooterTitleWithUtils as FooterTitle,
  CitationWithUtils as Citation,
  BodyWithUtils as Body,
  CongregationWithUtils as Congregation,
  RubricWithUtils as Rubric,
  TitleWithUtils as Title,
  MainSettingNameWithUtils as MainSettingName,
  SmallItalicsWithUtils as SmallItalics,
  BodyLinkWithUtils as BodyLink,
  SmallItalicsLinkWithUtils as SmallItalicsLink,
};
