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
import { useHistory, useParams } from "react-router-native";
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
import { getLocalDate } from "common/utils/getLocalDate";

/**
 * Main component for Calendar screen -- primarily implements a RecyclerListView
 * See https://github.com/Flipkart/recyclerlistview
 * Incoming params optional. If date param is used, it should use toDateString or similar.
 * getLocalDate will ensure no timezone issues.
 */
export const Calendar: React.FC = () => {
  const history = useHistory();
  const { year, date } = useParams<{ year: string; date: string }>();
  let startDate;
  let startYear;
  if (date && year) {
    const utcStartDate = new Date(date);
    startDate = getLocalDate(utcStartDate);
    startYear = getLiturgicalYear(startDate);
  } else if (year) {
    startYear = +year;
  } else {
    startDate = new Date();
    startYear = getLiturgicalYear(startDate);
  }

  const listRef = useRef(null);

  /** Custom hook data service */
  const {
    dataSource,
    isLoading,
    getData,
    getDateIndex,
    getSeasonIndex,
  } = useCalendarData(startYear);

  /**
   * Fetches the startYear's data, prepares it, and updates dataSource
   * IIFE pattern necessary because the function passed to useEffect must return
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

  /** Renders data according to type, provided by RecyclerListView */
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
    /** If date is in current data, scroll to date */
    const index = getDateIndex(date);
    const indexFound = index !== -1;
    if (indexFound) {
      return listRef.current.scrollToIndex(index);
    }
    /**
     * If date is not in current data, route to /calendar/(liturgicalYear)/(dateString)
     * toDateString is used to normalize date. getLocalDate in Calendar ensures no timezone issues.
     */
    const liturgicalYear = getLiturgicalYear(date);
    const dateString = date.toDateString();
    return history.push(`/calendar/${liturgicalYear}/${dateString}`);
  };

  const jumpToSeason = (season: string): void => {
    const index = getSeasonIndex(season);
    const indexFound = index !== -1;
    indexFound && listRef.current.scrollToIndex(index);
  };

  const jumpToTop = (): void => listRef.current.scrollToTop();

  if (dataSource.length < 2) {
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
