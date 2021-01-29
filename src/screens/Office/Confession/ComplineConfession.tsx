import React from "react";
import { Text, View } from "react-native";
import { Body, Congregation, RiteTitle, Rubric } from "styles/typography";

export const ComplineConfession = () => (
  <View>
    <RiteTitle>Confession of Sin</RiteTitle>
    <Invitation />
    <Confession />
    <Absolution />
  </View>
);

const Invitation = () => (
  <View>
    <Rubric>The Officiant continues</Rubric>
    <Body>Let us humbly confess our sins to Almighty God.</Body>
  </View>
);

const Confession = () => (
  <View>
    <Rubric>
      Silence may be kept. The Officiant and Congregation then say
    </Rubric>
    <Congregation>Almighty God and Father, we confess to you,</Congregation>
    <Congregation>
      to one another, and to the whole company of heaven,
    </Congregation>
    <Congregation>that we have sinned, through our own fault,</Congregation>
    <Congregation>
      in thought, and word, and deed, and in what we have left undone.
    </Congregation>
    <Congregation>For the sake of your Son our Lord Jesus Christ,</Congregation>
    <Congregation>have mercy upon us, forgive us our sins,</Congregation>
    <Congregation>and by the power of your Holy Spirit,</Congregation>
    <Congregation>raise us up to serve you in newness of life,</Congregation>
    <Congregation>to the glory of your Name. Amen.</Congregation>
  </View>
);

const Absolution = () => (
  <View>
    <Rubric>The Officiant alone says</Rubric>
    <Text>
      <Body>
        Almighty God grant us forgiveness of all our sins, and the grace and
        comfort of the Holy Spirit.{" "}
      </Body>
      <Congregation>Amen.</Congregation>
    </Text>
  </View>
);
