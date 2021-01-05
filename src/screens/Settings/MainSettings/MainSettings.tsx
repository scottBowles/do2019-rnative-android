import { mainSettings } from "data/settingsData";
import { IMainSetting } from "data/settingsData/mainSettings";
import { useLocalStorageWithState } from "data/useLocalStorageWithState";
import React from "react";
import { View } from "react-native";
import { MainSettingName } from "styles/typography";

import { MainOption } from "./MainOption";

export const MainSettings: React.FC = () => (
  <>
    {mainSettings.map((mainSetting) => (
      <MainSetting key={mainSetting.storageKey} setting={mainSetting} />
    ))}
  </>
);

export const MainSetting: React.FC<{ setting: IMainSetting }> = ({
  setting,
}) => {
  const [currentSetting, setCurrentSetting] = useLocalStorageWithState(
    setting.storageKey,
    setting.default
  );
  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <MainSettingName>{setting.name}</MainSettingName>
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
