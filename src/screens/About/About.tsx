import { Footer } from "common/components";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import {
  Body,
  BodyLink,
  Citation,
  ParagraphTitle,
  RiteSubtitle,
  SectionTitle,
  SmallItalics,
} from "styles/typography";

import { AboutContent } from "./AboutContent";

export const About: React.FC = () => (
  <ScrollView>
    <Container>
      <AboutContent
        Title={SectionTitle}
        Heading={RiteSubtitle}
        Para={Body}
        ParaItalic={SmallItalics}
        Caption={Citation}
        ParaLink={BodyLink}
      />
      <Footer />
    </Container>
  </ScrollView>
);

const Container = styled(View)`
  align-items: center;
  padding: ${({ theme }) => theme.spacing.outerPadding}px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;
