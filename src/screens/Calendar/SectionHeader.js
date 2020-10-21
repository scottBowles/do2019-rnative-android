import React from "react";
import { StyleSheet, View } from "react-native";

import { ColorBox } from "common/components";
import { H3 } from "styles/typography";

// Season & month section headers

export const SectionHeader = React.memo(
  ({ sectionType, month, year, season, ...props }) => {
    const seasonHeader = (
      <View style={styles.sectionHeader} key={season + month + year}>
        <ColorBox
          color={season.colors[0]}
          dimension={9}
          style={styles.colorBox}
        />
        <H3>{season.name}</H3>
      </View>
    );

    const monthHeader = (
      <H3 style={styles.sectionHeader} key={month + year + season}>
        {month} {year}
      </H3>
    );

    return (
      <View style={styles.sectionHeaderContainer} {...props}>
        {sectionType === "both"
          ? [seasonHeader, monthHeader]
          : sectionType === "month"
          ? monthHeader
          : seasonHeader}
      </View>
    );
  }
);
const styles = StyleSheet.create({
  colorBox: {
    marginRight: 3,
  },
  sectionHeaderContainer: {
    alignItems: "center",
    flex: 1,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    marginTop: 14,
  },
});
