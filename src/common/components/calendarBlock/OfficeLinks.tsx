import { MoonIcon, SunIcon, SunriseIcon, SunsetIcon } from "assets/icons";
import { OutlineBtn } from "common/components";
import React, { useContext } from "react";
import { Link } from "react-router-native";
import styled, { ThemeContext } from "styled-components/native";
import { Text } from "styles/typography";

interface Props {
  date: Date;
}

const officeLinks = (date: Date) => [
  { key: 1, to: `/morningprayer/${date}`, Icon: SunriseIcon, text: "Morning" },
  { key: 2, to: `/middayprayer/${date}`, Icon: SunIcon, text: "Midday" },
  { key: 3, to: `/eveningprayer/${date}`, Icon: SunsetIcon, text: "Evening" },
  { key: 4, to: `/compline/${date}`, Icon: MoonIcon, text: "Compline" },
];

export const OfficeLinks: React.FC<Props> = ({ date }) => {
  const theme = useContext(ThemeContext);
  const links = officeLinks(date);
  return (
    <Container>
      {links.map(({ key, to, Icon, text }) => (
        <StyledLink to={to} key={key}>
          <OutlineBtn>
            <Icon iconSize={11} color={theme.colors.text} />
            <LinkText>{text}</LinkText>
          </OutlineBtn>
        </StyledLink>
      ))}
    </Container>
  );
};

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const StyledLink = styled(Link)`
  width: 46%;
  border-radius: 11px;
`;

const LinkText = styled(Text)`
  font-size: 11px;
  text-transform: uppercase;
  padding-left: 5px;
  top: 2px;
`;
