/**
 *
 * IN THIS FILE
 *
 * COMPONENTS
 *   Content (export)
 *   SeasonBox
 *
 */

import { CalendarDay } from "data/calendarData/models";
import { ISeason } from "data/interfaces";
import React from "react";
import styled from "styled-components/native";

import { ContentLine } from "./ContentLine";
import { OfficeLinks } from "./OfficeLinks";

interface IContentProps {
  day: CalendarDay;
  showSeason?: boolean;
  showOfficeLinks?: boolean;
}
interface ISeasonBoxProps {
  season: ISeason;
}

export const Content: React.FC<IContentProps> = ({
  day: { commemorations, localDate, season },
  showSeason = false,
  showOfficeLinks = false,
}) => (
  <Container>
    <CommemorationsWrapper>
      {commemorations.map((commemoration, index) => (
        <ContentLine
          key={index}
          type={index === 0 ? "primary" : "secondary"}
          data={commemoration}
        />
      ))}
    </CommemorationsWrapper>
    {showSeason && <SeasonBox season={season} />}
    {showOfficeLinks && <OfficeLinks date={localDate} />}
  </Container>
);

const SeasonBox: React.FC<ISeasonBoxProps> = ({ season }) => (
  <SeasonWrapper>
    <ContentLine type="season" data={season} />
  </SeasonWrapper>
);

const Container = styled.View`
  padding: 0 14px;
`;

const CommemorationsWrapper = styled.View`
  padding-top: 4px;
  padding-bottom: 8px;
`;

const SeasonWrapper = styled.View`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  border: 1px black;
  align-self: flex-end;
  justify-content: flex-start;
  padding: 4px 4px 5px;
  margin: 12px 0 8px;
`;
