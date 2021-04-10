import { getFromStorage, setToStorage } from "data/localStorage";
import { advancedSettings } from "data/settingsData/advancedSettings";
import { mainSettings } from "data/settingsData/mainSettings";
import React, { createContext, useCallback, useEffect, useState } from "react";

import { defaultSettings } from "./defaultSettings";
interface ISettingsContext {
  themeLoading: boolean;
  settings: object;
  updateSettings: (updateObj: object) => void;
}

const allSettings = [...advancedSettings, ...mainSettings];

// const defaultSettings = allSettings.reduce((acc, current) => {
//   return { ...acc, [current.storageKey]: current.default };
// }, {});

const SettingsContext = createContext({} as ISettingsContext);

const SettingsProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings);
  const [themeLoading, setThemeLoading] = useState(false);

  /**
   * useCallback allows consumers to not all update with every change, as otherwise
   * a new instance of updateSettings would be created. The other option would be to
   * put updateSettings into state, but this is cleaner.
   */
  const updateSettings = useCallback((updateObj: object) => {
    setSettings((prevSettings) => ({ ...prevSettings, ...updateObj }));
  }, []);

  useEffect(() => {
    const getCurrentSettings = async () => {
      try {
        setThemeLoading(true);
        const localSettings = await getFromStorage("settings");
        updateSettings(localSettings);
        setThemeLoading(false);
      } catch (error) {
        console.log("local storage error", error);
      }
    };
    getCurrentSettings();
  }, []);

  useEffect(() => {
    setToStorage("settings", settings);
  }, [settings]);

  return (
    <SettingsContext.Provider
      value={{ themeLoading, settings, updateSettings }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsContext, SettingsProvider };
