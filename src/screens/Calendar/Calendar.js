import React, { useEffect, useRef, useState } from "react";
import { Button, View } from "react-native";
import { useParams } from "react-router-native";
import { DataProvider, RecyclerListView } from "recyclerlistview";

import { useCalendarData } from "api/apiHooks";
import { getValidStartYear } from "common/utils";
import DateDisplay from "./DateDisplay";
import LayoutProvider from "./LayoutProvider";
import ListFooter from "./ListFooter";
import ListHeader from "./ListHeader";
import SectionHeader from "./SectionHeader";

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

const createNewDataProvider = () =>
  new DataProvider((r1, r2) => {
    return r1 !== r2;
  });

const Calendar = () => {
  const { year } = useParams();
  const startYear = getValidStartYear(year);
  const { dataSource, isLoading, getData } = useCalendarData(startYear);
  const initialDataProvider = createNewDataProvider().cloneWithRows(dataSource);
  const [dataProvider, setDataProvider] = useState(initialDataProvider);
  const [heights, setHeights] = useState({ headings: [], dates: [] });

  useEffect(() => {
    if (dataProvider) {
      setDataProvider(createNewDataProvider().cloneWithRows(dataSource));
    }
  }, [dataSource]);

  const flatListRef = useRef(null);

  const rowRenderer = (type, data, index) => {
    switch (type) {
      case "heading":
        return (
          <SectionHeader
            key={data + index}
            sectionType={data.sectionType}
            month={data.month}
            year={data.year}
            season={data.season}
          />
        );
      case "date":
        return (
          <DateDisplay
            key={data + index}
            commemorations={data.commemorations}
            date={data.date}
            day={data.day}
            isFastDay={data.isFastDay}
            primaryColor={data.commemorations[0].colors[0]}
          />
        );
    }
  };

  const layoutProvider = new LayoutProvider(dataProvider);

  return dataProvider.getSize() === 0 ? null : (
    <View style={{ flex: 1 }}>
      <Button
        onPress={() => flatListRef.current.scrollToIndex({ index: 300 })}
        title={"jump!"}
      />
      <RecyclerListView
        dataProvider={dataProvider}
        layoutProvider={layoutProvider}
        rowRenderer={rowRenderer}
        renderFooter={() => <ListFooter isLoading={isLoading} />}
        forceNonDeterministicRendering={true}
      />
    </View>
  );
};

export default Calendar;
