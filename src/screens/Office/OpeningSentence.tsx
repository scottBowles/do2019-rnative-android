import React from "react";
import { View } from "react-native";
import { Body, Citation, RiteTitle } from "styles/typography";

export const OpeningSentence = ({ text, citation }) => (
  <View>
    <RiteTitle>Opening Sentence</RiteTitle>
    <Body>{text}</Body>
    <Citation style={{ alignSelf: "flex-end" }}>{citation}</Citation>
  </View>
);
