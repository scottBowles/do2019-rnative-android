import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import { H1, P, SmallItalics } from "styles/typography";

import { MainSetting } from "./MainSetting";
import { mainSettings } from "./mainSettings";

export const Settings = () => (
  <ScrollView contentContainerStyle={styles.container}>
    <H1>Daily Office Settings</H1>
    <P>
      Your settings will be saved the next time you pray on the same
      computer/phone/device and browser.
    </P>
    <SmallItalics>
      Setting changes take effect immediately. You do not need to save settings
      after you have updated them.
    </SmallItalics>
    {mainSettings.map((mainSetting, index) => (
      <MainSetting key={index} setting={mainSetting} />
    ))}

    {/* <View style={{ height: 40, margin: 40 }} /> */}
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 22,
  },
});
