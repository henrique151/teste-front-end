import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background: #f5f5f5;
  font-family: "Poppins", sans-serif;
`;

export const FooterContent = styled.div`
  display: flex;
  max-width: 1306px; // 1440px;
  margin: 0 auto;
  gap: 200px;
  height: 282px;
  padding: 80px 0px 50px;
`;

export const BrandSection = styled.div`
  max-width: 282px;
`;

export const Divider = styled.div`
  width: 1px;
  height: 198px;
  background: #2828282E;
  align-self: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 16px 0;

  img {
    width: 164px;
    height: 48px;
  }
`;

export const BrandDescription = styled.p`
  font-size: 14px;
  color: #3F3F40;
  line-height: 1.5;
  margin: 0 0 20px 0;
  font-weight: 300;
  line-height: 100%
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 26px;

`;

export const SocialIcon = styled.a`
  color: #4A4A4A;
  font-size: 24px;
  cursor: pointer;
  transition: opacity 0.2s ease;
  margin: 0 0 10px 0; 

  &:hover {
    opacity: 0.7;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 100px;
  margin-left: -100px;
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap:10px;
`;

export const ColumnTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  color: #222222B5;
  margin: 0 0 16px 0;
  line-height: 16px;
  gap: 16px;
`;

export const LinkItem = styled.a`
  font-size: 14px;
  color: #6b6b6b;
  text-decoration: none;
  font-weight: 400;
  line-height: 16px;
  cursor: pointer;
  margin: 0 0 10px 0;
  transition: color 0.2s ease;
  
  &:hover {
    color: #2d2d2d;
  }
`;


export const Copyright = styled.div`
  width: 100%;
  height: 46.84px;

  margin: 32px auto 0;
  background: #ffffff;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 11px;
  color: #6b6b6b;
`;


