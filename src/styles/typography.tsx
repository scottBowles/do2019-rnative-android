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
 * In other words, what you see in the styles stylesheet is what you get.
 *
 */

import React from "react";
import {
  StyleProp,
  StyleSheet,
  Text as NativeText,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import { colors } from "./colors";

const textStyles = StyleSheet.create({
  text: {
    color: colors.fontGrey,
    fontFamily: "serif",
  },
  caption: {
    fontSize: 13,
    paddingTop: 12,
    alignSelf: "flex-end",
  },
  h1: {
    fontSize: 20,
    lineHeight: 20,
    fontWeight: "500",
    textTransform: "uppercase",
    textAlign: "center",
  },
  h2: {
    fontSize: 16.3,
    fontWeight: "500",
    letterSpacing: 1,
    textTransform: "uppercase",
    textAlign: "center",
  },
  h3: {
    fontSize: 16,
    lineHeight: 22.4,
    fontWeight: "600",
    letterSpacing: 1.6,
    textTransform: "uppercase",
    textAlign: "center",
    paddingTop: 36,
  },
  h4: {
    fontSize: 14.4,
    lineHeight: 16,
    fontWeight: "600",
    letterSpacing: 1.6,
    fontStyle: "italic",
  },
  h5: {
    fontSize: 13,
    fontWeight: "300",
    textTransform: "uppercase",
    fontFamily: "serif",
  },
  p: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "300",
    letterSpacing: 0.3,
    paddingTop: 12,
  },
  people: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: "700",
  },
  rubric: {
    fontSize: 10.75,
    fontWeight: "300",
    fontStyle: "italic",
    marginVertical: 10,
  },
  chapterNumber: {
    fontSize: 24,
    lineHeight: 25.6,
    fontWeight: "300",
    letterSpacing: 1,
  },
  verseNumber: {
    fontSize: 9.6,
    lineHeight: 25.6,
    fontWeight: "300",
    letterSpacing: 1,
  },
});

const elementStyles = StyleSheet.create({
  hr: {
    borderBottomColor: "#aaa",
    borderBottomWidth: 1,
  },
});

interface TextProps {
  style?: StyleProp<TextStyle>;
  children: any;
}

interface ViewProps {
  style?: StyleProp<ViewStyle>;
}

export const Text = ({ style, children, ...props }: TextProps) => (
  <NativeText style={[textStyles.text, style]} {...props}>
    {children}
  </NativeText>
);

export const Caption = ({ style, children, ...props }: TextProps) => (
  <Text style={[textStyles.caption, style]} {...props}>
    {children}
  </Text>
);

export const H1 = ({ style, children, ...props }: TextProps) => (
  <Text style={[textStyles.h1, style]} {...props}>
    {children}
  </Text>
);

export const H2 = ({ style, children, ...props }: TextProps) => (
  <Text style={[textStyles.h2, style]} {...props}>
    {children}
  </Text>
);

export const H3 = ({ style, children, ...props }: TextProps) => (
  <Text style={[textStyles.h3, style]} {...props}>
    {children}
  </Text>
);

export const H4 = ({ style, children, ...props }: TextProps) => (
  <Text style={[textStyles.h4, style]} {...props}>
    {children}
  </Text>
);

export const H5 = ({ style, children, ...props }: TextProps) => (
  <Text style={[textStyles.h5, style]} {...props}>
    {children}
  </Text>
);

export const P = ({ children, style = {}, ...props }) => (
  <Text style={[textStyles.p, style]} {...props}>
    {children}
  </Text>
);

export const People = ({ style, children, ...props }: TextProps) => (
  <Text style={[textStyles.people, style]} {...props}>
    {children}
  </Text>
);

export const Rubric = ({ style, children, ...props }: TextProps) => (
  <Text style={[textStyles.rubric, style]} {...props}>
    {children}
  </Text>
);

export const ChapterNumber = ({ style, children, ...props }: TextProps) => (
  <Text style={[textStyles.chapterNumber, style]} {...props}>
    {children}
  </Text>
);

export const VerseNumber = ({ style, children, ...props }: TextProps) => (
  <Text style={[textStyles.verseNumber, style]} {...props}>
    {children}
  </Text>
);

export const HR = ({ style, ...props }: ViewProps) => (
  <View style={[elementStyles.hr, style]} {...props} />
);
