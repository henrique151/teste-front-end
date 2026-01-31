import styled from "styled-components";

export const TabsWrapper = styled.section`
  padding: 0 clamp(32px, 11vw, 220px);
  margin-bottom: 16px;
`;

export const Container = styled.section`
  padding: 32px clamp(64px, 5vw, 185px);
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

export const ProductsWrapper = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 6px;
`;

export const Grid = styled.div`
  display: flex;
  gap: 16px;
  padding: 16px;
  max-width: 1280px;
  width: 100%;
  justify-content: center;
`;

export const NavButton = styled.button<{ side?: "left" | "right" }>`
  position: absolute;
  top: 50%;

  ${({ side }) =>
    side === "left"
      ? "left: calc(50% - 640px - 48px);"
      : "right: calc(50% - 640px - 48px);"}

  transform: translateY(-50%);

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
    transform: translateY(-50%) scale(1.05);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
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
