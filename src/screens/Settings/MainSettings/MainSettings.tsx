import { mainSettings } from "data/settingsData";
import { IMainSetting } from "data/settingsData/mainSettings";
import React from "react";
import { View } from "react-native";
import { MainSettingName } from "styles/typography";

import { connectToContext } from "../connectToContext";
import { MainOption } from "./MainOption";

/** Renders Main Settings, connected up to the Settings Context */
export const MainSettings: React.FC = () => (
  <>
    {mainSettings.map((mainSetting) => (
      <SettingWithContext key={mainSetting.storageKey} setting={mainSetting} />
    ))}
  </>
);

/**
 * Renders a single main setting. Needs to be connected to SettingsContext
 * to receive `value` for the selected option and an `updateSettings` function.
 * React.memo is necessary to avoid all settings rerendering when one is changed.
 */
const MainSetting: React.FC<{
  setting: IMainSetting;
  value: string;
  updateSettings: (updateObj: object) => void;
}> = React.memo(({ setting, value, updateSettings }) => {
  const selectOption = (optionTitle: string) =>
    updateSettings({ [setting.storageKey]: optionTitle });

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <MainSettingName>{setting.name}</MainSettingName>
      {setting.options.map((option) => (
        <MainOption
          key={option.title}
          option={option}
          selectOption={selectOption}
          selected={value === option.title}
        />
      ))}
    </View>
  );
});

/**
 * Connects a MainSetting to the SettingsContext, handing the MainSetting's current value
 * and the updateSettings function.
 */
const SettingWithContext = connectToContext(MainSetting);
