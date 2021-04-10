import { Footer } from "common/components";
import { advancedSettings, mainSettings } from "data/settingsData";
import { SettingConsumer } from "data/settingsData/SettingsContext";
import { IAdvancedSetting } from "data/settingsData/advancedSettings";
import { IMainSetting } from "data/settingsData/mainSettings";
import React, { memo } from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { Body, Rubric, SectionTitle, Title } from "styles/typography";

import { AdvancedSetting } from "./AdvancedSettings";
import { MainSetting } from "./MainSettings";

type TSetting = IAdvancedSetting | IMainSetting;

interface ISettingProps<T extends TSetting> {
  setting: T;
  value: string;
  updateSetting: (option: string) => void;
}

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

      {mainSettings.map((setting) => (
        <RenderedSetting
          Component={MainSetting}
          setting={setting}
          key={setting.storageKey}
        />
      ))}

      <Wrapper>
        <AdvancedSettingsTitle>Advanced Settings</AdvancedSettingsTitle>
        {advancedSettings.map((setting) => (
          <RenderedSetting
            Component={AdvancedSetting}
            setting={setting}
            key={setting.storageKey}
          />
        ))}
      </Wrapper>

      <Footer />
    </Container>
  </ScrollView>
);

/**
 * Renders an isolated setting using `SettingConsumer` and memoizing the component.
 * This ensures that when one setting is updated, components using other settings
 * do not all rerender.
 */
const RenderedSetting = <T extends TSetting>({
  Component,
  setting,
  ...props
}: {
  Component: React.ComponentType<ISettingProps<T>>;
  setting: T;
}) => {
  const C = memo(Component);
  return (
    <SettingConsumer settingStorageKey={setting.storageKey}>
      {({ value, updateSetting }) => (
        <C
          setting={setting}
          value={value}
          updateSetting={updateSetting}
          {...props}
        />
      )}
    </SettingConsumer>
  );
};

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
