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

import { useCalendarData } from "data/calendarData";
import { createDataProvider, getStartValues } from "data/calendarData/utils";
import { useIsMountedRef } from "data/common/useIsMountedRef";
import React, { useEffect, useRef } from "react";
import { View } from "react-native";
import { useParams } from "react-router-native";
import { RecyclerListView } from "recyclerlistview";

import { DateDisplay } from "./DateDisplay";
import { LayoutProvider } from "./LayoutProvider";
import { ListHeader } from "./ListHeader";
import { LoadingAnimation } from "./LoadingAnimation";
import { CalendarNavBar } from "./Navigation/CalendarNavBar";
import { SectionHeader } from "./SectionHeader";
import { useCalendarActions } from "./useCalendarActions";

/**
 * Main component for Calendar screen -- primarily implements a RecyclerListView
 * See https://github.com/Flipkart/recyclerlistview
 * Incoming params optional. If date param is used, it should use toDateString or similar.
 * getLocalDate will ensure no timezone issues, used in getStartValues.
 */
export const Calendar: React.FC = () => {
  const isMountedRef = useIsMountedRef();
  const listRef = useRef(null);
  const { year, date } = useParams<{ year: string; date: string }>();
  const { startYear, startDate } = getStartValues(year, date);

  /** Custom hook data service */
  const {
    dataSource,
    isLoading,
    getData,
    getDateIndex,
    getSeasonIndex,
  } = useCalendarData(startYear, isMountedRef);

  /** Calendar actions functions */
  const { jumpToDate, jumpToSeason, jumpToTop } = useCalendarActions({
    listRef,
    getDateIndex,
    getSeasonIndex,
  });

  /**
   * Fetches the startYear's data, prepares it, and updates dataSource
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
        forceNonDeterministicRendering
        onEndReached={getData}
        onEndReachedThreshold={0}
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
