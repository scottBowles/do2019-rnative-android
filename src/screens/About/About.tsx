import { Footer } from "common/components";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { theme } from "styles/";
import {
  Body,
  BodyLink,
  Citation,
  ParagraphTitle,
  SectionTitle,
  SmallItalics,
} from "styles/typography";

import { AboutContent } from "./AboutContent";

export const About: React.FC = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <AboutContent
      Title={SectionTitle}
      Heading={ParagraphTitle}
      Para={Body}
      ParaItalic={SmallItalics}
      Caption={Citation}
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
