import React from "react";
import { View } from "react-native";
import { Body, Congregation, RiteTitle, Rubric } from "styles/typography";

export const Invitatory = ({ office = "morning" }) =>
  ["morning", "evening"].includes(office) ? (
    <GreaterInvitatory />
  ) : (
    <LesserInvitatory />
  );

const LesserInvitatory = () => (
  <View>
    <RiteTitle>The Invitatory</RiteTitle>
    <Rubric>All stand.</Rubric>
    <Body>O God, make speed to save us;</Body>
    <Congregation>O Lord, make haste to help us.</Congregation>
    <Body>Glory be to the Father, and to the Son, and to the Holy Spirit;</Body>
    <Congregation>
      As it was in the beginning, is now, and ever shall be, world without end.
      Amen. Alleluia.
    </Congregation>
  </View>
);

const GreaterInvitatory = () => (
  <View>
    <RiteTitle>The Invitatory</RiteTitle>
    <Rubric>All stand.</Rubric>
    <Body>O Lord, open our lips;</Body>
    <Congregation>And our mouth shall proclaim your praise.</Congregation>
    <Body>O God, make speed to save us;</Body>
    <Congregation>O Lord, make haste to help us</Congregation>
    <Body>Glory be to the Father, and to the Son, and to the Holy Spirit;</Body>
    <Congregation>
      As it was in the beginning, is now, and ever shall be, world without end.
      Amen.
    </Congregation>
    <Body>Praise the Lord.</Body>
    <Congregation>The Lord’s Name be praised.</Congregation>
  </View>
);
