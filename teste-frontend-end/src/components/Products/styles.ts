import styled from "styled-components";

export const Container = styled.section`
  padding: 32px 185px;
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

  background: transparent;
  border: none;
 
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  z-index: 10;
`;

export const NavLeft = styled(NavButton)`
  left: -41px;
`;

export const NavRight = styled(NavButton)`
  right: -41px;
`;