import { BibleIcon, CalendarDarkIcon } from "assets/icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { H3, Text } from "styles/typography";

import { withLink } from "../HOCs";
import { OutlineBtn } from "../OutlineBtn";

export const FooterResources = () => (
  <Container style={{ marginTop: 15 }}>
    <H3>RESOURCES</H3>
    <ButtonsWrapper>
      <StyledOutlineBtn>
        <BibleIcon size={12} style={{ marginRight: 4 }} />
        <TextWrapper>
          <FirstLetter>P</FirstLetter>
          <StyledText>salter</StyledText>
        </TextWrapper>
      </StyledOutlineBtn>
      <TouchableOpacityLink
        link="https://www.dailyoffice2019.com/dailyoffice.ics"
        activeOpacity={0.5}
      >
        <StyledOutlineBtn>
          <CalendarDarkIcon style={{ marginRight: 4 }} />
          <TextWrapper>
            <FirstLetter>C</FirstLetter>
            <StyledText>alendar (ical file)</StyledText>
          </TextWrapper>
        </StyledOutlineBtn>
      </TouchableOpacityLink>
    </ButtonsWrapper>
  </Container>
);

const TouchableOpacityLink = withLink(TouchableOpacity);

const Container = styled.View`
  width: 100%;
  align-items: center;
`;

const ButtonsWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 15px;
  width: 100%;
`;

const StyledOutlineBtn = styled(OutlineBtn)`
  height: 32px;
  margin: 0 3.8px;
`;

const TextWrapper = styled(Text)`
  align-items: baseline;
  top: 3px;
`;

const StyledText = styled(Text)`
  font-size: 11px;
  text-transform: uppercase;
`;

const FirstLetter = styled(StyledText)`
  font-size: 16px;
  letter-spacing: 0.66px;
`;
