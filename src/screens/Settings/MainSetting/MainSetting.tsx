import { IMainSetting } from "data/settingsData/mainSettings";
import { useLocalStorageWithState } from "data/useLocalStorageWithState";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { fonts } from "styles/fonts";
import { Text } from "styles/typography";

import { MainOption } from "./MainOption";

export const MainSetting: React.FC<IMainSetting> = ({ setting }) => {
  const [currentSetting, setCurrentSetting] = useLocalStorageWithState(
    setting.storageKey,
    setting.default
  );
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <SettingName>{setting.name}</SettingName>
      {setting.options.map((option) => (
        <MainOption
          key={option.title}
          option={option}
          setCurrentSetting={setCurrentSetting}
          selected={currentSetting === option.title}
        />
      ))}
    </View>
  );
};

const SettingName = styled(Text)`
  text-transform: uppercase;
  font-family: ${fonts.primary.semibold};
  letter-spacing: 1.6px;
  font-size: 24px;
  margin: 32px 32px 8px;
  text-align: center;
`;
