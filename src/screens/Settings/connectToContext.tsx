import React, { useCallback, useContext } from "react";

import { SettingsContext } from "../../../SettingsContext";

type ConnectedComponent = React.FC<{
  storageKey: string;
}>;

type SettingsComponent = React.FC<{
  storageKey: string;
  value: string;
  updateSetting: (newValue: string) => void;
}>;

/**
 * Connects a setting component to the SettingsContext, extracting the setting's value
 * from the context. This keeps the setting component from rerendering each time any
 * part of the context value changes.
 */
export const connectToContext = (C: SettingsComponent): ConnectedComponent => {
  const SettingWithContext: ConnectedComponent = ({ storageKey, ...props }) => {
    const { settings, updateSettings } = useContext(SettingsContext);
    const value = settings[storageKey];
    const updateSetting = useCallback(
      (newValue: string) => updateSettings({ [storageKey]: newValue }),
      []
    );

    return (
      <C
        value={value}
        storageKey={storageKey}
        updateSetting={updateSetting}
        {...props}
      />
    );
  };
  return SettingWithContext;
};
