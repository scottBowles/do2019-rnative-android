import React from "react";
import styled from "styled-components/native";
import { colors } from "styles/";
import { SmallItalics, Text, Title } from "styles/typography";

export const AdvancedSetting = () => (
  <>
    <Title>Visual Theme</Title>
    {["Use Computer Setting", "Light Mode", "Dark Mode"].map(
      (option, index) => (
        <OptionWrapper>
          <RadioButton selected={index === 1} />
          <Text size={14.4} key={index}>
            {option}
          </Text>
        </OptionWrapper>
      )
    )}
    <SmallItalics>
      Use light mode or dark mode, or default to your computer's setting for
      light or dark mode
    </SmallItalics>
  </>
);

const RadioButton: React.FC<{ selected: boolean }> = ({ selected }) => (
  <RadioButtonRing>{selected && <RadioButtonCenter />}</RadioButtonRing>
);

const RadioButtonRing = styled.View`
  border-radius: 50px;
  border: 1px ${colors.veryLightGrey};
  height: 20px;
  width: 20px;
  justify-content: center;
  align-items: center;
  margin-right: 7px;
`;

const RadioButtonCenter = styled.View`
  border-radius: 50px;
  background-color: ${colors.lightBlue};
  height: 65%;
  width: 65%;
`;

const OptionWrapper = styled.View`
  flex-direction: row;
`;
