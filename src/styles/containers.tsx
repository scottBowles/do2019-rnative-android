import { View } from "react-native";
import styled from "styled-components/native";
import { colors } from "styles/colors";

export const OutlinedContainer = styled(View)`
  border-color: ${colors.fontGrey};
  border-width: 1px;
  padding: 20px;
  width: 100%;
  margin-top: 54px;
`;
