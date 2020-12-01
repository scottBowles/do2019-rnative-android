import React from "react";
import {
  SCaption,
  SH1,
  SH2,
  SH3,
  SH4,
  SH5,
  SP,
  SPeople,
  SRubric,
  SChapterNumber,
  SVerseNumber,
  SHR,
  SPLink,
} from "styles/sctypography";
import {
  Caption,
  H1,
  H2,
  H3,
  H4,
  H5,
  P,
  People,
  Rubric,
  ChapterNumber,
  VerseNumber,
  HR,
  PLink,
} from "styles/typography";
import { ScrollView, View } from "react-native";

export const Test = () => (
  <ScrollView>
    <Caption>Caption</Caption>
    <SCaption>Caption</SCaption>
    <H1>This is an H1</H1>
    <SH1>This is an H1</SH1>
    <H2>This is an H2</H2>
    <SH2>This is an H2</SH2>
    <H3>This is an H3</H3>
    <SH3>This is an H3</SH3>
    <H4>This is an H4</H4>
    <SH4>This is an H4</SH4>
    <H5>This is an H5</H5>
    <SH5>This is an H5</SH5>
    <P>This is a P</P>
    <SP>This is a P</SP>
    <People>This is a People</People>
    <SPeople>This is a People</SPeople>
    <Rubric>This is a Rubric</Rubric>
    <SRubric>This is a Rubric</SRubric>
    <ChapterNumber>This is a Chapter Number</ChapterNumber>
    <SChapterNumber>This is a Chapter Number</SChapterNumber>
    <VerseNumber>This is a Verse Number</VerseNumber>
    <SVerseNumber>This is a Verse Number</SVerseNumber>
    <HR />
    <SHR />
    <PLink link={"https://www.google.com/"}>This is a P Link</PLink>
    <SPLink link={"https://www.google.com/"}>This is a P Link</SPLink>
  </ScrollView>
);
