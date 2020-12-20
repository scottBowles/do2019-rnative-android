import { ExternalLinks } from "assets/ExternalLinks";
import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { OutlinedContainer } from "styles/containers";
import { SmallItalics, SmallItalicsLink } from "styles/typography";

export const AnglicanHousePublishers = () => (
  <OutlinedContainer>
    <Image
      style={styles.ahpLogo}
      source={require("assets/images/AHP-LOGO.png")}
    />
    <View style={styles.ahpText}>
      <SmallItalics>
        This site is generously supported by{" "}
        <SmallItalicsLink link={ExternalLinks.AnglicanHousePublishers}>
          AnglicanHousePublishers.org
        </SmallItalicsLink>
        , publisher of the 2019 Book of Common Prayer, the English Standard
        Version: Anglican Edition, and many other excellent books. Consider
        purchasing paper copy of the{" "}
        <SmallItalicsLink link={ExternalLinks.AnglicanHouseChurchPage}>
          Book of Common Prayer
        </SmallItalicsLink>{" "}
        or the{" "}
        <SmallItalicsLink link={ExternalLinks.AnglicanHouseESV}>
          ESV Anglican Edition
        </SmallItalicsLink>{" "}
        to complement this site.
      </SmallItalics>
    </View>
  </OutlinedContainer>
);

const styles = StyleSheet.create({
  ahpLogo: {
    width: 140,
    height: 70,
    margin: 10,
  },
  ahpText: {
    marginBottom: 14,
  },
});
