// This solution taken from https://github.com/styled-components/styled-components-website/issues/392#issuecomment-472307399
// Uses declaration merging to add needing typing for styled components

import "styled-components/native";
import { TTheme } from "./theme";

declare module "styled-components/native" {
  export interface DefaultTheme extends TTheme {}
}
