import styled from "styled-components";

export const Wrapper = styled.section<{ $imageUrl: string }>`
  width: 100%;
  height: 390px;
  position: relative;
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-position: center;
`;

export const Overlay = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0.4) 45%,
    rgba(0, 0, 0, 0) 100%
  );
  display: flex;
  align-items: center;
`;

export const Content = styled.div`
  padding-left: 185px;
  max-width: 880px;
  color: ${({ theme }) => theme.colores.branco};
`;

export const Title = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: 50px;
  margin-bottom: 12px;
  margin-top: 24px
`;

export const Subtitle = styled.p`
  font-family: "Poppins", sans-serif;
  font-size: 32px;
  margin-bottom: 42px;
  font-weight: 400;


  strong {
    color: ${({ theme }) => theme.colores.amarelo};
    font-weight: 700;
  }
`;
