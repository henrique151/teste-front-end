import {
  BrandDescription,
  BrandSection,
  ColumnTitle,
  Copyright,
  Divider,
  FooterContainer,
  FooterContent,
  LinkColumn,
  LinkItem,
  LinksContainer,
  Logo,
  SocialIcon,
  SocialIcons,
} from "./styles";

import LogoImg from "../../assets/images/Logo Fotter.png";
import { LuInstagram, LuFacebook, LuLinkedin } from "react-icons/lu";

export const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection>
          <Logo>
            <img src={LogoImg} alt="Econverse" />
          </Logo>
          <BrandDescription>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </BrandDescription>
          <SocialIcons>
            <SocialIcon href="#" aria-label="Instagram">
              <LuInstagram />
            </SocialIcon>

            <SocialIcon href="#" aria-label="Facebook">
              <LuFacebook />
            </SocialIcon>

            <SocialIcon href="#" aria-label="LinkedIn">
              <LuLinkedin />
            </SocialIcon>
          </SocialIcons>
        </BrandSection>
        <Divider />
        <LinksContainer>
          <LinkColumn>
            <ColumnTitle>Institucional</ColumnTitle>
            <LinkItem href="#">Sobre Nós</LinkItem>
            <LinkItem href="#">Movimento</LinkItem>
            <LinkItem href="#">Trabalhe conosco</LinkItem>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>Ajuda</ColumnTitle>
            <LinkItem href="#">Suporte</LinkItem>
            <LinkItem href="#">Fale Conosco</LinkItem>
            <LinkItem href="#">Perguntas Frequentes</LinkItem>
          </LinkColumn>

          <LinkColumn>
            <ColumnTitle>Termos</ColumnTitle>
            <LinkItem href="#">Termos e Condições</LinkItem>
            <LinkItem href="#">Política de Privacidade</LinkItem>
            <LinkItem href="#">Troca e Devolução</LinkItem>
          </LinkColumn>
        </LinksContainer>
      </FooterContent>

      <Copyright>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Copyright>
    </FooterContainer>
  );
};
