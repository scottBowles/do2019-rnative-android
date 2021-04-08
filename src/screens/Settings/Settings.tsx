import { Footer } from "common/components";
import React from "react";
import { ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { Body, Rubric, SectionTitle } from "styles/typography";

import { AdvancedSettings } from "./AdvancedSettings";
import { MainSettings } from "./MainSettings";

export const Settings = () => {
  return (
    <ScrollView>
      <Container>
        <TopMaterial />
        <MainSettings />
        <AdvancedSettings />
        <Footer />
      </Container>
    </ScrollView>
  );
};

const TopMaterial = () => (
  <>
    <SectionTitle>Daily Office Settings</SectionTitle>
    <Body>
      Your settings will be saved the next time you pray on the same
      computer/phone/device and browser.
    </Body>
    <Rubric>
      Setting changes take effect immediately. You do not need to save settings
      after you have updated them.
    </Rubric>
  </>
);

const Container = styled(View)`
  align-items: center;
  padding: ${({ theme }) => theme.spacing.outerPadding}px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;
