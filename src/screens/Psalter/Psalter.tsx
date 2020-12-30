import { Footer } from "common/components";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { H1, H2, Text } from "styles/typography";

import { PsalmsByTopic } from "./PsalmsByTopic";
import { PsalmsWithFirstLines } from "./PsalmsWithFirstLines";
import { QuickLinks } from "./QuickLinks";

export const Psalter: React.FC = () => (
  <ScrollView>
    <Container>
      <Heading />
      <QuickLinks />
      <PsalmsByTopic />
      <PsalmsWithFirstLines />
      <Footer />
    </Container>
  </ScrollView>
);

const Heading: React.FC = () => (
  <>
    <H1>The Psalms</H1>
    <H2>New Coverdale Translation</H2>
    <Text>BOOK OF COMMON PRAYER 2019</Text>
  </>
);

const Container = styled.View`
  align-items: center;
  margin: 22px;
`;
