import { Footer } from "common/components";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { theme } from "styles";
import { Body, Rubric, SectionTitle } from "styles/typography";

import { AdvancedSettings } from "./AdvancedSettings";
import { MainSettings } from "./MainSettings";

export const Settings = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopMaterial />
      <MainSettings />
      <AdvancedSettings />
      <Footer />
    </ScrollView>
  );
};

const TopMaterial = () => (
  <>
    <SectionTitle>Daily Office Settings</SectionTitle>
    <Body>
      Your settings will be saved the next time you pray on the same
      computer/phone/device and browser.
    </Body>
    <Rubric>
      Setting changes take effect immediately. You do not need to save settings
      after you have updated them.
    </Rubric>
  </>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: theme.spacing.outerPadding,
  },
});
