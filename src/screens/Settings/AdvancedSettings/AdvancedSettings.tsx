import {
  IAdvancedSetting,
  advancedSettings,
} from "data/settingsData/advancedSettings";
import { useLocalStorageWithState } from "data/useLocalStorageWithState";
import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import { SmallItalics, Text, Title } from "styles/typography";

export const AdvancedSettings: React.FC = () => (
  <Wrapper>
    <SettingsTitle>Advanced Settings</SettingsTitle>
    {advancedSettings.map((setting) => (
      <Setting setting={setting} key={setting.storageKey} />
    ))}
  </Wrapper>
);

const Setting: React.FC<{ setting: IAdvancedSetting }> = ({ setting }) => {
  const [currentSetting, setCurrentSetting] = useLocalStorageWithState(
    setting.storageKey,
    setting.default
  );
  return (
    <Container>
      <SettingName>{setting.name}</SettingName>
      {setting.options.map((option) => (
        <OptionWrapper key={option} onPress={() => setCurrentSetting(option)}>
          <RadioButton selected={currentSetting === option} />
          <Text size={14.4}>{option}</Text>
        </OptionWrapper>
      ))}
      <DescriptionText>{setting.description}</DescriptionText>
    </Container>
  );
};

const RadioButton: React.FC<{ selected: boolean }> = ({ selected }) => (
  <RadioButtonRing>{selected && <RadioButtonDot />}</RadioButtonRing>
);

const Wrapper = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.lightGrey};
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

const SettingName = styled(Title)`
  line-height: 21px;
  padding-top: 3px;
`;

const OptionWrapper = styled(Pressable)`
  flex-direction: row;
`;

const DescriptionText = styled(SmallItalics)`
  line-height: 19px;
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
