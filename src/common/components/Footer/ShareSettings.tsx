import { CopyIcon } from "assets/icons";
import { SettingsContext } from "data/settingsData";
import { getSettingsUrl } from "data/settingsData/utils";
import React, { useContext } from "react";
import { TextInput } from "react-native";
import { ThemeContext } from "styled-components";
import styled from "styled-components/native";
import { OutlinedContainer } from "styles/containers";
import {
  SmallItalics,
  SmallItalicsWithLinkStyles,
  Text,
} from "styles/typography";

export const ShareSettings = () => {
  const theme = useContext(ThemeContext);
  const { settings } = useContext(SettingsContext);

  const settingsUrl = getSettingsUrl(settings);

  return (
    <OutlinedContainer style={{ marginTop: 50 }}>
      <Text bold>Praying in a group? Want to share your settings?</Text>
      <SmallItalics>
        Share this link to open this screen using your currently configured
        settings. This can also be used to share your settings between different
        computers, tablets, or phones.
      </SmallItalics>
      <StyledTextInput selectTextOnFocus>
        <InputText>{settingsUrl}</InputText>
      </StyledTextInput>
      <CopyLinkWrapper>
        <CopyIcon color={theme.colors.linkBlue} />{" "}
        <SmallItalicsWithLinkStyles>Copy link</SmallItalicsWithLinkStyles>
      </CopyLinkWrapper>
    </OutlinedContainer>
  );
};

const CopyLinkWrapper = styled(Text)`
  margin-top: 10px;
`;

const InputText = styled(Text)`
  color: ${({ theme }) => theme.colors.fontGrey};
`;

const StyledTextInput = styled(TextInput)`
  border: 1px ${({ theme }) => theme.colors.text};
  border-radius: 3px;
  color: black;
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  padding: 0 6px;
  background-color: ${({ theme }) => theme.colors.white};
`;
