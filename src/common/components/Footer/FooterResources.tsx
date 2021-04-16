import { BibleIcon, CalendarDarkIcon } from "assets/icons";
import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import styled, { ThemeContext } from "styled-components/native";
import { Body, ParagraphTitle } from "styles/typography";

import { withLink } from "../HOCs";
import { OutlineBtn } from "../OutlineBtn";

export const FooterResources = () => {
  const theme = useContext(ThemeContext);

  return (
    <Container style={{ marginTop: 15 }}>
      <ParagraphTitle>RESOURCES</ParagraphTitle>
      <ButtonsWrapper>
        <Link to="/psalter" component={TouchableOpacity} activeOpacity={0.5}>
          <StyledOutlineBtn>
            <BibleIcon
              size={12}
              color={theme.colors.text}
              style={{ marginRight: 4 }}
            />
            <StyledText>Psalter</StyledText>
          </StyledOutlineBtn>
        </Link>
        <TouchableOpacityLink
          link="https://www.dailyoffice2019.com/dailyoffice.ics"
          activeOpacity={0.5}
        >
          <StyledOutlineBtn>
            <CalendarDarkIcon
              size={12}
              color={theme.colors.text}
              style={{ marginRight: 4 }}
            />
            <StyledText>Calendar (ical file)</StyledText>
          </StyledOutlineBtn>
        </TouchableOpacityLink>
      </ButtonsWrapper>
    </Container>
  );
};

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

const StyledText = styled(Body)`
  font-variant: small-caps;
  font-size: 16px;
  letter-spacing: 0.66px;
`;
