import React, { useState } from "react";
import { Platform, StyleSheet, TouchableHighlight, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import { toTitleCase } from "common/utils";
import { colors } from "styles/colors";
import { Text } from "styles/typography";
import {
  CalendarDayIcon,
  CalendarIcon,
  ChurchIcon,
  ToTopIcon,
} from "assets/icons";
import { SeasonModal } from "./SeasonModal";

interface Props {
  jumpToDate: (date: Date) => void;
  jumpToTop: () => void;
  jumpToSeason: (date: string) => void;
}

export const CalendarNavBar: React.FC<Props> = ({
  jumpToDate,
  jumpToTop,
  jumpToSeason,
}) => {
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [seasonModalVisible, setSeasonModalVisible] = useState(false);
  const openSeasonModal = () => setSeasonModalVisible(true);

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    if (selectedDate) {
      setDate(currentDate);
      jumpToDate(currentDate);
      return;
    }
    setShowDatePicker(Platform.OS === "ios");
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
            <Icon size={ICON_SIZE} color={ICON_COLOR} />
            <Text style={styles.item}>{toTitleCase(text)}</Text>
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
};

interface MenuItems {
  jumpToDate: (date: Date) => void;
  jumpToTop: () => void;
  openSeasonModal: () => void;
  setShowDatePicker: React.Dispatch<React.SetStateAction<boolean>>;
}

const menuItems = ({
  jumpToDate,
  jumpToTop,
  openSeasonModal,
  setShowDatePicker,
}: MenuItems) => [
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
