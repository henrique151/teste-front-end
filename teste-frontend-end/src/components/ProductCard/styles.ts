import styled from "styled-components";

export const Container = styled.div`
  width: 304px;
  height: 476px;
  background: ${({ theme }) => theme.colores.branco};
  border-radius: 10px;
  padding: 13px;
  box-shadow: 0px 3px 19px 0px #00000038;

  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

export const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

export const ProductImage = styled.img`
  width: 278px;
  height: 228px;
  object-fit: contain;
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 15px;
  font-weight: 300;
  line-height: 1.4;
  color: #3f3f40;
  margin: 0 0 12px 0;
`;

export const OldPrice = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  color: #808080;
  display: block;
  text-decoration: line-through;
`;

export const Price = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 700;
  color: #3f3f40;
  display: block;
  margin-bottom: 2px;
`;

export const Installments = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  color: #3f3f40;
  display: block;
  margin-bottom: 8px;
  line-height: 100%;
`;

export const FreeShipping = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 12px;
  color: ${({ theme }) => theme.colores.roxoclaro};
  display: block;
  font-weight: 400;
  margin-top: 2px
`;

export const BuyButton = styled.button`
  width: 100%;
  height: 44px;
  background: ${({ theme }) => theme.colores.roxoclaro};
  color: ${({ theme }) => theme.colores.branco};
  margin-top: auto;
  
  border: none;
  border-radius: 4px;

  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 700;

  cursor: pointer;

`;
