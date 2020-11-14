/**
 *
 *    ListHeader            Top material
 *    ListHeaderLink        Nav to prev & next years
 *
 *    NOTE: Any changes to component height will need to be reflected in
 *    LayoutProvider for proper rendering.
 *
 */

import React from "react";
import { StyleSheet, View } from "react-native";
import { Link } from "react-router-native";

import { ArrowLeft, ArrowRight } from "assets/icons";
import { H1, H2, Text } from "styles/typography";
import { OutlineBtn } from "common/components";

interface ListHeaderProps {
  startYear: number;
}

export const ListHeader: React.FC<ListHeaderProps> = React.memo(
  ({ startYear, ...props }) => (
    <View style={styles.listHeaderContainer} {...props}>
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
  )
);

interface ListHeaderLinkProps {
  direction: "past" | "future";
  year: number;
}

const ListHeaderLink: React.FC<ListHeaderLinkProps> = React.memo(
  ({ direction, year, ...props }) => (
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
  )
);

const styles = StyleSheet.create({
  listHeaderContainer: {
    alignItems: "center",
    padding: 25,
    flex: 1,
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
