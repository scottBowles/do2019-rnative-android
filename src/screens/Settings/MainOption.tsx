import { CheckmarkIcon } from "assets/icons";
import React from "react";
import styled, { css } from "styled-components/native";
import { colors } from "styles/colors";
import { fonts } from "styles/fonts";
import { Text } from "styles/typography";

export interface IOption {
  title: string;
  description: IDescriptionPart[];
}

export interface IDescriptionPart {
  content: string;
  type: string;
}

export const MainOption: React.FC<{ option: IOption; selected?: boolean }> = ({
  option,
  selected = false,
}) => (
  <OptionBox selected={selected}>
    {selected && <Check size={35} />}
    <Title selected={selected}>{option.title}</Title>
    <Description description={option.description} selected={selected} />
  </OptionBox>
);

const Description: React.FC<{
  description: IDescriptionPart[];
  selected: boolean;
}> = ({ description, selected }) => (
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

const Check = styled(CheckmarkIcon)`
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

const Title = styled(Text)<{ selected: boolean }>`
  text-transform: uppercase;
  font-family: ${fonts.primary.semibold};
  font-size: 16px;
  letter-spacing: 1.6px;
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
