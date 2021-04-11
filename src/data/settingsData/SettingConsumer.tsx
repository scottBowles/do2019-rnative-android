import React, { useCallback, useContext } from "react";

import { SettingsContext } from "./SettingsContext";
import { IAdvancedSetting } from "./advancedSettings";
import { IMainSetting } from "./mainSettings";
import { findSetting } from "./utils";

type TSetting = IMainSetting | IAdvancedSetting;

export interface IInjectedSettingProps {
  setting?: TSetting;
  value?: string;
  updateSetting: (option: string) => void;
}

interface ISettingConsumerProps {
  settingName: string;
  children: (props: IInjectedSettingProps) => JSX.Element;
}

/**
 * Allows a consumer to consume and update a setting without every other consumer rerendering.
 * `setting`, `value`, and `updateSetting` are provided via the render prop pattern,
 * using the `children` prop. Components receiving these props should be memoized with
 * `React.memo` to avoid rerenders.
 */
export const SettingConsumer = ({
  settingName,
  children,
}: ISettingConsumerProps) => {
  const { settings, updateSettings } = useContext(SettingsContext);

  const value = settings[settingName];
  const setting: TSetting | undefined = findSetting(settingName);
  const updateSetting = useCallback(
    (option) => updateSettings({ [settingName]: option }),
    []
  );

  return <>{children({ setting, value, updateSetting })}</>;
};
