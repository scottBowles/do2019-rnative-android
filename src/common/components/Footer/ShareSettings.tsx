import { CopyIcon } from "assets/icons";
import { SettingsContext } from "data/settingsData";
import { getSettingsUrl, parseLink } from "data/settingsData/utils";
import Clipboard from "expo-clipboard";
import React, { useContext, useState } from "react";
import { TextInput, TouchableNativeFeedback, View } from "react-native";
import styled, { ThemeContext } from "styled-components/native";
import { OutlinedContainer } from "styles/containers";
import {
  SmallItalics,
  SmallItalicsWithLinkStyles,
  Text,
} from "styles/typography";

export const ShareSettings = () => {
  const [incomingLink, setIncomingLink] = useState("");
  const [recentlySaved, setRecentlySaved] = useState(false);
  const [recentlySynced, setRecentlySynced] = useState(false);

  const theme = useContext(ThemeContext);
  const { settings, updateSettings } = useContext(SettingsContext);

  const settingsUrl = getSettingsUrl(settings);

  const copyLink = () => {
    Clipboard.setString(settingsUrl);
    setRecentlySaved(true);
    setTimeout(() => {
      setRecentlySaved(false);
    }, 2000);
  };

  const handleChange = (text: string) => setIncomingLink(text);

  const handleSubmit = () => {
    const updates = parseLink(incomingLink);
    updateSettings(updates);
    setRecentlySynced(true);
    setTimeout(() => {
      setRecentlySynced(false);
    }, 2000);
  };

  return (
    <OutlinedContainer style={{ marginTop: 50 }}>
      <Text bold>Praying in a group? Want to share your settings?</Text>
      <SmallItalics>
        Use this link to share your currently configured settings. This can also
        be used to share your settings between different computers, tablets, or
        phones. Enter it into the address bar of a browser, or submit it in the
        input below to sync the app.
      </SmallItalics>

      <StyledTextInput selectTextOnFocus value={settingsUrl} />

      <CopyLinkWrapper onPress={copyLink}>
        {recentlySaved ? (
          <SmallItalics>Copied!</SmallItalics>
        ) : (
          <>
            <CopyIcon color={theme.colors.linkBlue} />{" "}
            <SmallItalicsWithLinkStyles>Copy link</SmallItalicsWithLinkStyles>
          </>
        )}
      </CopyLinkWrapper>
      <SmallItalics>
        Have a link from elsewhere? Submit it here to sync your settings.
      </SmallItalics>
      <StyledTextInput
        onChangeText={handleChange}
        placeholder="Paste here to sync"
        value={incomingLink}
      />
      <TouchableNativeFeedback onPress={handleSubmit}>
        <StyledButton>
          <ButtonText>
            {recentlySynced ? "Synced!" : "Sync Settings"}
          </ButtonText>
        </StyledButton>
      </TouchableNativeFeedback>
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
  margin-top: 6px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const StyledButton = styled(View)`
  margin-top: 6px;
  padding-top: 2px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.btnBlue};
  border-radius: 2px;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
`;
