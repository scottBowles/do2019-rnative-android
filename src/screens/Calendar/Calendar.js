import React from "react";
import { SectionList } from "react-native";
import { useParams } from "react-router-native";

import { useCalendarData } from "api/apiHooks";
import { getValidStartYear } from "common/utils";
import {
  DateDisplay,
  ListFooter,
  ListHeader,
  SectionHeader,
} from "screens/Calendar";

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

  return (
    <SectionList
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
      initialNumToRender={15}
      onEndReachedThreshold={0.35}
      onEndReached={getData}
      keyExtractor={(item, index) => item + index}
    />
  );
};

export default Calendar;
