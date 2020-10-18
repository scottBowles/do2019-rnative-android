import React, { useRef } from "react";
import { Button, ScrollView, View } from "react-native";
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
    <ScrollView>
      <View>
        <Button
          onPress={() => flatListRef.current.scrollToIndex({ index: 300 })}
          title={"jump!"}
        />
        <ListHeader startYear={startYear} />
        <HeadersAndDates data={dataSource} />
        <ListFooter isLoading={isLoading} />
      </View>
    </ScrollView>
  );
};

const HeadersAndDates = ({ data }) => (
  <View>
    {data.map((item, index) =>
      item.type ? (
        <SectionHeader
          key={item + index}
          type={item.type}
          month={item.month}
          year={item.year}
          season={item.season}
        />
      ) : (
        <DateDisplay
          key={item + index}
          commemorations={item.commemorations}
          date={item.date}
          day={item.day}
          isFastDay={item.isFastDay}
          primaryColor={item.commemorations[0].colors[0]}
        />
      )
    )}
  </View>
);

export default Calendar;