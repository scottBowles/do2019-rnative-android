import styled from "styled-components/native";

interface IProps {
  weekday: string;
  children: React.ReactNode;
}

export const CalendarBlock = styled.View<IProps>`
  /* flex: 1; */
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 6px;
  border-color: black;
  border-width: 1px;
  border-radius: 4px;
  background-color: ${(props) =>
    props.weekday.toLowerCase() === "sunday"
      ? props.theme.colors.backgroundSecondary
      : props.theme.colors.backgroundPrimary};
`;
