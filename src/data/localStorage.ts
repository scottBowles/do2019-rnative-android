import AsyncStorage from "@react-native-async-storage/async-storage";

export const getFromStorage = async (setting: string) => {
  try {
    const value = await AsyncStorage.getItem(setting);
    return value && JSON.parse(value);
  } catch (e) {
    throw new Error("Failed to get current setting");
  }
};

export const setToStorage = async (setting: string, value: any) => {
  try {
    await AsyncStorage.setItem(setting, JSON.stringify(value));
  } catch (e) {
    throw new Error("Failed to set value to storage");
  }
};
