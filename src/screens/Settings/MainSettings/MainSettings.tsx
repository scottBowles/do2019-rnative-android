import { SettingConsumer } from "data/settingsData/SettingsContext";
import { IMainSetting, mainSettings } from "data/settingsData/mainSettings";
import React, { memo } from "react";
import { View } from "react-native";
import { MainSettingName } from "styles/typography";

import { MainOption } from "./MainOption";

/** Renders Main Settings, connected up to the Settings Context */
export const MainSettings: React.FC = () => (
  <>
    {mainSettings.map((setting) => (
      <SettingConsumer
        settingStorageKey={setting.storageKey}
        key={setting.storageKey}
      >
        {({ value, updateSetting }) => (
          <MainSetting
            setting={setting}
            value={value}
            updateSetting={updateSetting}
          />
        )}
      </SettingConsumer>
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
  updateSetting: (newValue: string) => void;
}> = memo(({ setting, value, updateSetting }) => (
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
));
