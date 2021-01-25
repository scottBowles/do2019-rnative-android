import React from "react";
import { Image, TextInput, View } from "react-native";
import styled from "styled-components/native";
import { OutlinedContainer } from "styles/containers";
import { SmallItalics, Text } from "styles/typography";

import { OutlineBtn } from "../OutlineBtn";

export const EmailSignUp = () => (
  <OutlinedContainer style={{ marginTop: 50 }}>
    <Text bold>Get occasional email updates</Text>
    <SmallItalics>
      Receive a very occasional email when a new feature is launched. We send an
      email only once every few months and will never share your information
      with anyone.
    </SmallItalics>
    <View>
      <StyledImage
        source={{
          uri:
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAfBJREFUWAntVk1OwkAUZkoDKza4Utm61iP0AqyIDXahN2BjwiHYGU+gizap4QDuegWN7lyCbMSlCQjU7yO0TOlAi6GwgJc0fT/fzPfmzet0crmD7HsFBAvQbrcrw+Gw5fu+AfOYvgylJ4TwCoVCs1ardYTruqfj8fgV5OUMSVVT93VdP9dAzpVvm5wJHZFbg2LQ2pEYOlZ/oiDvwNcsFoseY4PBwMCrhaeCJyKWZU37KOJcYdi27QdhcuuBIb073BvTNL8ln4NeeR6NRi/wxZKQcGurQs5oNhqLshzVTMBewW/LMU3TTNlO0ieTiStjYhUIyi6DAp0xbEdgTt+LE0aCKQw24U4llsCs4ZRJrYopB6RwqnpA1YQ5NGFZ1YQ41Z5S8IQQdP5laEBRJcD4Vj5DEsW2gE6s6g3d/YP/g+BDnT7GNi2qCjTwGd6riBzHaaCEd3Js01vwCPIbmWBRx1nwAN/1ov+/drgFWIlfKpVukyYihtgkXNp4mABK+1GtVr+SBhJDbBIubVw+Cd/TDgKO2DPiN3YUo6y/nDCNEIsqTKH1en2tcwA9FKEItyDi3aIh8Gl1sRrVnSDzNFDJT1bAy5xpOYGn5fP5JuL95ZjMIn1ya7j5dPGfv0A5eAnpZUY3n5jXcoec5J67D9q+VuAPM47D3XaSeL4AAAAASUVORK5CYII=",
        }}
      />
      <StyledTextInput placeholder="EMAIL ADDRESS" />
    </View>
    <StyledOutlineBtn>
      <ButtonText>SUBSCRIBE</ButtonText>
    </StyledOutlineBtn>
  </OutlinedContainer>
);

const StyledImage = styled(Image)`
  height: 20px;
  width: 20px;
  position: absolute;
  right: 10px;
  top: 11px;
`;

const StyledTextInput = styled(TextInput)`
  border: 1px ${({ theme }) => theme.colors.fontGrey};
  border-radius: 11px;
  color: ${({ theme }) => theme.colors.fontGrey};
  font-family: ${({ theme }) => theme.fonts.primary.regular};
  padding: 6px 10px 0;
  height: 35px;
  margin: 3.3px 0;
`;

const StyledOutlineBtn = styled(OutlineBtn)`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  height: 35px;
  margin: 3.3px 0;
`;

const ButtonText = styled(Text)`
  margin-bottom: -8px;
  font-size: 14px;
`;
