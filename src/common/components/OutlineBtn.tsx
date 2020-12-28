import styled from "styled-components/native";
import { colors } from "styles/colors";

export const OutlineBtn = styled.View`
  border-color: ${colors.fontGrey};
  border-width: 1px;
  border-radius: 11px;
  align-items: center;
  padding: 7px;
  margin: 3px 0;
  flex-direction: row;
  justify-content: center;
`;
