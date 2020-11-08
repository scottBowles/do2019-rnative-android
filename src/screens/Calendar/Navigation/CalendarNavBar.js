import React, { useState } from "react";
import { StyleSheet, TouchableHighlight, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { toTitleCase } from "common/utils";
import { colors } from "styles";
import { Text } from "styles/typography";
import {
  CalendarDayIcon,
  CalendarIcon,
  ChurchIcon,
  ToTopIcon,
} from "assets/icons";
import { SeasonModal } from "./SeasonModal";

export const CalendarNavBar = ({ jumpToDate, jumpToTop, jumpToSeason }) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [seasonModalVisible, setSeasonModalVisible] = useState(false);
  const openSeasonModal = () => setSeasonModalVisible(true);

  const onDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(Platform.OS === "ios");
    setDate(currentDate);
    jumpToDate(selectedDate);
  };

  const ICON_SIZE = 23;
  const ICON_COLOR = colors.black;
  const navItems = menuItems({
    jumpToDate,
    jumpToTop,
    openSeasonModal,
    setShowDatePicker,
  });

  return (
    <View style={styles.container}>
      <SeasonModal
        seasonModalVisible={seasonModalVisible}
        closeSeasonModal={() => setSeasonModalVisible(false)}
        jumpToSeason={jumpToSeason}
      />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onDateChange}
        />
      )}
      {navItems.map(({ Icon, text, onPress }, index) => (
        <TouchableHighlight onPress={onPress} style={styles.btn} key={index}>
          <View style={styles.btnContent}>
            <Icon size={ICON_SIZE} color={ICON_COLOR} style={styles.icons} />
            <Text style={styles.item}>{toTitleCase(text)}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

const menuItems = ({
  jumpToDate,
  jumpToTop,
  openSeasonModal,
  setShowDatePicker,
}) => [
  {
    Icon: CalendarDayIcon,
    text: "Today",
    onPress: () => {
      const today = new Date();
      jumpToDate(today);
    },
  },
  {
    Icon: CalendarIcon,
    text: "Jump to Date",
    onPress: () => setShowDatePicker(true),
  },
  {
    Icon: ChurchIcon,
    text: "Jump to Season",
    onPress: openSeasonModal,
  },
  {
    Icon: ToTopIcon,
    text: "Jump to Top",
    onPress: jumpToTop,
  },
];

const styles = StyleSheet.create({
  container: {
    borderColor: colors.black,
    borderTopWidth: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    height: 100,
  },
  btn: {
    flex: 1,
  },
  btnContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.lightGrey,
  },
  item: {
    fontSize: 17,
    textAlign: "center",
  },
});
