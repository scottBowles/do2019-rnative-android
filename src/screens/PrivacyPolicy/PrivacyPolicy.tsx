import { Footer } from "common/components";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { theme } from "styles";
import {
  Body,
  BodyLink,
  ParagraphTitle,
  SectionTitle,
  SmallItalics,
} from "styles/typography";

import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

export const PrivacyPolicy: React.FC = () => (
  <ScrollView>
    <Container>
      <PrivacyPolicyContent
        Title={SectionTitle}
        Heading={ParagraphTitle}
        Para={Body}
        ParaItalic={SmallItalics}
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

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: theme.spacing.outerPadding,
  },
});
