import { advancedSettings } from "./advancedSettings";
import { mainSettings } from "./mainSettings";

export const allSettings = [...mainSettings, ...advancedSettings];

export const findSetting = (storageKey: string) =>
  allSettings.find((setting) => setting.storageKey === storageKey);
