import React from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

import { ArrowLeft, ArrowRight } from "assets/icons";
import { H1, H2, Text } from "styles/typography";
import { OutlineBtn } from "common/components";

/**
 *
 *    ListHeader            Top material
 *    ListHeaderLink        Nav to prev & next years
 *
 */

const ListHeader = React.memo(({ startYear }) => (
  <View style={styles.listHeaderContainer}>
    <View>
      <H1>The Church Year</H1>
      <H2>
        {startYear} - {+startYear + 1}
      </H2>
    </View>
    <View style={styles.yearNavContainer}>
      <ListHeaderLink year={startYear - 1} direction={"past"} />
      <ListHeaderLink year={startYear + 1} direction={"future"} />
    </View>
  </View>
));

const ListHeaderLink = React.memo(({ direction, year, ...props }) => (
  <Link to={`/calendar/${year}`} {...props}>
    <OutlineBtn style={styles.outlineBtn}>
      <Text style={styles.outlineBtnText}>
        {year} - {year + 1}
      </Text>
      {direction === "past" ? (
        <ArrowLeft size={12} />
      ) : (
        <ArrowRight size={12} />
      )}
    </OutlineBtn>
  </Link>
));

const styles = StyleSheet.create({
  listHeaderContainer: {
    alignItems: "center",
    padding: 25,
  },
  outlineBtn: {
    margin: 5,
  },
  outlineBtnText: {
    fontSize: 12,
  },
  yearNavContainer: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
    width: "100%",
  },
});

export default ListHeader;