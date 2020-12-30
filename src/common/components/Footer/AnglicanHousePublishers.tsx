import { ExternalLinks } from "assets/ExternalLinks";
import { withLink } from "common/components/HOCs";
import React from "react";
import { Image, Pressable } from "react-native";
import styled from "styled-components/native";
import { OutlinedContainer } from "styles/containers";
import { SmallItalics, SmallItalicsLink, Text } from "styles/typography";

export const AnglicanHousePublishers = () => (
  <OutlinedContainer style={{ marginTop: 50 }}>
    <ImageLink link={ExternalLinks.AnglicanHousePublishers}>
      <SizedImage source={require("assets/images/AHP-LOGO.png")} />
    </ImageLink>
    <TextWrapper>
      <SmallItalics>This site is generously supported by </SmallItalics>
      <SmallItalicsLink link={ExternalLinks.AnglicanHousePublishers}>
        AnglicanHousePublishers.org
      </SmallItalicsLink>
      <SmallItalics>
        , publisher of the 2019 Book of Common Prayer, the English Standard
        Version: Anglican Edition, and many other excellent books. Consider
        purchasing paper copy of the{" "}
      </SmallItalics>
      <SmallItalicsLink link={ExternalLinks.AnglicanHouseChurchPage}>
        Book of Common Prayer
      </SmallItalicsLink>
      <SmallItalics> or the </SmallItalics>
      <SmallItalicsLink link={ExternalLinks.AnglicanHouseESV}>
        ESV Anglican Edition
      </SmallItalicsLink>
      <SmallItalics> to complement this site.</SmallItalics>
    </TextWrapper>
  </OutlinedContainer>
);

const SizedImage = styled(Image)`
  width: 140px;
  height: 70px;
  margin: 10px;
`;

const ImageLink = withLink(Pressable);

const TextWrapper = styled(Text)`
  margin-bottom: 14px;
`;
