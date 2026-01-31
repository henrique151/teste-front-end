import styled from "styled-components";

export const Section = styled.section`
  width: 100%;
  padding: 64px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 700;
  color: ${({ theme }) => theme.colores.roxoclaro};
`;

export const BrandsGrid = styled.div`
  display: flex;
  gap: 42px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const BrandCircle = styled.div`
  width: 211px;
  height: 211px;
  border-radius: 105.5px;
  background: ${({ theme }) => theme.colores.branco};

  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0px 7px 20px 0px #00000021;
  cursor: pointer;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0px 10px 25px 0px #00000030;
  }
`;

export const Logo = styled.img`
  width: 110px;
  height: auto;
  object-fit: contain;
`;
