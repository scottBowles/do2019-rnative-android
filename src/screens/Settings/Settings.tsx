import { Footer } from "common/components";
import { advancedSettings, mainSettings, withSetting } from "data/settingsData";
import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { Body, Rubric, SectionTitle, Title } from "styles/typography";

import { AdvancedSetting } from "./AdvancedSettings";
import { MainSetting } from "./MainSettings";

export const Settings = () => (
  <ScrollView>
    <Container>
      <SectionTitle>Daily Office Settings</SectionTitle>
      <Body>
        Your settings will be saved the next time you pray on the same
        computer/phone/device and browser.
      </Body>
      <Rubric>
        Setting changes take effect immediately. You do not need to save
        settings after you have updated them.
      </Rubric>

      {mainSettings.map((setting) => {
        const C = withSetting(MainSetting, setting.storageKey);
        return <C key={setting.storageKey} />;
      })}

      <Wrapper>
        <AdvancedSettingsTitle>Advanced Settings</AdvancedSettingsTitle>
        {advancedSettings.map((setting) => {
          const C = withSetting(AdvancedSetting, setting.storageKey);
          return <C key={setting.storageKey} />;
        })}
      </Wrapper>

      <Footer />
    </Container>
  </ScrollView>
);

const Container = styled(View)`
  align-items: center;
  padding: ${({ theme }) => theme.spacing.outerPadding}px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

const Wrapper = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px ${({ theme }) => theme.colors.black};
  padding: 10px;
  margin-bottom: 10px;
`;

const AdvancedSettingsTitle = styled(Title)`
  text-align: center;
  margin: 32px 0 14px;
`;
