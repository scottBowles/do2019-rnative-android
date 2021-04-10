import { IAdvancedSetting } from "data/settingsData/advancedSettings";
import React from "react";
import { Pressable } from "react-native";
import styled from "styled-components/native";
import { AdvancedSettingName, Body, SmallItalics } from "styles/typography";

export const AdvancedSetting: React.FC<{
  setting: IAdvancedSetting;
  value: string;
  updateSetting: (option: string) => void;
}> = ({ setting, value, updateSetting }) => (
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
);

/**
 *                    STYLES
 */

const RadioButton: React.FC<{ selected: boolean }> = ({ selected }) => (
  <RadioButtonRing>{selected && <RadioButtonDot />}</RadioButtonRing>
);

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
