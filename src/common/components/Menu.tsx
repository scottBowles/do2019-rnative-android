/**
 *
 * IN THIS FILE
 * styles
 * menuItems
 * Menu (maps menuItem => Link)(export default)
 *
 */

import { CalendarIcon, ClockIcon, CogIcon, CrossIcon } from "assets/icons";
import React, { useContext } from "react";
import { View } from "react-native";
import { Link } from "react-router-native";
import styled, { ThemeContext } from "styled-components/native";
import { BtnText } from "styles/typography";

export const Menu: React.FC = () => {
  const theme = useContext(ThemeContext);
  const menuItems = [
    {
      icon: (
        <ClockIcon
          size={12}
          color={theme.colors.text}
          style={{ marginRight: 3, top: 4 }}
        />
      ),
      text: "Now",
      route: "/office",
    },
    {
      icon: (
        <CalendarIcon
          size={12}
          color={theme.colors.text}
          style={{ marginRight: 3, top: 4 }}
        />
      ),
      text: "Calendar",
      route: "/calendar",
    },
    {
      icon: (
        <CogIcon
          size={12}
          color={theme.colors.text}
          style={{ marginRight: 3, top: 4 }}
        />
      ),
      text: "Settings",
      route: "/settings",
    },
    {
      icon: (
        <CrossIcon
          size={12}
          color={theme.colors.text}
          style={{ marginRight: 3, top: 4 }}
        />
      ),
      text: "About",
      route: "/about",
    },
  ];

  return (
    <Container>
      {menuItems.map((item, index) => (
        <StyledLink to={item.route} key={index}>
          <StyledBtn>
            {item.icon}
            <StyledText>{item.text}</StyledText>
          </StyledBtn>
        </StyledLink>
      ))}
    </Container>
  );
};

const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  flex-direction: row;
  justify-content: space-around;
  padding-left: ${({ theme }) => theme.spacing.outerPadding}px;
  padding-right: ${({ theme }) => theme.spacing.outerPadding}px;
  border-bottom-width: 1px;
  border-top-width: 1px;
  border-color: black;
`;

const StyledLink = styled(Link)`
  flex-grow: 1;
`;

const StyledBtn = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 3px 0;
  height: 32px;
`;

const StyledText = styled(BtnText)`
  font-variant: small-caps;
  font-size: ${({ theme }) => theme.fontSize.biblicalCitation}px;
  letter-spacing: 0.66px;
`;
