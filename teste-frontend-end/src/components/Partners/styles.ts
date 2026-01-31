import styled from "styled-components";

export const SectionContainer = styled.section`
  display: flex;
  gap: 12px;
  padding: 36px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PartnerCard = styled.div`
  width: 634px;
  height: 350px;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
`;

export const BackgroundImage = styled.div<{ $imageUrl: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 85.04%);
    margin-top: 89px;
    opacity: 80%;
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  height: 100%;
`;

export const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-top: 74px;
`;

export const Description = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 400;
  color: #ffffff;
  opacity: 0.9;
  max-width: 200px;
  line-height: 140%;
  margin-top: 9px;
`;

export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ConfiraButton = styled.button`
  margin-top: auto;
  background: ${({ theme }) => theme.colores.amarelo};
  color: ${({ theme }) => theme.colores.roxoescuro};
  border: none;
  border-radius: 6px;
  width: 144.69px;
  height: 48px;
  font-family: "Poppins", sans-serif;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
`;