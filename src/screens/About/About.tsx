import { Footer } from "common/components";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { Caption, H1, H3, P, PLink, SmallItalics } from "styles/typography";

import { AboutContent } from "./AboutContent";

export const About: React.FC = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <AboutContent
      Title={H1}
      Heading={H3}
      Para={P}
      ParaItalic={SmallItalics}
      Caption={Caption}
      ParaLink={PLink}
    />
    <Footer />
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 22,
  },
});
