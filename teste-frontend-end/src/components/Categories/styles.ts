import styled from "styled-components";

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  gap: 42px;
  padding: 32px 0;
`;

export const Card = styled.div<{ $active?: boolean }>`
  width: 128px;
  height: 128px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  ${({ $active }) =>
    $active
      ? `
        background: #ffffff;
        box-shadow: 0px 2px 9px 0px #00000038;
      `
      : `
        background: #f4f4f4;
        box-shadow: 0px 4px 11px 0px #00000021;
      `}
`;


export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Icon = styled.img<{ $active?: boolean }>`
  width: 61px;
  height: 61px;
`;

export const Label = styled.span<{ $active?: boolean }>`
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: ${({ $active }) => ($active ? 600 : 500)};
  color: ${({ $active, theme }) =>
    $active ? theme.colores.roxo : theme.colores.cinzaescuro};
  text-align: center;
  margin-top: 8px;
`;