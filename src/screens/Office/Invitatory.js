import React from "react";
import { View } from "react-native";
import { H2, P, People, Rubric } from "styles/typography";

export const Invitatory = ({ office = "morning" }) =>
  ["morning", "evening"].includes(office) ? (
    <GreaterInvitatory />
  ) : (
    <LesserInvitatory />
  );

const LesserInvitatory = () => (
  <View>
    <H2>The Invitatory</H2>
    <Rubric>All stand.</Rubric>
    <P>O God, make speed to save us;</P>
    <People>O Lord, make haste to help us.</People>
    <P>Glory be to the Father, and to the Son, and to the Holy Spirit;</P>
    <People>
      As it was in the beginning, is now, and ever shall be, world without end.
      Amen. Alleluia.
    </People>
  </View>
);

const GreaterInvitatory = () => (
  <View>
    <H2>The Invitatory</H2>
    <Rubric>All stand.</Rubric>
    <P>O Lord, open our lips;</P>
    <People>And our mouth shall proclaim your praise.</People>
    <P>O God, make speed to save us;</P>
    <People>O Lord, make haste to help us</People>
    <P>Glory be to the Father, and to the Son, and to the Holy Spirit;</P>
    <People>
      As it was in the beginning, is now, and ever shall be, world without end.
      Amen.
    </People>
    <P>Praise the Lord.</P>
    <People>The Lord’s Name be praised.</People>
  </View>
);
