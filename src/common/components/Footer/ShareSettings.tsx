import { CopyIcon } from "assets/icons";
import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";
import { colors } from "styles/colors";
import { OutlinedContainer } from "styles/containers";
import { fonts } from "styles/fonts";
import {
  SmallItalics,
  SmallItalicsWithLinkStyles,
  Text,
} from "styles/typography";

export const ShareSettings = () => (
  <OutlinedContainer style={{ marginTop: 50 }}>
    <Text bold>Praying in a group? Want to share your settings?</Text>
    <SmallItalics>
      Share this link to open this screen using your currently configured
      settings. This can also be used to share your settings between different
      computers, tablets, or phones.
    </SmallItalics>
    <StyledTextInput selectTextOnFocus>
      <Text>This will be a url with settings</Text>
    </StyledTextInput>
    <CopyLinkWrapper>
      <CopyIcon color={colors.linkBlue} />{" "}
      <SmallItalicsWithLinkStyles>Copy link</SmallItalicsWithLinkStyles>
    </CopyLinkWrapper>
  </OutlinedContainer>
);

const CopyLinkWrapper = styled(Text)`
  margin-top: 10px;
`;

const StyledTextInput = styled(TextInput)`
  border: 1px ${colors.fontGrey};
  border-radius: 3px;
  color: ${colors.fontGrey};
  font-family: ${fonts.primary.regular};
  padding: 0 6px;
`;
