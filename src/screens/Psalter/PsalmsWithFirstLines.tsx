import { psalmsWithFirstLines } from "data/psalmData";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Link } from "react-router-native";
import styled from "styled-components/native";
import { Body, BodyWithLinkStyles, ParagraphTitle } from "styles/typography";

export const PsalmsWithFirstLines: React.FC = () => (
  <>
    <StyledParaTitle>Psalms with First Line</StyledParaTitle>
    <Wrapper>
      {psalmsWithFirstLines.map(({ psalm, latin, english }) => (
        <PsWithFirstLines
          psalm={psalm}
          latin={latin}
          english={english}
          key={psalm + latin}
        />
      ))}
    </Wrapper>
  </>
);

const PsWithFirstLines: React.FC<{
  psalm: number;
  latin: string;
  english: string;
}> = ({ psalm, latin, english }) => (
  <View>
    <Link
      to={`/psalms/${psalm}`}
      component={TouchableOpacity}
      activeOpacity={0.5}
    >
      <PsalmWithLatin>
        {psalm} | {latin}
      </PsalmWithLatin>
    </Link>
    <FirstLineEnglish>{english}</FirstLineEnglish>
  </View>
);

const StyledParaTitle = styled(ParagraphTitle)`
  margin-bottom: 20px;
`;

const FirstLineEnglish = styled(Body)`
  margin-bottom: 20px;
`;

const PsalmWithLatin = styled(BodyWithLinkStyles)`
  margin-top: -8px;
  margin-bottom: -10px;
`;

const Wrapper = styled.View`
  width: 100%;
`;
