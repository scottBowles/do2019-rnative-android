import { Loading } from "common/components";
import {
  CalendarBlock,
  Content,
  DateBlock,
} from "common/components/calendarBlock";
import { isEmptyObject } from "common/utils";
import { useDummyFetch } from "data/common";
import { IApiOfficeData, OfficeData, dummyOffice } from "data/officeData";
import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components";
import { Caption, Congregation, H1, H2, P, Rubric } from "styles/typography";

interface IOfficeProps {
  office: string;
  date: Date;
}
interface IOfficePrayers {
  officeData: OfficeData;
}

// Maps api line_type value to component for rendering
const officeComponents = {
  heading: H2,
  leader: P,
  congregation: Congregation,
  citation: Caption,
  rubric: Rubric,
};

const OfficePrayers: React.FC<IOfficePrayers> = ({ officeData }) => (
  <>
    {officeData.modules.data.map((section) => (
      <SectionWrapper key={section.name}>
        {section.lines.map(({ content, line_type, indented }) => {
          const Line = officeComponents[line_type] || P;
          return <Line indented={indented}>{content}</Line>;
        })}
      </SectionWrapper>
    ))}
  </>
);

export const Office: React.FC<IOfficeProps> = ({
  office = "Morning",
  date = new Date(),
  // TODO: Need to handle date right with time zones. See getLocalDate comments.
}) => {
  const url = `https://data.dailyoffice2019.com/api/v1/office/morning_prayer/2020-12-10?confession=lonf&absolution=priest`;
  const [data, isLoading] = useDummyFetch(url, dummyOffice);

  if (isLoading || isEmptyObject(data)) {
    return <Loading />;
  }

  const officeData = new OfficeData(data as IApiOfficeData);

  return (
    <Container>
      <Title>{`Daily\n${office} Prayer`}</Title>

      <CalendarBlock weekday={officeData.weekday}>
        <DateBlock day={officeData} />
        <Content day={officeData} showSeason />
      </CalendarBlock>

      <OfficePrayers officeData={officeData} />
    </Container>
  );
};

const Container = styled(ScrollView)`
  padding: 25px;
`;

const Title = styled(H1)`
  margin-bottom: 10px;
`;

const SectionWrapper = styled(View)``;
