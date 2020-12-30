import React from "react";
import { H3 } from "styles/typography";

import { PsalmLinks } from "./PsalmLinks";

const numbersOneTo150 = Array.from({ length: 150 }, (v, i) => i + 1);

export const QuickLinks: React.FC = () => (
  <>
    <H3>Quick Links</H3>
    <PsalmLinks psalmNumbers={numbersOneTo150} keyToken="quicklinks" />
  </>
);
