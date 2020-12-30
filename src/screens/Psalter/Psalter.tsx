import { Footer } from "common/components";
import React from "react";
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import { Link } from "react-router-native";
import styled from "styled-components/native";
import { H1, H2, H3, P, PWithLinkStyles, Text } from "styles/typography";

import { psalmsByTopic } from "./psalmsByTopic";
import { psalmsWithFirstLines } from "./psalmsWithFirstLines";

const oneTo150 = Array.from({ length: 150 }, (v, i) => i + 1);

export const Psalter: React.FC = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <H1>The Psalms</H1>
    <H2>New Coverdale Translation</H2>
    <Text>BOOK OF COMMON PRAYER 2019</Text>
    <H3>Quick Links</H3>
    <PsalmList>{oneTo150.map(renderLinkToPsalm)}</PsalmList>
    <H3>Psalms by Topic</H3>
    <Wrapper>
      {psalmsByTopic.map(({ title, psalms }) => (
        <>
          <P style={{ marginBottom: -4 }}>{title}</P>
          <PsalmList>{psalms.map(renderLinkToPsalm)}</PsalmList>
        </>
      ))}
    </Wrapper>
    <H3 style={{ marginBottom: 20 }}>Psalms with First Line</H3>
    <Wrapper>
      {psalmsWithFirstLines.map(({ psalm, latin, english }) => (
        <PsalmWithFirstLines psalm={psalm} latin={latin} english={english} />
      ))}
    </Wrapper>
    <Footer />
  </ScrollView>
);

const renderLinkToPsalm = (psalmNumber: number) => (
  <Link
    to={`/psalms/${psalmNumber}`}
    component={TouchableOpacity}
    activeOpacity={0.5}
    key={psalmNumber}
  >
    <Text>
      <PWithLinkStyles>{psalmNumber}</PWithLinkStyles>
      <P>{"  "}</P>
    </Text>
  </Link>
);

const PsalmWithFirstLines = ({ psalm, latin, english }) => (
  <View key={psalm + latin}>
    <Link
      to={`/psalms/${psalm}`}
      component={TouchableOpacity}
      activeOpacity={0.5}
    >
      <PWithLinkStyles style={{ marginTop: -8, marginBottom: -10 }}>
        {psalm} | {latin}
      </PWithLinkStyles>
    </Link>
    <P style={{ marginBottom: 20 }}>{english}</P>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 22,
  },
});

const Wrapper = styled.View`
  width: 100%;
`;

const PsalmList = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
