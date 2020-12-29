/**
 *
 * IN THIS FILE
 * styles
 * menuItems
 * Menu (maps menuItem => Link)(export default)
 *
 */

import { CalendarIcon, ClockIcon, CogIcon, CrossIcon } from "assets/icons";
import React from "react";
import { Link } from "react-router-native";
import styled from "styled-components/native";
import { Text } from "styles/typography";

import { OutlineBtn } from "./OutlineBtn";

export const Menu: React.FC = () => {
  const menuItems = [
    {
      icon: <ClockIcon size={12} color="black" style={{ marginRight: 2 }} />,
      text: "Now",
      route: "/office",
    },
    {
      icon: <CalendarIcon size={12} color="black" style={{ marginRight: 2 }} />,
      text: "Calendar",
      route: "/calendar",
    },
    {
      icon: <CogIcon size={12} color="black" style={{ marginRight: 2 }} />,
      text: "Settings",
      route: "/settings",
    },
    {
      icon: <CrossIcon size={12} color="black" style={{ marginRight: 2 }} />,
      text: "About",
      route: "/about",
    },
  ];

  return (
    <Container>
      {menuItems.map((item, index) => (
        <StyledLink to={item.route} underlayColor="#f0f4f7" key={index}>
          <StyledOutlineBtn>
            {item.icon}
            <TextWrapper>
              <FirstLetter>{item.text[0]}</FirstLetter>
              <StyledText>{item.text.slice(1)}</StyledText>
            </TextWrapper>
          </StyledOutlineBtn>
        </StyledLink>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 8px;
`;

const StyledLink = styled(Link)`
  border-radius: 11px;
`;

const StyledOutlineBtn = styled(OutlineBtn)`
  height: 32px;
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
