import React from "react";
import { Modal, StyleSheet, TouchableHighlight, View } from "react-native";

import { CloseIcon } from "assets/icons";
import { ContentLine } from "common/components/calendarBlock/Content";
import { colors } from "styles";
import { H1 } from "styles/typography";

// Figure out what to do with ContentLine (probably separate into own file)
// Style SeasonModal - probably not here, but elsewhere, maybe in own styled
// component for modals
// Need to add actions here so clicking on one closes the modal and jumps to the
// chosen season

export const SeasonModal = ({
  seasonModalVisible,
  closeSeasonModal,
  jumpToSeason,
  ...props
}) => {
  const seasons = [
    { season: "Advent", color: colors.purple },
    { season: "Christmastide", color: colors.white },
    { season: "Epiphanytide", color: colors.green },
    { season: "Lent", color: colors.purple },
    { season: "Holy Week", color: colors.purple },
    { season: "Eastertide", color: colors.white },
    { season: "Season After Pentecost", color: colors.green },
  ];

  return (
    <Modal
      transparent={true}
      animationType="fade"
      onRequestClose={closeSeasonModal}
      visible={seasonModalVisible}
      {...props}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <CloseIcon style={styles.closeIcon} onPress={closeSeasonModal} />
          <H1 style={styles.title}>Seasons</H1>
          {seasons.map(({ season, color }) => (
            <TouchableHighlight
              key={season}
              style={styles.seasonContainer}
              onPress={() => {
                jumpToSeason(season);
                closeSeasonModal();
              }}
            >
              <ContentLine data={{ name: season, colors: [color] }} />
            </TouchableHighlight>
          ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignItems: "center",
    flex: 1,
    marginBottom: 100,
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    flex: 1,
    padding: "10%",
  },
  closeIcon: {
    alignSelf: "flex-end",
    margin: 10,
  },
  title: {
    marginBottom: 10,
  },
  seasonContainer: {
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 15,
    width: 250,
    marginBottom: 13,
    paddingHorizontal: 10,
    alignItems: "center",
  },
});
