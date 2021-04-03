import { getFromStorage, setToStorage } from "data/localStorage";
import { advancedSettings, mainSettings } from "data/settingsData";
import React, { createContext, useEffect, useState } from "react";

interface ISettingsContext {
  themeLoading: boolean;
  settings: object;
  updateSettings: (updateObj: object) => void;
}

const allSettings = [...advancedSettings, ...mainSettings];

const defaultSettings = allSettings.reduce((acc, current) => {
  return { ...acc, [current.storageKey]: current.default };
}, {});

const SettingsContext = createContext({} as ISettingsContext);

const SettingsProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = useState(defaultSettings);
  const [themeLoading, setThemeLoading] = useState(false);

  const getCurrentSettings = async () => {
    setThemeLoading(true);
    const localSettings = await getFromStorage("settings");
    const currentSettings = { ...defaultSettings, ...localSettings };
    setSettings(currentSettings);
    setThemeLoading(false);
    await setToStorage("settings", currentSettings);
  };

  const updateSettings = (updateObj: object) => {
    console.log(`updated called with `, updateObj);
    setSettings((prevSettings) => ({ ...prevSettings, ...updateObj }));
  };

  useEffect(() => {
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

export { SettingsProvider, SettingsContext };
