import { advancedSettings } from "./advancedSettings";
import { mainSettings } from "./mainSettings";

export const allSettings = [...mainSettings, ...advancedSettings];

export const findSetting = (name: string) =>
  allSettings.find((setting) => setting.name === name);
