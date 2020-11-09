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
import { StyleSheet, Text as NativeText } from "react-native";
import { colors } from "./colors";

const styles = StyleSheet.create({
  text: {
    color: colors.fontGrey,
    fontFamily: "serif",
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
    lineHeight: 23,
    fontWeight: "300",
    letterSpacing: 0.3,
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

export const Text = ({ style, children, ...props }) => (
  <NativeText style={StyleSheet.compose(styles.text, style)} {...props}>
    {children}
  </NativeText>
);

export const H1 = ({ style, children, ...props }) => (
  <Text style={StyleSheet.compose(styles.h1, style)} {...props}>
    {children}
  </Text>
);

export const H2 = ({ style, children, ...props }) => (
  <Text style={StyleSheet.compose(styles.h2, style)} {...props}>
    {children}
  </Text>
);

export const H3 = ({ style, children, ...props }) => (
  <Text style={StyleSheet.compose(styles.h3, style)} {...props}>
    {children}
  </Text>
);

export const H4 = ({ style, children, ...props }) => (
  <Text style={StyleSheet.compose(styles.h4, style)} {...props}>
    {children}
  </Text>
);

export const H5 = ({ style, children, ...props }) => (
  <Text style={StyleSheet.compose(styles.h5, style)} {...props}>
    {children}
  </Text>
);

export const P = ({ style, children, ...props }) => (
  <Text style={StyleSheet.compose(styles.p, style)} {...props}>
    {children}
  </Text>
);

export const People = ({ style, children, ...props }) => (
  <Text style={StyleSheet.compose(styles.people, style)} {...props}>
    {children}
  </Text>
);

export const Rubric = ({ style, children, ...props }) => (
  <Text style={StyleSheet.compose(styles.rubric, style)} {...props}>
    {children}
  </Text>
);

export const ChapterNumber = ({ style, children, ...props }) => (
  <Text style={StyleSheet.compose(styles.chapterNumber, style)} {...props}>
    {children}
  </Text>
);

export const VerseNumber = ({ style, children, ...props }) => (
  <Text style={StyleSheet.compose(styles.verseNumber, style)} {...props}>
    {children}
  </Text>
);
