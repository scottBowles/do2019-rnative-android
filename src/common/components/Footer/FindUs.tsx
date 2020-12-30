import { ExternalLinks } from "assets/ExternalLinks";
import React from "react";
import { View } from "react-native";
import { H3, PLink } from "styles/typography";

export const FindUs = () => (
  <View style={{ marginTop: 15 }}>
    <H3>Find us on the web</H3>
    <PLink link={ExternalLinks.DO2019}>https://www.dailyoffice2019.com/</PLink>
  </View>
);
