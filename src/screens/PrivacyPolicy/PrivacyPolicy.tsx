import { Footer } from "common/components";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { H1, H3, P, PLink, SmallItalics } from "styles/typography";

import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

export const PrivacyPolicy: React.FC = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <PrivacyPolicyContent
      Title={H1}
      Heading={H3}
      Para={P}
      ParaItalic={SmallItalics}
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
