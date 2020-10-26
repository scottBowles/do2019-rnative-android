import React from "react";
import { View } from "react-native";

import { ContentLine } from "common/components/calendarBlock/Content";
import { colors } from "styles";

// Figure out what to do with ContentLine (probably separate into own file)
// Style SeasonModal - probably not here, but elsewhere, maybe in own styled
// component for modals
// Need to make this a modal, add an 'x' to close, make its display contingent on
// state in Calendar, or in new Navigation component to hold state, etc.
// Need to add actions here so clicking on one closes the modal and jumps to the
// chosen season

export const SeasonModal = ({ ...props }) => {
  const seasons = [
    { season: "Advent", color: colors.purple },
    { season: "Christmastide", color: colors.white },
    { season: "Epiphanytide", color: colors.green },
    { season: "Lent", color: colors.purple },
    { season: "Holy Week", color: colors.purple },
    { season: "Eastertide", color: colors.white },
    { season: "Season after Pentecost", color: colors.green },
  ];

  return (
    <View {...props}>
      {seasons.map(({ season, color }) => (
        <View key={season}>
          <ContentLine data={{ name: season, colors: [color] }} />
        </View>
      ))}
    </View>
  );
};
