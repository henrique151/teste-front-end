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
  gap: 30px;
  justify-content: center;
`;

export const ProductsWrapper = styled.section`
  position: relative;
  padding: 32px 185px;
`;

export const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  width: 32px;
  height: 32px;
  border-radius: 50%;

  background: ${({ theme }) => theme.colores.branco};
  border: none;
  box-shadow: 0px 4px 4px 0px #00000040;

  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  z-index: 10;

  transition:
    background-color 0.25s ease,
    box-shadow 0.25s ease,
    transform 0.25s ease;

  svg {
    color: #3f3f40;
    transition: color 0.25s ease;
  }

  &:hover {
    background: ${({ theme }) => theme.colores.roxoclaro};
    transform: translateY(-50%) scale(1.05);

    svg {
      color: ${({ theme }) => theme.colores.branco};
    }
  }

  &:active {
    transform: translateY(-50%) scale(0.96);
  }
`;

export const NavLeft = styled(NavButton)`
  left: 40px;
`;

export const NavRight = styled(NavButton)`
  right: 40px;
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