import { ExternalLinks } from "assets/ExternalLinks";
import { EnvelopeIcon, FacebookIcon } from "assets/icons";
import React, { useContext } from "react";
import { ThemeContext } from "styled-components";
import styled from "styled-components/native";
import { OutlinedContainer } from "styles/containers";
import { SmallItalics, SmallItalicsLink, Text } from "styles/typography";

export const FeedbackWelcome = () => {
  const theme = useContext(ThemeContext);
  return (
    <OutlinedContainer style={{ marginTop: 50 }}>
      <Text bold>Your feedback is welcomed</Text>
      <SmallItalics>
        We welcome your feedback or feature requests. We also would appreciate
        if you report any rubric, calendar, or content errors.
      </SmallItalics>
      <LinkWrapper>
        <EnvelopeIcon color={theme.colors.linkBlue} />{" "}
        <SmallItalics>Email us at </SmallItalics>
        <SmallItalicsLink link={ExternalLinks.DO2019MailTo}>
          feedback@dailyoffice2019.com
        </SmallItalicsLink>
      </LinkWrapper>
      <LinkWrapper>
        <FacebookIcon color={theme.colors.linkBlue} />{" "}
        <SmallItalics>Post in our </SmallItalics>
        <SmallItalicsLink link={ExternalLinks.DO2019Facebook}>
          Facebook group
        </SmallItalicsLink>
      </LinkWrapper>
    </OutlinedContainer>
  );
};

const LinkWrapper = styled(Text)`
  margin-top: 10px;
`;
