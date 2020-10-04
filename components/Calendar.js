import React from "react";
import { SectionList, StyleSheet, Text, View } from "react-native";
import { H1, H2 } from "../styles/typography";
import Loading from "./Loading";
import useFetch from "../custom hooks/useFetch";
import { dummyCalendarData } from "../dummyCalendarData";
import CalendarBlock from "./CalendarBlock";
import DateBlock from "./CalendarBlock/DateBlock";
import Content from "./CalendarBlock/Content";
import { sectionizedCalData } from "../sectionizedCalData";

const styles = StyleSheet.create({
  container: {
    margin: 25,
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
    section: { type, month, season },
  },
}) => {
  const renderString =
    type === "both"
      ? `Month: ${month}; Season: ${season}`
      : type === "month"
      ? `Month: ${month}`
      : `Season: ${season}`;
  return (
    <View>
      <Text>{renderString}</Text>
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
    <View style={styles.container}>
      <H1>The Church Year</H1>
      <H2>
        {startYear} - {+startYear + 1}
      </H2>
      <SectionList
        sections={sectionizedCalData}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
    </View>
  );
};

export default Calendar;
