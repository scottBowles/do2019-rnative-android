import { View } from "react-native";
import styled from "styled-components/native";

export const OutlinedContainer = styled(View)`
  border-color: ${({ theme }) => theme.colors.text};
  border-width: 1px;
  padding: 20px;
  width: 100%;
`;
