import React from "react";
import styled from "styled-components/native";
import { SectionTitle } from "styles/typography";

export const Loading: React.FC = () => (
  <Container>
    <SectionTitle>Loading...</SectionTitle>
  </Container>
);

const Container = styled.View`
  margin: 25px;
`;
