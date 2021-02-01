import { ColorBox } from "common/components";
import { Season, SectionData } from "data/calendarData/interfaces";
import React from "react";
import styled from "styled-components/native";
import { ParagraphTitle } from "styles/typography";

interface ISeasonHeader {
  season: Season;
}
interface IMonthHeader {
  month: string;
  year: number;
}

/* Season & month section headers */
export const SectionHeader: React.FC<SectionData> = React.memo(
  ({ sectionType, month, year, season, ...props }) => (
    <Container {...props}>
      {["season", "both"].includes(sectionType) && (
        <SeasonHeader season={season} />
      )}
      {["month", "both"].includes(sectionType) && (
        <MonthHeader month={month} year={year} />
      )}
    </Container>
  )
);

const SeasonHeader: React.FC<ISeasonHeader> = ({ season }) => (
  <HeaderWrapper>
    <ColorBox color={season.colors[0]} dimension={10} />
    <HeaderText>{season.name}</HeaderText>
  </HeaderWrapper>
);

const MonthHeader: React.FC<IMonthHeader> = ({ month, year }) => (
  <HeaderWrapper>
    <HeaderText>
      {month} {year}
    </HeaderText>
  </HeaderWrapper>
);

const Container = styled.View`
  align-items: center;
  flex: 1;
  margin-top: 20px;
  padding-left: ${({ theme }) => theme.spacing.outerPadding}px;
  padding-right: ${({ theme }) => theme.spacing.outerPadding}px;
`;

const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 6px;
  margin-top: 10px;
`;

const HeaderText = styled(ParagraphTitle)`
  padding-top: 0;
  margin-left: 6px;
  margin-right: 6px;
  margin-bottom: -8px;
`;
