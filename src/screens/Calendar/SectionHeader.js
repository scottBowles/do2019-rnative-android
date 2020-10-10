import React from "react";
import { StyleSheet, View } from "react-native";

import { ColorBox } from "common/components";
import { H3 } from "styles/typography";

// Season & month section headers

const SectionHeader = React.memo(({ type, month, year, season }) => {
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
    <View style={styles.sectionHeaderContainer}>
      {type === "both"
        ? [seasonHeader, monthHeader]
        : type === "month"
        ? monthHeader
        : seasonHeader}
    </View>
  );
});
const styles = StyleSheet.create({
  colorBox: {
    marginRight: 3,
  },
  sectionHeaderContainer: {
    alignItems: "center",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 6,
    marginTop: 14,
  },
});

export default SectionHeader;
