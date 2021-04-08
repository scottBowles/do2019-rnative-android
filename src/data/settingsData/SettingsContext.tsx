import { getFromStorage, setToStorage } from "data/localStorage";
import { advancedSettings, mainSettings } from "data/settingsData";
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

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

interface IInjectedSettingProps {
  value: string;
  updateSetting: (option: string) => void;
}

interface ISettingConsumerProps {
  settingStorageKey: string;
  children: (props: IInjectedSettingProps) => JSX.Element;
}

/**
 * Allows a consumer to consume and update a setting without every other
 * consumer rerendering. `value` and `updateSetting` are provided via the
 * render prop pattern, using the `children` prop. Components receiving these
 * props should be memoized with `React.memo` to avoid rerenders.
 */
const SettingConsumer: React.FC<ISettingConsumerProps> = ({
  settingStorageKey,
  children,
}) => {
  const { settings, updateSettings } = useContext(SettingsContext);
  const value = settings[settingStorageKey];
  const updateSetting = useCallback(
    (option) => updateSettings({ [settingStorageKey]: option }),
    []
  );
  return <>{children({ value, updateSetting })}</>;
};

export { SettingsContext, SettingsProvider, SettingConsumer };
