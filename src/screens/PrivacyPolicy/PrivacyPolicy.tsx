import { Footer } from "common/components";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { H1, H3, P, PLink, SmallItalics } from "styles/typography";

import { PrivacyPolicyContent } from "./PrivacyPolicyContent";

export const PrivacyPolicy: React.FC = () => (
  <ScrollView>
    <View style={styles.container}>
      <PrivacyPolicyContent
        Title={H1}
        Heading={H3}
        Para={P}
        ParaItalic={SmallItalics}
        ParaLink={PLink}
      />
      <Footer />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 22.4,
  },
});
