import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  border: 1px solid ${({ theme }) => theme.colores.cinzaclaroborder};
  height: 40px;
`;

export const TabItem = styled.button<{ $active?: boolean }>`
  flex: 1;
  border: none;
  background: ${({ $active }) => ($active ? theme.colores.branco : "transparent")};
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  line-height: 16px;

  font-weight: ${({ $active }) => ($active ? 700 : 400)};
  color: ${({ theme, $active }) =>
    $active ? theme.colores.roxoclaro : theme.colores.cinzaborder};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    border-right: 1px solid ${({ theme }) => theme.colores.cinzaclaroborder};
  }

  &:hover {
    background: #f5f5f5;
  }
`;
