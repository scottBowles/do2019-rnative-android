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
import { StyleSheet, View } from "react-native";
import { OfficeLinks } from "./OfficeLinks";
import { CalendarDay } from "data/calendarData/models";
import { ContentLine } from "./ContentLine";

interface Props {
  day: CalendarDay;
}

export const Content: React.FC<Props> = ({
  day: { commemorations, date, season },
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
      {season && <SeasonBox season={season} />}
      {date && <OfficeLinks date={date} />}
    </View>
  );
};

interface SeasonBoxProps {
  season: { name: string; colors: string[] };
}

const SeasonBox: React.FC<SeasonBoxProps> = ({ season }) => (
  <View style={styles.seasonBlock}>
    <ContentLine type="season" data={season} />
  </View>
);

const styles = StyleSheet.create({
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
