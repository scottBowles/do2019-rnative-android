import React from "react";
import { ParagraphTitle } from "styles/typography";

import { PsalmLinks } from "./PsalmLinks";

const numbersOneTo150 = Array.from({ length: 150 }, (v, i) => i + 1);

export const QuickLinks: React.FC = () => (
  <>
    <ParagraphTitle>Quick Links</ParagraphTitle>
    <PsalmLinks psalmNumbers={numbersOneTo150} keyToken="quicklinks" />
  </>
);
