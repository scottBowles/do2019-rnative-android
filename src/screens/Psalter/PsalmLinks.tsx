import React from "react";
import { TouchableOpacity } from "react-native";
import { Link } from "react-router-native";
import styled from "styled-components/native";
import { Body, BodyWithLinkStyles, Text } from "styles/typography";

export const PsalmLinks: React.FC<{
  psalmNumbers: number[];
  keyToken: string;
}> = ({ psalmNumbers, keyToken }) => (
  <Container>
    {psalmNumbers.map((psalm) => (
      <LinkToPsalm psalm={psalm} key={`${keyToken} + ${psalm}`} />
    ))}
  </Container>
);

const LinkToPsalm: React.FC<{ psalm: number }> = ({ psalm }) => (
  <Link
    to={`/psalms/${psalm}`}
    component={TouchableOpacity}
    activeOpacity={0.5}
  >
    <Text>
      <BodyWithLinkStyles>{psalm}</BodyWithLinkStyles>
      <Body>{"  "}</Body>
    </Text>
  </Link>
);

const Container = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
`;
