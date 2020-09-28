import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { H1, H2 } from "../styles/typography";
import Loading from "./Loading";
import useFetch from "../custom hooks/useFetch";
import { dummyCalendarData } from "../dummyCalendarData";

const styles = StyleSheet.create({
  container: {
    margin: 25,
  },
});

const currentYear = new Date().getFullYear();
// use to get current liturgical year's start year

const Calendar = ({ startYear = 2020 }) => {
  // const [data, isLoading] = useFetch(
  //   `https://data.dailyoffice2019.com/api/v1/calendar/${startYear}?format=json`
  // );
  const data = dummyCalendarData;
  const isLoading = false;

  if (isLoading) return <Loading />;

  return !!isLoading ? null : (
    <View style={styles.container}>
      <H1>The Church Year</H1>
      <H2>
        {startYear} - {+startYear + 1}
      </H2>
    </View>
  );
};

export default Calendar;
