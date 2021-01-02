import { mainSettings } from "data/settingsData";
import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { H1, P, SmallItalics } from "styles/typography";

import { MainSetting } from "./MainSetting";

export const Settings = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopMaterial />
      {mainSettings.map((mainSetting) => (
        <MainSetting key={mainSetting.storageKey} setting={mainSetting} />
      ))}
    </ScrollView>
  );
};

const TopMaterial = () => (
  <>
    <H1>Daily Office Settings</H1>
    <P>
      Your settings will be saved the next time you pray on the same
      computer/phone/device and browser.
    </P>
    <SmallItalics>
      Setting changes take effect immediately. You do not need to save settings
      after you have updated them.
    </SmallItalics>
  </>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 22,
  },
});
