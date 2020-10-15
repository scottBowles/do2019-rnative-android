import React, { useRef } from "react";
import { FlatList, View, Button } from "react-native";
import { useParams } from "react-router-native";

import { useCalendarData } from "api/apiHooks";
import { getValidStartYear } from "common/utils";
import DateDisplay from "./DateDisplay";
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

const Calendar = () => {
  const { year } = useParams();
  const startYear = getValidStartYear(year);

  const { dataSource, isLoading, getData } = useCalendarData(startYear);

  const flatListRef = useRef(null);

  return (
    <View>
      <Button
        onPress={() => flatListRef.current.scrollToIndex({ index: 300 })}
        title={"jump!"}
      />
      <FlatList
        ref={flatListRef}
        onScrollToIndexFailed={(error) => {
          flatListRef.current.scrollToOffset({
            offset: error.averageItemLength * error.index,
            animated: true,
          });
          setTimeout(() => {
            if (dataSource.length !== 0 && flatListRef !== null) {
              flatListRef.current.scrollToIndex({
                index: error.index,
                animated: true,
              });
            }
          }, 100);
        }}
        data={dataSource}
        ListHeaderComponent={<ListHeader startYear={startYear} />}
        ListFooterComponent={<ListFooter isLoading={isLoading} />}
        renderItem={({ item }) =>
          item.type ? (
            <SectionHeader
              type={item.type}
              month={item.month}
              year={item.year}
              season={item.season}
            />
          ) : (
            <DateDisplay
              commemorations={item.commemorations}
              date={item.date}
              isFastDay={item.isFastDay}
              primaryColor={item.commemorations[0].colors[0]}
            />
          )
        }
        onEndReachedThreshold={0.35}
        onEndReached={getData}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default Calendar;
