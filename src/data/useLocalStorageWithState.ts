import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const getFromStorage = async (setting: string) => {
  try {
    const value = await AsyncStorage.getItem(setting);
    return value;
  } catch (e) {
    throw new Error("Failed to get current setting");
  }
};

const setToStorage = async (setting: string, value: string) => {
  try {
    await AsyncStorage.setItem(setting, value);
  } catch (e) {
    throw new Error("Failed to set value to storage");
  }
};

export const useLocalStorageWithState = (
  storageKey: string,
  defaultSetting: string
) => {
  const [currentSetting, setCurrentSetting] = useState(defaultSetting);

  // On initial render, set current setting to its stored value || defaultSetting
  useEffect(() => {
    (async () => {
      try {
        const value = (await getFromStorage(storageKey)) ?? defaultSetting;
        setCurrentSetting(value);
      } catch (e) {
        // TODO - Handle rejected promise, probably with a temporary message
        // letting the user know thier settings have failed to load.
        console.log(
          "Rejected getFromStorage promise in useLocalStorageWithState"
        );
      }
    })();
  }, []);

  // Update value in storage whenever currentSetting changes
  useEffect(() => {
    (async () => {
      try {
        await setToStorage(storageKey, currentSetting);
      } catch (e) {
        // TODO - Handle rejected promise
        console.log(
          "Rejected setToStorage promise in useLocalStorageWithState"
        );
      }
    })();
  }, [currentSetting]);

  return [currentSetting, setCurrentSetting] as const;
};
