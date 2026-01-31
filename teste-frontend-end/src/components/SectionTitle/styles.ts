import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const TitleRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
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
`;

export const SubTitle = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 100%;
  color: #3f3f40;
  cursor: pointer;
 
`;
