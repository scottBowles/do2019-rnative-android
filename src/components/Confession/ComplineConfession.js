import React from "react";
import { Text, View } from "react-native";
import { H2, P, People, Rubric } from "styles/typography";

const Invitation = () => (
  <View>
    <Rubric>The Officiant continues</Rubric>
    <P>Let us humbly confess our sins to Almighty God.</P>
  </View>
);

const Confession = () => (
  <View>
    <Rubric>Silence may be kept. The Officiant and People then say</Rubric>
    <People>Almighty God and Father, we confess to you,</People>
    <People>to one another, and to the whole company of heaven,</People>
    <People>that we have sinned, through our own fault,</People>
    <People>
      in thought, and word, and deed, and in what we have left undone.
    </People>
    <People>For the sake of your Son our Lord Jesus Christ,</People>
    <People>have mercy upon us, forgive us our sins,</People>
    <People>and by the power of your Holy Spirit,</People>
    <People>raise us up to serve you in newness of life,</People>
    <People>to the glory of your Name. Amen.</People>
  </View>
);

const Absolution = () => (
  <View>
    <Rubric>The Officiant alone says</Rubric>
    <Text>
      <P>
        Almighty God grant us forgiveness of all our sins, and the grace and
        comfort of the Holy Spirit.{" "}
      </P>
      <People>Amen.</People>
    </Text>
  </View>
);

const ComplineConfession = () => (
  <View>
    <H2>Confession of Sin</H2>
    <Invitation />
    <Confession />
    <Absolution />
  </View>
);

export default ComplineConfession;
