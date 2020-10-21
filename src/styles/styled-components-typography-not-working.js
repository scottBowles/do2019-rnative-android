/*
 *
 * This page provides styling for text components used throughout the app.
 *
 * The native Text element is modified with global text styles and exported as 'Text'.
 * All other text components modify that Text element.
 *
 * All components found here modify only typographical properties, otherwise passing along
 *  children, props, and any additional styling added elsewhere.
 *
 */

import { Text as NativeText } from "react-native";
import styled from "styled-components/native";
import { colors } from "./colors";

export const Text = styled(NativeText)`
  color: ${colors.fontGrey};
  font-family: "Times", serif;
`;

export const H1 = styled(Text)`
  font-size: 20;
  line-height: 20;
  font-weight: 500;
  text-transform: uppercase;
  text-align: center;
`;

export const H2 = styled(Text)`
  font-size: 16.3;
  font-weight: 500;
  letter-spacing: 1;
  text-transform: uppercase;
  text-align: center;
`;

export const H3 = styled(Text)`
  font-size: 16,
  line-height: 22.4,
  font-weight: 600,
  letter-spacing: 1.6,
  text-transform: uppercase,
`;

export const H4 = styled(Text)`
  font-size: 14.4,
  line-height: 16,
  font-weight: 600,
  letter-spacing: 1.6,
  font-style: italic,
`;
export const H5 = styled(Text)`
    font-size: 13,
    font-weight: 300,
    text-transform: uppercase,
    font-family: 'Times', serif;
`;
export const P = styled(Text)`
  font-size: 14,
  line-height: 23,
  font-weight: 300,
  letter-spacing: 0.3,
`;
export const People = styled(Text)`
  font-size: 14,
  line-height: 24,
  font-weight: 700,
`;
export const Rubric = styled(Text)`
  font-size: 10.75,
  font-weight: 300,
  font-style: italic,
  margin-vertical: 10,
`;
export const ChapterNumber = styled(Text)`
  font-size: 24,
  line-height: 25.6,
  font-weight: 300,
  letter-spacing: 1,
`;
export const VerseNumber = styled(Text)`
  font-size: 9.6,
  line-height: 25.6,
  font-weight: 300,
  letter-spacing: 1,
`;
