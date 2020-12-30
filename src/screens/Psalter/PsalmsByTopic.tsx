import { psalmsByTopic } from "data/psalmData";
import React from "react";
import styled from "styled-components/native";
import { H3, P } from "styles/typography";

import { PsalmLinks } from "./PsalmLinks";

export const PsalmsByTopic: React.FC = () => (
  <>
    <H3>Psalms by Topic</H3>
    {psalmsByTopic.map(({ title, psalms }) => (
      <Wrapper key={title}>
        <Title>{title}</Title>
        <PsalmLinks psalmNumbers={psalms} keyToken={title} />
      </Wrapper>
    ))}
  </>
);

const Title = styled(P)`
  margin-bottom: -4px;
`;

const Wrapper = styled.View`
  width: 100%;
`;
