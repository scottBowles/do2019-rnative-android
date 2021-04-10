import { IMainSetting } from "data/settingsData";
import React from "react";
import { View } from "react-native";
import { MainSettingName } from "styles/typography";

import { MainOption } from "./MainOption";

export const MainSetting: React.FC<{
  setting: IMainSetting;
  value: string;
  updateSetting: (option: string) => void;
}> = ({ setting, value, updateSetting }) => (
  <View style={{ width: "100%", alignItems: "center" }}>
    <MainSettingName>{setting.title}</MainSettingName>
    {setting.options.map((option) => (
      <MainOption
        key={option.heading}
        option={option}
        updateSetting={updateSetting}
        selected={value === option.value}
      />
    ))}
  </View>
);
