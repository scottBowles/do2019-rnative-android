import { Footer } from "common/components";
import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";
import { RiteTitle, SectionTitle, Text } from "styles/typography";

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
    <SectionTitle>The Psalms</SectionTitle>
    <RiteTitle>New Coverdale Translation</RiteTitle>
    <Text>BOOK OF COMMON PRAYER 2019</Text>
  </>
);

const Container = styled.View`
  align-items: center;
  padding: ${({ theme }) => theme.spacing.outerPadding}px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;
