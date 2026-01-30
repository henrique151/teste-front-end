import styled, { css } from "styled-components";
import type { ButtonProps } from "../../types/ButtonType";

export const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-family: "Poppins", sans-serif;

  ${({ $size }) =>
    $size === "lg" &&
    css`
      width: 206px;
      height: 50px;
      padding: 7px 49px 7px 49px;
      font-size: 16px;
      font-weight: 600;
      gap: 10;
    `}

  ${({ $size }) =>
    (!$size || $size === "md") &&
    css`
      padding: 12px 24px;
      font-size: 14px;
      font-weight: 600;
    `}

  ${({ $size }) =>
    $size === "sm" &&
    css`
      padding: 8px 16px;
      font-size: 12px;
      font-weight: 500;
    `}

  ${({ theme, $variant }) =>
    $variant === "secondary"
      ? css`
          background: ${theme.colores.roxo};
          color: #fff;
        `
      : css`
          background: ${theme.colores.amarelo};
          color: ${theme.colores.roxoescuro};
        `}
`;
