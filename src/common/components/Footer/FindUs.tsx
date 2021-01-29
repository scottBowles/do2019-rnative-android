import { ExternalLinks } from "assets/ExternalLinks";
import React from "react";
import { View } from "react-native";
import { BodyLink, ParagraphTitle } from "styles/typography";

export const FindUs = () => (
  <View style={{ marginTop: 15 }}>
    <ParagraphTitle>Find us on the web</ParagraphTitle>
    <BodyLink link={ExternalLinks.DO2019}>
      https://www.dailyoffice2019.com/
    </BodyLink>
  </View>
);
