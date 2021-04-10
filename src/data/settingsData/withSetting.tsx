import {
  IAdvancedSetting,
  advanceds,
} from "data/settingsData/advancedSettings";
import {
  IMainSetting,
  settings as mains,
} from "data/settingsData/mainSettings";
import React, { memo, useCallback, useContext } from "react";

import { SettingsContext } from "./SettingsContext";
import { findSetting } from "./utils";

type TSetting = IMainSetting | IAdvancedSetting;

interface ISettingProps<T extends TSetting> {
  value: string;
  setting: T;
  updateSetting: (option: string) => void;
}

/**
 * HOC providing access to an isolated setting in the SettingsContext. Allows for
 * access and setting update without rerendering C when other settings change.
 * @param C - Component to render with setting data
 * @param settingKey - storageKey for the setting to access
 * @returns - An instance of a memoized C with `value`, `setting`, and `updateSetting` props
 */
export const withSetting = <T extends TSetting>(
  C: React.ComponentType<ISettingProps<T>>,
  settingName: string
) => {
  const MemoizedC = memo(C);
  return (props: unknown) => {
    const { settings, updateSettings } = useContext(SettingsContext);
    const value: string = settings[settingName];
    const setting: T = findSetting(settingName) as T;
    const updateSetting = useCallback(
      (option) => updateSettings({ [settingName]: option }),
      []
    );
    return (
      <MemoizedC
        value={value}
        setting={setting}
        updateSetting={updateSetting}
        {...props}
      />
    );
  };
};
