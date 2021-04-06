import { IAdvancedSetting } from "data/settingsData/advancedSettings";
import { IMainSetting } from "data/settingsData/mainSettings";
import React, { useContext } from "react";

import { SettingsContext } from "../../../SettingsContext";

type ConnectedComponent<T> = React.FC<{
  setting: T;
}>;

type SettingsComponent<T> = React.FC<{
  setting: T;
  value: string;
  updateSettings: (updateObj: object) => void;
}>;

/**
 * Connects a setting component to the SettingsContext, extracting the setting's value
 * from the context. This keeps the setting component from rerendering each time any
 * part of the context value changes.
 */
export const connectToContext = <T extends IAdvancedSetting | IMainSetting>(
  C: SettingsComponent<T>
): ConnectedComponent<T> => {
  const SettingWithContext: ConnectedComponent<T> = ({ setting, ...props }) => {
    const { settings, updateSettings } = useContext(SettingsContext);
    const { storageKey } = setting;
    const value = settings[storageKey];
    return (
      <C
        setting={setting}
        value={value}
        updateSettings={updateSettings}
        {...props}
      />
    );
  };
  return SettingWithContext;
};
