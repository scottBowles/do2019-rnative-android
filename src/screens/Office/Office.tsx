/**
 *
 * IN THIS FILE
 *
 * parse dummyOffice data
 *
 * COMPONENTS
 *   Title
 *   Office (export default)
 *
 * Styles
 *
 */

// TODO -- CONSIDER USING addIsFastDay API UTIL, IF IT PERFORMS BETTER THAN USING isFast HERE

import { Loading } from "common/components";
import {
  CalendarBlock,
  Content,
  DateBlock,
} from "common/components/calendarBlock";
import { isEmptyObject } from "common/utils";
import { useDummyFetch } from "data/common";
import { dummyOffice } from "data/officeData";
import { IApiOfficeData } from "data/officeData/IApiOfficeData";
import { OfficeData } from "data/officeData/OfficeData";
import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { H1 } from "styles/typography";

import { Confession } from "./Confession";
import { Invitatory } from "./Invitatory";
import { OpeningSentence } from "./OpeningSentence";

interface IOfficeProps {
  office: string;
  date: Date;
}

const Title = ({ office }) => (
  <H1 style={styles.title}>{`Daily\n${office} Prayer`}</H1>
);

export const Office: React.FC<IOfficeProps> = ({
  office = "Morning",
  date = new Date(),
  // TODO: Need to handle date right with time zones. See getLocalDate comments.
}) => {
  // need to change this hook to make officeData `CalendarDay`s
  // const [officeData, isLoading] = useFetch(
  //   "https://data.dailyoffice2019.com/api/v1/calendar/2020-9-21?format=json"
  // );

  const url = `https://data.dailyoffice2019.com/api/v1/office/morning_prayer/2020-12-10?confession=lonf&absolution=priest`;
  const [data, isLoading] = useDummyFetch(url, dummyOffice);

  if (isLoading || isEmptyObject(data)) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }

  const officeData = new OfficeData(data as IApiOfficeData);

  return (
    <ScrollView>
      <View style={styles.container}>
        <Title office={office} />
        <CalendarBlock weekday={officeData.weekday}>
          <DateBlock day={officeData} />
          <Content day={officeData} showSeason />
        </CalendarBlock>
        {/* <OpeningSentence
          text={openingSentence.text}
          citation={openingSentence.citation}
        />
        <Confession
          office={officeData}
          useLongFormInvitation={useLongFormInvitation}
          useDeaconOrLayAbsolution={useDeaconOrLayAbsolution}
        />
        <Invitatory office={office} /> */}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
  title: {
    marginBottom: 10,
  },
});
