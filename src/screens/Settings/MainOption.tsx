import { CheckmarkIcon } from "assets/icons";
import { IOption, ISettingText } from "data/settingsData";
import React from "react";
import { Pressable } from "react-native";
import styled, { css } from "styled-components/native";
import { Text, Title } from "styles/typography";

interface IMainOptionProps {
  option: IOption;
  updateSetting: (optionTitle: string) => void;
  selected?: boolean;
}

export const MainOption: React.FC<IMainOptionProps> = ({
  option,
  updateSetting,
  selected = false,
}) => {
  return (
    <Pressable onPress={() => updateSetting(option.value)}>
      <OptionBox selected={selected}>
        {selected && <Checkmark size={35} />}
        <OptionTitle selected={selected}>{option.heading}</OptionTitle>
        <OptionText text={option.text} selected={selected} />
      </OptionBox>
    </Pressable>
  );
};

interface IOptionText {
  text: ISettingText[];
  selected: boolean;
}

const OptionText = ({ text, selected }: IOptionText) => (
  <OptionTextWrapper>
    {text.map((words) => (
      <Run key={words.content} type={words.type} selected={selected}>
        {words.content}
      </Run>
    ))}
  </OptionTextWrapper>
);

/**
 * STYLED COMPONENTS
 */

const OptionBox = styled.View<{ selected: boolean }>`
  align-items: center;
  border-radius: 20px;
  padding: 32px;
  margin: 32px 14.4px 14.4px;
  border: 2px solid ${({ theme }) => theme.colors.grey};
  ${({ selected, theme }) =>
    selected
      ? css`
          background-color: ${theme.colors.grey};
          elevation: 15;
        `
      : css`
          background-color: ${theme.colors.backgroundPrimary};
          elevation: 2;
        `}
`;

const Checkmark = styled(CheckmarkIcon)`
  position: absolute;
  top: -29px;
  background-color: ${({ theme }) => theme.colors.white};
  border: 2px ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  height: 56px;
  width: 56px;
  line-height: 56px;
  text-align: center;
`;

const OptionTitle = styled(Title)<{ selected: boolean }>`
  margin: 4.8px;
  ${({ selected, theme }) => selected && `color: ${theme.colors.white}`}
`;

const OptionTextWrapper = styled(Text)`
  text-align: center;
`;

const Run = styled(Text)<{ type: string; selected: boolean }>`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  ${({ selected, theme }) => selected && `color: ${theme.colors.white}`}
  ${({ type, theme }) =>
    type === "bold" && `font-family: ${theme.fonts.primary.bold}`}
`;
