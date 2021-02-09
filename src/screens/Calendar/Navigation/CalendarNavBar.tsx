import DateTimePicker from "@react-native-community/datetimepicker";
import {
  CalendarDayIcon,
  CalendarIcon,
  ChurchIcon,
  ToTopIcon,
} from "assets/icons";
import { toTitleCase } from "common/utils";
import React, { useContext, useState } from "react";
import { Platform, StyleSheet, TouchableHighlight, View } from "react-native";
import { ThemeContext } from "styled-components";
import styled from "styled-components/native";
import { Text } from "styles/typography";

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
  const theme = useContext(ThemeContext);
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

  const navItems = menuItems({
    jumpToDate,
    jumpToTop,
    openSeasonModal,
    setShowDatePicker,
  });

  return (
    <Container>
      <SeasonModal
        seasonModalVisible={seasonModalVisible}
        closeSeasonModal={() => setSeasonModalVisible(false)}
        jumpToSeason={jumpToSeason}
      />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="date"
          is24Hour
          display="default"
          onChange={onDateChange}
        />
      )}
      {navItems.map(({ Icon, text, onPress }, index) => (
        <StyledTouchableHighlight onPress={onPress} key={index}>
          <BtnContent>
            <Icon size={ICON_SIZE} color={theme.colors.text} />
            <BtnText>{toTitleCase(text)}</BtnText>
          </BtnContent>
        </StyledTouchableHighlight>
      ))}
    </Container>
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

const Container = styled(View)`
  border-color: ${({ theme }) => theme.colors.black};
  border-top-width: 1px;
  flex-direction: row;
  justify-content: space-around;
  height: 100px;
`;

const StyledTouchableHighlight = styled(TouchableHighlight)`
  flex: 1;
`;

const BtnContent = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
`;

const BtnText = styled(Text)`
  font-size: 17px;
  text-align: center;
`;
