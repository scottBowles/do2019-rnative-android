/**
 *
 *    ListHeader            Top material
 *    ListHeaderLink        Nav to prev & next years
 *
 *    NOTE: Any changes to component height will need to be reflected in
 *    LayoutProvider for proper rendering.
 *
 */

import { ArrowLeft, ArrowRight } from "assets/icons";
import { OutlineBtn } from "common/components";
import React, { useContext } from "react";
import { View } from "react-native";
import { Link } from "react-router-native";
import styled, { ThemeContext } from "styled-components/native";
import { RiteTitle, SectionTitle, Text } from "styles/typography";

interface ListHeaderProps {
  startYear: number;
}
interface NextYearProps {
  direction: "past" | "future";
  year: number;
}

export const ListHeader: React.FC<ListHeaderProps> = React.memo(
  ({ startYear, ...props }) => {
    const endYear = +startYear + 1;
    return (
      <Container {...props}>
        <View>
          <StyledH1>The Church Year</StyledH1>
          <RiteTitle>
            {startYear} - {endYear}
          </RiteTitle>
        </View>
        <YearNavWrapper>
          <NextYearLink year={+startYear - 1} direction="past" />
          <NextYearLink year={+startYear + 1} direction="future" />
        </YearNavWrapper>
      </Container>
    );
  }
);

const NextYearLink: React.FC<NextYearProps> = React.memo(
  ({ direction, year, ...props }) => {
    const theme = useContext(ThemeContext);
    const Arrow = direction === "past" ? ArrowLeft : ArrowRight;
    return (
      <StyledLink to={`/calendar/${year}`} {...props}>
        <OutlineBtn>
          <NavTextWrapper>
            <NavText style={{ lineHeight: 18 }}>
              {year} - {year + 1}
            </NavText>
            <Arrow size={12} color={theme.colors.text} />
          </NavTextWrapper>
        </OutlineBtn>
      </StyledLink>
    );
  }
);

const Container = styled.View`
  justify-content: center;
  padding-top: 20px;
  padding-left: ${({ theme }) => theme.spacing.outerPadding}px;
  padding-right: ${({ theme }) => theme.spacing.outerPadding}px;
  width: 100%;
`;

const StyledH1 = styled(SectionTitle)`
  margin-bottom: -14px;
  padding-top: 20px;
`;

const YearNavWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  padding-top: 5px;
  width: 100%;
`;

const StyledLink = styled(Link)`
  border-radius: 11px;
  margin: 0 6px;
`;

const NavTextWrapper = styled.View`
  align-items: center;
`;

const NavText = styled(Text)`
  font-size: 12px;
  margin-bottom: 1px;
`;
