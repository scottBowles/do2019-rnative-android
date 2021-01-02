import { useLocalStorageWithState } from "data/useLocalStorageWithState";
import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { fonts } from "styles/fonts";
import { Text } from "styles/typography";

import { IOption, MainOption } from "./MainOption";

interface IMainSetting {
  setting: {
    name: string;
    storageKey: string;
    options: IOption[];
  };
}

export const MainSetting: React.FC<IMainSetting> = ({ setting }) => {
  const [currentSetting, setCurrentSetting] = useLocalStorageWithState(
    setting.storageKey,
    0
  );
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <SettingName>{setting.name}</SettingName>
      {setting.options.map((option, index) => (
        <MainOption
          key={option.title}
          option={option}
          index={index}
          handlePress={setCurrentSetting}
          selected={currentSetting === index}
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
