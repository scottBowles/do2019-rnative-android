import React, { useEffect, useState } from "react";
import { ActivityIndicator, SectionList, StyleSheet, View } from "react-native";
import { Link, useParams } from "react-router-native";

import { useCalendarData } from "api/apiHooks";
import { ArrowLeft, ArrowRight } from "assets/icons";
import { H1, H2, H3, Text } from "styles/typography";
import { ColorBox, OutlineBtn } from "common/components";
import {
  CalendarBlock,
  Content,
  DateBlock,
} from "common/components/CalendarBlock";
import { getValidStartYear } from "common/utils";

/**
 *
 * IN THIS FILE
 *
 * COMPONENTS
 *   Calendar              (default export)
 *     renders a SectionList
 *     -contains-
 *       ListHeader        Top material
 *       ListHeaderLink    Nav to prev & next years
 *       ListFooter        Loading animation while fetching data
 *   Item                  Invidual date render component
 *   SectionHeader         Season & month section headers
 *
 * Styles
 *
 */

const Calendar = () => {
  const { year } = useParams();
  const startYear = getValidStartYear(year);

  const { dataSource, isLoading, getData } = useCalendarData(startYear);

  const ListHeader = React.memo(() => (
    <View style={styles.listHeaderContainer}>
      <View>
        <H1>The Church Year</H1>
        <H2>
          {startYear} - {+startYear + 1}
        </H2>
      </View>
      <View style={styles.yearNavContainer}>
        <ListHeaderLink year={startYear - 1} direction={"past"} />
        <ListHeaderLink year={startYear + 1} direction={"future"} />
      </View>
    </View>
  ));

  const ListHeaderLink = React.memo(({ direction, year, ...props }) => (
    <Link to={`/calendar/${year}`} {...props}>
      <OutlineBtn style={styles.outlineBtn}>
        <Text style={styles.outlineBtnText}>
          {year} - {year + 1}
        </Text>
        {direction === "past" ? (
          <ArrowLeft size={12} />
        ) : (
          <ArrowRight size={12} />
        )}
      </OutlineBtn>
    </Link>
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
      ListHeaderComponent={ListHeader}
      ListFooterComponent={ListFooter}
      renderItem={({ item }) => <Item item={item} />}
      renderSectionHeader={({ section }) => <SectionHeader section={section} />}
      initialNumToRender={15}
      onEndReachedThreshold={0.25}
      onEndReached={getData}
      keyExtractor={(item, index) => item + index}
    />
  );
};

const Item = React.memo(({ item: { commemorations, date, season } }) => (
  <CalendarBlock date={date}>
    <DateBlock
      dateData={{ isFastDay: true }}
      date={date}
      primaryColor={commemorations[0].colors[0]}
    />
    <Content commemorations={commemorations} date={date} />
  </CalendarBlock>
));

const SectionHeader = React.memo(
  ({
    section: {
      section: { type, month, year, season },
    },
  }) => {
    const seasonHeader = (
      <View style={styles.sectionHeader} key={season + month + year}>
        <ColorBox
          color={season.colors[0]}
          dimension={9}
          style={styles.colorBox}
        />
        <H3>{season.name}</H3>
      </View>
    );
    const monthHeader = (
      <H3 style={styles.sectionHeader} key={month + year + season}>
        {month} {year}
      </H3>
    );

    return (
      <View style={styles.sectionHeaderContainer}>
        {type === "both"
          ? [seasonHeader, monthHeader]
          : type === "month"
          ? monthHeader
          : seasonHeader}
      </View>
    );
  }
);

const styles = StyleSheet.create({
  colorBox: {
    marginRight: 3,
  },
  listHeaderContainer: {
    alignItems: "center",
    padding: 25,
  },
  sectionHeaderContainer: {
    alignItems: "center",
  },
  footer: {
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  outlineBtn: {
    margin: 5,
  },
  outlineBtnText: {
    fontSize: 12,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    marginTop: 14,
  },
  yearNavContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
    width: "100%",
  },
});

export default Calendar;
