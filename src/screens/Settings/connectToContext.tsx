import { IAdvancedSetting } from "data/settingsData/advancedSettings";
import React, { useContext } from "react";

import { SettingsContext } from "../../../SettingsContext";

type ConnectedComponent = React.FC<{
  setting: IAdvancedSetting;
}>;

type SettingsComponent = React.FC<{
  setting: IAdvancedSetting;
  value: string;
  updateSettings: (updateObj: object) => void;
}>;

/**
 * Connects a setting component to the SettingsContext, extracting the setting's value
 * from the context. This keeps the setting component from rerendering each time any
 * part of the context value changes.
 */
export const connectToContext = (C: SettingsComponent): ConnectedComponent => {
  const SettingWithContext: ConnectedComponent = ({ setting, ...props }) => {
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
