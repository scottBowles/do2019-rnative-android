import { advancedSettings } from "./advancedSettings";
import { mainSettings } from "./mainSettings";

export const allSettings = [...mainSettings, ...advancedSettings];

export const findSetting = (name: string) =>
  allSettings.find((setting) => setting.name === name);

const SETTINGS_BASE_URL = `https://www.dailyoffice2019.com/settings/`;

export const getSettingsUrl = (settings: object) => {
  let url = SETTINGS_BASE_URL + "?";
  // console.log({ settings });
  for (const setting of allSettings) {
    const value = settings[setting.name];
    console.log({ value });
    if (value) url += `setting_${setting.name}=${value}&`;
  }
  return url;
};
