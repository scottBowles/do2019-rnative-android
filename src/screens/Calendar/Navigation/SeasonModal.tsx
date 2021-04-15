import { CloseIcon } from "assets/icons";
import { ContentLine } from "common/components/calendarBlock/ContentLine";
import React, { useContext } from "react";
import { Modal, TouchableHighlight, View } from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import { SectionTitle } from "styles/typography";

interface Props {
  seasonModalVisible: boolean;
  closeSeasonModal: () => void;
  jumpToSeason: (date: string) => void;
}

export const SeasonModal: React.FC<Props> = ({
  seasonModalVisible,
  closeSeasonModal,
  jumpToSeason,
  ...props
}) => {
  const theme = useContext(ThemeContext);

  const seasons = [
    { season: "Advent", color: theme.colors.purple },
    { season: "Christmastide", color: theme.colors.white },
    { season: "Epiphanytide", color: theme.colors.green },
    { season: "Lent", color: theme.colors.purple },
    { season: "Holy Week", color: theme.colors.purple },
    { season: "Eastertide", color: theme.colors.white },
    { season: "Season After Pentecost", color: theme.colors.green },
  ];

  return (
    <Modal
      transparent
      animationType="fade"
      onRequestClose={closeSeasonModal}
      visible={seasonModalVisible}
      {...props}
    >
      <Container>
        <StyledCloseIcon onPress={closeSeasonModal} />
        <SectionTitle mb={10}>Seasons</SectionTitle>
        {seasons.map(({ season, color }) => (
          <SeasonButton
            key={season}
            onPress={() => {
              jumpToSeason(season);
              closeSeasonModal();
            }}
          >
            <ContentLine data={{ name: season, colors: [color] }} />
          </SeasonButton>
        ))}
      </Container>
    </Modal>
  );
};

const Container = styled(View)`
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  justify-content: center;
  align-items: center;
  flex: 1;
  width: 100%;
  padding: 10%;
  margin-bottom: 100px;
`;

const StyledCloseIcon = styled(CloseIcon)`
  align-self: flex-end;
  margin: 10px;
  color: ${({ theme }) => theme.colors.text};
`;

const SeasonButton = styled(TouchableHighlight)`
  border-color: ${({ theme }) => theme.colors.backgroundSecondary};
  border-width: 1px;
  border-radius: 15px;
  width: 250px;
  margin-bottom: 13px;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
`;
