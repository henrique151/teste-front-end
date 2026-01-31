import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background: #f5f5f5;
  padding: 40px 60px 20px;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1440px;
  margin: 0 auto;
  gap: 40px;
`;

export const BrandSection = styled.div`
  max-width: 280px;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;

  img {
    width: 164px;
    height: 48px;
  }
`;

export const LogoText = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: #2d2d2d;
`;

export const BrandDescription = styled.p`
  font-size: 12px;
  color: #6b6b6b;
  line-height: 1.5;
  margin: 0 0 20px 0;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
`;

export const SocialIcon = styled.a`
  color: #2d2d2d;
  font-size: 20px;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 0.7;
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const LinksContainer = styled.div`
  display: flex;
  gap: 80px;
`;

export const LinkColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ColumnTitle = styled.h4`
  font-size: 14px;
  font-weight: 700;
  color: #2d2d2d;
  margin: 0 0 16px 0;
`;

export const LinkItem = styled.a`
  font-size: 12px;
  color: #6b6b6b;
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #2d2d2d;
  }
`;



export const Copyright = styled.div`
  
width: 100%;
background: #FFFFFF;
  font-size: 11px;
  color: #6b6b6b;
  text-align: center;
  margin: 0;
`;

