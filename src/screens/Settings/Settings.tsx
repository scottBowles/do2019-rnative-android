import { mainSettings } from "data/settingsData";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import styled from "styled-components/native";
import { colors } from "styles/";
import { H1, P, SmallItalics, Title } from "styles/typography";

import { AdvancedSetting } from "./AdvancedSetting";
import { MainSetting } from "./MainSetting";

export const Settings = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TopMaterial />
      {mainSettings.map((mainSetting) => (
        <MainSetting key={mainSetting.storageKey} setting={mainSetting} />
      ))}
      <AdvancedSettingsWrapper>
        <AdvancedSettingsTitle>Advanced Settings</AdvancedSettingsTitle>
        <AdvancedSetting />
      </AdvancedSettingsWrapper>
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

const AdvancedSettingsWrapper = styled.View`
  width: 100%;
  background-color: ${colors.lightGrey};
  border: 1px ${colors.black};
  padding: 8px;
`;

const AdvancedSettingsTitle = styled(Title)`
  text-align: center;
`;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 22,
  },
});
