import {
  IAdvancedSetting,
  advancedSettings,
} from "data/settingsData/advancedSettings";
import React, { memo } from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import {
  AdvancedSettingName,
  Body,
  SmallItalics,
  Title,
} from "styles/typography";

import { SettingConsumer } from "../../../data/settingsData/SettingsContext";

/**
 * Renders Advanced Settings, connected up to the SettingsContext
 */
export const AdvancedSettings: React.FC = () => {
  return (
    <Wrapper>
      <SettingsTitle>Advanced Settings</SettingsTitle>
      {advancedSettings.map((setting) => (
        <SettingConsumer
          settingStorageKey={setting.storageKey}
          key={setting.storageKey}
        >
          {({ value, updateSetting }) => (
            <Setting
              setting={setting}
              value={value}
              updateSetting={updateSetting}
            />
          )}
        </SettingConsumer>
      ))}
    </Wrapper>
  );
};

/**
 * Renders a single advanced setting. Consumes SettingsContext to receive `value`
 * for the selected option and an `updateSetting` function. React.memo is necessary
 * to avoid all settings rerendering when one is changed.
 */
const Setting: React.FC<{
  setting: IAdvancedSetting;
  value: string;
  updateSetting: (newValue: string) => void;
}> = memo(({ setting, value, updateSetting }) => (
  <Container>
    <AdvancedSettingName>{setting.name}</AdvancedSettingName>
    {setting.options.map((option) => (
      <OptionWrapper key={option} onPress={() => updateSetting(option)}>
        <RadioButton selected={value === option} />
        <Body>{option}</Body>
      </OptionWrapper>
    ))}
    <DescriptionText>{setting.description}</DescriptionText>
  </Container>
));

/**
 *                    STYLES
 */

const RadioButton: React.FC<{ selected: boolean }> = ({ selected }) => (
  <RadioButtonRing>{selected && <RadioButtonDot />}</RadioButtonRing>
);

const Wrapper = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border: 1px ${({ theme }) => theme.colors.black};
  padding: 10px;
  margin-bottom: 10px;
`;

const SettingsTitle = styled(Title)`
  text-align: center;
  margin: 32px 0 14px;
`;

const Container = styled.View`
  margin: 12px 0;
`;

const OptionWrapper = styled(Pressable)`
  flex-direction: row;
`;

const DescriptionText = styled(SmallItalics)`
  line-height: 19px;
  margin-top: 10px;
`;

const RadioButtonRing = styled.View`
  border-radius: 50px;
  border: 1px ${({ theme }) => theme.colors.veryLightGrey};
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
`;

const RadioButtonDot = styled.View`
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  height: 65%;
  width: 65%;
`;
