/**
 *
 *  IN THIS FOLDER
 *
 *    Calendar              Renders a SectionList of which the below are each a part
 *
 *    ListHeader            Top material
 *     - ListHeaderLink     Nav to prev & next years
 *    LoadingAnimation      Loading animation while fetching data
 *    SectionHeader         Season & month section headers
 *    DateDisplay           Invidual calendar date render component
 *
 */

import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { useParams } from "react-router-native";
import { RecyclerListView } from "recyclerlistview";

import { getLiturgicalYear } from "common/utils";
import { useCalendarData } from "data/calendarData";
import { createDataProvider } from "data/calendarData/utils";
import { CalendarNavBar } from "./Navigation/CalendarNavBar";
import { DateDisplay } from "./DateDisplay";
import { LayoutProvider } from "./LayoutProvider";
import { ListHeader } from "./ListHeader";
import { LoadingAnimation } from "./LoadingAnimation";
import { SectionHeader } from "./SectionHeader";

/**
 * Main component for Calendar screen -- primarily implements a RecyclerListView
 * See: https://github.com/Flipkart/recyclerlistview
 */

export const Calendar: React.FC = () => {
  const { date } = useParams<{ date: string }>();
  const startDate: Date = date ? new Date(date) : new Date();
  const startYear: number = getLiturgicalYear(startDate);

  const {
    dataSource,
    isLoading,
    getData,
    getDateIndex,
    getSeasonIndex,
  } = useCalendarData(startYear);

  /**
   * Fetches the startYear's data, prepares it, and updates dataSource
   *
   * Note: IIFE pattern necessary because the function passed to useEffect must return
   * either void or a clean-up function (not a Promise as getData returns)
   */
  useEffect(() => {
    (async () => {
      try {
        await getData();
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

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

  const jumpToDate = (date: Date): void => {
    // If date is in current data, jump to date
    const index = getDateIndex(date);
    const indexFound = index !== -1;
    indexFound && listRef.current.scrollToIndex(index);
  };

  const jumpToSeason = (season: string): void => {
    const index = getSeasonIndex(season);
    const indexFound = index !== -1;
    indexFound && listRef.current.scrollToIndex(index);
  };

  const jumpToTop = (): void => listRef.current.scrollToTop();

  if (dataSource.length < 5) {
    return <LoadingAnimation />;
  }

  const dataProvider = createDataProvider(dataSource);
  const layoutProvider = new LayoutProvider(dataProvider);

  return (
    <View style={{ flex: 1 }}>
      <RecyclerListView
        ref={listRef}
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
        rowRenderer={rowRenderer}
        renderFooter={() => <LoadingAnimation isLoading={isLoading} />}
        forceNonDeterministicRendering={true}
        onEndReached={getData}
        onEndReachedThreshold={200}
        initialRenderIndex={getDateIndex(startDate)}
      />
      <CalendarNavBar
        jumpToTop={jumpToTop}
        jumpToDate={jumpToDate}
        jumpToSeason={jumpToSeason}
      />
    </View>
  );
};