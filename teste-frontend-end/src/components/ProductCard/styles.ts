import styled from "styled-components";
/* 500px */
export const Container = styled.div`
  width: 304px;
  height: 500px; 
  background: ${({ theme }) => theme.colores.branco};
  border-radius: 10px;
  padding: 16px;
  box-shadow: 0px 3px 19px 0px #00000038;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 

  img {
    width: 278px;
    height: 228px;
    object-fit: contain;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  color: #3F3F40;
  font-weight: 300;
  line-height: 100%;
`;

export const OldPrice = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #808080;
  font-weight: 400;
  line-height: 100%;
  text-decoration: line-through;

`;
export const Price = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #3F3F40;
  line-height: 100%;
`;

export const Installments = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  color: #3F3F40;
  font-weight: 400;
  line-height: 100%;
`;

export const FreeShipping = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colores.roxoclaro};

`;

export const BuyButton = styled.button`
  width: 100%;
  height: 44px;
  background: ${({ theme }) => theme.colores.roxoclaro};
  color: ${({ theme }) => theme.colores.branco};

  border: none;
  border-radius: 4px;

  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 700;

  cursor: pointer;
`;
