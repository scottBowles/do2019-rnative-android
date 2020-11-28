/**
 *
 * IN THIS FILE
 *
 * COMPONENTS
 *   Content (export)
 *   SeasonBox
 *
 * Styles
 *
 */

import React from "react";
import { StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import { ContentLine } from "./ContentLine";
import { OfficeLinks } from "./OfficeLinks";
import { CalendarDay } from "data/calendarData/models";
import { Season } from "data/calendarData/interfaces";

interface Props {
  day: CalendarDay;
  showSeason?: boolean;
  showOfficeLinks?: boolean;
}

export const Content: React.FC<Props> = ({
  day: { commemorations, localDate, season },
  showSeason = false,
  showOfficeLinks = false,
}) => {
  // if season => SeasonBox will be rendered
  // if date => OfficeLinks will be rendered
  return (
    <View style={styles.container}>
      <View style={styles.commemorationContainer}>
        {commemorations.map((commemoration, index) => (
          <ContentLine
            key={index}
            type={index === 0 ? "primary" : "secondary"}
            data={commemoration}
          />
        ))}
      </View>
      {showSeason && <SeasonBox season={season} />}
      {showOfficeLinks && <OfficeLinks date={localDate} />}
    </View>
  );
};

interface SeasonBoxProps {
  season: Season;
}

const SeasonBox: React.FC<SeasonBoxProps> = ({ season }) => (
  <View style={styles.seasonBlock}>
    <ContentLine type="season" data={season} />
  </View>
);

interface Styles {
  container: StyleProp<ViewStyle>;
  commemorationContainer: StyleProp<ViewStyle>;
  seasonBlock: StyleProp<ViewStyle>;
}

const styles: Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
  },
  commemorationContainer: {
    paddingTop: 4,
    paddingBottom: 8,
  },
  seasonBlock: {
    backgroundColor: "#ffffff",
    borderColor: "black",
    borderWidth: 1,
    alignSelf: "flex-end",
    justifyContent: "flex-start",
    paddingHorizontal: 4,
    paddingTop: 4,
    paddingBottom: 5,
    marginTop: 12,
    marginBottom: 8,
  },
});
