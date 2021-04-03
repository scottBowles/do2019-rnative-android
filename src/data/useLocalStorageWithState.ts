import { useEffect, useState } from "react";

import { getFromStorage, setToStorage } from "./localStorage";

export const useLocalStorageWithState = (
  storageKey: string,
  defaultSetting: string
) => {
  const [currentSetting, setCurrentSetting] = useState(defaultSetting);
  const [isLoaded, setIsLoaded] = useState(false);

  // On initial render, set current setting to its stored value || defaultSetting
  useEffect(() => {
    (async () => {
      try {
        const value = (await getFromStorage(storageKey)) ?? defaultSetting;
        setCurrentSetting(value);
        setIsLoaded(true);
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

  return [currentSetting, setCurrentSetting, isLoaded] as const;
};
