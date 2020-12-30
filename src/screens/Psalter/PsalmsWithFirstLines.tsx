import { psalmsWithFirstLines } from "data/psalmData";
import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Link } from "react-router-native";
import styled from "styled-components/native";
import { H3, P, PWithLinkStyles } from "styles/typography";

export const PsalmsWithFirstLines: React.FC = () => (
  <>
    <StyledH3>Psalms with First Line</StyledH3>
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

const StyledH3 = styled(H3)`
  margin-bottom: 20px;
`;

const FirstLineEnglish = styled(P)`
  margin-bottom: 20px;
`;

const PsalmWithLatin = styled(PWithLinkStyles)`
  margin-top: -8px;
  margin-bottom: -10px;
`;

const Wrapper = styled.View`
  width: 100%;
`;
