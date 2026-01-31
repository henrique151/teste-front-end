import styled from "styled-components";

export const Container = styled.section`
  padding: 32px 185px;
  cursor: default;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  margin-bottom: 24px;
`;

export const Line = styled.div`
  width: 360px;
  height: 1px;
  background: ${({ theme }) => theme.colores.cinzalinha};
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colores.roxoclaro};
  white-space: nowrap;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 304px);
  gap: 20px;
`;

export const ProductsWrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  margin-top: 32px;
`;

export const NavButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colores.branco};
  border: none;
  box-shadow: 0px 4px 4px #00000040;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export const EmptyState = styled.div`
  width: 100%;
  padding: 48px 0;

  display: flex;
  align-items: center;
  justify-content: center;

  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 500;
  color: #9b9b9b;
`;