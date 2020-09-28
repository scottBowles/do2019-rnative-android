import React from "react";
import { View } from "react-native";
import { P, H2, H5 } from "../styles/typography";

const OpeningSentence = ({ text, citation }) => (
  <View>
    <H2>Opening Sentence</H2>
    <P>{text}</P>
    <H5 style={{ alignSelf: "flex-end" }}>{citation}</H5>
  </View>
);

export default OpeningSentence;
