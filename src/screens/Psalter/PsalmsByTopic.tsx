import { psalmsByTopic } from "data/psalmData";
import React from "react";
import styled from "styled-components/native";
import { Body, ParagraphTitle } from "styles/typography";

import { PsalmLinks } from "./PsalmLinks";

export const PsalmsByTopic: React.FC = () => (
  <>
    <ParagraphTitle>Psalms by Topic</ParagraphTitle>
    {psalmsByTopic.map(({ title, psalms }) => (
      <Wrapper key={title}>
        <Title>{title}</Title>
        <PsalmLinks psalmNumbers={psalms} keyToken={title} />
      </Wrapper>
    ))}
  </>
);

const Title = styled(Body)`
  margin-bottom: -4px;
`;

const Wrapper = styled.View`
  width: 100%;
`;
