/**
 *
 *  IN THIS FOLDER
 *
 *    Calendar              Renders a SectionList of which the below are each a part
 *
 *    ListHeader            Top material
 *    ListHeaderLink        Nav to prev & next years
 *    ListFooter            Loading animation while fetching data
 *    SectionHeader         Season & month section headers
 *    DateDisplay           Invidual calendar date render component
 *
 */

import React, { useEffect, useRef, useState } from "react";
import { View } from "react-native";
import { useParams } from "react-router-native";
import { DataProvider, RecyclerListView } from "recyclerlistview";

import type { HeaderData, SectionData } from "data/calendarData/interfaces";
import { CalendarDay, ParsedDate } from "data/calendarData/models";
import { prepCalendarData, useCalendarData } from "data/calendarData";
import { getLiturgicalYear } from "common/utils";
import { CalendarNavBar } from "./Navigation/CalendarNavBar";
import { DateDisplay } from "./DateDisplay";
import { LayoutProvider } from "./LayoutProvider";
import { ListFooter } from "./ListFooter";
import { ListHeader } from "./ListHeader";
import { SectionHeader } from "./SectionHeader";

const createDataProvider = (data: (HeaderData | SectionData | CalendarDay)[]) =>
  new DataProvider((r1, r2) => {
    return r1 !== r2;
  }).cloneWithRows(data);

/**
 * Main component for Calendar screen -- primarily implements a RecyclerListView
 * See: https://github.com/Flipkart/recyclerlistview
 */

export const Calendar: React.FC = () => {
  const { date } = useParams<{ date: string }>();
  const startDate: Date = date ? new Date(date) : new Date();
  const startYear: number = getLiturgicalYear(startDate);

  const { dataSource, isLoading, getData } = useCalendarData(
    startYear,
    prepCalendarData
  );
  const [dataProvider, setDataProvider] = useState(
    createDataProvider(dataSource)
  );

  useEffect(() => {
    setDataProvider(createDataProvider(dataSource));
  }, [dataSource]);

  const listRef = useRef(null);

  const rowRenderer = (_: string | number, data: any) => {
    switch (data.type) {
      case "listHeader":
        return <ListHeader startYear={data.startYear} />;
      case "heading":
        return <SectionHeader {...data} />;
      case "date":
        return <DateDisplay day={data} />;
    }
    return null;
  };

  const layoutProvider = new LayoutProvider(dataProvider);

  const getStartIndex = () => {
    const { dayOfMonth, month, year } = new ParsedDate(startDate);
    const startIndex = dataSource.findIndex(
      (item: HeaderData | SectionData | CalendarDay) =>
        item.type === "date" &&
        item.dayOfMonth === dayOfMonth &&
        item.month === month &&
        item.year === year
    );
    return startIndex;
  };

  // TODO: Check the output of this if no data is found. Same for getSeasonData below.
  const getDateData = (date: Date) => {
    const { dayOfMonth, month, year } = new ParsedDate(date);
    const data = dataSource.find(
      (item: HeaderData | SectionData | CalendarDay) =>
        item.type === "date" &&
        item.dayOfMonth === dayOfMonth &&
        item.month === month &&
        item.year === year
    );
    return data;
  };

  const getSeasonData = (season: string) => {
    const data = dataSource.find(
      (item: HeaderData | SectionData | CalendarDay) =>
        item.type === "heading" &&
        ["season", "both"].includes(item.sectionType) &&
        item.season.name.toLowerCase() === season.toLowerCase()
    );
    return data;
  };

  const jumpToDate = async (date: Date): Promise<void> => {
    // If date is in current data, jump to date
    let data = getDateData(date);
    if (data) {
      listRef.current.scrollToItem(data);
      return;
    }
  };

  const jumpToSeason = (season: string): void => {
    const data = getSeasonData(season);
    listRef.current.scrollToItem(data);
  };

  const jumpToTop = (): void => listRef.current.scrollToTop();

  return dataProvider.getSize() === 0 ? null : (
    <View style={{ flex: 1 }}>
      <RecyclerListView
        ref={listRef}
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
        rowRenderer={rowRenderer}
        renderFooter={() => <ListFooter isLoading={isLoading} />}
        forceNonDeterministicRendering={true}
        onEndReached={getData}
        onEndReachedThreshold={2000}
        initialRenderIndex={getStartIndex()}
      />
      <CalendarNavBar
        jumpToTop={jumpToTop}
        jumpToDate={jumpToDate}
        jumpToSeason={jumpToSeason}
      />
    </View>
  );
};
