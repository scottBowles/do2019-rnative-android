import { Footer } from "common/components";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
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
  <ScrollView contentContainerStyle={styles.container}>
    <PrivacyPolicyContent
      Title={SectionTitle}
      Heading={ParagraphTitle}
      Para={Body}
      ParaItalic={SmallItalics}
      ParaLink={BodyLink}
    />
    <Footer />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: theme.spacing.outerPadding,
  },
});
