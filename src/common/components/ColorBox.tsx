import styled from "styled-components/native";
import { colors } from "styles/colors";

interface IProps {
  color: string;
  dimension?: number;
}

/**
 * Creates a colored box
 */
export const ColorBox = styled.View<IProps>`
  border: 1px black;
  height: ${(props) => props.dimension || 10} px;
  width: ${(props) => props.dimension || 10} px;
  background-color: ${(props) => colors[props.color] || props.color};
`;
