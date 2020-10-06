import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";

import { dummyCalendarDayData, dummyOffice, useFetch } from "api";
import { H1 } from "styles/typography";
import { Loading } from "library/components";
import {
  CalendarBlock,
  Content,
  DateBlock,
} from "library/components/CalendarBlock";
import { Confession, Invitatory, OpeningSentence } from "./";

const {
  office,
  frequency,
  daySection: { date, content },
  openingSentence,
  confession: { useLongFormInvitation, useDeaconOrLayAbsolution },
} = dummyOffice;

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
  title: {
    marginBottom: 10,
  },
});

const Title = ({ frequency, office }) => (
  <H1 style={styles.title}>{frequency + "\n" + `${office} Prayer`}</H1>
);

const Office = () => {
  // const [officeData, isLoading] = useFetch(
  //   "https://data.dailyoffice2019.com/api/v1/calendar/2020-9-21?format=json"
  // );
  const officeData = dummyCalendarDayData;
  const isLoading = false;

  return !!isLoading ? (
    <View style={styles.container}>
      <Loading />
    </View>
  ) : (
    <ScrollView>
      <View style={styles.container}>
        <Title frequency={frequency} office={office} />
        <CalendarBlock date={officeData.date}>
          <DateBlock
            dateData={date}
            date={officeData.date}
            primaryColor={officeData.commemorations[0].colors[0]}
          />
          <Content
            season={officeData.season}
            commemorations={officeData.commemorations}
          />
        </CalendarBlock>
        <OpeningSentence
          text={openingSentence.text}
          citation={openingSentence.citation}
        />
        <Confession
          office={office}
          useLongFormInvitation={useLongFormInvitation}
          useDeaconOrLayAbsolution={useDeaconOrLayAbsolution}
        />
        <Invitatory office={office} />
      </View>
    </ScrollView>
  );
};

export default Office;