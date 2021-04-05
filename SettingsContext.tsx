import { getFromStorage, setToStorage } from "data/localStorage";
import { advancedSettings, mainSettings } from "data/settingsData";
import React, { createContext, useEffect, useState } from "react";

interface ISettingsContext {
  themeLoading: boolean;
  settings: {
    value: object;
    update: (updateObj: object) => void;
  };
}

const allSettings = [...advancedSettings, ...mainSettings];

const defaultSettings = allSettings.reduce((acc, current) => {
  return { ...acc, [current.storageKey]: current.default };
}, {});

const SettingsContext = createContext({} as ISettingsContext);

const SettingsProvider: React.FC = ({ children }) => {
  const [settings, setSettings] = useState({
    value: defaultSettings,
    update: (updateObj: object) => {
      setSettings((prevSettings) => ({
        ...prevSettings,
        value: { ...prevSettings.value, ...updateObj },
      }));
    },
  });

  const [themeLoading, setThemeLoading] = useState(false);

  const getCurrentSettings = async () => {
    try {
      setThemeLoading(true);
      const localSettings = await getFromStorage("settings");
      const currentSettings = { ...defaultSettings, ...localSettings };
      settings.update(currentSettings);
      setThemeLoading(false);
      await setToStorage("settings", currentSettings);
    } catch (error) {
      console.log("local storage error", error);
    }
  };

  useEffect(() => {
    getCurrentSettings();
  }, []);

  useEffect(() => {
    setToStorage("settings", settings.value);
  }, [settings]);

  return (
    <SettingsContext.Provider value={{ themeLoading, settings }}>
      {children}
    </SettingsContext.Provider>
  );
};

export { SettingsProvider, SettingsContext };
