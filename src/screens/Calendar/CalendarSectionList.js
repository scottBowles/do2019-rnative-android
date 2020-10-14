import React, { useRef } from "react";
import { SectionList, View, Button } from "react-native";
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

  const sectionListRef = useRef(null);

  const goToLocation = () => {
    sectionListRef.current.scrollToLocation({ sectionIndex: 4, itemIndex: 2 });
  };

  const findLastLocation = (data, index) => {
    let section = 0;
    let indexTotal = 0;
    while (data[section].data.length + indexTotal >= index) {
      indexTotal += data[section].data.length;
      section++;
    }
    return { section, index: index - indexTotal };
  };

  return (
    <View>
      <Button onPress={goToLocation} title={"jump!"} />
      <SectionList
        ref={sectionListRef}
        sections={dataSource}
        ListHeaderComponent={<ListHeader startYear={startYear} />}
        ListFooterComponent={<ListFooter isLoading={isLoading} />}
        renderSectionHeader={({ section: { sectionData } }) => (
          <SectionHeader
            type={sectionData.type}
            month={sectionData.month}
            year={sectionData.year}
            season={sectionData.season}
          />
        )}
        renderItem={({ item }) => (
          <DateDisplay
            commemorations={item.commemorations}
            date={item.date}
            isFastDay={item.isFastDay}
            primaryColor={item.commemorations[0].colors[0]}
          />
        )}
        onScrollToIndexFailed={(error) => {
          const { section, index } = findLastLocation(
            dataSource,
            error.index - 1
          );
          sectionListRef.current.scrollToLocation({
            sectionIndex: section,
            itemIndex: index,
          });
          setTimeout(() => {
            goToLocation();
          }, 10000);
        }}
        onEndReachedThreshold={0.35}
        onEndReached={getData}
        keyExtractor={(item, index) => item + index}
      />
    </View>
  );
};

export default Calendar;
