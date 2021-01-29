import React from "react";
import { TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import styled from "styled-components/native";
import { BodyWithLinkStyles } from "styles/typography";

export const PrivacyPolicyLink = () => (
  <StyledLink to="/privacy" component={TouchableOpacity} activeOpacity={0.5}>
    <BodyWithLinkStyles>Privacy Policy</BodyWithLinkStyles>
  </StyledLink>
);

const StyledLink = styled(Link)`
  margin: 20px 0 40px;
`;
