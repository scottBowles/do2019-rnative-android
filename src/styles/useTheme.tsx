import { useLocalStorageWithState } from "data/useLocalStorageWithState";
import { useEffect, useState } from "react";

import { darkTheme, lightTheme } from "./theme";

export const useTheme = () => {
  const DEFAULT_MODE = "light";
  const [mode, setMode, isLoaded] = useLocalStorageWithState(
    "mode",
    DEFAULT_MODE
  );
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    const newTheme = mode === "light" ? lightTheme : darkTheme;
    setCurrentTheme(newTheme);
  }, [mode]);

  return { currentTheme, themeLoaded: isLoaded, setMode };
};
