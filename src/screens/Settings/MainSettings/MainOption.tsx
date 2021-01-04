import { CheckmarkIcon } from "assets/icons";
import { IDescriptionPart, IOption } from "data/settingsData/mainSettings";
import React from "react";
import { Pressable } from "react-native";
import styled, { css } from "styled-components/native";
import { colors } from "styles/colors";
import { fonts } from "styles/fonts";
import { Text, Title } from "styles/typography";

interface IMainOptionProps {
  option: IOption;
  setCurrentSetting: React.Dispatch<React.SetStateAction<string>>;
  selected?: boolean;
}

export const MainOption: React.FC<IMainOptionProps> = ({
  option,
  setCurrentSetting,
  selected = false,
}) => {
  return (
    <Pressable onPress={() => setCurrentSetting(option.title)}>
      <OptionBox selected={selected}>
        {selected && <Checkmark size={35} />}
        <OptionTitle selected={selected}>{option.title}</OptionTitle>
        <Description description={option.description} selected={selected} />
      </OptionBox>
    </Pressable>
  );
};

interface IDescriptionProps {
  description: IDescriptionPart[];
  selected: boolean;
}

const Description: React.FC<IDescriptionProps> = ({
  description,
  selected,
}) => (
  <DescriptionWrapper>
    {description.map((words) => (
      <DescriptionPart
        key={words.content}
        type={words.type}
        selected={selected}
      >
        {words.content}
      </DescriptionPart>
    ))}
  </DescriptionWrapper>
);

/**
 * STYLED COMPONENTS
 */

const OptionBox = styled.View<{ selected: boolean }>`
  align-items: center;
  border-radius: 20px;
  padding: 32px;
  margin: 32px 14.4px 14.4px;
  border: 2px solid ${colors.grey};
  ${({ selected }) =>
    selected
      ? css`
          background-color: ${colors.grey};
          elevation: 15;
        `
      : css`
          background-color: ${colors.white};
          elevation: 2;
        `}
`;

const Checkmark = styled(CheckmarkIcon)`
  position: absolute;
  top: -29px;
  background-color: ${colors.white};
  border: 2px ${colors.grey};
  border-radius: 50px;
  height: 56px;
  width: 56px;
  line-height: 56px;
  text-align: center;
`;

const OptionTitle = styled(Title)<{ selected: boolean }>`
  margin: 4.8px;
  ${({ selected }) => selected && `color: ${colors.white}`}
`;

const DescriptionWrapper = styled(Text)`
  text-align: center;
`;

const DescriptionPart = styled(Text)<{ type: string; selected: boolean }>`
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  ${({ selected }) => selected && `color: ${colors.white}`}
  ${({ type }) => type === "bold" && `font-family: ${fonts.primary.bold}`}
`;
