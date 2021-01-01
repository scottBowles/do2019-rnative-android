import React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { fonts } from "styles/fonts";
import { Text } from "styles/typography";

import { IOption, MainOption } from "./MainOption";

interface IMainSetting {
  name: string;
  options: IOption[];
}

export const MainSetting: React.FC<{ setting: IMainSetting }> = ({
  setting,
}) => (
  <View style={{ width: "100%", alignItems: "center" }}>
    <SettingName>{setting.name}</SettingName>
    {setting.options.map((option) => (
      <MainOption key={option.title} option={option} />
    ))}
  </View>
);

const SettingName = styled(Text)`
  text-transform: uppercase;
  font-family: ${fonts.primary.semibold};
  letter-spacing: 1.6px;
  font-size: 24px;
  margin: 32px 32px 8px;
  text-align: center;
`;
