import { SettingsContext } from "data/settingsData/SettingsContext";
import { IMainSetting, mainSettings } from "data/settingsData/mainSettings";
import React, { memo, useContext } from "react";
import { View } from "react-native";
import { MainSettingName } from "styles/typography";

import { MainOption } from "./MainOption";

/**
 * Renders Main Settings, connected up to the Settings Context.
 * We receive the Settings Context here rather than in each Setting to
 * avoid every Setting rerendering on any individual setting change.
 */
export const MainSettings: React.FC = () => {
  const { settings, updateSettings } = useContext(SettingsContext);
  return (
    <>
      {mainSettings.map((setting) => (
        <MainSetting
          setting={setting}
          value={settings[setting.storageKey]}
          updateSettings={updateSettings}
          key={setting.storageKey}
        />
      ))}
    </>
  );
};

/**
 * Renders a single main setting. Needs to be connected to SettingsContext
 * to receive `value` for the selected option and an `updateSettings` function.
 * React.memo is necessary to avoid all settings rerendering when one is changed.
 */
const MainSetting: React.FC<{
  setting: IMainSetting;
  value: string;
  updateSettings: (updateObj: object) => void;
}> = memo(({ setting, value, updateSettings }) => {
  const updateSetting = (option: string) =>
    updateSettings({ [setting.storageKey]: option });

  return (
    <View style={{ width: "100%", alignItems: "center" }}>
      <MainSettingName>{setting.name}</MainSettingName>
      {setting.options.map((option) => (
        <MainOption
          key={option.title}
          option={option}
          updateSetting={updateSetting}
          selected={value === option.title}
        />
      ))}
    </View>
  );
});
