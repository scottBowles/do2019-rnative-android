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

import { useCalendarData } from "api/apiHooks";
import { getValidStartYear, parseDate } from "common/utils";
import { CalendarNavBar } from "./Navigation/CalendarNavBar";
import { DateDisplay } from "./DateDisplay";
import { LayoutProvider } from "./LayoutProvider";
import { ListFooter } from "./ListFooter";
import { ListHeader } from "./ListHeader";
import { SectionHeader } from "./SectionHeader";
import { SeasonModal } from "./Navigation/SeasonModal";

const createDataProvider = (data) =>
  new DataProvider((r1, r2) => {
    return r1 !== r2;
  }).cloneWithRows(data);

export const Calendar = () => {
  const { year } = useParams();
  const startYear = getValidStartYear(year);
  const { dataSource, isLoading, getData } = useCalendarData(startYear);
  const dataForHeader = { type: "listHeader", startYear };
  const [dataProvider, setDataProvider] = useState(
    createDataProvider([dataForHeader, ...dataSource])
  );

  useEffect(() => {
    setDataProvider(createDataProvider([dataForHeader, ...dataSource]));
  }, [dataSource]);

  const listRef = useRef(null);

  const rowRenderer = (type, data) => {
    switch (type) {
      case "listHeader":
        return <ListHeader startYear={data.startYear} />;
      case "heading":
        return (
          <SectionHeader
            sectionType={data.sectionType}
            month={data.month}
            year={data.year}
            season={data.season}
          />
        );
      case "date":
        return (
          <DateDisplay
            commemorations={data.commemorations}
            day={data.day}
            isFastDay={data.isFastDay}
            primaryColor={data.commemorations[0].colors[0]}
          />
        );
    }
  };

  const layoutProvider = new LayoutProvider(dataProvider);

  const getDateData = (date) => {
    const { dayOfMonth, month, year } = parseDate(date);
    const data = dataSource.find(
      (item) =>
        item.type === "date" &&
        item.day.dayOfMonth === dayOfMonth &&
        item.day.month === month &&
        item.day.year === year
    );
    return data;
  };
  const jumpToDate = (date) => {
    const data = getDateData(date);
    console.log({ date, data });
    listRef.current.scrollToItem(data);
  };
  const jumpToTop = () => listRef.current.scrollToTop();

  return dataProvider.getSize() === 0 ? null : (
    <View style={{ flex: 1 }}>
      <SeasonModal />
      <RecyclerListView
        ref={listRef}
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
        rowRenderer={rowRenderer}
        renderFooter={() => <ListFooter isLoading={isLoading} />}
        forceNonDeterministicRendering={true}
        onEndReached={getData}
        onEndReachedThreshold={2000}
      />
      <CalendarNavBar jumpToTop={jumpToTop} jumpToDate={jumpToDate} />
    </View>
  );
};
