import React from "react";
import { SectionList, StyleSheet, View } from "react-native";

import { dummyCalendarData, sectionizeCalendarData, useFetch } from "api";
import { H1, H2, H3 } from "styles/typography";
import { Loading, ColorBox } from "common/components";
import {
  CalendarBlock,
  Content,
  DateBlock,
} from "common/components/CalendarBlock";

const styles = StyleSheet.create({
  container: {
    padding: 25,
    alignItems: "center",
  },
  seasonHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  colorBox: {
    marginRight: 3,
  },
});

const currentYear = new Date().getFullYear();
// use to get current liturgical year's start year

const renderItem = ({ item }) => (
  <CalendarBlock date={item.date}>
    <DateBlock
      dateData={{ isFastDay: true }}
      date={item.date}
      primaryColor={item.commemorations[0].colors[0]}
    />
    <Content season={item.season} commemorations={item.commemorations} />
  </CalendarBlock>
);

const renderSectionHeader = ({
  section: {
    section: { type, month, year, season },
  },
}) => {
  const seasonDisplay = (
    <View style={styles.seasonHeader}>
      <ColorBox
        color={season.colors[0]}
        dimension={9}
        style={styles.colorBox}
      />
      <H3 key={season + month + year}>{season.name}</H3>
    </View>
  );
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
      sections={sectionizeCalendarData(dummyCalendarData)}
      keyExtractor={(item, index) => item + index}
      renderItem={renderItem}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default Calendar;
