import styled from "styled-components/native";
import { Text } from "styles/typography";

interface IContainerProps {
  primaryColor: string;
}
interface IWrapperProps {
  large?: boolean;
}
interface TextColor {
  textColor: string;
}

const DateBlockContainer = styled.View<IContainerProps>`
  background-color: ${(props) => props.theme.colors[props.primaryColor]};
  border-radius: 4px;
  padding-top: 9px;
  padding-bottom: 8px;
  align-items: center;
  border-color: black;
  border-width: 1px;
`;

const TextWrapper = styled.View<IWrapperProps>`
  height: ${(props) => (props.large ? "35.2px" : "17.6px")};
`;

const DateText = styled(Text)<TextColor>`
  color: ${(props) => props.textColor};
  text-transform: uppercase;
  font-size: 16px;
  bottom: 5px;
  font-family: ${({ theme }) => theme.fonts.primary.semibold};
`;

const Weekday = styled(DateText)`
  font-family: ${({ theme }) => theme.fonts.primary.bold};
`;

const DayOfMonth = styled(DateText)`
  font-family: ${({ theme }) => theme.fonts.primary.semibold};
  font-size: 32px;
  bottom: 8px;
`;

const FastDisplayContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`;

const FastText = styled(Text)<TextColor>`
  color: ${(props) => props.textColor};
  text-transform: uppercase;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.primary.bold};
  top: 3px;
  margin-left: 4px;
`;

export {
  DateBlockContainer,
  DateText,
  DayOfMonth,
  FastDisplayContainer,
  FastText,
  TextWrapper,
  Weekday,
};
