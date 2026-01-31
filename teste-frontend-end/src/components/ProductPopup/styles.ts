import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #0000008A;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  width: 769px;
  height: 320px;
  background: ${({ theme }) => theme.colores.branco};
  border-radius: 6px;
  padding: 50px;
  position: relative;
  display: flex;
  gap: 80px;
  
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.7;
  }
`;

export const ImageContainer = styled.div`
  width: 247px;
  height: 228px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`;

export const ContentContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 22px;
  font-weight: 400;
  color:  ${({ theme }) => theme.colores.cinzaescuro};
  text-transform: uppercase;
  margin: 0 0 8px 0;
  letter-spacing: 5%;
`;

export const Price = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 20px;
  font-weight: 600;
  color:  ${({ theme }) => theme.colores.cinzaescuro};
  display: block;
  margin-bottom: 16px;
  line-height: 100%;
  letter-spacing: 5%;
  margin: 0 0 24px 0;
`;

export const Description = styled.p`
  font-family: "Work Sans", sans-serif;
  font-size: 12px;
  font-weight: 500;
  color:  ${({ theme }) => theme.colores.cinzaclaro};
  line-height: 150%;
  letter-spacing: 5%;
  margin: 0 0 8px 0;
`;

export const DetailsLink = styled.a`
  font-family: "Work Sans", sans-serif;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.colores.roxoclaro};
  text-decoration: none;
  cursor: pointer;
  margin-bottom: 24px;
  line-height: 100%;
  letter-spacing: 5%;
 
`;

export const ActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: auto;
`;

export const QuantitySelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

export const QuantityMinor = styled.button`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colores.branco};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: #9F9F9F;

  &:hover {
    background: #f5f5f5;
  }
`;

export const QuantityButton = styled.button`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colores.branco};
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: ${({ theme }) => theme.colores.roxoescuro};

  &:hover {
    background: #f5f5f5;
  }
`;

export const QuantityValue = styled.span`
  font-family: "Poppins", sans-serif;
  font-size: 18px;
  font-weight: 500;
  color: ${({ theme }) => theme.colores.roxoescuro};
  min-width: 40px;
  text-align: center;
`;

export const BuyButton = styled.button`
  width: 188px;
  height: 36px;
  background: ${({ theme }) => theme.colores.amarelo};
  color: ${({ theme }) => theme.colores.roxoescuro};
  border: none;
  border-radius: 6px;
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  line-height: 100%;
  transition: background 0.2s ease;

  &:hover {
    background: #e6c80e;
  }
`;