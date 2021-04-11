import { advancedSettings } from "./advancedSettings";
import { mainSettings } from "./mainSettings";

export const allSettings = [...mainSettings, ...advancedSettings];

export const findSetting = (name: string) =>
  allSettings.find((setting) => setting.name === name);

const SETTINGS_BASE_URL = `https://www.dailyoffice2019.com/settings/`;

export const getSettingsUrl = (settings: object) => {
  let url = SETTINGS_BASE_URL + "?";

  for (const setting of allSettings) {
    const value = settings[setting.name];
    if (value) url += `setting_${setting.name}=${value}&`;
  }
  return url;
};

export const parseLink = (link: string) => {
  const queryString = link.split("?")[1];

  const settingsUpdateObj = queryString
    .split("&")
    // remove the `setting_` portion of each string
    .map((string) => string.substring(8))
    // split keys and values
    .map((text) => text.split("="))
    // turn it into an object
    .reduce((acc, cur) => {
      const [key, value] = cur;
      acc[key] = value;
      return acc;
    }, {});

  return settingsUpdateObj;
};
