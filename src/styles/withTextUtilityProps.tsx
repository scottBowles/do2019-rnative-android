import { ReactNode } from "react";
import { Text as NativeText } from "react-native";
import { StyledComponent } from "styled-components";
import styled, { DefaultTheme, css } from "styled-components/native";

interface ITextProps {
  bold?: boolean;
  boldItalic?: boolean;
  italic?: boolean;
  semibold?: boolean;
  semiboldItalic?: boolean;
  regular?: boolean;
  size?: number;
  color?: string;
  indented?: boolean;
  children?: ReactNode;
}

// Adds a number of utility props for easily adding ad hoc styles to text components
// (E.g., `bold` or `color="red"`)
export const withTextUtilityProps = (
  C: StyledComponent<typeof NativeText, DefaultTheme, ITextProps, never>
) => styled(C)`
  ${({ theme, ...props }) =>
    css`
      ${props.bold && `font-family: ${theme.fonts.primary.bold};`}
      ${props.boldItalic && `font-family: ${theme.fonts.primary.boldItalic};`}
      ${props.italic && `font-family: ${theme.fonts.primary.italic};`}
      ${props.semibold && `font-family: ${theme.fonts.primary.semibold};`}
      ${props.semiboldItalic &&
      `font-family: ${theme.fonts.primary.semiboldItalic};`}
      ${props.regular && `font-family: ${theme.fonts.primary.regular};`}
      ${props.size && `font-size: ${props.size}px;`}
      ${props.indented && `margin-left: 16px;`}
      ${props.color && `color: ${props.color};`}
    `}
`;
