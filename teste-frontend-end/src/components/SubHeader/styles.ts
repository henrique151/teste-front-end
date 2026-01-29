import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 119px;
  padding: 6px 0;
  background-color: ${({ theme }) => theme.colores.branco};
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Text = styled.span`
  font-size: 12px;
  display: flex;
  gap: 4px;
`;

export const Word = styled.span<{ $tone: "muted" | "highlight" }>`
  ${({ theme, $tone }) =>
    $tone === "highlight"
      ? css`
          color: ${theme.colores.roxo};
          font-weight: 600;
        `
      : css`
          color: ${theme.colores.cinzaclaro};
          font-weight: 500;
          font-size: 12px;
        `}
`;

export const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.colores.cinzabranco};
  width: 80%;
  margin: 0 auto;
`;
