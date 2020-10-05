import React from "react";
import { ScrollView, SectionList, StyleSheet, Text, View } from "react-native";
import { H1, H2, H3 } from "../styles/typography";
import Loading from "./Loading";
import useFetch from "../apiHooks/useFetch";
import { dummyCalendarData } from "../apiHooks/dummyData/dummyCalendarData";
import CalendarBlock from "./CalendarBlock";
import DateBlock from "./CalendarBlock/DateBlock";
import Content from "./CalendarBlock/Content";
import { sectionizedCalData } from "../apiHooks/sectionizedCalendarData";

const styles = StyleSheet.create({
  container: {
    padding: 25,
    alignItems: "center",
  },
});

const currentYear = new Date().getFullYear();
// use to get current liturgical year's start year

const renderItem = ({ item }) => {
  return (
    <CalendarBlock date={item.date}>
      <DateBlock
        dateData={{ isFastDay: true }}
        date={item.date}
        primaryColor={item.commemorations[0].colors[0]}
      />
      <Content season={item.season} commemorations={item.commemorations} />
    </CalendarBlock>
  );
};

const renderSectionHeader = ({
  section: {
    section: { type, month, year, season },
  },
}) => {
  const seasonDisplay = <H3 key={season + month + year}>{season.name}</H3>;
  const monthDisplay = (
    <H3 key={month + year + season}>
      {month} {year}
    </H3>
  );

  return (
    <View style={styles.container}>
      {type === "both"
        ? [seasonDisplay, monthDisplay]
        : type === "month"
        ? monthDisplay
        : seasonDisplay}
    </View>
  );
};

const Calendar = ({ startYear = 2020 }) => {
  // const [data, isLoading] = useFetch(
  //   `https://data.dailyoffice2019.com/api/v1/calendar/${startYear}?format=json`
  // );
  const data = dummyCalendarData;
  const isLoading = false;

  if (isLoading) return <Loading />;

  return isLoading ? null : (
    <SectionList
      ListHeaderComponent={
        <View style={styles.container}>
          <H1>The Church Year</H1>
          <H2>
            {startYear} - {+startYear + 1}
          </H2>
        </View>
      }
      sections={sectionizedCalData}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default Calendar;
