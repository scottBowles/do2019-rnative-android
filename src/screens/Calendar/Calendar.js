import React, { useEffect, useState } from "react";
import { ActivityIndicator, SectionList, StyleSheet, View } from "react-native";

import { dummyCalendarData, sectionizeCalendarData } from "api";
import { H1, H2, H3 } from "styles/typography";
import { ColorBox } from "common/components";
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
  footer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

const currentYear = new Date().getFullYear();
// use to get current liturgical year's start year, for default start year

const Item = React.memo(({ item: { commemorations, date, season } }) => (
  <CalendarBlock date={date}>
    <DateBlock
      dateData={{ isFastDay: true }}
      date={date}
      primaryColor={commemorations[0].colors[0]}
    />
    <Content season={season} commemorations={commemorations} />
  </CalendarBlock>
));

const SectionHeader = React.memo(
  ({
    section: {
      section: { type, month, year, season },
    },
  }) => {
    const seasonHeader = (
      <View style={styles.seasonHeader} key={season + month + year}>
        <ColorBox
          color={season.colors[0]}
          dimension={9}
          style={styles.colorBox}
        />
        <H3>{season.name}</H3>
      </View>
    );
    const monthHeader = (
      <H3 key={month + year + season}>
        {month} {year}
      </H3>
    );

    return (
      <View style={styles.container}>
        {type === "both"
          ? [seasonHeader, monthHeader]
          : type === "month"
          ? monthHeader
          : seasonHeader}
      </View>
    );
  }
);
const Calendar = React.memo(({ startYear = 2020 }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [nextYear, setNextYear] = useState(startYear);

  useEffect(() => getData(), []);

  const getData = () => {
    if (!isLoading) {
      setIsLoading(true);
      fetch(
        `https://data.dailyoffice2019.com/api/v1/calendar/${nextYear}?format=json`
      )
        .then((res) => res.json())
        .then((data) => {
          const sectionizedData = sectionizeCalendarData(data);
          setNextYear(nextYear + 1);
          setDataSource([...dataSource, ...sectionizedData]);
          setIsLoading(false);
        })
        .catch((err) => console.error(err));
    }
  };

  // const data = dummyCalendarData;
  // const isLoading = false;

  const ListHeader = React.memo(() => (
    <View style={styles.container}>
      <H1>The Church Year</H1>
      <H2>
        {startYear} - {+startYear + 1}
      </H2>
    </View>
  ));

  const ListFooter = React.memo(() => {
    return (
      // Footer View with Loader
      <View style={styles.footer}>
        {isLoading ? (
          <ActivityIndicator color="black" style={{ margin: 15 }} />
        ) : null}
      </View>
    );
  });

  return (
    <SectionList
      sections={dataSource}
      keyExtractor={(item, index) => item + index}
      ListHeaderComponent={ListHeader}
      renderItem={({ item }) => <Item item={item} />}
      renderSectionHeader={({ section }) => <SectionHeader section={section} />}
      ListFooterComponent={ListFooter}
      initialNumToRender={15}
      onEndReachedThreshold={0.25}
      onEndReached={getData}
    />
  );
});

export default Calendar;
