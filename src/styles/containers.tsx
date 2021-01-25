import { View } from "react-native";
import styled from "styled-components/native";

import { theme } from "./theme";

export const OutlinedContainer = styled(View)`
  border-color: ${theme.colors.fontGrey};
  border-width: 1px;
  padding: 20px;
  width: 100%;
`;
