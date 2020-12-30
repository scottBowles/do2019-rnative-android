import React from "react";
import styled from "styled-components/native";
import { H1 } from "styles/typography";

export const Loading: React.FC = () => (
  <Container>
    <H1>Loading...</H1>
  </Container>
);

const Container = styled.View`
  margin: 25px;
`;
