import { getValidColor } from "common/utils";
import styled from "styled-components/native";

interface IProps {
  color: string;
  dimension?: number;
}

/**
 * Creates a colored box
 * Uses neon-green if color isn't in colors, hopefully to catch someone's eye so it can be fixed
 */
export const ColorBox = styled.View<IProps>`
  border: 1px black;
  height: ${(props) => props.dimension || 10}px;
  width: ${(props) => props.dimension || 10}px;
  background-color: ${(props) => getValidColor(props.color)};
`;
