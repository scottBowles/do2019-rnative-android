import { Footer } from "common/components";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { Caption, H1, H3, P, PLink } from "styles/typography";

import { AboutContent } from "./AboutContent";

export const About: React.FC = () => (
  <ScrollView>
    <View style={styles.container}>
      <AboutContent
        Title={H1}
        Heading={H3}
        Para={P}
        Caption={Caption}
        ParaLink={PLink}
      />
      <Footer />
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 22,
  },
});
