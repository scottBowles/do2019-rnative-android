import styled from "styled-components/native";

export const OutlineBtn = styled.View`
  border-color: ${({ theme }) => theme.colors.grey};
  border-width: 1px;
  border-radius: 11px;
  align-items: center;
  padding: 7px;
  margin: 3px 0;
  flex-direction: row;
  justify-content: center;
`;
